'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var motoAppServices = angular.module('motoAppServices', ['ngResource']); //<---- Se agrega ng-resoruce para poder usar la libreria interna de angular

//Se declara el servicio Car! con una sola propiedad
motoAppServices.factory('Car', ['$resource',
  function($resource){
    return $resource('catalogo/:carId.json', {}, {
      query: {method:'GET', params:{carId:'moto-catalogo'}, isArray:true}
    });
  }]);
