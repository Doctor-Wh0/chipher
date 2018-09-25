
(function () {

  angular
    .module('main')
    .controller('VigenerController', VigenerController);
    VigenerController.$inject = ['$scope', '$sanitize', 'ChipherService'];

    function VigenerController($scope, $sanitize, ChipherService){



 var _name = '';
  
	     var alfabet = [{"id": 1,"toid":1,"lit": "A"},{"id": 2,"toid":2,"lit": "B"},{"id": 3,"toid":3,"lit": "C"},{"id": 4,
        "toid":4,"lit": "D"},{"id": 5,"toid":5,"lit": "E"},{"id": 6,"toid":6,"lit": "F"},{"id": 7,"toid":7,"lit": "G"},{
        "id": 8,"toid":8,"lit": "H"},{"id": 9,"toid":9,"lit": "I"},{"id": 10,"toid":10,"lit": "J"},{"id": 11,"toid":11,
        "lit": "K"},{"id": 12,"toid":12,"lit": "L"},{"id": 13,"toid":13,"lit": "M"},{"id": 14,"toid":14,"lit": "N"},
        {"id": 15,"toid":15,"lit": "O"},{"id": 16,"toid":16,"lit": "P"},{"id": 17,"toid":17,"lit": "Q"},{"id": 18,"toid":18,
        "lit": "R"},{"id": 19,"toid":19,"lit": "S"},{"id": 20,"toid":20,"lit": "T"},{"id": 21,"toid":21,"lit": "U"},
        {"id": 22,"toid":22,"lit": "V"},{"id": 23,"toid":23,"lit": "W"},{"id": 24,"toid":24,"lit": "X"},{"id": 25,"toid":25,
        "lit": "Y"},{"id": 26,"toid":26,"lit": "Z"}
               ];


              $scope.html = "";
              $scope.chipher="";
$scope.expl = {
	html:"",
	func: function(){

		this.html = $scope.html;


		return this.html;
	}


}
	    $scope.chip = {
	    	message: ChipherService.getLastChipherMessage(),
	    	key:"",
	    	func: function(message, key){
	    		$scope.html = "";
	    		$scope.html +="<table><tr>"
	    		for(var c=0; c<alfabet.length; c++){
	    			$scope.html+="<th>"+Object(alfabet[c]).lit+"</th>";
	    		}
	    		
	    		$scope.html+="</tr>"

	    		if(this.message.length!=0 & this.key.length!=0){
	    	$scope.chipher="";
	    		var Matrix = new Array();
	    		var l = 0;
	    		this.key = this.key.toUpperCase();
	    		this.message = this.message.toUpperCase();
	    		
	    		for(var i=0; i< this.message.length; i++){
	    			Matrix[i] = new Array(26);
	    					if(l<this.key.length)
	    						{var index = parseInt(findIndex(this.key[l]),10)-1;
	    						l++;}
	    						else
	    						{l=0;
	    						var index = parseInt(findIndex(this.key[l]),10)-1;
	    						l++;}

		    				for(var k=0; k<26; k++){
		    					Matrix[i][k] = alfabet[index];
		    					if(index<25){index++} else {index = 0;}
	    					}
	    					
	    		}
	    		
	    		for(var i=0; i<this.message.length; i++){
	    			var strochka="";
	    			for(var l=0; l<26; l++){
	    				var obj = Matrix[i][l];
	    				strochka += Object(obj).lit;
	    			}

	    		}

			for(var t=0; t<this.message.length;t++){
				var o = findIndex(this.message[t])-1;
				var p = Object(Matrix[t][o]).lit;
				$scope.chipher +=p;

			};
		
							for(var j=0; j<Matrix.length; j++){
								var b = this.message[j];
								var n = findIndex(b)-1;
								//alert(b);
								//alert(typeof n);
								$scope.html +="<tr>";
								for(var y=0; y<Matrix[j].length; y++){
									
									if(y==0){
										if(y==n){ $scope.html +="<th class='j'>"+Object(Matrix[j][y]).lit+"</th>";}
										else
									{$scope.html +="<th>"+Object(Matrix[j][y]).lit+"</th>";}
									}
									else
									{
										if(y==n){ $scope.html +="<td class='j'>"+Object(Matrix[j][y]).lit+"</td>";}
										else
									{$scope.html +="<td>"+Object(Matrix[j][y]).lit+"</td>";}
										
									}

									

								}
								$scope.html +="</tr>";
							}
			  
							$scope.html+="</table>";
							ChipherService.setLastChipherMessage($scope.chipher);
	    		return $scope.chipher;
	    	}
	    }
}
	    function findIndex(lit){
	    	for(var i=0; i<26; i++){
	    		if(lit===alfabet[i].lit){
	    			return parseInt(alfabet[i].id, 10);
	    		}
	    	}
	    }



  }
}());