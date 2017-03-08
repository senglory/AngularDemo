(function (global) {






    var paths = {
        // псевдоним для пути к модулям
        'npm': 'node_modules/',
    };

    // map tells the System loader where to look for things
    var map = {
        // наше приложение будет находиться в папке app
        app: 'app',
        // пакеты angular
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',

        // other libraries
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',


        'ngx-uploader': 'node_modules/ngx-uploader/ngx-uploader.js'
        //,
        //'typescript': 'node_modules/typescript/lib/typescript.js'
    };


    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        //'ngx-uploader': {
        //    defaultExtension: 'js',
        //    main : 'ngx-uploader.js'
        //}
    };

    var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      'ngx-uploader'
    ];

    //packageNames.forEach(function (pkgName) {
    //    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    //});
    //packages['ngx-uploader'].main = 'node_modules/ngx-uploader/ngx-uploader.js';

    var config = {
        map: map,
        packages: packages
    }
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
    System.config(config);
})(this);