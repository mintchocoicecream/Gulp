import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";

const routes = {
    pug: {
        src: "src/*.pug",
        dest: "build"
    }
}

const pug = () => 
    gulp
        .src(routes.pug.src)
        .pipe(gpug())
        .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]); //del["확장자나 폴더 이름"];

const prepare = gulp.dest([clean]);

const assets = gulp.dest([pug]);

export const dev = gulp.series([prepare, assets]);