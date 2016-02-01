//import 'es6-shim/es6-shim.min';
//import 'angular2/bundles/angular2-polyfills';
//import 'Rx';
//import ng from 'angular2/bundles/angular2-all.umd';

//alert(ng.core.Component);

(function (app) {
  app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: '<h1>My First Angular 2 App</h1>'
      })
      .Class({
        constructor: function () {
        }
      });
})(window.app || (window.app = {}));