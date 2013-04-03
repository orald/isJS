module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    jasmine: {
      src: 'lib/**/*.js',
      options: {
        specs: 'test/**/*.js'
      }
    },
    jshint: {
      all: ['gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

	grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['test']);

};
