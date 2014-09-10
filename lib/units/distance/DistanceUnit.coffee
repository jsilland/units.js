# Base class for units representing a distance.
#
# Encapsulates a single value and the 
class Units.DistanceUnit
  # Initializes a instance of this class with a given value.
  #
  # @param [Number] value the value to represent in the given unit
  constructor: (@value, @cldr=TwitterCldr) ->
  
  # Converts this instance to another distance unit
  #
  # @param [Object] distanceClass the unit to convert this instance into
  in: (distanceClass) ->
    convertedDistance = new distanceClass()
    convertedDistance.value = (@value / @distanceMultiplier()) * convertedDistance.distanceMultiplier()
    convertedDistance
  
  # Returns the conversion factor of this unit.
  #
  # @private
  distanceMultiplier: ->
    0
  
  # Formats a value into a string, at a given precision.
  #
  # @param [Number] precision the optional decimal precision to use
  format: (precision) ->
    formatter = @formatter()
    precision = if precision? then precision else formatter.precision
    formatter.format(@value, precision)

  # Formats a value and include the full unit name.
  #
  # @param [Number] precision the optional decimal precision to use
  formatLong: (precision) ->
    formatter = @formatter()
    precision = if precision? then precision else formatter.precision
    formatter.formatLong(@value, precision)

  # Formats a value and include the abbreviated unit name.
  #
  # @param [Number] precision the optional decimal precision to use
  formatShort: (precision) ->
    formatter = @formatter()
    precision = if precision? then precision else formatter.precision
    formatter.formatShort(@value, precision)

  # Returns the full unit name.
  unitLong: ->
    @formatter().unitLong(@value)

  # Returns the abbreviated unit name.
  unitShort: ->
    @formatter().unitLong(@value)