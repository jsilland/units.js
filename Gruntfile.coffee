module.exports = (grunt) ->

  grunt.initConfig
    nodeunit:
      files: ['test/**/*Test.js']
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compileTests:
        expand: true,
        cwd: 'test',
        src: ['*.coffee'],
        dest: 'test',
        ext: '.js'
#    uglify:
#      dist:
#        'dist/units.en.min.js': 'dist/units.en.js'

  grunt.loadNpmTasks('grunt-contrib-coffee')
  #grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')

  grunt.registerTask('compile', () ->
    for locale in ['en']
      data =
        translations: JSON.stringify(grunt.file.readJSON("locales/#{locale}.json"))
      translations = grunt.template.process(
            'Units.Translations = <%= translations %>', data: data)
      translationsFile = "build/locales/#{locale}.coffee"
      grunt.file.write(translationsFile, translations)
      destinationFile = "dist/units.#{locale}.js"

      coffeeCode = [
        'lib/units.coffee'
        translationsFile
        'lib/units/MessageFormatter.coffee'
        'lib/units/ScalarFormatter.coffee'
        'lib/units/ScalingFormatter.coffee'
        'lib/units/PowerFormatter.coffee'
        'lib/units/BytesFormatter.coffee'
        'lib/units/DistanceFormatter.coffee'
        'lib/expose.coffee'
      ].map(grunt.file.read).join(grunt.util.linefeed)

      javascriptCode = require('coffee-script').compile(coffeeCode);
      grunt.file.write(destinationFile, javascriptCode)
  )

  grunt.registerTask('uglify', () ->
    for locale in ['en']
      result = require('uglify-js').minify("dist/units.#{locale}.js");
      grunt.file.write("dist/units.#{locale}.min.js", result.code)
  )

  grunt.registerTask('default', ['compile', 'coffee:compileTests', 'nodeunit'])
  grunt.registerTask('package', ['default', 'uglify'])


