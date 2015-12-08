(function() {
  'use strict';
  var gulp    = require('gulp'),
      browserSync = require('browser-sync');

  gulp.task('serve', function() {
      browserSync.init({
          server: {
              baseDir: './app',
              routes: {
                '/vendor': 'vendor'
              }
          }
      });
  });

  gulp.task('watch', function() {
    gulp.watch('app/**/*', browserSync.reload);
  });

  gulp.task('default', ['serve', 'watch'], function() {
    console.log('Gulp power... ');
  });
})();
