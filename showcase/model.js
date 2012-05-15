
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

//Base del RE

var c1 =  get_parametric_curve(0.5,0,1);
var c2 = 	get_parametric_curve(0.5,0.2,1);
var c3 = get_parametric_curve(0.8,0.6,1);
var c4 = get_parametric_curve(2,0.8,1);
var c5 = get_parametric_curve(2,0.9,1);

var c6 = get_parametric_curve(0.5,1,1);
var c7 = get_parametric_curve(0.3,1.1,1);
var c8 = get_parametric_curve(0,1.2,1);
var c9 = get_parametric_curve(0.2,1.3,1);
var c10 = get_parametric_curve(0.8,1.4,1);
var c11 = get_parametric_curve(2,1.5,1);

var c12 = get_parametric_curve(0.5,1.8,1);
var c13 = get_parametric_curve(0,2,1);
var c14 = get_parametric_curve(0.1,2.4,0);
var c15 = get_parametric_curve(0.2,2.8,0);
var c16 = get_parametric_curve(0.3,3,0);


var domain = PROD1x1([INTERVALS(1)(100),INTERVALS(1)(100)]);

var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0],c5[0],c6[0],c7[0],c8[0],c9[0],c10[0],c11[0],c12[0],c13[0],c14[0],c15[0],c16[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp);

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1],c5[1],c6[1],c7[1],c8[1],c9[1],c10[1],c11[1],c12[1],c13[1],c14[1],c15[1],c16[1]]);
var outUp =  COLOR([1,1,0.82])(MAP(cs2)(domain));
DRAW(outUp);

//tappo inferiore

var t1 = BEZIER(S1)([c1[0],c1[1]]);
var tappo_inf = COLOR([0,0,0])(MAP(t1)(domain));
DRAW(tappo_inf);

//tappo superiore

var t2 = BEZIER(S1)([c16[0],c16[1]]);
var tappo_sup = COLOR([0,0,0])(MAP(t2)(domain));
DRAW(tappo_sup);

//secondo pezzo del corpo

//primo andulatorio corpo
var c1 = get_parametric_curve(0.5,3,0);
var c2 = get_parametric_curve(0.5,3.2,0);

var cs1 = BEZIER(S1)([c1[0],c2[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1]]);
var outUp = COLOR([1,1,0.82])(MAP(cs2)(domain));
DRAW(outUp)


//terzo corpo centrale
var c1 = get_parametric_curve(0.4,3.2,0);
var c2 = get_parametric_curve(0.5,3.6,0);
var c3 = get_parametric_curve(0.55,4,0);
var c4 = get_parametric_curve(0.55,4.5,0);


var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1]]);
var outUp = COLOR([1,1,0.82])(MAP(cs2)(domain));
DRAW(outUp)

//copertura
var t2 = BEZIER(S1)([c1[0],c1[1]]);
var copertura = COLOR([0,0,0])(MAP(t2)(domain));
DRAW(copertura);


//prima ciambella dal basso
var c1 = get_parametric_curve(0.55,4.5,0);
var c2 = get_parametric_curve(0.2,4.65,1);
var c3 = get_parametric_curve(0.25,4.7,0);
var c4 = get_parametric_curve(0.55,4.75,0);

var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0]]);
var outUp = COLOR([0,0,0])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1]]);
var outUp = COLOR([0,0,0])(MAP(cs2)(domain));
DRAW(outUp)

//trattino piatto

var c1 = get_parametric_curve(0.55,4.75,0);
var c2 = get_parametric_curve(0.55,4.9,0);

var cs1 = BEZIER(S1)([c1[0],c2[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1]]);
var outUp = COLOR([1,1,0.82])(MAP(cs2)(domain));
DRAW(outUp)


//seconda ciambella dal basso
var c1 = get_parametric_curve(0.55,4.9,0);
var c2 = get_parametric_curve(0.1,4.95,0);
var c3 = get_parametric_curve(0.35,5.1,0);
var c4 = get_parametric_curve(0.55,5.15,0);

var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0]]);
var outUp = COLOR([0,0,0])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1]]);
var outUp = COLOR([0,0,0])(MAP(cs2)(domain));
DRAW(outUp)

//trattino piatto poco piu lungo

var c1 = get_parametric_curve(0.55,5.15,0);
var c2 = get_parametric_curve(0.55,5.55,0);

var cs1 = BEZIER(S1)([c1[0],c2[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1]]);
var outUp = COLOR([1,1,0.82])(MAP(cs2)(domain));
DRAW(outUp)


//terza e ultima ciambella
var c1 = get_parametric_curve(0.55,5.55,0);
var c2 = get_parametric_curve(0.4,5.6,0);
var c3 = get_parametric_curve(0.45,5.65,0);
var c4 = get_parametric_curve(0.55,5.7,0);

var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0],c4[0]]);
var outUp = COLOR([0,0,0])(MAP(cs1)(domain));
DRAW(outUp)

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1],c4[1]]);
var outUp = COLOR([0,0,0])(MAP(cs2)(domain));
DRAW(outUp);


var c1 = get_parametric_curve(0.55,5.7,0);
var c2 = get_parametric_curve(0.3,7,1);

var cs1 = BEZIER(S1)([c1[0],c2[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp);

var cs2 = BEZIER(S1)([c1[1],c2[1]]);
var outUp = COLOR([1,1,0.82])(MAP(cs2)(domain));
DRAW(outUp);

//tappo superiore

var cs1 = BEZIER(S1)([c2[0],c2[1]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp);

//piccolo bordo


var c1 = get_parametric_curve(0.55,7,0);
var c2 = get_parametric_curve(0.55,7,0);
//var c3 = get_parametric_curve(0.1,6.5,0);

var cs1 = BEZIER(S1)([c1[0],c2[0]]);
var outUp = COLOR([1,1,0.82])(MAP(cs1)(domain));
DRAW(outUp);

var cs2 = BEZIER(S1)([c1[1],c2[1]]);
var outUp =COLOR([1,1,0.82])( MAP(cs2)(domain));
DRAW(outUp);

//sotto_la_testa_del_re

//prima cupoletta

var c1 = get_parametric_curve(0.5,7.0,0);
var c2 = get_parametric_curve(0.1,7.15,1);
var c3 = get_parametric_curve(0.5,7.25,0);

var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0]]);
var outUp = COLOR([0,0,0])(MAP(cs1)(domain));
DRAW(outUp);

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1]]);
var outUp = COLOR([0,0,0])(MAP(cs2)(domain));
DRAW(outUp);

//seconda cupoletta

var c1 = get_parametric_curve(0.5,7.25,0);
var c2 = get_parametric_curve(0,7.3,1);
var c3 = get_parametric_curve(0.7,7.35,0);

var cs1 = BEZIER(S1)([c1[0],c2[0],c3[0]]);
var outUp = COLOR([0,0,0])(MAP(cs1)(domain));
DRAW(outUp);

var cs2 = BEZIER(S1)([c1[1],c2[1],c3[1]]);
var outUp = COLOR([0,0,0])(MAP(cs2)(domain));
DRAW(outUp);

//tappo finale

var cs1 = BEZIER(S1)([c3[0],c3[1]]);
var outUp = COLOR([0,0,0])(MAP(cs1)(domain));
DRAW(outUp);

	var get_croce = function (){

		var get_verticale = function(){

			var get_vertical_cruise = function(){

					//base
					var domain = INTERVALS(1)(20);
					var controlpoints = [[1,0,0],[1.6,0,0],[0,-0.5,0],[0,0.5,0]];
					var curveMapping1 = CUBIC_HERMITE(S0)(controlpoints);
					var curve1 = MAP(curveMapping1)(domain);

					//parte piccola
					var controlpoints = [[1.2,1,0],[1.4,1,0],[0,0,0],[0,0,0]];
					var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints);
					var curve2 = MAP(curveMapping2)(domain);

					//diagonale destra
					var domain = INTERVALS(1)(20);

					var controlpoints = [[1.6,0,0],[1.4,1,0],[-0.5,0,0],[0.5,0,0]];
					var curveMappingD = CUBIC_HERMITE(S0)(controlpoints);
					var curve3 =MAP(curveMappingD)(domain);


					//diagonale sinistra
					var controlpoints = [[1,0,0],[1.2,1,0],[0.5,0,0],[-0.5,0,0]];
					var curveMappingS = CUBIC_HERMITE(S0)(controlpoints);
					var curve4 = MAP(curveMappingS)(domain);

					//stessi punti traslati in alto

					//base
					var domain = INTERVALS(1)(20);
					var controlpoints = [[1,0,0.2],[1.6,0,0.2],[0,-0.5,0],[0,0.5,0]];
					var curveMapping3 = CUBIC_HERMITE(S0)(controlpoints);
					var curve5 = MAP(curveMapping3)(domain);

					//parte piccola
					var controlpoints = [[1.2,1,0.2],[1.4,1,0.2],[0,0,0],[0,0,0]];
					var curveMapping4 = CUBIC_HERMITE(S0)(controlpoints);
					var curve6 = MAP(curveMapping4)(domain);

					//diagonale destra
					var domain = INTERVALS(1)(20);

					var controlpoints = [[1.6,0,0.2],[1.4,1,0.2],[-0.5,0,0],[0.5,0,0]];
					var curveMappingD1 = CUBIC_HERMITE(S0)(controlpoints);
					var curve7 =MAP(curveMappingD1)(domain);
					//DRAW(curve);

					//diagonale sinistra
					var controlpoints = [[1,0,0.2],[1.2,1,0.2],[0.5,0,0],[-0.5,0,0]];
					var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
					var curve8 = MAP(curveMappingS1)(domain);

					//chiusure laterali e riempimenti

					var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
					var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping2,[0,0,0],[0,0,0]]);
					var outchiusuraBassa1= MAP(sur_chiusura1)(domain);


					var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
					var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping3 ,curveMapping4,[0,0,0],[0,0,0]]);
					var outchiusuraBassa2= MAP(sur_chiusura1)(domain);


					var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
					var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping3,[0,0,0],[0,0,0]]);
					var outchiusuraBassa3= MAP(sur_chiusura1)(domain);

					var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
					var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping2 ,curveMapping4,[0,0,0],[0,0,0]]);
					var outchiusuraBassa4= MAP(sur_chiusura1)(domain);

					var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
					var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingD ,curveMappingD1,[0,0,0],[0,0,0]]);
					var outchiusuraBassa5= MAP(sur_chiusura1)(domain);

					var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
					var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS ,curveMappingS1,[0,0,0],[0,0,0]]);
					var outchiusuraBassa6= MAP(sur_chiusura1)(domain);
					
					var piece_of_cross = COLOR([1,1,0.82])(STRUCT([outchiusuraBassa1,outchiusuraBassa2,outchiusuraBassa3,
																				outchiusuraBassa4,outchiusuraBassa5,outchiusuraBassa6]));
					return piece_of_cross;
				}

		var c1 = get_vertical_cruise();
		var c2 = T([0,1])([2.6,2])(R([0,1])(PI)(get_vertical_cruise()));
		var vertical_cruise = STRUCT([c1,c2]);
		return vertical_cruise;
	}

	var get_orizzontale = function (){

		var get_orizzontal_cruise = function(){

			var domain = INTERVALS(1)(20);
			var controlpoints = [[1,0,0],[1.6,0,0],[0,-0.5,0],[0,0.5,0]];
			var curveMapping1 = CUBIC_HERMITE(S0)(controlpoints);
			var curve1 = MAP(curveMapping1)(domain);

			var controlpoints = [[1.2,0.3,0],[1.4,0.3,0],[0,0,0],[0,0,0]];
			var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints);
			var curve2 = MAP(curveMapping2)(domain);

			//diagonale sinistra
			var controlpoints = [[1.2,0.3,0],[1,0,0],[0.5,0,0],[-0.5,0,0]];
			var curveMappingS = CUBIC_HERMITE(S0)(controlpoints);
			var curve3 = MAP(curveMappingS)(domain);

			var controlpoints = [[1.4,0.3,0],[1.6,0,0],[-0.5,0,0],[0.5,0,0]];
			var curveMappingD = CUBIC_HERMITE(S0)(controlpoints);
			var curve4 = MAP(curveMappingD)(domain);

			//stessi punti traslati in alto

			var domain = INTERVALS(1)(20);
			var controlpoints = [[1,0,0.2],[1.6,0,0.2],[0,-0.5,0],[0,0.5,0]];
			var curveMapping3 = CUBIC_HERMITE(S0)(controlpoints);
			var curve5 = MAP(curveMapping3)(domain);

			var controlpoints = [[1.2,0.3,0.2],[1.4,0.3,0.2],[0,0,0],[0,0,0]];
			var curveMapping4 = CUBIC_HERMITE(S0)(controlpoints);
			var curve6 = MAP(curveMapping4)(domain);

			//diagonale sinistra
			var controlpoints = [[1.2,0.3,0.2],[1,0,0.2],[0.5,0,0],[-0.5,0,0]];
			var curveMappingS1 = CUBIC_HERMITE(S0)(controlpoints);
			var curve7 = MAP(curveMappingS1)(domain);

			var controlpoints = [[1.4,0.3,0.2],[1.6,0,0.2],[-0.5,0,0],[0.5,0,0]];
			var curveMappingD1 = CUBIC_HERMITE(S0)(controlpoints);
			var curve8 = MAP(curveMappingD1)(domain);


			//chiusure laterali e riempimenti

			var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
			var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping2,[0,0,0],[0,0,0]]);
			var outchiusuraBassa1= MAP(sur_chiusura1)(domain);


			var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
			var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping3 ,curveMapping4,[0,0,0],[0,0,0]]);
			var outchiusuraBassa2= MAP(sur_chiusura1)(domain);


			var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
			var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping3,[0,0,0],[0,0,0]]);
			var outchiusuraBassa3= MAP(sur_chiusura1)(domain);

			var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
			var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping2 ,curveMapping4,[0,0,0],[0,0,0]]);
			var outchiusuraBassa4= MAP(sur_chiusura1)(domain);

			var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
			var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingD ,curveMappingD1,[0,0,0],[0,0,0]]);
			var outchiusuraBassa5= MAP(sur_chiusura1)(domain);

			var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
			var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMappingS ,curveMappingS1,[0,0,0],[0,0,0]]);
			var outchiusuraBassa6= MAP(sur_chiusura1)(domain);
				
			var piece_of_cross = COLOR([1,1,0.82])(STRUCT([	outchiusuraBassa1,outchiusuraBassa2,outchiusuraBassa3,
																			outchiusuraBassa4,outchiusuraBassa5,outchiusuraBassa6
																			]));

			return piece_of_cross;

		}

			var c3 = T([0,1])([0.7,-0.6])(R([0,1])(PI/2)(get_orizzontal_cruise()));
			var c4 =T([0,1])([0.2,2])(R([0,1])( 3/2* PI)(get_orizzontal_cruise()));

			var orizzontal_cruise = STRUCT([c3,c4]);
			return orizzontal_cruise;
	}
		

		var orizzontal_cruise = get_orizzontale();
		var vertical_cruise = get_verticale();
		orizzontal_cruise = T([0,1])([0.85,0.3])(orizzontal_cruise);
		vertical_cruise = T([0,1])([0,0])(vertical_cruise)
		
		var cruise = STRUCT([orizzontal_cruise,vertical_cruise]);
		cruise = R([1,2])(PI/2)(cruise);
		return cruise;

}


	var croce = get_croce();
	croce = T([0,1,2])([0.7,1.1,6.8])(croce);
	DRAW(croce);


