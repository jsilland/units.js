TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.MetersTest =

  'test can format short': (test) ->
    test.equal(new Units.Meters(0.000000000001, TwitterCldr).formatShort(), '1pm')
    test.equal(new Units.Meters(0.000000001, TwitterCldr).formatShort(), '1nm')
    test.equal(new Units.Meters(0.000001, TwitterCldr).formatShort(), '1µm')
    test.equal(new Units.Meters(0.001, TwitterCldr).formatShort(), '1mm')
    test.equal(new Units.Meters(0.1, TwitterCldr).formatShort(), '100mm')
    test.equal(new Units.Meters(1, TwitterCldr).formatShort(), '1m')
    test.equal(new Units.Meters(12.62, TwitterCldr).formatShort(), '12.6m')
    test.equal(new Units.Meters(12.62, TwitterCldr).formatShort(0), '13m')
    test.equal(new Units.Meters(12.62, TwitterCldr).formatShort(2), '12.62m')
    test.equal(new Units.Meters(999, TwitterCldr).formatShort(), '999m')
    test.equal(new Units.Meters(1000, TwitterCldr).formatShort(), '1km')
    test.equal(new Units.Meters(1000000, TwitterCldr).formatShort(), '1,000km')
    test.done()