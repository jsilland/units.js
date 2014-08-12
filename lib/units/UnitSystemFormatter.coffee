class units.UnitSystemFormatter extends Units.ScalarFormatter

  constructor: (@unitSystem = Strava.I18n.Locale.unitSystem(), key, precision) ->
    super(key, precision)

  longKey: ->
    Strava.I18n.ScalarFormatter.TOKENS.concat([@key, @unitSystem, 'long']).join('.')

  shortKey: ->
    Strava.I18n.ScalarFormatter.TOKENS.concat([@key, @unitSystem, 'short']).join('.')

  longUnitKey: ->
    Strava.I18n.ScalarFormatter.TOKENS.concat([@key, @unitSystem, 'name_long']).join('.')

  shortUnitKey: ->
    Strava.I18n.ScalarFormatter.TOKENS.concat([@key, @unitSystem, 'name_short']).join('.')