class Units.ScalarFormatter

  constructor: (@key, @precision, @cldr) ->

  convert: (value) ->
    value

  format: (value, precision=@precision) ->
    new @cldr.DecimalFormatter().format(value, precision: precision)

  longKey: ->
    Units.Translations[@key]['long']

  formatLong: (value, precision=@precision) ->
    value = @convert(value)
    count = parseFloat(value.toFixed(precision))
    Units.MessageFormatter.format(@longKey(), value: @format(value, precision), count: count, @cldr)

  shortKey: ->
    Units.Translations[@key]['short']

  formatShort: (value, precision=@precision) ->
    Units.MessageFormatter.format(@shortKey(), value: @format(value, precision), @cldr)

  longUnitKey: ->
    Units.Translations[@key]['long_name']

  unitLong: ->
    Units.MessageFormatter.format(@longUnitKey())

  shortUnitKey: ->
    Units.Translations[@key]['short_name']

  unitShort: ->
    Units.MessageFormatter.format(@shortUnitKey())