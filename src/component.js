//import 'es6-shim/es6-shim.min';
//import 'angular2/bundles/angular2-polyfills';
//import 'Rx';
//import ng from 'angular2/bundles/angular2-all.umd';

//alert(ng.core.Component);

(function (app) {
  app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: '<div></div>'
      })
      .Class({
        constructor: function () {
        }
      });
})(window.app || (window.app = {}));