(function () {

    angular
    .module('main')
    .controller('AnaliticalController', AnaliticalController);
    AnaliticalController.$inject = ['$scope', '$sanitize', 'ChipherService'];

    function AnaliticalController($scope, $sanitize, ChipherService){

        $scope.message = ChipherService.getLastChipherMessage();
        $scope.replie = "";
	var alfabet = [{"id": 0,"toid":0,"lit": "A"},{"id": 1,"toid":1,"lit": "B"},{"id": 2,"toid":2,"lit": "C"},{"id": 3,
        "toid":3,"lit": "D"},{"id": 4,"toid":4,"lit": "E"},{"id": 5,"toid":5,"lit": "F"},{"id": 6,"toid":6,"lit": "G"},{
        "id": 7,"toid":7,"lit": "H"},{"id": 8,"toid":8,"lit": "I"},{"id": 9,"toid":9,"lit": "J"},{"id": 10,"toid":10,
        "lit": "K"},{"id": 11,"toid":11,"lit": "L"},{"id": 12,"toid":12,"lit": "M"},{"id": 13,"toid":13,"lit": "N"},
        {"id": 14,"toid":14,"lit": "O"},{"id": 15,"toid":15,"lit": "P"},{"id": 16,"toid":16,"lit": "Q"},{"id": 17,"toid":17,
        "lit": "R"},{"id": 18,"toid":18,"lit": "S"},{"id": 19,"toid":19,"lit": "T"},{"id": 20,"toid":20,"lit": "U"},
        {"id": 21,"toid":21,"lit": "V"},{"id": 22,"toid":22,"lit": "W"},{"id": 23,"toid":23,"lit": "X"},{"id": 24,"toid":24,
        "lit": "Y"},{"id": 25,"toid":25,"lit": "Z"}

               ];
function search(ch){
               	var j = alfabet.length;
					  while (j--) {
					      if (alfabet[j].lit == ch) {
					         return parseInt(alfabet[j].id);
					      }
					  }
               }

var dimension;
var analiticalResultMess="";
    $scope.buildmatrix = function(){
    		dimension = document.getElementById('dimension').value;
	    if(document.getElementById('matrix').innerHTML == ""){
	    	console.log("start 1");
	    	dimension = parseInt(dimension);
	    	for(var j=0; j<dimension; j++){
	    		for(var i=0; i<dimension; i++){
	    			var messageElem = document.createElement('input');
		            document.getElementById('matrix').appendChild(messageElem);
	    		}
	    		var messageElem = document.createElement('br');
		        document.getElementById('matrix').appendChild(messageElem);
	    	}
    	} 
    	else{
    		console.log("start 2");
    		document.getElementById('matrix').innerHTML = "";
    		buildmatrix();
    	}
    }

    $scope.codeAnalitical = function(){
    	var ResMes ="";
    	var results = new Array();
    	var matrixnodes = document.getElementById('matrix').childNodes;
    	matrix = new Array();
    	console.log(matrixnodes);
    	console.log('!! '+matrixnodes[0].value);
    	matrixnodes.forEach(function(item, i, matrixnodes){
    		if(item.toString()=="[object HTMLInputElement]" && item.value == ''){alert("Заполните таблицу"); return ;}
    	})

    	matrixnodes.forEach(function(item, i, matrixnodes){
    		if(item.toString()=="[object HTMLInputElement]"){
    			matrix.push(parseInt(item.value));
    		}
    	});
    	console.log(matrix);

    	var message = document.getElementById('message').value;
    	message = message.toUpperCase();
    	console.log(message);
    	if(message.length%dimension==0){

    	}
    	else{
    		for(var i=0; i<message.length%dimension;i++){
    			message+="A";
    		}
    	}
    	console.log(message);
    	var k = message.length/dimension;
    	var z = dimension;
    	var arr = new Array();


    	console.log('!'+" "+k);
    	for(var i=0; i<k; i++){
    		//console.log(i+' !');
    		for(var j=i*dimension;j<z; j++){

    			console.log(message[j] + ' '+ search(message[j]) );

    			arr.push(search(message[j]));
    		}
    		console.log("Lo");
    		z+=dimension;
    		//console.log(arr);
    	}
        $scope.messageCode = arr.join(',');

        //$scope.preResult = 
        var table = document.getElementById('matrix');
        var matrix1 = table.cloneNode(true);
        document.getElementById('preResult1').appendChild(matrix1);


        var pipeOfMessageCode = document.createElement('table');
        for(var i=0; i<dimension; i++){
            var a = document.createElement('tr');
            var b = document.createElement('td');
            b.innerHTML = arr[i];
            a.appendChild(b);
            pipeOfMessageCode.appendChild(a);
        }
        document.getElementById('preResult2').appendChild(pipeOfMessageCode);
        

    	console.log(arr);
    	
    	console.log("Stage2");

    	// multiplication of matrixs
    	var buffer1 = new Array(dimension);
    	var buffer1 = new Array(dimension);
    	for(var i=0; i<k; i++){
    		buffer2 = arr.slice(i*dimension, i*dimension+dimension);
    		console.log(i +' '+ 'Buffer2 '+buffer2);
    		for(j=0; j<dimension; j++){
    			buffer1 = matrix.slice(j*dimension, j*dimension+dimension);
    			console.log(i +' '+j+' '+ 'Buffer1 '+buffer1);
    			var sum = 0;
    			for(h=0; h<dimension; h++){
    				sum += parseInt(buffer1[h]) * parseInt(buffer2[h]);
    			}
    			results.push(sum);
    		}
    	}
        $scope.result = results;
        var number;
        var letter = "";
        var resultLetterMas = [];
        for(var t=0; t<results.length; t++){
            number = results[t];
            if(results[t]<26){
                number = results[t];
            } else if (results[t]%26==0) { number = 0;}
            else {number = results[t]%25;}
            
            console.log(results[t]%25);
            resultLetterMas.push(alfabet[number].lit);
            //resultLetterMas.push(number);



        }
    	console.log(results);
        console.log(resultLetterMas);
        $scope.replie = resultLetterMas.join();
    }

  }
}());