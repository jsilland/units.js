TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.BytesFormatterTest =

  'test can format short version up': (test) ->
    formatter = new Units.BytesFormatter(TwitterCldr)
    test.equal(formatter.formatShort(1), '1B')
    test.equal(formatter.formatShort(1023), '1,023B')
    test.equal(formatter.formatShort(1024), '1KB')
    test.equal(formatter.formatShort(1024 * 1024), '1MB')
    test.equal(formatter.formatShort(1024 * 1024 * 1024), '1GB')
    test.done()