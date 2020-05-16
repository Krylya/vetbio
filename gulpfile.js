const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require("gulp-plumber");
const sass = require('gulp-sass');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
var gcmq = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const smartgrid = require('smart-grid');


function clearBuild() {
	return del('./build/*');
}

function clear() {
	return del('./app/css/style.css');
}

function styles() {
	return gulp.src('./app/sass/style.scss')
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(gcmq())
			.pipe(cleanCSS({ level: 2 }))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./app/css'))
			.pipe(browserSync.stream());
}

/* сборка стилей для build  */
function stylesBuild() {
	return gulp.src('./app/sass/style.scss')
			.pipe(sass())
			.pipe(gcmq())
			.pipe(cleanCSS({ level: 2 }))
			.pipe(gulp.dest('./build/css'));
}

function html() {
	return gulp.src('./app/*.html')
			.pipe(gulp.dest('./build/'));
}

function img() {
	return gulp.src('./app/img/**/*')
			.pipe(gulp.dest('./build/img'));
}


function watch() {
	browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

	gulp.watch('./app/sass/**/*.scss', styles);
	gulp.watch("./app/*.html").on('change', browserSync.reload);
}

/* smart grid */
function grid(done) {
	let settings = {
		outputStyle: 'scss', /* less, css, */
		columns: 12,
    	offset: '12px',
    	mobileFirst: true,
    	container: {
	        maxWidth: "1200px",
	        fields: "15px"
		    },
	    	breakPoints: {
		    	lg: {
		            width: "1200px",
		        },
		        md: {
		            width: "992px",
		            fields: "15px",
		            offset: '30px',
		        },
		        sm: {
		            width: "720px",
		            offset: '20px',
		        },
		        xs: {
		            width: "576px",
		        }
	    	}
	}

	smartgrid('./app/sass/global/', settings);
	done();
}/* smart grid */

const build = gulp.series(clearBuild,
	gulp.parallel(html, stylesBuild, img)
);

gulp.task('build', build);
gulp.task('watch', gulp.series(clear, styles, watch));

gulp.task('grid', grid);