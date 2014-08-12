TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.PowerFormatterTest =

  'test can format short version up': (test) ->
    formatter = new Units.PowerFormatter(TwitterCldr)
    test.equal(formatter.formatShort(1), '1.0W')
    test.equal(formatter.formatShort(1.1), '1.1W')
    test.equal(formatter.formatShort(999), '999.0W')
    test.equal(formatter.formatShort(1000), '1.0kW')
    test.equal(formatter.formatShort(1200), '1.2kW')
    test.equal(formatter.formatShort(1000000), '1.0MW')
    test.equal(formatter.formatShort(1300000), '1.3MW')
    test.equal(formatter.formatShort(1000000000), '1.0GW')
    test.equal(formatter.formatShort(1400000000), '1.4GW')
    test.equal(formatter.formatShort(1000000000000), '1.0TW')
    test.equal(formatter.formatShort(1500000000000), '1.5TW')
    test.equal(formatter.formatShort(1000000000000000), '1,000.0TW')
    test.equal(formatter.formatShort(1600000000000000), '1,600.0TW')
    test.done()

  'test can format short version down': (test) ->
    formatter = new Units.PowerFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0.999), '999.0mW')
    test.equal(formatter.formatShort(0.001), '1.0mW')
    test.equal(formatter.formatShort(0.0011), '1.1mW')
    test.equal(formatter.formatShort(0.000001), '1.0µW')
    test.equal(formatter.formatShort(0.0000012), '1.2µW')
    test.equal(formatter.formatShort(0.000000001), '1.0nW')
    test.equal(formatter.formatShort(0.0000000013), '1.3nW')
    test.equal(formatter.formatShort(0.000000000001), '1.0pW')
    test.equal(formatter.formatShort(0.0000000000014), '1.4pW')
    test.done()