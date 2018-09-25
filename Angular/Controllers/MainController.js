//main controller
main.controller("MainController", function ($scope, $sanitize) {

  /*var _name = '';
  
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
	    	message:"",
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
*/

//==========================================================================	    

var alphabet = [{"lin":"A", "col":"A", "lit":""},{"lin":"A", "col":"D", "lit":""},{"lin":"A", "col":"F", "lit":""},{"lin":"A", "col":"G", "lit":""},{"lin":"A", "col":"V", "lit":""},{"lin":"A", "col":"X", "lit":""},
				{"lin":"D", "col":"A", "lit":""},{"lin":"D", "col":"D", "lit":""},{"lin":"D", "col":"F", "lit":""},{"lin":"D", "col":"G", "lit":""},{"lin":"D", "col":"V", "lit":""},{"lin":"D", "col":"X", "lit":""},
				{"lin":"F", "col":"A", "lit":""},{"lin":"F", "col":"D", "lit":""},{"lin":"F", "col":"F", "lit":""},{"lin":"F", "col":"G", "lit":""},{"lin":"F", "col":"V", "lit":""},{"lin":"F", "col":"X", "lit":""},
				{"lin":"G", "col":"A", "lit":""},{"lin":"G", "col":"D", "lit":""},{"lin":"G", "col":"F", "lit":""},{"lin":"G", "col":"G", "lit":""},{"lin":"G", "col":"V", "lit":""},{"lin":"G", "col":"X", "lit":""},
				{"lin":"V", "col":"A", "lit":""},{"lin":"V", "col":"D", "lit":""},{"lin":"V", "col":"F", "lit":""},{"lin":"V", "col":"G", "lit":""},{"lin":"V", "col":"V", "lit":""},{"lin":"V", "col":"X", "lit":""},
				{"lin":"X", "col":"A", "lit":""},{"lin":"X", "col":"D", "lit":""},{"lin":"X", "col":"F", "lit":""},{"lin":"X", "col":"G", "lit":""},{"lin":"X", "col":"V", "lit":""},{"lin":"X", "col":"X", "lit":""},
];

var pro = _.memoize(function(){
			var mas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
			var tabchange = [{"p0":""},{"p1":""},{"p2":""},{"p3":""},{"p4":""},{"p5":""},{"p6":""},{"p7":""},{"p8":""},{"p9":""},{"p10":""},{"p11":""},{"p12":""},{"p13":""},{"p14":""},{"p15":""},{"p16":""},{"p17":""},
	{"p18":""},{"p19":""},{"p20":""},{"p21":""},{"p22":""},{"p23":""},{"p24":""},{"p25":""},{"p26":""},{"p27":""},{"p28":""},{"p29":""},{"p30":""},{"p31":""},{"p32":""},{"p33":""},{"p34":""},{"p35":""}];
			// max not including!!! --> max+1 --> (0,37)
			var rnd = function(min, max) { return Math.floor(Math.random() * (max - min)) + min; }

			for(var k=0;k<36; k++ ){
				var c= rnd(0,mas.length);
				var asoc ="p"+k;
				tabchange[asoc] = mas[c];
				mas = mas.replace(String(mas[c]), '');
			}
				return tabchange;
		});


$scope.table = {
	message: "",
	key:"",
	chipher:"",
	tab:[{"p0":""},{"p1":""},{"p2":""},{"p3":""},{"p4":""},{"p5":""},{"p6":""},{"p7":""},{"p8":""},{"p9":""},{"p10":""},{"p11":""},{"p12":""},{"p13":""},{"p14":""},{"p15":""},{"p16":""},{"p17":""},
	{"p18":""},{"p19":""},{"p20":""},{"p21":""},{"p22":""},{"p23":""},{"p24":""},{"p25":""},{"p26":""},{"p27":""},{"p28":""},{"p29":""},{"p30":""},{"p31":""},{"p32":""},{"p33":""},{"p34":""},{"p35":""}],
		processing: function(message, key){

		var zero;
		this.message = this.message.toUpperCase();
		this.key = this.key.toUpperCase();
		//alert(this.message);
		var str ="";
		for(var j=0; j<this.message.length; j++){
			for(var i=0; i<36; i++){
				var p = "p"+i;
				if(this.tab[p]==this.message[j]){str+= alphabet[i]["lin"]+alphabet[i]["col"];}
				if(this.tab[p]=="0"){zero = i;}
			}
		}

		//alert(str);
		
		var count = Math.ceil(str.length/this.key.length);
		//alert(count);
		var arrbefore = new Array();
		var k = 0;
		var d=0;
		for(var i=0; i<count; i++){
			arrbefore[i] = new Array();
			for(var j=0; j<this.key.length; j++){
				if(str[k]!=undefined){
				arrbefore[i][j] = str[k];
				k++;
				} 
				else
				{
					arrbefore[i][j] = (d==0) ? alphabet[zero]["lin"] : alphabet[zero]["col"] ;
					d = (d==0) ? 1 : 0;

				}

			}
		}
		var stringforexample="";
		//alert(arrbefore.length+" "+arrbefore[0].length);
		arrbefore.forEach(function(item, i, arrbefore){
			stringforexample+=item;
		})
			//alert(stringforexample);
			var t="";
			var kei = new Array();
			for(var i=0; i<this.key.length;i++){
			 kei[i]=this.key[i];
			}

			//alert("kei: "+kei);
			for(var i=0; i<this.key.length; i++){
				for(var j=i; j<this.key.length; j++){
					if(findIndex(kei[i])>findIndex(kei[j])){
						//alert(kei[i]+">"+kei[j]+" "+findIndex(kei[i])+">"+findIndex(kei[j]));
						t = kei[i];
						kei[i] = kei[j];
						kei[j] = t;
						var change="";
						for(var x=0; x<count; x++){
							change = arrbefore[x][i];
							arrbefore[x][i] = arrbefore[x][j];
							arrbefore[x][j] = change;
						}
					}
				}
			}
			//alert(kei);
			var strong="";
		for(var i=0; i<arrbefore.length; i++){
			strong+=arrbefore[i];
		}



		strong = String(strong).replace(",", '');
		this.chipher = stringforexample;
		
		},
		rundom: function(){
			this.tab = pro();
		}

}

});

