module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
        app: {
            files: { 'cesar.js': ['app/**/*.js'] },
            options: {
                preserveComments: false
            }
        },
        libs: {
            files: { 'libs.js': ['bower_components/jquery/jquery.js',
                                'bower_components/handlebars/handlebars.js',
                                'bower_components/ember/ember.js',
                                'bower_components/ember-data/ember-data.js'
                                ] },
            options: {
                preserveComments: false
            }
        },
    },

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /templates\//
        },
        files: {
          'templates.js': 'templates/**/*.hbs'
        }
      }
    },
      
    watch: {
      emberTemplates: {
        files: 'templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      uglify: {
          files: ['app/**/*.js'],
          tasks: ['uglify:app']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('default', ['emberTemplates', 'uglify']);

};



