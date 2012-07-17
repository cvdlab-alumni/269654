


var main_piano = T([0,1])([-16,-6.5])( COLOR([1,1,0.860])(SIMPLEX_GRID([[58],[8],[3]])));

var second_piano = T([0,1])([-5,-12.5])( COLOR([1,1,0.860])(SIMPLEX_GRID([[36],[2],[3]])));

var piano_di_mezzo = T([0,1])([-7,-10.5])( COLOR([1,1,0.860])(SIMPLEX_GRID([[40],[4],[3]])));

var piani_ingresso = STRUCT([main_piano,second_piano,piano_di_mezzo]);

DRAW(piani_ingresso);



var scale_ingresso = COLOR([1,1,0.860])(STRUCT([
		
		SIMPLEX_GRID([[26],[1.5],[4.5]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[4.35]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[4.2]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[4.05]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[3.9]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[3.75]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[3.6]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[3.45]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[3.3]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[3.15]]),T([1])([-0.6])
			
	]));
	

var scale_prima_rampa = COLOR([1,1,0.860])(STRUCT([ 
		T([1])([-13.1]),
		SIMPLEX_GRID([[26],[0.6],[2.85]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[2.7]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[2.55]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[2.4]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[2.25]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[2.1]]),T([1])([-4]),
		SIMPLEX_GRID([[26],[4],[1.95]])
	]));


var scale_seconda_rampa = COLOR([1,1,0.860])(STRUCT([ 
		T([1])([-20.1]),
		SIMPLEX_GRID([[26],[0.6],[1.8]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[1.65]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[1.5]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[1.35]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[1.2]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[1.05]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0.9]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0.75]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0.6]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0.45]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0.3]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0.15]]),T([1])([-0.6]),
		SIMPLEX_GRID([[26],[0.6],[0]])
	]));


var scale_laterali_sx = COLOR([1,1,0.860])(STRUCT([ 
		T([0,1])([-7.6,-10.5]),
		SIMPLEX_GRID([[0.6],[4],[2.8]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.6]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.4]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.2]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.8]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.6]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.4]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.2]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[1]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.8]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.6]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.4]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.2]]),T([0])([-0.6]),
		SIMPLEX_GRID([[0.6],[4],[0]]) 
		
	]));


var scale_laterali_dx = COLOR([1,1,0.860])(STRUCT([ 
		T([0,1])([33,-10.5]),
		SIMPLEX_GRID([[0.6],[4],[2.8]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.6]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.4]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[2.2]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[2]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.8]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.6]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.4]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[1.2]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[1]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.8]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.6]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.4]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[0.2]]),T([0])([0.6]),
		SIMPLEX_GRID([[0.6],[4],[0]])
	]));

var scale_posteriori_sx =  COLOR([1,1,0.860])(STRUCT([ 
		T([0,1])([-16,1.5]),
		SIMPLEX_GRID([[4],[0.6],[2.85]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.7]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.55]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.4]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.25]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.1]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.95]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.8]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.65]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.5]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.35]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.2]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.05]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.9]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.75]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.6]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.45]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.3]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.15]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.0]])
		
	]));


var scale_posteriori_dx =  COLOR([1,1,0.860])(STRUCT([ 
		T([0,1])([38,1.5]),
		SIMPLEX_GRID([[4],[0.6],[2.85]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.7]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.55]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.4]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.25]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[2.1]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.95]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.8]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.65]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.5]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.35]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.2]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[1.05]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.9]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.75]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.6]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.45]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.3]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.15]]),T([1])([0.6]),
		SIMPLEX_GRID([[4],[0.6],[0.0]])
		
	]));


var gradini = STRUCT([scale_ingresso,scale_prima_rampa,scale_seconda_rampa,scale_laterali_sx,scale_laterali_dx,scale_posteriori_sx,scale_posteriori_dx]);

DRAW(gradini);

//funzione che restituisce una semi-circonferenza su cui poi far passare HERMITE

var get_parametric_curve = function (x,z,alpha){
	// x = valore della variazione della base di partenza
	// z = altezza della curva
	// alpha=1 se ingrandiamo | =0 se rimpiccioliamo 
	var domain = INTERVALS(1)(30);

	if (alpha == 1 ){
		//curva inferiore	
		var controlpoints_down = [[(1-x),1,z],[(3+x),1,z],[0,(-4-(4*x)),0],[0,(4+(4*x)),0]];
		var curveMapping_dw_1 = CUBIC_HERMITE(S0)(controlpoints_down);
		var curve_1 = MAP(curveMapping_dw_1)(domain);

		//curva superiore
		var controlpoints_up = [[(1-x),1,z],[(3+x),1,z],[0,(4+(4*x)),0],[0,(-4-(4*x)),0]];
		var curveMapping_up_1 = CUBIC_HERMITE(S0)(controlpoints_up);
		var curve_2 = MAP(curveMapping_up_1)(domain);

		var curve = [curveMapping_dw_1,curveMapping_up_1];
	}
	
	if (alpha == 0) {

		//curva inferiore	
		var controlpoints_down = [[(1+x),1,z],[(3-x),1,z],[0,(-4+(4*x)),0],[0,(4-(4*x)),0]];
		var curveMapping_dw_1 = CUBIC_HERMITE(S0)(controlpoints_down);
		var curve_1 = MAP(curveMapping_dw_1)(domain);

		//curva superiore
		var controlpoints_up = [[(1+x),1,z],[(3-x),1,z],[0,(4-(4*x)),0],[0,(-4+(4*x)),0]];
		var curveMapping_up_1 = CUBIC_HERMITE(S0)(controlpoints_up);
		var curve_2 = MAP(curveMapping_up_1)(domain);

		var curve = [curveMapping_dw_1,curveMapping_up_1];


		}
		return curve;
	}	



var capitello = function (){
			c1 = get_parametric_curve(0.8,0,0);
			c2 = get_parametric_curve(0.6,0.3,0);
			c3 = get_parametric_curve(0.7,0.5,0);
			c4 = get_parametric_curve(0.8,0.9,0);
			c5 = get_parametric_curve(0.9,1.5,0);
			c6 = get_parametric_curve(0.9,1.7,0);
			
			var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);

			var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0],c5[0],c6[0]]);
			var outUp1 = MAP(cs1)(domain);

			var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1],c5[1],c6[1]]);
			var outUp2 = MAP(cs2)(domain);

			var risultato = STRUCT([outUp1,outUp2]);

			return risultato;
		}


var corrimano_principale_laterale_sx = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-1.6 + x,-13.2-k,3-j]) ,cap ]);
	    k=k+1.2;
	    j=j+0.3;
	    DRAW(cap);
	  }
	}

	creaPomelliPrimaSx(4);


	var creaPomelliPianoSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-1.6+x,-18-k,1.95]) ,cap ]);
	    k=k+1.2;
	    j=j+0.3;
	    DRAW(cap);
	  }
	}

	creaPomelliPianoSx(3);



	var creaPomelliSecondaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-1.6+x,-21.5-k,1.65-j]) ,cap ]);
	    k=k+1.2;
	    j=j+0.3;
	    DRAW(cap);
	  }
	}

	creaPomelliSecondaSx(6);

	var domain = INTERVALS(1)(5);

	//base inferiore corrimano laterale sinistro

	//linea inferiore
	var controlpoints = [[0 + x,-12.5,4.7],[0.5 + x,-12.5,4.7],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS1)(domain);

	//linea inferiore
	var controlpoints = [[0 + x ,-16.1,3.65],[0.5+x,-16.1,3.65],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS2)(domain);

	//linea superiore
	var controlpoints = [[0 + x,-12.5,5],[0.5+x,-12.5,5],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS3)(domain);

	//linea superiore
	var controlpoints = [[0+x,-16.1,3.95],[0.5+x,-16.1,3.95],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve3 = MAP(curveMappingS4)(domain);

	//linea verticale bassa
	var controlpoints = [[0+x,-12.5,4.7],[0+x,-12.5,5],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS5)(domain);

	//linea verticale bassa
	var controlpoints = [[0+x,-16.1,3.65],[0+x,-16.1,3.95],[0,0,0],[0,0,0]];
	var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS6)(domain);

	//linea verticale alta
	var controlpoints = [[0.5+x,-12.5,4.7],[0.5+x,-12.5,5],[0,0,0],[0,0,0]];
	var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS7)(domain);

	//linea verticale alta
	var controlpoints = [[0.5+x,-16.1,3.65],[0.5+x,-16.1,3.95],[0,0,0],[0,0,0]];
	var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS8)(domain);


	//linea orizzontale bassa parte 2
	var controlpoints = [[0+x,-19.5,3.65],[0.5+x,-19.5,3.65],[0,0,0],[0,0,0]];
	var curveMappingS9 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS9)(domain);

	

	//linea orizzontale bassa parte 2
	var controlpoints = [[0 +x,-19.5,3.95],[0.5+x,-19.5,3.95],[0,0,0],[0,0,0]];
	var curveMappingS10 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS10)(domain);
	
	

	//linea verticale alta parte 2
	var controlpoints = [[0+x,-19.5,3.65],[0+x,-19.5,3.95],[0,0,0],[0,0,0]];
	var curveMappingS11 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS11)(domain);
	


	//linea verticale alta parte 2
	var controlpoints = [[0.5+x,-19.5,3.65],[0.5+x,-19.5,3.95],[0,0,0],[0,0,0]];
	var curveMappingS12 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS12)(domain);



	//parte finale della scalinata

	//linea orizzontale bassa parte 3
	var controlpoints = [[0+x,-27,1.7],[0.5+x,-27,1.7],[0,0,0],[0,0,0]];
	var curveMappingS13 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS13)(domain);

	
	
	//linea orizzontale bassa parte 3
	var controlpoints = [[0+x,-27,2],[0.5+x,-27,2],[0,0,0],[0,0,0]];
	var curveMappingS14 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS14)(domain);
	
	

	//linea laterale alta parte 3
	var controlpoints = [[0+x,-27,1.7],[0+x,-27,2],[0,0,0],[0,0,0]];
	var curveMappingS15 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS15)(domain);
	


	//linea verticale alta parte 3
	var controlpoints = [[0.5+x,-27,1.7],[0.5+x,-27,2],[0,0,0],[0,0,0]];
	var curveMappingS16 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS12)(domain);

	//riempimento
	
	var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);
	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS2,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	DRAW(outchiusuraBassa1);

	
	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS4,[0,0,0],[0,0,0]]);
	var outchiusuraAlta= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS5 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuralateralesx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateralesx);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS7 ,curveMappingS8,[0,0,0],[0,0,0]]);
	var outchiusuralateraledx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateraledx);


	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS9,[0,0,0],[0,0,0]]);
	var outchiusuraBassa2= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraBassa2);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS4 ,curveMappingS10,[0,0,0],[0,0,0]]);
	var outchiusuraAlta2= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta2);


	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS6 ,curveMappingS11,[0,0,0],[0,0,0]]);
	var outchiusuraLateralesx2= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraLateralesx2);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS8 ,curveMappingS12,[0,0,0],[0,0,0]]);
	var outchiusuraLateraledx2= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraLateraledx2);

	//riempimento finale


	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS9 ,curveMappingS13,[0,0,0],[0,0,0]]);
	var outchiusuraBassa3= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraBassa3);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS10 ,curveMappingS14,[0,0,0],[0,0,0]]);
	var outchiusuraAlta3= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta3);


	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS11 ,curveMappingS15,[0,0,0],[0,0,0]]);
	var outchiusuraLateralesx3= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraLateralesx3);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS12 ,curveMappingS16,[0,0,0],[0,0,0]]);
	var outchiusuraLateraledx3= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraLateraledx3);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS14 ,curveMappingS13,[0,0,0],[0,0,0]]);
	var outchiusurafinale= MAP(sur_chiusura2)(domain);

	DRAW(outchiusurafinale);

}

var corrimano_ingresso = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-1.6 + x,0-k,4.5-j]) ,cap ]);
	    k=k+1.2;
	    j=j+0.3;
	    DRAW(cap);
	 	 }
	}

	 creaPomelliPrimaSx(6);

	 var domain = INTERVALS(1)(5);

	//base inferiore corrimano laterale sinistro

	//linea inferiore
	var controlpoints = [[0 + x,1.5,6.2],[0.5 + x,1.5,6.2],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS1)(domain);
	
	//linea inferiore
	var controlpoints = [[0 + x,1.5,6.5],[0.5 + x,1.5,6.5],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS2)(domain);
	

	//linea superiore
	var controlpoints = [[0 + x,-5.5,4.7],[0.5+x,-5.5,4.7],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS3)(domain);
	
	//linea superiore
	var controlpoints = [[0 + x,-5.5,5],[0.5+x,-5.5,5],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS4)(domain);

	//linee verticali

	var controlpoints = [[0 + x,1.5,6.2],[0 + x,1.5,6.5],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS5)(domain);
	
	
	var controlpoints = [[0.5 + x,1.5,6.2],[0.5 + x,1.5,6.5],[0,0,0],[0,0,0]];
	var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS6)(domain);
	

	
	var controlpoints = [[0 + x,-5.5,4.7],[0+x,-5.5,5],[0,0,0],[0,0,0]];
	var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS7)(domain);
	
	
	var controlpoints = [[0.5 + x,-5.5,4.7],[0.5+x,-5.5,5],[0,0,0],[0,0,0]];
	var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS8)(domain);

	//riempimento

	var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS3,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	DRAW(outchiusuraBassa1);

	
	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS4,[0,0,0],[0,0,0]]);
	var outchiusuraAlta= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS5 ,curveMappingS7,[0,0,0],[0,0,0]]);
	var outchiusuralateralesx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateralesx);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS6 ,curveMappingS8,[0,0,0],[0,0,0]]);
	var outchiusuralateraledx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateraledx);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS2,[0,0,0],[0,0,0]]);
	var outchiusuraAnteriore= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAnteriore);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS4,[0,0,0],[0,0,0]]);
	var outchiusuraPosteriore= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraPosteriore);
	
}//fine corrimano ingresso


var corrimano_laterale = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-17.6 + x,0-k,3]) ,cap ]);
	    k=k+1.2;
	    DRAW(cap);
	 	 }
	}

	creaPomelliPrimaSx(7);

	var base = T([0,1,2])([-15.8+x,-6.5,4.7])(SIMPLEX_GRID([[0.5] ,[8],[0.3]]));
	DRAW(base);

}//fine corrimano laterale


var corrimano_secondario = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([(-17.6+j)+ x,-7.2,3]) ,cap ]);
	    j=j+1.2;
	    DRAW(cap);
	 	 }
	}

	creaPomelliPrimaSx(7);
	var base = T([0,1,2])([-16.8+x,-6.5,4.7])(SIMPLEX_GRID([[9] ,[0.5],[0.3]]));
	DRAW(base);
}//fine corrimano secondario

var corrimano_prescala = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([(-6.6+j) + x,-13.2,3]) ,cap ]);
	    j=j+1.2;
	    DRAW(cap);
	 	 }
	}

	creaPomelliPrimaSx(4);

}


var corrimano_scalini_laterali_sx = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-8.8-k,-11.2,3-j]) ,cap ]);
	    k=k+1.2;
	    j=j+0.4;
	    DRAW(cap);
	 	 }
	}

	 creaPomelliPrimaSx(8);

	  var domain = INTERVALS(1)(5);

	//base inferiore corrimano laterale sinistro

	//s1
	var controlpoints = [[-7+x,-10.5,4.7],[-7+x,-10,4.7],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS1)(domain);
	
	//s2
	var controlpoints = [[-7+x,-10.5,5],[-7+x,-10,5],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS2)(domain);
	
	
	
	//s3
	var controlpoints = [[-7+x,-10.5,4.7],[-7+x,-10.5,5],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS3)(domain);
	
	//s4
	var controlpoints = [[-7+x,-10,4.7],[-7+x,-10,5],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS4)(domain);

	

	//linee verticali

	var controlpoints = [[-16+x,-10.5,1.7],[-16+x,-10,1.7],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS5)(domain);
	
	
	var controlpoints = [[-16+x,-10.5,2],[-16+x,-10,2],[0,0,0],[0,0,0]];
	var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS6)(domain);
	

	
	var controlpoints = [[-16+x,-10.5,1.7],[-16+x,-10.5,2],[0,0,0],[0,0,0]];
	var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS7)(domain);
	
	
	var controlpoints = [[-16+x,-10,1.7],[-16+x,-10,2],[0,0,0],[0,0,0]];
	var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS8)(domain);

	//riempimento

	var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS5,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	DRAW(outchiusuraBassa1);

	
	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuraAlta= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS7,[0,0,0],[0,0,0]]);
	var outchiusuralateralesx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateralesx);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS4 ,curveMappingS8,[0,0,0],[0,0,0]]);
	var outchiusuralateraledx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateraledx);

	

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS5 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuraPosteriore= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraPosteriore);
	

}


var corrimano_scalini_laterali_dx = function(x){

	var creaPomelliPrimaSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([30.6+k,-11.2,3-j]) ,cap ]);
	    k=k+1.2;
	    j=j+0.4;
	    DRAW(cap);
	 	 }
	}

	 creaPomelliPrimaSx(8);

	var domain = INTERVALS(1)(5);

	//base inferiore corrimano laterale sinistro

	//s1
	var controlpoints = [[33+x,-10.5,4.7],[33+x,-10,4.7],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS1)(domain);
	
	//s2
	var controlpoints = [[33+x,-10.5,5],[33+x,-10,5],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS2)(domain);
	
	
	
	//s3
	var controlpoints = [[33+x,-10.5,4.7],[33+x,-10.5,5],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS3)(domain);
	
	//s4
	var controlpoints = [[33+x,-10,4.7],[33+x,-10,5],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS4)(domain);

	

	//linee verticali

	var controlpoints = [[42+x,-10.5,1.7],[42+x,-10,1.7],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS5)(domain);
	
	
	var controlpoints = [[42+x,-10.5,2],[42+x,-10,2],[0,0,0],[0,0,0]];
	var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS6)(domain);
	

	
	var controlpoints = [[42+x,-10.5,1.7],[42+x,-10.5,2],[0,0,0],[0,0,0]];
	var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS7)(domain);
	
	
	var controlpoints = [[42+x,-10,1.7],[42+x,-10,2],[0,0,0],[0,0,0]];
	var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS8)(domain);




	//riempimento

	var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS5,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	DRAW(outchiusuraBassa1);

	
	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuraAlta= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS7,[0,0,0],[0,0,0]]);
	var outchiusuralateralesx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateralesx);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS4 ,curveMappingS8,[0,0,0],[0,0,0]]);
	var outchiusuralateraledx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateraledx);

	

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS5 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuraPosteriore= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraPosteriore);


}


var corrimano_posteriore = function(x){

	var creaPomelliPosterioriSx = function(num){
	  var i = 0;
	  var j= 0;
	  var k=0;
	  
	  for (i=0; i<num; i++){
	  	var cap = capitello();
	    cap = STRUCT([ T([0,1,2])([-17.7+x,1.5+k,2.7-j]) ,cap ]);
	    k=k+1.2;
	    j=j+0.3;
	    DRAW(cap);
	  }

	}
	creaPomelliPosterioriSx(10);
	
	var domain = INTERVALS(1)(5);
	//base inferiore corrimano laterale sinistro

	//s1
	var controlpoints = [[-15.8+x,1.5,4.7],[-15.3+x,1.5,4.7],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS1)(domain);
	DRAW(curve0);
	
	
	//s2
	var controlpoints = [[-15.8+x,1.5,4.7],[-15.8+x,1.5,5],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS2)(domain);
	
	
	
	//s3
	var controlpoints = [[-15.8+x,1.5,5],[-15.3+x,1.5,5],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS3)(domain);
	
	//s4
	var controlpoints = [[-15.3+x,1.5,4.7],[-15.3+x,1.5,5],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS4)(domain);

	

	//linee verticali

	var controlpoints = [[-15.8+x,13.5,1.7],[-15.3+x,13.5,1.7],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS5)(domain);
	
	
	var controlpoints = [[-15.8+x,13.5,1.7],[-15.8+x,13.5,2],[0,0,0],[0,0,0]];
	var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS6)(domain);
	

	
	var controlpoints = [[-15.8+x,13.5,2],[-15.3+x,13.5,2],[0,0,0],[0,0,0]];
	var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS7)(domain);
	
	
	var controlpoints = [[-15.3+x,13.5,1.7],[-15.3+x,13.5,2],[0,0,0],[0,0,0]];
	var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS8)(domain);

	//riempimento

	var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS5,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	DRAW(outchiusuraBassa1);

	
	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuraAlta= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraAlta);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS7,[0,0,0],[0,0,0]]);
	var outchiusuralateralesx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateralesx);

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS4 ,curveMappingS8,[0,0,0],[0,0,0]]);
	var outchiusuralateraledx= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuralateraledx);

	

	var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMappingS5 ,curveMappingS7,[0,0,0],[0,0,0]]);
	var outchiusuraPosteriore= MAP(sur_chiusura2)(domain);

	DRAW(outchiusuraPosteriore);

	
}

corrimano_posteriore(0);
corrimano_posteriore(57.2);


capitello1 = T([0,1,2])([-6.7,-11.3,3])(capitello());
DRAW(capitello1);

capitello2 = T([0,1,2])([29,-11.3,3])(capitello());
DRAW(capitello2);


var part1 = T([0,1,2])([-5,-12.5,4.7])(SIMPLEX_GRID([[0.5],[2.5],[0.3]]));

var part2 = T([0,1,2])([-7,-10.5,4.7])(SIMPLEX_GRID([[2],[0.5],[0.3]]));


var chiusura_corrimano1 = STRUCT([part1,part2]);
DRAW(chiusura_corrimano1);

var chiusura_corrimano2 = T([0,1])([20.5,-5.5])(R([0,1])(PI/2)(chiusura_corrimano1));
DRAW(chiusura_corrimano2);

corrimano_scalini_laterali_sx(0);
corrimano_scalini_laterali_dx(0);


corrimano_prescala(0);
var base = T([0,1,2])([-5,-12.5,4.7])(SIMPLEX_GRID([[5.5] ,[0.5],[0.3]]));
DRAW(base);

corrimano_prescala(31.6);
var base = T([0,1,2])([-5+30.4,-12.5,4.7])(SIMPLEX_GRID([[5.5] ,[0.5],[0.3]]));
DRAW(base);

corrimano_secondario(1);
corrimano_secondario(49.2);



corrimano_laterale(0);
corrimano_laterale(57.2);


corrimano_principale_laterale_sx(0);
corrimano_principale_laterale_sx(25.4);

corrimano_ingresso(0);
corrimano_ingresso(25.2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//edifici esterni


var crea_edificio_esterno = function (){

//tetto

var domain = INTERVALS(1)(20);


//linea tetto S1
var controlpoints = [[12,0,5.5],[36,24,5.5],[0,36,0],[36,0,0]];
var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
var curve1 = MAP(curveMappingS1)(domain);
//DRAW(curve1);

//linea muro sotto al tetto0 z1
var controlpoints = [[12,0,4.5],[36,24,4.5],[0,36,0],[36,0,0]];
var curveMappingz1 = CUBIC_HERMITE(S0)(controlpoints);
var curve1 = MAP(curveMappingS1)(domain);

//linea muro sotto al tetto riempimento colonne s2
var controlpoints = [[0,0,4.5],[36,36,4.5],[0,56,0],[56,0,0]];
var curveMappingz3 = CUBIC_HERMITE(S0)(controlpoints);
var curve2 = MAP(curveMappingz3)(domain);

//linea tetto s2
var controlpoints = [[0,0,5.5],[36,36,5.5],[0,56,0],[56,0,0]];
var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
var curve2 = MAP(curveMappingS2)(domain);


//linea tetto s3
var controlpoints = [[6,2,7.5],[34,30,7.5],[0,48,0],[48,0,0]];
var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
var curve3 = MAP(curveMappingS3)(domain);


//linea s4
var controlpoints = [[0,0,5.5],[12,0,5.5],[0,0,0],[0,0,0]];
var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
var curve4 = MAP(curveMappingS4)(domain);


//linea s5
var controlpoints = [[6,2,7.5],[12,0,5.5],[0,0,0],[0,0,0]];
var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
var curve5 = MAP(curveMappingS5)(domain);

//linea s6
var controlpoints = [[36,24,5.5],[36,36,5.5],[0,0,0],[0,0,0]];
var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
var curve6 = MAP(curveMappingS6)(domain);

//linea s7
var controlpoints = [[34,30,7.5],[36,36,5.5],[0,0,0],[0,0,0]];
var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
var curve7 = MAP(curveMappingS7)(domain);

//linea s10 pavimento
var controlpoints = [[12,0,0],[36,24,0],[0,36,0],[36,0,0]];
var curveMappingS10 = CUBIC_HERMITE(S0)(controlpoints);
var curve10 = MAP(curveMappingS10)(domain);


//riempimenti s1

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS3,[0,0,0],[0,0,0]]);
var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS3,[0,0,0],[0,0,0]]);
var outchiusuraBassa2= MAP(sur_chiusura1)(domain);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS4 ,curveMappingS5,[0,0,0],[0,0,0]]);
var outchiusuraBassa3= MAP(sur_chiusura1)(domain);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS6 ,curveMappingS7,[0,0,0],[0,0,0]]);
var outchiusuraBassa4= MAP(sur_chiusura1)(domain);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingz1,[0,0,0],[0,0,0]]);
var outchiusuraBassa= MAP(sur_chiusura1)(domain);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingz1 ,curveMappingz3,[0,0,0],[0,0,0]]);
var outchiusuraBassa5= MAP(sur_chiusura1)(domain);



var tetto_edificio_esterno = COLOR([0.804,0.31,0.223])(STRUCT([outchiusuraBassa1,outchiusuraBassa2,outchiusuraBassa3,outchiusuraBassa4,outchiusuraBassa5,outchiusuraBassa]));

var domain = INTERVALS(1)(20);

//linea esterna edificio s2
var controlpoints = [[0,0,0],[36,36,0],[0,56,0],[56,0,0]];
var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
var curve2 = MAP(curveMappingS8)(domain);


//linea esterna edificio S1
var controlpoints = [[12,0,0],[36,24,0],[0,36,0],[36,0,0]];
var curveMappingS9 = CUBIC_HERMITE(S0)(controlpoints);
var curve1 = MAP(curveMappingS9)(domain);

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS8 ,curveMappingS2,[0,0,0],[0,0,0]]);
var outchiusuraBassaX= COLOR([1,1,0.860])(MAP(sur_chiusura1)(domain));

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS8 ,curveMappingS9,[0,0,0],[0,0,0]]);
var outchiusuraBassaY= COLOR([1,1,0.860])(MAP(sur_chiusura1)(domain));

//costruzione facciata edificio esterno 

var b1 = SIMPLEX_GRID([[4],[0.5],[5.5]]);
var b2 = SIMPLEX_GRID([[-8,4],[0.5],[5.5]]);

//linea s6
var domain = INTERVALS(1)(20);

var controlpoints = [[4,0,2.5],[8,0,2.5],[0,0,6],[0,0,-6]];
var curveMappingS8 = CUBIC_HERMITE(S0)(controlpoints);
var curve6 = MAP(curveMappingS8)(domain);

//linea s7
var controlpoints = [[4,0,5.5],[8,0,5.5],[0,0,0],[0,0,0]];
var curveMappingS9 = CUBIC_HERMITE(S0)(controlpoints);
var curve7 = MAP(curveMappingS9)(domain);

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS8 ,curveMappingS9,[0,0,0],[0,0,0]]);
var outchiusuraBassa6= COLOR([1,1,0.860])(MAP(sur_chiusura1)(domain));

var facciata_edificio_esterno = COLOR([1,1,0.860])(STRUCT([b1,b2,outchiusuraBassa6]));



facciata_edificio_esterno2 = T([0,1])([36,24])(R([0,1])(PI/2)(facciata_edificio_esterno));

//colonna

var get_parametric_curve = function (x,z,alpha){
	// x = valore della variazione della base di partenza
	// z = altezza della curva
	// alpha=1 se ingrandiamo | =0 se rimpiccioliamo 
	var domain = INTERVALS(1)(30);

	if (alpha == 1 ){
		//curva inferiore	
		var controlpoints_down = [[(1-x),1,z],[(3+x),1,z],[0,(-4-(4*x)),0],[0,(4+(4*x)),0]];
		var curveMapping_dw_1 = CUBIC_HERMITE(S0)(controlpoints_down);
		var curve_1 = MAP(curveMapping_dw_1)(domain);

		//curva superiore
		var controlpoints_up = [[(1-x),1,z],[(3+x),1,z],[0,(4+(4*x)),0],[0,(-4-(4*x)),0]];
		var curveMapping_up_1 = CUBIC_HERMITE(S0)(controlpoints_up);
		var curve_2 = MAP(curveMapping_up_1)(domain);

		var curve = [curveMapping_dw_1,curveMapping_up_1];
	}
	
	if (alpha == 0) {

		//curva inferiore	
		var controlpoints_down = [[(1+x),1,z],[(3-x),1,z],[0,(-4+(4*x)),0],[0,(4-(4*x)),0]];
		var curveMapping_dw_1 = CUBIC_HERMITE(S0)(controlpoints_down);
		var curve_1 = MAP(curveMapping_dw_1)(domain);

		//curva superiore
		var controlpoints_up = [[(1+x),1,z],[(3-x),1,z],[0,(4-(4*x)),0],[0,(-4+(4*x)),0]];
		var curveMapping_up_1 = CUBIC_HERMITE(S0)(controlpoints_up);
		var curve_2 = MAP(curveMapping_up_1)(domain);

		var curve = [curveMapping_dw_1,curveMapping_up_1];


		}
		return curve;
	}


	var colonna_edificio_esterno = function (){
			c1 = get_parametric_curve(0.6,0,0);
			cz1 = get_parametric_curve(0.7,0.1,0);
			c2 = get_parametric_curve(0.8,0.2,0);
			c3 = get_parametric_curve(0.8,4.3,0);
			cz2 = get_parametric_curve(0.7,4.4,0);
			c4 = get_parametric_curve(0.6,4.5,0);
			
			
			var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);

			var cs1 = BEZIER(S1)([c1[0],cz1[0],c2[0],c3[0],cz2[0],c4[0]]);
			var outUp1 = MAP(cs1)(domain);

			var cs2 = BEZIER(S1)([c1[1],cz1[1],c2[1],c3[1],cz2[1],c4[1]]);
			var outUp2 = MAP(cs2)(domain);

			var colonna = COLOR([1,1,0.860])(STRUCT([outUp1,outUp2]));

			return colonna;
		}

		var colonna1 = T([0,1])([9.8,2])(colonna_edificio_esterno());
		
		var colonna2 = T([0,1])([11,6.2])(colonna_edificio_esterno());

		var colonna3 = T([0,1])([12.7,10])(colonna_edificio_esterno());

		var colonna4 = T([0,1])([15,13.3])(colonna_edificio_esterno());

		var colonna5 = T([0,1])([17.9,16.5])(colonna_edificio_esterno());
		
		var colonna6 = T([0,1])([20.9,18.9])(colonna_edificio_esterno());

		var colonna7 = T([0,1])([24.2,20.9])(colonna_edificio_esterno());

		var colonna8 = T([0,1])([27.9,22.4])(colonna_edificio_esterno());

		var colonna9 = T([0,1])([31.5,23.3])(colonna_edificio_esterno());

		var colonne = STRUCT([colonna1,colonna2,colonna3,colonna4,colonna5,colonna6,colonna7,colonna8,colonna9]);

		var edificio = STRUCT([tetto_edificio_esterno,outchiusuraBassa5,outchiusuraBassa6,facciata_edificio_esterno,facciata_edificio_esterno2,colonne,outchiusuraBassaY,outchiusuraBassaX]);

		return edificio
		
}


var edificio_esterno_1 = T([0,1])([-52,-38])(crea_edificio_esterno());

DRAW(edificio_esterno_1);




var edificio_esterno_2 = T([0,1])([42,-2.8])(R([0,1])(3/2 * PI)(crea_edificio_esterno()));

DRAW(edificio_esterno_2);

var cerchietto_scalinata = function(){

	var c1 = get_parametric_curve(0,0,0);

	var domain = PROD1x1([INTERVALS(1)(5),INTERVALS(1)(5)]);
	var cs1 = BEZIER(S1)([c1[0],c1[1]]);
	var outUp1 = COLOR([1,1,1])(MAP(cs1)(domain));

	return outUp1
}
cerchietto_scalinata_centrale = T([0,1,2])([11.6,-18.8,2])(COLOR([0.804,0.31,0.223])(cerchietto_scalinata()));


DRAW(cerchietto_scalinata_centrale);

///////////////////////////////////GIARDINETTO///////////////////////////////////////////////////////////////////////
var giardino = T([0,1,2])([-60,-50,-0.12])(COLOR([0,0.545,0])(SIMPLEX_GRID([[150],[100],[0.1]])));
DRAW(giardino);



//////////////////CASA////////////////////////////////////////////////////////////////////////////////////////////////


var costruisci_finestrella = function(){
		var	asta_verticale_sx = SIMPLEX_GRID([[0.2],[0.2],[1]]);
		var	asta_verticale_dx = T([0])([2.2])(SIMPLEX_GRID([[0.2],[0.2],[1]]));
		var	asta_orizzontale_sup = T([2])([1])(SIMPLEX_GRID([[2.4],[0.2],[0.2]]));
		var	asta_orizzontale_inf = SIMPLEX_GRID([[2.4],[0.2],[0.2]]);
		var cornicione = COLOR([0.42,0.25,0.15])(STRUCT([asta_verticale_sx,asta_verticale_dx,asta_orizzontale_inf,asta_orizzontale_sup]));
		

		var linea_marrone = COLOR([0.42,0.25,0.15])(SIMPLEX_GRID([[2],[0.2],[0.2]]));
		var linea_nera = COLOR([0,0,0])(SIMPLEX_GRID([[2],[0.2],[0.1]]));
		
		var interno_persiana = STRUCT([	T([0,2])([0.2,0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2])
									]);


		var finestrella = STRUCT([cornicione,interno_persiana]);
		
		return finestrella; 
	}


var facciata_casa = function(){

	var crea_colonna = function(){
	var base_inferiore = SIMPLEX_GRID([[1],[1],[0.2]]);
	var base_superiore = T([2])([14.1])(SIMPLEX_GRID([[1],[1],[0.2]]));

			c1 = get_parametric_curve(0.5,0,0);
			c2 = get_parametric_curve(0.4,0.05,0);
			c3 = get_parametric_curve(0.7,0.1,0);
			c4 = get_parametric_curve(0.4,0.15,0);
			c5 = get_parametric_curve(0.5,0.2,0);
			c6 = get_parametric_curve(0.4,0.25,0);
			c7 = get_parametric_curve(0.7,0.3,0);
			c8 = get_parametric_curve(0.4,0.35,0);
			c9 = get_parametric_curve(0.6,0.4,0);
			c10 = get_parametric_curve(0.7,0.45,0);
			c11= get_parametric_curve(0.4,0.5,0);
			c12 = get_parametric_curve(0.4,0.6,0);
			c13 = get_parametric_curve(0.4,8.6,0);
			c14 = get_parametric_curve(0.4,13.6,0);
			c15 = get_parametric_curve(0.4,13.65,0);
			c16 = get_parametric_curve(0.5,13.7,0);
			c17 = get_parametric_curve(0.6,13.75,0);
			c18 = get_parametric_curve(0.7,13.8,0);
			c19 = get_parametric_curve(0.4,13.85,0);
			c20 = get_parametric_curve(0.5,13.9,0);
			c21 = get_parametric_curve(0.6,13.95,0);
			c22 = get_parametric_curve(0.7,14,0);
			c23= get_parametric_curve(0.5,14.05,0);
			c24 = get_parametric_curve(0.4,14.1,0);
			c25 = get_parametric_curve(0.4,14.1,0);
			
			
			var domain = PROD1x1([INTERVALS(1)(30),INTERVALS(1)(30)]);

			var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0],c5[0],c6[0],c7[0],c8[0],c9[0],c10[0],c11[0],c12[0],c13[0],c14[0],c15[0],c16[0],c17[0],c18[0],c19[0],c20[0],c21[0],c22[0],c23[0],c24[0],c25[0]]);
			var outUp1 = MAP(cs1)(domain);

			var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1],c5[1],c6[1],c7[1],c8[1],c9[1],c10[1],c11[1],c12[1],c13[1],c14[1],c15[1],c16[1],c17[1],c18[1],c19[1],c20[1],c21[1],c22[1],c23[1],c24[1],c25[1]]);
			var outUp2 = MAP(cs2)(domain);

			var risultato = STRUCT([outUp1,outUp2]);

			var crea_anellino = function(){
				c1 = get_parametric_curve(0.7,0,0);
				c2 = get_parametric_curve(0.8,0.1,0);
				c3 = get_parametric_curve(0.9,0.3,0);
				c4 = get_parametric_curve(0.95,0.45,0);
				c5 = get_parametric_curve(0.99,0.5,0);
				c6 = get_parametric_curve(0.9,0.6,0);
				c7 = get_parametric_curve(0.8,0.8,0);
				c8 = get_parametric_curve(0.7,1,0);

			var domain = PROD1x1([INTERVALS(1)(30),INTERVALS(1)(30)]);

			var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0],c5[0],c6[0],c7[0],c8[0]]);
			var outUp1 = MAP(cs1)(domain);

			var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1],c5[1],c6[1],c7[1],c8[1]]);
			var outUp2 = MAP(cs2)(domain);

			var cs3 = BEZIER(S1)([c1[0],c1[1]]);
			var outUp3 = MAP(cs3)(domain);

			var cs4 = BEZIER(S1)([c8[0],c8[1]]);
			var outUp4 = MAP(cs4)(domain);



			var risultato = R([1,2])(PI/2)(STRUCT([outUp1,outUp2,outUp3,outUp4]));
			return risultato;

			}
			var anellino1 = T([0,1,2])([0.5,1.5,12.8])(crea_anellino());
			var anellino2 = T([0,1,2])([-0.5,1.5,12.8])(crea_anellino());

			

	var colonna = COLOR([1,1,0.860])(STRUCT([anellino1,anellino2,risultato,T([0,1,2])([1.5,0.5,-0.2]),base_inferiore,base_superiore]));
	return colonna ;
}



	var montante_ingresso = function(){
		var montante_sinistro = SIMPLEX_GRID([[0.3],[0.3],[7.5]]);
		var montante_destro = T([0])([4.3])(montante_sinistro);
		var montante_sup = SIMPLEX_GRID([[4.6],[0.3],[-7.5,0.3]]);
		
		
		var domain = INTERVALS(1)(20);

		//S0
		var controlpoints = [[0,0,0],[4.6,0,0],[0,0,0],[0,0,0]];
		var curveMappingS0 = CUBIC_HERMITE(S0)(controlpoints);
		var curve0 = MAP(curveMappingS0)(domain);
		

		//S1
		var controlpoints = [[-0.5,0,1],[0,0,0],[0,0,0],[0,0,0]];
		var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
		var curve1 = MAP(curveMappingS1)(domain);

		//S2
		var controlpoints = [[4.6,0,0],[5.1,0,1],[0,0,0],[0,0,0]];
		var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
		var curve2 = MAP(curveMappingS2)(domain);

		//S3
		var controlpoints = [[-0.5,0,1],[5.1,0,1],[0,0,0],[0,0,0]];
		var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
		var curve3 = MAP(curveMappingS3)(domain);

		//S4
		var controlpoints = [[0,0.5,0],[4.6,0.5,0],[0,0,0],[0,0,0]];
		var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
		var curve4 = MAP(curveMappingS4)(domain);
		

		//S5
		var controlpoints = [[-0.5,0.5,1],[0,0.5,0],[0,0,0],[0,0,0]];
		var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
		var curve5 = MAP(curveMappingS5)(domain);

		//S6
		var controlpoints = [[4.6,0.5,0],[5.1,0.5,1],[0,0,0],[0,0,0]];
		var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
		var curve6 = MAP(curveMappingS6)(domain);

		//S7
		var controlpoints = [[-0.5,0.5,1],[5.1,0.5,1],[0,0,0],[0,0,0]];
		var curveMappingS7 = CUBIC_HERMITE(S0)(controlpoints);
		var curve7 = MAP(curveMappingS7)(domain);

		//riempimenti

		var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
		
		var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS0 ,curveMappingS4,[0,0,0],[0,0,0]]);
		var outchiusuraBassa0= MAP(sur_chiusura1)(domain);

		var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS5,[0,0,0],[0,0,0]]);
		var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

		var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS6,[0,0,0],[0,0,0]]);
		var outchiusuraBassa2= MAP(sur_chiusura1)(domain);

		var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS7,[0,0,0],[0,0,0]]);
		var outchiusuraBassa3= MAP(sur_chiusura1)(domain);

		var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS0,[0,0,0],[0,0,0]]);
		var outchiusuraBassa4= MAP(sur_chiusura1)(domain);

		var capitello_montante = STRUCT([outchiusuraBassa0,outchiusuraBassa1,outchiusuraBassa2,outchiusuraBassa3,outchiusuraBassa4]);
		capitello_montante = T([0,1,2])([0,-0.2,7.5])(capitello_montante);
		
		var montante_ingresso = COLOR([1,1,0.82])(STRUCT([montante_sinistro,montante_destro,montante_sup,capitello_montante]));
		return montante_ingresso;

	}

	

	var finestra_vetro = function(){
		var bastoncino_verticale = SIMPLEX_GRID([[0.2],[0.2],[5]]);
		var bastoncino_orizzontale = T([0,2])([-0.9,2.4])(SIMPLEX_GRID([[2],[0.2],[0.2]]));
		
		var croce_finestra = COLOR([0.42,0.25,0.15])(STRUCT([bastoncino_verticale,bastoncino_orizzontale]));
		var vetro = COLOR([0.22,0.7,0.87,0.8])(T([0])([-0.9])(SIMPLEX_GRID([[2],[0.2],[5]])));
		
		vetro = BOUNDARY(vetro);
		var finestra_vetro = STRUCT([vetro,croce_finestra]);


		return finestra_vetro; 
	}

	var semipersiana = function(){
		var asta_verticale_dx = SIMPLEX_GRID([[0.2],[0.2],[5]]);
		var asta_verticale_sx = T([0])([1.2])(SIMPLEX_GRID([[0.2],[0.2],[5]]));
		var asta_orizzontale_inf = T([2])([-0.2])(SIMPLEX_GRID([[1.4],[0.2],[0.2]]));
		var asta_orizzontale_sup = T([2])([5])(SIMPLEX_GRID([[1.4],[0.2],[0.2]]));

		var cornicione = COLOR([0.42,0.25,0.15])(STRUCT([asta_orizzontale_sup,asta_orizzontale_inf,asta_verticale_sx,asta_verticale_dx]));

		var linea_marrone = COLOR([0.42,0.25,0.15])(SIMPLEX_GRID([[1],[0.2],[0.2]]));
		var linea_nera = COLOR([0,0,0])(SIMPLEX_GRID([[1],[0.2],[0.1]]));

		var interno_persiana = STRUCT ([ T([0])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2])
										
										 ]);

		var semipersiana = STRUCT([cornicione,interno_persiana]);
		return semipersiana;

	}//fine semipersiana

	

	var piece1 = COLOR([1,1,0.860])(SIMPLEX_GRID([[5,-2,5],[0.5],[16]]));
	var piece2 = COLOR([1,1,0.860])(SIMPLEX_GRID([[-5,2],[0.5],[0.5,-0.5,2,-5,6.5,-1,0.5]]));
	
	var finestra_vetro = T([0,1,2])([5.9,0,3])(finestra_vetro());
	var finestrella_sup = T([0,1,2])([4.8,-0.2,14.5])(costruisci_finestrella());
	var finestrella_inf = COLOR([0,0,0])(T([0,1,2])([5,0,0.5])(SIMPLEX_GRID([[2],[0.2],[0.5]])));
	var semipersiana_sx = T([0,1,2])([3.6,-0.2,3])(semipersiana());
	var semipersiana_dx = T([0,1,2])([7,-0.2,3])(semipersiana()); 
	
	var striscia_facciata_sinistra = STRUCT([piece1,piece2,finestra_vetro,finestrella_sup,finestrella_inf,semipersiana_sx,semipersiana_dx]);
	

	var striscia_facciata_destra = STRUCT([T([0])([38]),striscia_facciata_sinistra]);
	var rientranza_sinistra =	T([0,1,2])([11.5,0,1.5])(COLOR([1,1,0.860])(SIMPLEX_GRID([[0.5],[6],[14.5]])));
	var rientranza_destra =	T([0,1,2])([38,0,1.5])(COLOR([1,1,0.860])(SIMPLEX_GRID([[0.5],[6],[14.5]])));

	//ingresso facciata casa
	var piano_centrale = T([0,1,2])([12,0,1.5])(COLOR([1,1,0.860])(SIMPLEX_GRID([[26],[6],[0.1]])));

	var muro1 = T([0,1,2])([12,6,1.5])(COLOR([1,0.827,0.607])(SIMPLEX_GRID([[1,-2,8,-4,8,-2,1],[0.5],[14.5]])));
	var muro2 = T([0,1,2])([12,6,8.5])(COLOR([1,0.827,0.607])(SIMPLEX_GRID([[-1,2,-8,4,-8,2,-1],[0.5],[7.5]])));
	var muro3 = T([0,1,2])([12,6,1.5])(COLOR([1,0.827,0.607])(SIMPLEX_GRID([[-1,2,-20,2,-1],[0.5],[2]])));
	var montante_ingresso = T([0,1,2])([22.7,5.7,1])(montante_ingresso());
	var nero_finestra1 = COLOR([0,0,0])(T([0,1,2])([13,6,3.5])(SIMPLEX_GRID([[2],[0.2],[5]])));
	var nero_finestra2 = COLOR([0,0,0])(T([0,1,2])([35,6,3.5])(SIMPLEX_GRID([[2],[0.2],[5]])));
	var nero_porta = COLOR([0,0,0])(T([0,1,2])([23,6,1.5])(SIMPLEX_GRID([[4],[0.2],[7]])));
	var base_casa = T([0,1,2])([0,0,-3])(SIMPLEX_GRID([[50],[36],[0.2]]));

	var colonna1 = T([0,1,2])([-1.2,1,4.8])(crea_colonna());
	var colonna2 = T([0,1,2])([23.3,1,4.8])(crea_colonna());
	var colonna3 = T([0,1,2])([9.2,1,4.8])(crea_colonna());
	var colonna4 = T([0,1,2])([13.2,1,4.8])(crea_colonna());
	var colonna5 = T([0,1,2])([4.2,1,4.8])(crea_colonna());
	var colonna6 = T([0,1,2])([18.2,1,4.8])(crea_colonna());
	
	DRAW(colonna1);
	DRAW(colonna2);
	DRAW(colonna3);
	DRAW(colonna4);
	DRAW(colonna5);
	DRAW(colonna6);

	 
	var ingresso_casa = STRUCT([muro1,muro2,muro3,montante_ingresso,nero_finestra1,nero_finestra2,nero_porta,base_casa]);

	  
	var facciata_casa = STRUCT([T([0,1,2])([-12,1.5,3]),striscia_facciata_sinistra,striscia_facciata_destra,rientranza_sinistra,rientranza_destra,piano_centrale,ingresso_casa]);

	return facciata_casa;
}


var muro_laterale = function(){


		var costruisci_persiana = function(){
		var asta_verticale_dx = SIMPLEX_GRID([[0.2],[0.2],[8]]);
		var asta_verticale_sx = T([0])([2.2])(SIMPLEX_GRID([[0.2],[0.2],[8]]));
		var asta_orizzontale_inf = T([2])([-0.2])(SIMPLEX_GRID([[2.4],[0.2],[0.2]]));
		var asta_orizzontale_sup = T([2])([8])(SIMPLEX_GRID([[2.4],[0.2],[0.2]]));
		
		
		var cornicione = COLOR([0.42,0.25,0.15])(STRUCT([asta_verticale_sx,asta_verticale_dx,asta_orizzontale_sup,asta_orizzontale_inf]));

		var linea_marrone = COLOR([0.42,0.25,0.15])(SIMPLEX_GRID([[2],[0.2],[0.2]]));
		var linea_nera = COLOR([0,0,0])(SIMPLEX_GRID([[2],[0.2],[0.1]]));
		
		var interno_persiana = STRUCT([	T([0])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										]);


		var persiana = STRUCT([cornicione,interno_persiana]);
		return persiana;
	}

	
	//muro laterale sx
	

	var striscia1 = COLOR([1,1,0.860])(SIMPLEX_GRID([[5,-2,5],[0.5],[19]]));
	var striscia2 = COLOR([1,1,0.860])(SIMPLEX_GRID([[-5,2,-5],[0.5],[3,-8,6,-1,1]]));
	
	var persiana_grande = T([0,1,2])([4.8,-0.2,3])(costruisci_persiana());
	var finestrella =  T([0,1,2])([4.8,-0.2,17])(costruisci_finestrella());


	var unterzo1 = STRUCT([striscia1,striscia2,persiana_grande,finestrella]);
	var unterzo2 = T([0])([12])(unterzo1);
	var unterzo3 = T([0])([12])(unterzo2);

	var separatore_verticale = T([0,1])([11.8,-0.3])(COLOR([1,1,0.860])(SIMPLEX_GRID([[0.4],[0.8],[19]])));
	var separatore_orizzontale = T([0,1,2])([0,-0.6,5.5])(COLOR([0.545,0.270,0.074])(SIMPLEX_GRID([[36],[1.1],[0.4]])));

	var separatori = STRUCT([separatore_orizzontale,separatore_verticale,T([0])([12]),separatore_verticale]);

	var muro_casa_laterale = STRUCT([unterzo1,unterzo2,unterzo3,separatori]);

	return muro_casa_laterale

}



var muro_posteriore = function(){

	var costruisci_persiana = function(){
		var asta_verticale_dx = SIMPLEX_GRID([[0.2],[0.2],[10]]);
		var asta_verticale_sx = T([0])([2.2])(SIMPLEX_GRID([[0.2],[0.2],[10]]));
		var asta_orizzontale_inf = T([2])([-0.2])(SIMPLEX_GRID([[2.4],[0.2],[0.2]]));
		var asta_orizzontale_sup = T([2])([10])(SIMPLEX_GRID([[2.4],[0.2],[0.2]]));
		
		
		var cornicione = COLOR([0.42,0.25,0.15])(STRUCT([asta_verticale_sx,asta_verticale_dx,asta_orizzontale_sup,asta_orizzontale_inf]));

		var linea_marrone = COLOR([0.42,0.25,0.15])(SIMPLEX_GRID([[2],[0.2],[0.2]]));
		var linea_nera = COLOR([0,0,0])(SIMPLEX_GRID([[2],[0.2],[0.1]]));
		
		var interno_persiana = STRUCT([	T([0])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),linea_marrone,T([2])([0.2]),
										linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2]),linea_nera,T([2])([0.2]),
										linea_marrone,T([2])([0.2])
										
										]);


		var persiana = STRUCT([cornicione,interno_persiana]);
		return persiana;
	}
	

	var striscia1 = COLOR([1,1,0.860])(SIMPLEX_GRID([[5.25,-2,5.25],[0.5],[19]]));
	var striscia2 = COLOR([1,1,0.860])(SIMPLEX_GRID([[-5.25,2,-5.25],[0.5],[3,-10,4,-1,1]]));
	var persiana = T([0,1,2])([5.05,-0.2,3])(costruisci_persiana());
	var finestrella = T([0,1,2])([5.05,-0.2,17])(costruisci_finestrella());

	var unquarto1 = STRUCT([striscia1,striscia2,persiana,finestrella]);
	var unquarto2 = T([0])([12.5])(unquarto1);
	var unquarto3 = T([0])([12.5])(unquarto2);
	var unquarto4 = T([0])([12.5])(unquarto3);



	var separatore_verticale = T([0,1])([12.3,-0.3])(COLOR([1,1,0.860])(SIMPLEX_GRID([[0.4],[0.8],[19]])));
	var separatore_orizzontale = T([0,1,2])([0,-0.6,5.5])(COLOR([0.545,0.270,0.074])(SIMPLEX_GRID([[50],[1.1],[0.4]])));

	var separatori = STRUCT([separatore_orizzontale,separatore_verticale,T([0])([12.5]),separatore_verticale,T([0])([12.5]),separatore_verticale]);

	var muro_casa_posteriore = STRUCT([unquarto1,unquarto2,unquarto3,unquarto4,separatori]);

	return muro_casa_posteriore
}



var costruisci_tetto = function	(){
	//T([0,1,2])([-12,1.5,19]) traslazione del tetto
	
	var base_tetto = T([0,1,2])([0,0,19])(SIMPLEX_GRID([[50],[36],[0.2]]));

	var domain = INTERVALS(1)(20);

	//S0
	var controlpoints = [[12,18,28],[38,18,28],[0,0,0],[0,0,0]];
	var curveMappingS0 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS0)(domain);

	//S1
	var controlpoints = [[0,0,19],[0,36,19],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS1)(domain);

	//S2
	var controlpoints = [[0,36,19],[50,36,19],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS2)(domain);

	//S3
	var controlpoints = [[50,0,19],[50,36,19],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve3 = MAP(curveMappingS3)(domain);

	//S4
	var controlpoints = [[0,0,19],[50,0,19],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve4 = MAP(curveMappingS4)(domain);

	//S5
	var controlpoints = [[0,0,19],[12,18,28],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve5 = MAP(curveMappingS5)(domain);

	//S6
	var controlpoints = [[38,18,28],[50,36,19],[0,0,0],[0,0,0]];
	var curveMappingS6 = CUBIC_HERMITE(S0)(controlpoints);
	var curve6 = MAP(curveMappingS6)(domain);

	//riempimenti
	
	var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
	
	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS0 ,curveMappingS4,[0,0,0],[0,0,0]]);
	var outchiusuraBassa0= MAP(sur_chiusura1)(domain);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS0 ,curveMappingS2,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS5 ,curveMappingS1,[0,0,0],[0,0,0]]);
	var outchiusuraBassa2= MAP(sur_chiusura1)(domain);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS3 ,curveMappingS6,[0,0,0],[0,0,0]]);
	var outchiusuraBassa3= MAP(sur_chiusura1)(domain);

	var tetto = COLOR([0.804,0.31,0.223])(STRUCT([outchiusuraBassa0,outchiusuraBassa1,outchiusuraBassa2,outchiusuraBassa3,base_tetto]));

	return tetto;



}//fine function tetto



var triangolone_tetto = function(){
	var domain = INTERVALS(1)(20);

	//S0
	var controlpoints = [[0,0,0],[26,0,0],[0,0,0],[0,0,0]];
	var curveMappingS0 = CUBIC_HERMITE(S0)(controlpoints);
	var curve0 = MAP(curveMappingS0)(domain);
	

	//S1
	var controlpoints = [[0,0,0],[13,0,9],[0,0,0],[0,0,0]];
	var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
	var curve1 = MAP(curveMappingS1)(domain);

	//S2
	var controlpoints = [[26,0,0],[13,0,9],[0,0,0],[0,0,0]];
	var curveMappingS2 = CUBIC_HERMITE(S0)(controlpoints);
	var curve2 = MAP(curveMappingS2)(domain);

	//S3
	var controlpoints = [[0,18,0],[26,18,0],[0,0,0],[0,0,0]];
	var curveMappingS3 = CUBIC_HERMITE(S0)(controlpoints);
	var curve3 = MAP(curveMappingS3)(domain);

	//S4
	var controlpoints = [[0,18,0],[13,18,9],[0,0,0],[0,0,0]];
	var curveMappingS4 = CUBIC_HERMITE(S0)(controlpoints);
	var curve4 = MAP(curveMappingS4)(domain);

	//S5
	var controlpoints = [[26,18,0],[13,18,9],[0,0,0],[0,0,0]];
	var curveMappingS5 = CUBIC_HERMITE(S0)(controlpoints);
	var curve5 = MAP(curveMappingS5)(domain);

	//riempimenti

	var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
	
	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS0 ,curveMappingS3,[0,0,0],[0,0,0]]);
	var outchiusuraBassa0= MAP(sur_chiusura1)(domain);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS4,[0,0,0],[0,0,0]]);
	var outchiusuraBassa1= MAP(sur_chiusura1)(domain);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS2 ,curveMappingS5,[0,0,0],[0,0,0]]);
	var outchiusuraBassa2= MAP(sur_chiusura1)(domain);

	var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS1 ,curveMappingS0,[0,0,0],[0,0,0]]);
	var outchiusuraBassa3= MAP(sur_chiusura1)(domain);

	var quadratino = SIMPLEX_GRID([[0.5],[0.5],[-0.5,0.5]]);
		
	var pezzo1 = SIMPLEX_GRID([[26],[1],[0.5]]);
	

	var piece1 = STRUCT([T([1])([-1]),pezzo1,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino
						]);

	var pezzo2 = SIMPLEX_GRID([[16.2],[1],[0.5]]);


	var piece2 = STRUCT([T([1])([-1]),pezzo2,T([2])([-1]),
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino
						]);
	
	

	var piece2 = T([0,1,2])([0,0,0])(R([0,2])(- (PI/180 * 34))(piece2));

	var pezzo3 = SIMPLEX_GRID([[15.62],[1],[0.5]]);
	var piece3 = STRUCT([T([1])([-1]),pezzo3,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino,
						T([0])([1.5]),quadratino
						]);

	var piece3 = T([0,1,2])([26,0,0.5])(R([0,2])(- (PI/180 * 145))(piece3));

	var triangolone_tetto = COLOR([0.804,0.31,0.223])(STRUCT([outchiusuraBassa0,outchiusuraBassa1,outchiusuraBassa2]));
	var triangolone_frontale = COLOR([1,1,0.860])(STRUCT([piece1,piece2,piece3,outchiusuraBassa3]));

	var triangolone = STRUCT([triangolone_tetto,triangolone_frontale]);

	return triangolone;
	
}

var facciata_casa = facciata_casa();

var muro_casa_laterale_sinistro = T([0,1])([-12,37.5])(R([0,1])(3/2 * PI)(muro_laterale()));

var muro_casa_laterale_destro = T([0,1])([38,1.5])(R([0,1])(PI/2)(muro_laterale()));

var muro_posteriore = T([0,1])([38,37.5])(R([0,1])(PI)(muro_posteriore()));

var tetto = T([0,1])([-12,1.5])(costruisci_tetto());

var triangolone = T([0,1,2])([0,1.5,19])(triangolone_tetto());

var casa = STRUCT([facciata_casa,muro_casa_laterale_sinistro,muro_casa_laterale_destro,muro_posteriore,tetto,triangolone]);

DRAW(casa);



















