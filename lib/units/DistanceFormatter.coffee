class Units.DistanceFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('distance', 1, cldr, 1000, Units.ScalingFormatter.PICO, Units.ScalingFormatter.KILO)