"use strict";

const gulp = require("gulp");

const concat = require("gulp-concat");
const browsersync = require("browser-sync").create();

const dist = "./dist/";
const distJs = "./dist/js/";

gulp.task("copy-html", () => {
  return gulp
    .src("./src/index.html")
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
  return gulp
    .src([
      "./src/js/modals.js",
      "./src/js/form-submit.js",
      "./src/js/tabs.js",
      "./src/js/timer.js",
      "./src/js/works.js",
      "./src/js/60secPopup.js",
    ])
    .pipe(concat("main.js"))

    .pipe(gulp.dest(distJs))
    .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
  return gulp
    .src("./src/assets/**/*.*")
    .pipe(gulp.dest(dist + "/assets"))
    .on("end", browsersync.reload);
});

gulp.task("watch", () => {
  browsersync.init({
    server: "./dist/",
    port: 4000,
    notify: true,
  });

  gulp.watch("./src/index.html", gulp.parallel("copy-html"));
  gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js"));

gulp.task("build-prod-js", () => {
  return gulp
    .src("./src/js/main.js")

    .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));
