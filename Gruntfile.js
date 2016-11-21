module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: { transform: [['babelify']] },
        files: { './dist/fatigue.js': ['./src/index.js'] }
      }
    },
    watch: {
      scripts: {
        files: ['./src/*.js'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['browserify']);
};
