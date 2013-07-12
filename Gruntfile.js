module.exports = function(grunt) {
  //moduled tasks
  grunt.initConfig({
    //watch task. Depends on coffee, triggered change(save) of the file specified.
    watch : {
      //watch coffree
      coffee : {
        files : 'develop/**/*.coffee',
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

    //jshint
    jshint: {
        files: ['develop/**/*.js']
    },
  });

  //modules
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  //tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('init', ['coffee', 'compass']);
};
