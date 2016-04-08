var App = angular.module("route", [
    "ngRoute",
]);


App.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
        $routeProvider.when(
            "/home",
            {
                templateUrl:"view/home.html",
            }
        ).when(
            "/gallery",
            {
                templateUrl:"view/gallery.html",
            }
         ).when(
            "/contact",
            {
                templateUrl:"view/contact.html",
            }
        ).when(
            "/product",
            {
                templateUrl:"view/product.html",
            }
        )/*.when(
            "/view",
            {
                templateUrl:"view/main.html",
                controller:"user"
            }
         ).when(
            "/upload",
            {
                templateUrl:"view/image.html",
                controller:"user"
            }
        )*/.otherwise({
            redirectTo: "index.html"
        })
    }
]);