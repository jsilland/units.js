class Units.BytesFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('bytes', 0, cldr, 1024, Units.ScalingFormatter.ONE, Units.ScalingFormatter.EXA)