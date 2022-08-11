let mix = require('laravel-mix');

mix
	.setPublicPath('dist')
	.scripts([
		'./src/js/components/global/favicon.js',
		'./src/js/components/global/nav.js',
		'./src/js/components/global/scroll.js',
		'./src/js/components/global/fa-pro.min.js',
	], 'dist/js/common.js')
	.scripts('./src/js/home/home.js', 'dist/js/home.js')
	.scripts('./src/js/about-us/about-us.js', 'dist/js/about-us.js')
	.scripts('./src/js/apply-for-job/apply-for-job.js', 'dist/js/apply-for-job.js')
	.scripts('./src/js/case-study/case-study.js', 'dist/js/case-study.js')
	.scripts('./src/js/blog-details/blog-details.js', 'dist/js/blog-details.js')
	.scripts('./src/js/courses/courses.js', 'dist/js/courses.js')
	.scripts('./src/js/pricing/pricing.js', 'dist/js/pricing.js')
	.scripts('./src/js/service-details/service-details.js', 'dist/js/service-details.js')
	.sass('src/scss/about-us.scss', 'css')
	.sass('src/scss/blog.scss', 'css')
	.sass('src/scss/blog-details.scss', 'css')
	.sass('src/scss/case-study.scss', 'css')
	.sass('src/scss/contact.scss', 'css')
	.sass('src/scss/courses.scss', 'css')
	.sass('src/scss/course-details.scss', 'css')
	.sass('src/scss/apply-for-job.scss', 'css')
	.sass('src/scss/home.scss', 'css')
	.sass('src/scss/privacy-policy.scss', 'css')
	.sass('src/scss/pricing.scss', 'css')
	.sass('src/scss/service-details.scss', 'css')
	.sass('src/scss/terms-and-service.scss', 'css')
	.sass('src/scss/tailwind.scss', 'css')
	.sass('src/scss/global/lib/fontawesome.scss', 'css/libs/')
	.options({
		processCssUrls: false,
		postCss: [
			require('tailwindcss'),
		]
	})
	.version();
	// .browserSync({
	// 	server: './',
	// 	files: ['./**/*.html', './dist'],
	// 	//ghostMode: false,
	// 	ignore: ['/node_modules/'],
	// });

	mix.copyDirectory('src/assets', 'dist/assets');
	//mix.copy('public', 'dist/');