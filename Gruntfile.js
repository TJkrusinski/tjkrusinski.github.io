'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			css: {
				files: ['public/css/tjkrusinski.css'],
				tasks: ['cssmin']
			},
			js: {
				files: ['public/js/tjkrusinski.js'],
				tasks: ['uglify']
			},
		},
		uglify: {
			dist: {
				options: {
					compress: true,
				},
				files: {
					'public/js/tjkrusinski.min.js': 'public/js/tjkrusinski.js'
				},
			},
		},
		cssmin: {
			dist: {
				options: {
					compress: true,
				},
				files: {
					'public/css/tjkrusinski.min.css': 'public/css/tjkrusinski.css'
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', 'watch');
};
