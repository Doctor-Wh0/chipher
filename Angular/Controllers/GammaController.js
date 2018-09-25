(function () {

  angular
    .module('main')
    .controller('GammaController', GammaController);
    GammaController.$inject = ['$scope', '$sanitize', 'ChipherService'];

    function GammaController($scope, $sanitize, ChipherService){
    	$scope.message = ChipherService.getLastChipherMessage();


	var alfabet = [{"id": 0,"toid":0,"lit": "A"},{"id": 1,"toid":1,"lit": "B"},{"id": 2,"toid":2,"lit": "C"},{"id": 3,
        "toid":3,"lit": "D"},{"id": 4,"toid":4,"lit": "E"},{"id": 5,"toid":5,"lit": "F"},{"id": 6,"toid":6,"lit": "G"},{
        "id": 7,"toid":7,"lit": "H"},{"id": 8,"toid":8,"lit": "I"},{"id": 9,"toid":9,"lit": "J"},{"id": 10,"toid":10,
        "lit": "K"},{"id": 11,"toid":11,"lit": "L"},{"id": 12,"toid":12,"lit": "M"},{"id": 13,"toid":13,"lit": "N"},
        {"id": 14,"toid":14,"lit": "O"},{"id": 15,"toid":15,"lit": "P"},{"id": 16,"toid":16,"lit": "Q"},{"id": 17,"toid":17,
        "lit": "R"},{"id": 18,"toid":18,"lit": "S"},{"id": 19,"toid":19,"lit": "T"},{"id": 20,"toid":20,"lit": "U"},
        {"id": 21,"toid":21,"lit": "V"},{"id": 22,"toid":22,"lit": "W"},{"id": 23,"toid":23,"lit": "X"},{"id": 24,"toid":24,
        "lit": "Y"},{"id": 25,"toid":25,"lit": "Z"}

               ];


               function show(){
            
            var text="";
            var count ="";
                alfabet.forEach(function(item, i, alfabet){
                        text +="<div class='item'>"+item.lit+"</div>";
                       	count +="<div class='item'>"+item.id+"</div>";
                })
           
           
            var messageElem = document.createElement('div');
            messageElem.innerHTML = text;
            document.getElementById('forpart').appendChild(messageElem);

            var messageElem = document.createElement('div');
            messageElem.innerHTML = count;
            document.getElementById('count').appendChild(messageElem);
               };

                function search(ch){
               	var j = alfabet.length;
					  while (j--) {
					      if (alfabet[j].lit == ch) {
					         return parseInt(alfabet[j].id);
					      }
					  }
               }

               $scope.code = function(){
               	console.log("start");
               	var message = document.getElementById('message').value;
               	message = message.toUpperCase()
               	var gamma = document.getElementById('gamma').value;
               	var result="";
               	var array = new Array();
               	console.log(gamma);
               	var mesone="";
               	var text="";
               	var textwo="";
               	var countwo ="";
            	var count ="";


               	var o;
               	if(gamma !=''){
               		if(message.length>=gamma.length){
               			o = message.length/gamma.length;
               			console.log(o);
               			o = Math.floor(o, -1);
               			console.log(o);
               			for(var i=0; i<o; i++){
               				mesone+= gamma;
               			}
               			o = message.length%gamma.length;
               			console.log(o);
               			for(var i=0; i<o; i++){
               				mesone+= gamma[i];
               			} 
               			mesone = mesone.toUpperCase();


               			text="";
               			count="";
               			for(var i=0; i<message.length; i++){
               				array[i]= search(mesone[i]) + search(message[i]);
               				textwo += "<div class='item'>"+message[i]+"</div>";
               				countwo += "<div class='item'>"+search(message[i])+"</div>";
               				text +="<div class='item'>"+mesone[i]+"</div>";
                       		count +="<div class='item'>"+search(mesone[i])+"</div>";
               			}
               			var messageElem = document.createElement('div');
            			messageElem.innerHTML = textwo;
            			document.getElementById('messagetext').appendChild(messageElem);

            			var messageElem = document.createElement('div');
            			messageElem.innerHTML = countwo;
            			document.getElementById('messagecount').appendChild(messageElem);

               			 var messageElem = document.createElement('div');
            			messageElem.innerHTML = text;
            			document.getElementById('gammatext').appendChild(messageElem);

            			var messageElem = document.createElement('div');
			            messageElem.innerHTML = count;
			            document.getElementById('gammacount').appendChild(messageElem);


			            text="";
               			count="";
               			textwo = "";
               			countwo = "";
               			for(var i=0; i<message.length; i++){
               				array[i] = array[i]%26;
               				count +="<div class='item'>"+array[i]+"</div>";
               				text +="<div class='item'>"+alfabet[array[i]].lit+"</div>";
               				
               			}
               			var messageElem = document.createElement('div');
			            messageElem.innerHTML = count;
			            document.getElementById('resultcount').appendChild(messageElem);

			            var messageElem = document.createElement('div');
			            messageElem.innerHTML = text;
			            document.getElementById('result').appendChild(messageElem);

               			console.log(array);

               			for(var i=0; i<message.length; i++){
               				result += alfabet[array[i]].lit;
               			}
               			ChipherService.setLastChipherMessage(result);
               			console.log(result)

               		}
               	}
               	
               }
             
               show();



  }
}());