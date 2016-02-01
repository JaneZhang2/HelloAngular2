//import 'es6-shim/es6-shim.min';
//import 'angular2/bundles/angular2-polyfills';
//import 'Rx';
//import ng from 'angular2/bundles/angular2-all.umd';
import './component';
import './test';


//alert(ng);


(function (app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));