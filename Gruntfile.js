module.exports = function(grunt){
	grunt.initConfig({
		connect:{
			server:{
				options:{
					port: 9000,
					base: './app/',
					hostname:'localhost',
					keepalive: false,
					open: false,
					livereload: true,
				}
			}
		},
		watch:{
			css:{
				files:'**/*.scss',
				tasks:['compass'],
				options:{
					livereload: true,
				}
			},
			html:{
				files:['**/*.html'],
				options:{livereload: true}
			},
			bower:{
				files:['**/bower.json'],
				tasks: ['bowerInstall'],
			}
		},
		sass:{
			dist:{
				files:{
					'./app/css/main.css': '**/*.scss'
				}
			}
		},
	 compass: {
		    dist: {
		      options: {
		        config: 'config.rb'
		      }
		    }
		  },
	 bowerInstall:{
	 	target:{
	 		src:['./app/*.html'],
	 	}
	 }


	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.loadNpmTasks('grunt-bower-install');

	grunt.registerTask('default',['connect','watch']);
};
