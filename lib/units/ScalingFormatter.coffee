# Base class for formatters that auto-scale the value before formatting it.
#
# This is useful for units that are fractionable into sub-units (e.g. Watts into
# MilliWatts) or multiplicable into super-units (e.g. Bytes into TeraBytes).
# When presented a value, formatters of this class will determine the best sub-
# or super-unit to use, then convert the value and format it appropriately.
#
# Translations for scaling formatters are required to be stored as an array
# under the root translation key. The first element of the array defines the
# translations for the unit, the second for the `unit * multipllier**1`, etc…
# Translations for sub-units are stored in the same array, with the smallest
# sub-unit defined right after the biggest super-unit. For instance, here are
# the structure of the translation array for a distance formatter ranging from
# micrometers to kilometers, with a multiplier of 1000:
#
# 'distance': [
#   {...} // Translations for the main unit, e.g. meters
#   {...} // kilometers
#   {...} // micrometers
#   {...} // millimeters
# ]
class Units.ScalingFormatter

  @PICO: -4
  @NANO: -3
  @MICRO: -2
  @MILLI: -1
  @ONE: 0
  @KILO: 1
  @MEGA: 2
  @GIGA: 3
  @TERA: 4
  @PETA: 5
  @EXA: 6
  @ZETTA: 7

  # Constructs a new scaling formatter
  #
  # @param [String] key the key under which the translations for this
  #     formatter are stored
  # @param [Number] precision the precision with which to format the values
  #     passed to this formatter
  # @param [Object] an implementation of CLDR
  # @param [Number] multiplier the scaling factor to use for converting values
  # @minIndex [Number] the minimum significant power of the multiplier
  #     representable by this formatter
  # @maxIndex [Number] the maximum significant power of the multiplier
  #     representable by this formatter
  constructor: (@key, @precision, @cldr, @multiplier, @minIndex, @maxIndex) ->

  # Converts the value to the proper scale, as per the configuration of this
  # class
  #
  # @param [Number] value the value to convert
  convert: (value) ->
    index = 0
    if value < 1
      (value = value * @multiplier; index--) while value < 1 and index > @minIndex
    else if value >= @multiplier
      (value = value / @multiplier; index++) while value >= @multiplier and index < @maxIndex
    value

  # Formats a value into a string, at a given precision
  #
  # @param [Number] value the value to format
  # @param [Number] precision the decimal precision to use, defaults to the
  #     precision passed in the constructor
  format: (value, precision=@precision) ->
    new @cldr.DecimalFormatter().format(value, precision: precision)

  translationKey: (value, name) ->
    unitTranslations = Units.Translations[@key]
    index = @computeIndex(value)
    index = unitTranslations.length + index if index < 0
    unitTranslations[index][name]

  longKey: (value) ->
    @translationKey(value, 'long')

  # Formats a value and include the full unit name.
  #
  # @param [Number] value the value to format
  # @param [Number] precision the decimal precision to use defaults to the
  #     precision passed in the constructor
  formatLong: (value, precision=@precision) ->
    convertedValue = @convert(value)
    count = parseFloat(convertedValue.toFixed(precision))
    Units.MessageFormatter.format(@longKey(value), value: @format(convertedValue, precision), count: count, @cldr)

  shortKey: (value) ->
    @translationKey(value, 'short')

  # Formats a value and include the abbreviated unit name.
  #
  # @param [Number] value the value to format
  # @param [Number] precision the decimal precision to use defaults to the
  #     precision passed in the constructor
  formatShort: (value, precision=@precision) ->
    convertedValue = @convert(value)
    Units.MessageFormatter.format(@shortKey(value), value: @format(convertedValue, precision), @cldr)

  longUnitKey: (value) ->
    @translationKey(value, 'long_name')

  # Returns the full unit name
  #
  # @param [Number] value the value for which the unit name should be returned
  unitLong: (value) ->
    Units.MessageFormatter.format(@longUnitKey(value))

  shortUnitKey: (value) ->
    @translationKey(value, 'short_name')

  # Returns the abbreviated unit name
  #
  # @param [Number] value the value for which the unit name should be returned
  unitShort: (value) ->
    Units.MessageFormatter.format(@shortUnitKey(value))

  # Computes the index in the translation array where translations should be 
  # looked up
  #
  # @param [Number] value the value being formatted
  computeIndex: (value) ->
    index = 0
    if value < 1
      (value = value * @multiplier; index--) while value < 1 and index > @minIndex
    else if value >= @multiplier
      (value = value / @multiplier; index++) while value >= @multiplier and index < @maxIndex
    index