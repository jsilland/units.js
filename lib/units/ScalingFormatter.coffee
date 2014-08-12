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

  constructor: (@key, @precision, @cldr, @multiplier, @minIndex, @maxIndex) ->

  convert: (value) ->
    index = 0
    if value < 1
      (value = value * @multiplier; index--) while value < 1 and index > @minIndex
    else if value >= @multiplier
      (value = value / @multiplier; index++) while value >= @multiplier and index < @maxIndex
    value

  format: (value, precision=@precision) ->
    new @cldr.DecimalFormatter().format(value, precision: precision)

  translationKey: (value, name) ->
    unitTranslations = Units.Translations[@key]
    index = @computeIndex(value)
    index = unitTranslations.length + index if index < 0
    unitTranslations[index][name]

  longKey: (value) ->
    @translationKey(value, 'long')

  formatLong: (value, precision=@precision) ->
    convertedValue = @convert(value)
    count = parseFloat(convertedValue.toFixed(precision))
    Units.MessageFormatter.format(@longKey(value), value: @format(convertedValue, precision), count: count, @cldr)

  shortKey: (value) ->
    @translationKey(value, 'short')

  formatShort: (value, precision=@precision) ->
    convertedValue = @convert(value)
    Units.MessageFormatter.format(@shortKey(value), value: @format(convertedValue, precision), @cldr)

  longUnitKey: (value) ->
    @translationKey(value, 'long_name')

  unitLong: (value) ->
    Units.MessageFormatter.format(@longUnitKey(value))

  shortUnitKey: (value) ->
    @translationKey(value, 'short_name')

  unitShort: (value) ->
    Units.MessageFormatter.format(@shortUnitKey(value))

  computeIndex: (value) ->
    index = 0
    if value < 1
      (value = value * @multiplier; index--) while value < 1 and index > @minIndex
    else if value >= @multiplier
      (value = value / @multiplier; index++) while value >= @multiplier and index < @maxIndex
    index