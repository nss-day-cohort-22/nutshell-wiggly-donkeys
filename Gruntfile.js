module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      watch: {
        scripts: {
          files: ["**/scripts/*.js", "!node_modules/**/*.js"],
          tasks: ["eslint", "browserify"],
          options: {
            spawn: false,
          },
        },
      },
      browserify: {
        dist: {
          files: {
            "build/bundle.js": ["scripts/main.js"],
          },
        },
      },
      uglify: {
            options: {
                // banner: "/*! <%= pkg.name %> <%= grunt.template.today(yyyy-mm-dd) %> */"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "build",
                    src: "*.js",
                    dest: "build",
                    ext: ".min.js"
                }]
            },
        },
      eslint: {
        src: [
          "**/scripts/*.js",
          "!node_modules/**/*.js",
        ],
      },
    });
  
   // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-browserify");
  
   // Default task(s).
    grunt.registerTask("default", ["eslint", "browserify", "uglify", "watch"]);
  };
