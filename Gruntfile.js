module.exports = function(grunt) {
  //load modules by matchdep. This searches dependencies from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  //moduled tasks
  grunt.initConfig({
    //watch task. Depends on coffee, triggered change(save) of the file specified.
    watch : {

      //watch coffree
      coffee : {
        files : 'development/**/*.coffee',
        tasks : ['coffee'],
      },
      // watch compass
      sass : {
        files : 'develop/**/*.sass',
        tasks : ['compass'],
      },
    },

    // Coffee compile
    coffee : {
      compile : {
        expand : true,
        cwd : "develop",
        src : ['**/*.coffee'],
        dest : 'production',
        ext : '.js'
      }
    },

    //sass compile
    compass : {
      dest : "",
      options : {
        sassDir : "develop",
        cssDir : "production"
      }
    },

    //copy files other than coffee and sass (mainly html and images, fonts if necessary)
    copy: {
      dist: {
          files: [
            { expand: true, dot: true, cwd: 'develop/app', dest: 'production/app', src: ['**/*.{ico,txt,html,png}'] },
            { expand: true, dot: true, cwd: 'develop/lib', dest: 'production/lib', src: ['**/*'] },
          ]
      }  
    },

    //jshint
    jshint: {
        files: ['production/**/*.js']
    },
  });

  //tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('init', ['coffee', 'compass', 'copy']); //initialization for development
  //grunt.registerTask('build', [tasks]); <- finalization for fully optimized build.
};
