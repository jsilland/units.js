TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.MilesFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.InchesFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0"')
    test.equal(formatter.formatShort(0.8), '0.8"')
    test.equal(formatter.formatShort(1), '1"')
    test.equal(formatter.formatShort(999), '999"')
    test.equal(formatter.formatShort(3000), '3,000"')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.InchesFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 inches')
    test.equal(formatter.formatLong(0.8), '0.8 inches')
    test.equal(formatter.formatLong(1), '1 inch')
    test.equal(formatter.formatLong(999), '999 inches')
    test.equal(formatter.formatLong(3000), '3,000 inches')
    test.done()