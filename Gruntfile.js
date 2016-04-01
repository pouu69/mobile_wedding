module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	concat : {
		options:{
			banner :'/ <%= grunt.template.today("yyyy-mm-dd") %> /', 
			separator: '/ concat separator /',
			stripBanners:  {
			    force: true,
			    all: true
			}
		},
		build: {
		  src: 'js/views/*.js',
		  dest: 'build/<%= pkg.name %>.min.js'
		}
	},
	uglify: {
		options: {
		  mangle : true,
		  compress : {
		     comparisons :true,
			drop_console: true
		  },
		  beautify : false,
			preserveComments:false,
		  banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
		  src: 'js/views/*.js',
		  dest: 'build/<%= pkg.name %>.min.js'
		}
	},
	cssmin: {
	  target: {
	    files: [{
	      expand: true,
		cwd:'./css',
	      src: '*.css',
		 dest: 'build/css',
		ext : '.min.css'
	    }]
	  }
	},
	watch:{
		scripts:{
			options:{
				liverload:true,
				nospawn:true
			},
			files : './js/views/*.js',
			tasks: ['newer:uglify']
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
/*
	grunt.event.on('watch', function(action, filepath, target){
	});
*/
  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
