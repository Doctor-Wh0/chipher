(function () {
  'use strict';

  angular
    .module('main')
   
    .factory('ChipherService', ChipherService);

  ChipherService.$inject = ['$log'];

  function ChipherService($log) {
    var vm = this;
    var lastChipher = '';
    vm.getLastChipherMessage = function(){
        return lastChipher;
    }

    vm.setLastChipherMessage = function(chipherMessage){
      if(typeof(chipherMessage) == 'string'){
        lastChipher = chipherMessage;
      } else{
        console.log('Looking for error in code');
      }
      
    }
    return vm;
  }
}());
