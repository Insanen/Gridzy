module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.css', '!*.min.css'],
          dest: 'src',
          ext: '.min.css'
        }]
      }
    },
    compass: {                  
  dist: {                   
    options: {              
      sassDir: 'scss',
      cssDir: 'src',
      environment: 'production'
    }
  }

  },
      
      copy: {
        main: {
         files: [{
          expand: true,
          cwd: 'src',
          src: ['**'], 
          dest: 'demo/css/'
      }]
     }
    },
      
      
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');      
  grunt.registerTask('default', ['cssmin', 'compass', 'copy']);
};