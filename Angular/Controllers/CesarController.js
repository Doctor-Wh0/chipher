(function () {

  angular
    .module('main')
    .controller('CesarController', CesarController);
    CesarController.$inject = ['$scope', '$sanitize', 'ChipherService'];

    function CesarController($scope, $sanitize, ChipherService){

        $scope.message = ChipherService.getLastChipherMessage();

        var array;
        var alfabet = [{"id": 1,"toid":1,"lit": "A"},{"id": 2,"toid":2,"lit": "B"},{"id": 3,"toid":3,"lit": "C"},{"id": 4,
        "toid":4,"lit": "D"},{"id": 5,"toid":5,"lit": "E"},{"id": 6,"toid":6,"lit": "F"},{"id": 7,"toid":7,"lit": "G"},{
        "id": 8,"toid":8,"lit": "H"},{"id": 9,"toid":9,"lit": "I"},{"id": 10,"toid":10,"lit": "J"},{"id": 11,"toid":11,
        "lit": "K"},{"id": 12,"toid":12,"lit": "L"},{"id": 13,"toid":13,"lit": "M"},{"id": 14,"toid":14,"lit": "N"},
        {"id": 15,"toid":15,"lit": "O"},{"id": 16,"toid":16,"lit": "P"},{"id": 17,"toid":17,"lit": "Q"},{"id": 18,"toid":18,
        "lit": "R"},{"id": 19,"toid":19,"lit": "S"},{"id": 20,"toid":20,"lit": "T"},{"id": 21,"toid":21,"lit": "U"},
        {"id": 22,"toid":22,"lit": "V"},{"id": 23,"toid":23,"lit": "W"},{"id": 24,"toid":24,"lit": "X"},{"id": 25,"toid":25,
        "lit": "Y"},{"id": 26,"toid":26,"lit": "Z"}

               ];

         $scope.show =  function(){
            
            var text="";
            var crypalphabet = "";
                alfabet.forEach(function(item, i, alfabet){
                        text +="<div class='item'>"+item.lit+"</div>";
                        crypalphabet +="<div class='itemscroll'>"+item.lit+"</div>";
                })
           
           
            var messageElem = document.createElement('div');
            messageElem.innerHTML = text;
            document.getElementById('forpart').appendChild(messageElem);
            //var messageElem = document.createElement('div');
            //messageElem.innerHTML = crypalphabet;
           // document.getElementById('forresult').appendChild(messageElem);
           document.getElementById('forresult').innerHTML = crypalphabet;
               };


              $scope.scroll = function(){
           //document.getElementById('button').onclick =  function scroll(){
       
                alfabet.forEach(function(item, i, alfabet){
                    if(item.toid>=2){item.toid--}else{item.toid=26;}
                })
                //var array = new Array();
                array = document.getElementsByClassName('itemscroll');
                var forresult = document.getElementById('forresult');
                //forresult.forEach(function(item, i, forresult){alert("!")});
                
                forresult.insertBefore(array[array.length-1], forresult.children[0]);
                //alert(alfabet[0].toid);

            }

            $scope.translate = function(){
                console.log('translate');
              //document.getElementById('translate').onclick = function translate() {
                var chipher="";
                var text = document.getElementById('text');
                var message = text.value;
                message = message.toUpperCase();
                var arr = new Array();
                for(var i=0; i<message.length; i++){arr.push(message[i])}
                arr.forEach(function(item, i, arr){
                    for(var k=0; k<alfabet.length; k++){
                        if(arr[i]===alfabet[k].lit){
                            chipher +=alfabet[parseInt(alfabet[k].toid, 10)-1].lit;
                        }
                    }   
                })
                
                var resultat = document.getElementById('resultat');

                resultat.value = chipher;
                ChipherService.setLastChipherMessage(chipher);
                console.log('new item in service: '+ChipherService.getLastChipherMessage());
                }
  }
}());