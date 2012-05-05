//pista di atterraggio


var pista_atterraggio = CUBOID([20,50,0]);
var striscia_bianca_sx = COLOR([1,1,1,1])(T([0,1,2])([0.8,0,0])(CUBOID([0.3,50,0.0])));
var striscia_bianca_dx = COLOR([1,1,1,1])(T([0,1,2])([19,0,0])(CUBOID([0.3,50,0.0])));

var segmentato = COLOR([1,1,1,1])(CUBOID([1,5,0]));
var pista = STRUCT([			T([0])([10]), segmentato,
                                T([1])([10]), segmentato,
                                T([1])([10]), segmentato, 
                                T([1])([10]), segmentato,
                                T([1])([10]), segmentato
                                ]);


var pista_atterraggio_completa = STRUCT([T([0])([-9.5]),pista,striscia_bianca_sx,striscia_bianca_dx,pista_atterraggio]);
DRAW(pista_atterraggio_completa);

//ali

var main_wing = function(){
	//Ala iniziale di spessore 0.2

	//Curva esterna di bordo superiore
	var domain = INTERVALS(1)(40);
	var controlpoints = [[1,0,1],[2.4,0,1],[ 1,0,0.5],[1,0,-0.2]];
	var curveMappingUpBorder = CUBIC_HERMITE(S0)(controlpoints);

	//Curva esterna di bordo inferiore
	var controlpoints = [[1,0,1],[2.4,0,1],[ 1,0,-0.5],[1,0,0.2]];
	var curveMappingDownBorder = CUBIC_HERMITE(S0)(controlpoints);

	//ala interna di spessore 0.6

	//curva interna superiore
	var controlpoints = [[0.3,6,1],[3.4,6,1],[ 1,0,1.3],[1,0,-0.5]];
	var curveMappingUpInternal = CUBIC_HERMITE(S0)(controlpoints);

	//Curva interna inferiore
	var controlpoints = [[0.3,6,1],[3.4,6,1],[ 1,0,-1.3],[1,0,0.5]];
	var curveMappingDownInternal = CUBIC_HERMITE(S0)(controlpoints);

	//Unisco le curve superiori 
	var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
	var c1Up =  curveMappingUpBorder;
	var c2Up =  curveMappingUpInternal;
	var surUp = CUBIC_HERMITE(S1)([c1Up,c2Up,[0,0,0],[0,0,0]]);
	var outUp = MAP(surUp)(domain);
	//DRAW(outUp);

	//Unisco le curve inferiori
	var c1Down =  curveMappingDownBorder;
	var c2Down =  curveMappingDownInternal;
	var surDown = CUBIC_HERMITE(S1)([c1Down,c2Down,[0,0,0],[0,0,0]]);
	var outDown = MAP(surDown)(domain);
	//DRAW(outDown);

	//Coperchio ala 
	var surWinglet = CUBIC_HERMITE(S1)([c1Up,c1Down,[0,-0.5,0],[0,0.5,0]]);
	var outWinglet = MAP(surWinglet)(domain);
	//DRAW(outWinglet);
	var wing = STRUCT([COLOR([0.55,0.71,0.80])(outUp),COLOR([0.64,0.82,0.93])(outDown),COLOR([0,0,0])(outWinglet)]);
	
	return wing;
}

	//funzione che costruisce l'attaccatura delle ali alla fusoliera
	
	var congiuntion_wing = function(){
		//curva interna superiore
		var domain = INTERVALS(1)(40);
		var controlpoints = [[0.3,6,1],[3.4,6,1],[ 1,0,1.3],[1,0,-0.5]];
		var curveMappingUpInternal = CUBIC_HERMITE(S0)(controlpoints);

		//Curva interna inferiore
		var controlpoints = [[0.3,6,1],[3.4,6,1],[ 1,0,-1.3],[1,0,0.5]];
		var curveMappingDownInternal = CUBIC_HERMITE(S0)(controlpoints);
		
		//curva interna superiore attaccatura
		
		var controlpoints = [[0.1,6.2,1],[3.6,6.2,1],[ 1,0,1.3],[1,0,-0.5]];
		var curveMappingUpInternalFly = CUBIC_HERMITE(S0)(controlpoints);
		
		//Curva interna inferiore attaccatura traslata sulla y per dare inclinazione
		var controlpoints = [[0.1,6.2,1],[3.6,6.2,1],[ 1,0,-1.3],[1,0,0.5]];
		var curveMappingDownInternalFly = CUBIC_HERMITE(S0)(controlpoints);
		
		
		var c1up = curveMappingUpInternal;
		var c2down = curveMappingDownInternal;
		var z1up = curveMappingUpInternalFly;
		var z2down = curveMappingDownInternalFly;
		
		
		var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
		var surZ1 = CUBIC_HERMITE(S1)([c1up,z1up,[0,0,0],[0,0,0]]);
		var outZ1 = MAP(surZ1)(domain);

		var surZ2 = CUBIC_HERMITE(S1)([c2down,z2down,[0,0,0],[0,0,0]]);
		var outZ2 = MAP(surZ2)(domain);

		var congiuntion = STRUCT([COLOR([0,0,0])(outZ1),COLOR([0,0,0])(outZ2)]);

		return congiuntion;
	}	

	var ala_principale = main_wing();
	var congiungiunzione_ala = congiuntion_wing();
	var ala1 = R([0,2])(PI/20)(T([0,1,2])([-5.3,9,0.3])(R([0,1])(-PI/2)(STRUCT([ala_principale,congiungiunzione_ala]))));
	DRAW(ala1);
	
	var ala_principale2 = main_wing();
	var congiungiunzione_ala2 = congiuntion_wing();
	var ala2 = R([0,2])(-PI/20)(T([0,1,2])([9.7,5.3,-0.5])(R([0,1])(PI/2)(STRUCT([ala_principale2,congiungiunzione_ala2]))));
	DRAW(ala2);


//#############################################################################################
//CORPO AEREO


//Linea di base sinistra
var domain = INTERVALS(1)(20);
var controlpoints = [[2,0,1],[1,6,0],[0,0,0],[0,0,0]];
var curveMapping_base_sx = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_sx = MAP(curveMapping_base_sx)(domain);



//Linea di base destra
var controlpoints = [[2.4,0,1],[3.4,6,0],[0,0,0],[0,0,0]];
var curveMapping_base_dx = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_dx = MAP(curveMapping_base_dx)(domain);


//Linea montante sinistra
var controlpoints = [[2,0,1.5],[1,6,2],[0,0,0],[0,0,0]];
var curveMapping_montante_sx = CUBIC_HERMITE(S0)(controlpoints);
var curve_montante_sx = MAP(curveMapping_montante_sx)(domain);



//Linea montante destra
var controlpoints = [[2.4,0,1.5],[3.4,6,2],[0,0,0],[0,0,0]];
var curveMapping_montante_dx = CUBIC_HERMITE(S0)(controlpoints);
curve_montante_dx = MAP(curveMapping_montante_dx)(domain);


//Superfice base
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
var sur_base = CUBIC_HERMITE(S1)([curveMapping_base_sx,curveMapping_base_dx,[0,0,-0.2],[0,0,0.2]]);
var outBase = MAP(sur_base)(domain);


//Superfice lato sinistro
var sur_LatoSx = CUBIC_HERMITE(S1)([curveMapping_base_sx,curveMapping_montante_sx,[-0.2,0,0],[0.2,0,0]]);
var outLatoSx = MAP(sur_LatoSx)(domain);


//Superfice lato destro
var sur_LatoDx = CUBIC_HERMITE(S1)([curveMapping_base_dx,curveMapping_montante_dx,[0.2,0,0],[-0.2,0,0]]);
var outLatoDx = MAP(sur_LatoDx)(domain);


//superfice tetto
var sur_tetto = CUBIC_HERMITE(S1)([curveMapping_montante_sx,curveMapping_montante_dx,[0,0,0.2],[0,0,-0.2]]);
var outTetto= MAP(sur_tetto)(domain);

var coda_fusoliera = STRUCT([curve_base_sx,curve_base_dx,curve_montante_sx,curve_montante_dx,outBase,outLatoSx,outLatoDx,outTetto]);



//Chiusura bordo orizzontale posteriore della fusoliera

var domain = INTERVALS(1)(20);


var controlpoints = [[2,0,1],[2,0,1.5],[-0.2,0,0],[0.2,0,0]];
var curveMapping_chiusura_orizzontale = CUBIC_HERMITE(S0)(controlpoints);
var curve_chiusura_orizzontale = MAP(curveMapping_chiusura_orizzontale)(domain);

var controlpoints = [[2.4,0,1],[2.4,0,1.5],[0.2,0,0],[-0.2,0,0]];
var curveMapping_chiusura_verticale = CUBIC_HERMITE(S0)(controlpoints);
var curve_chiusura_verticale = MAP(curveMapping_chiusura_verticale)(domain);

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);

var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping_chiusura_orizzontale ,curveMapping_chiusura_verticale,[0,-0.2,0],[0,0.2,0]]);
var outchiusura1= MAP(sur_chiusura1)(domain);



//Chiusura bordo verticale posteriore della fusoliera
var domain = INTERVALS(1)(20);

var controlpoints = [[2,0,1.5],[2.4,0,1.5],[0,0,0.2],[0,0,-0.2]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve_chiusura_verticale1 = MAP(curveMapping)(domain);


var controlpoints = [[2,0,1],[2.4,0,1],[0,0,-0.2],[0,0,0.2]];
var curveMapping_chiusura_verticale2 = CUBIC_HERMITE(S0)(controlpoints);
var curve_chiusura_verticaleOn = MAP(curveMapping_chiusura_verticale2)(domain);

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);

var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMapping ,curveMapping_chiusura_verticale2,[0,-0.2,0],[0,0.2,0]]);
var outchiusuraOn= MAP(sur_chiusura2)(domain);
var chiusura_posteriore_fusoliera = STRUCT([outchiusura1,outchiusuraOn]);



//Creazione parte centrale cabina


//Linea di base sinistra dell aparte centrale
var domain = INTERVALS(1)(20);
var controlpoints = [[1,6,0],[1,9,0],[-0.5,0,0],[0.5,0,0]];
var curveMapping_base_centrale_sx = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_sx = MAP(curveMapping_base_centrale_sx)(domain);


//Linea di base destra della parte centrale
var controlpoints = [[3.4,6,0],[3.4,9,0],[0.5,0,0],[-0.5,0,0]];
var curveMapping_base_centrale_dx = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_dx = MAP(curveMapping_base_centrale_dx)(domain);


//Linea di montante sinistra della parte centrale
var domain = INTERVALS(1)(20);
var controlpoints = [[1,6,2],[1,9,2],[-0.5,0,0],[0.5,0,0]];
var curveMapping_montante_centrale_sx = CUBIC_HERMITE(S0)(controlpoints);
var curve_montante_sx = MAP(curveMapping_montante_centrale_sx)(domain);


//Linea montante destra della parte centrale
var controlpoints = [[3.4,6,2],[3.4,9,2],[0.5,0,0],[-0.5,0,0]];
var curveMapping_montante_centrale_dx = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_dx = MAP(curveMapping_montante_centrale_dx)(domain);


//Superfice base della parte centrale
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
var sur_base_centrale = CUBIC_HERMITE(S1)([curveMapping_base_centrale_sx,curveMapping_base_centrale_dx,[0,0,-0.2],[0,0,0.2]]);
var outBaseCentrale = MAP(sur_base_centrale)(domain);

//Superfice lato sinistro della parte centrale
var sur_LatoSx_cntr = CUBIC_HERMITE(S1)([curveMapping_base_centrale_sx,curveMapping_montante_centrale_sx,[-0.1,0,0],[0.1,0,0]]);
var outLatoSxCentrale = MAP(sur_LatoSx_cntr)(domain);

//Superfice lato destro della parte centrale
var sur_LatoDxCentrale = CUBIC_HERMITE(S1)([curveMapping_base_centrale_dx,curveMapping_montante_centrale_dx,[0.1,0,0],[-0.1,0,0]]);
var outLatoDxCentrale = MAP(sur_LatoDxCentrale)(domain);

var parte_centrale_fusoliera = STRUCT([curve_base_sx,curve_base_dx,curve_montante_sx,outBaseCentrale,outLatoSxCentrale,outLatoDxCentrale]); 



//CABINA DI VETRO PILOTA

//Linea di base sinistra della parte centrale



var domain = INTERVALS(1)(20);
var controlpoints = [[1,6,2],[3.4,6,2],[0,0,0.2],[0,0,-0.2]];
var curveMapping_disco0 = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_disco0 = MAP(curveMapping_disco0)(domain);
//DRAW(curve_base_disco0);
//c1,c2,....,cn servono per dare forma allacabina del pilota 

var c1 = curveMapping_disco0;


var domain = INTERVALS(1)(20);
var controlpoints = [[1,6.3,2],[3.4,6.3,2],[0,0,1],[0,0,-1]];
var curveMapping_disco01 = CUBIC_HERMITE(S0)(controlpoints);


var c2 = curveMapping_disco01;



var domain = INTERVALS(1)(20);
var controlpoints = [[1,6.5,2],[3.4,6.5,2],[0,0,7],[0,0,-7]];
var curveMapping_disco1 = CUBIC_HERMITE(S0)(controlpoints);


var c3 = curveMapping_disco1;

var domain = INTERVALS(1)(20);
var controlpoints = [[0.9,7,1.95],[3.5,7,1.95],[0,0,4.5],[0,0,-4.5]];
var curveMapping_disco2 = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_disco2 = MAP(curveMapping_disco2)(domain);

var c4 = curveMapping_disco2;

var domain = INTERVALS(1)(20);
var controlpoints = [[0.9,8,2],[3.5,8,2],[0.9,0,5],[0.9,0,-5]];
var curveMapping_disco3 = CUBIC_HERMITE(S0)(controlpoints);


var c5 = curveMapping_disco3;

var domain = INTERVALS(1)(20);
var controlpoints = [[1,8.5,2],[3.4,8.5,2],[0.9,0,3],[0.9,0,-3]];
var curveMapping_disco4 = CUBIC_HERMITE(S0)(controlpoints);


var c6 = curveMapping_disco4;

var domain = INTERVALS(1)(20);
var controlpoints = [[1,9,2],[3.4,9,2],[0.9,0,0.1],[0.9,0,-0.1]];
var curveMapping_disco5 = CUBIC_HERMITE(S0)(controlpoints);
var curve_base_disco5 = MAP(curveMapping_disco5)(domain);

var c7 = curveMapping_disco5;

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);

var vetro = BEZIER(S1)([c1,c2,c3,c4,c5,c6,c7]);


var disVetro = COLOR([0.725,0.827,0.933,0.5])(MAP(vetro)(domain));

var domain = INTERVALS(1)(20);
var controlpoints = [[1,8.5,2],[3.4,8.5,2],[0.9,0,2.4],[0.9,0,-2.4]];
var montante = CUBIC_HERMITE(S0)(controlpoints);
var curveMontante = MAP(montante)(domain);

var controlpoints = [[1,8,2],[3.4,8,2],[0.9,0,3.7],[0.9,0,-3.7]];
var montante2 = CUBIC_HERMITE(S0)(controlpoints);
var curveMontante2 = MAP(montante2)(domain);

var cabina_pilota = STRUCT([curve_base_disco2,curve_base_disco5,disVetro,curveMontante,curveMontante2]);

//100;149;237
var fusoliera = STRUCT([COLOR([0.55,0.71,0.80])(coda_fusoliera),COLOR([0.39,0.58,0.92])(chiusura_posteriore_fusoliera),COLOR([0.55,0.71,0.80])(parte_centrale_fusoliera),cabina_pilota]);
DRAW(fusoliera);

//chiusura anteriore fusoliera

//lato sx
var domain = INTERVALS(1)(20);
var controlpoints = [[1,9,0],[1,9,2],[0.2,0,0],[ -0.2,0,0]];
var curveMapping1 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalSx = MAP(curveMapping1)(domain);
DRAW(curveVerticalSx);


//lato dx
var domain = INTERVALS(1)(20);
var controlpoints = [[3.4,9,0],[3.4,9,2],[0.2,0,0],[ -0.2,0,0]];
var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalDx = MAP(curveMapping1)(domain);
DRAW(curveVerticalDx);

//chiusura fusoliera anteriore
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping2,[0,0,0],[0,0,0]]);
var outchiusuraOn= MAP(sur_chiusura1)(domain);
DRAW(outchiusuraOn);



//FINALE FUSOLIERA

//lato inferiore  sinistro finale
var domain = INTERVALS(1)(20);
var controlpoints = [[1,9,0],[1.4,10.5,0],[0,0,0],[0,0,0]];
var curveMapping1 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalSx = MAP(curveMapping1)(domain);
DRAW(curveVerticalSx);


//lato inferiore destro finale
var domain = INTERVALS(1)(20);
var controlpoints = [[3.4,9,0],[3,10.5,0],[0,0,0],[0,0,0]];
var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalDx = MAP(curveMapping2)(domain);
DRAW(curveVerticalDx);

//lato superiore  sinistro finale
var domain = INTERVALS(1)(20);
var controlpoints = [[1,9,2],[1.4,10.5,2],[0,0,0],[0,0,0]];
var curveMapping3 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalSx = MAP(curveMapping3)(domain);
DRAW(curveVerticalSx);


//lato superiore destro finale
var domain = INTERVALS(1)(20);
var controlpoints = [[3.4,9,2],[3,10.5,2],[0,0,0],[0,0,0]];
var curveMapping4 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalDx = MAP(curveMapping4)(domain);
DRAW(curveVerticalDx);

//base finale

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
var sur_chiusura1 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping2,[0,0,0],[0,0,0]]);
var outchiusuraOn1= COLOR([0.18,0.18,0.18])(MAP(sur_chiusura1)(domain));
DRAW(outchiusuraOn1);


//lato sinistro finale
var sur_chiusura2 = CUBIC_HERMITE(S1)([curveMapping1 ,curveMapping3,[-1,0,0],[1,0,0]]);
var outchiusuraOn2= COLOR([0.18,0.18,0.18])(MAP(sur_chiusura2)(domain));
DRAW(outchiusuraOn2);

//lato destro finale
var sur_chiusura3 = CUBIC_HERMITE(S1)([curveMapping2 ,curveMapping4,[1,0,0],[-1,0,0]]);
var outchiusuraOn3= 	COLOR([0.18,0.18,0.18])(MAP(sur_chiusura3)(domain));
DRAW(outchiusuraOn3);


//tetto finale
var sur_chiusura4 = CUBIC_HERMITE(S1)([curveMapping3 ,curveMapping4,[0,0,1],[0,0,-1]]);
var outchiusuraOn4= COLOR([0.18,0.18,0.18])(MAP(sur_chiusura4)(domain));
DRAW(outchiusuraOn4);

var fusoliera_finale = STRUCT([	COLOR([0.18,0.18,0.18])(outchiusuraOn1),
																COLOR([0.18,0.18,0.18])(outchiusuraOn2),
																COLOR([0.18,0.18,0.18])(outchiusuraOn3),
																COLOR([0.18,0.18,0.18])(outchiusuraOn4)]);
//	tappo FINALE

//tappo orizzontale

var domain = INTERVALS(1)(20);
var controlpoints = [[1.4,10.5,0],[1.4,10.5,2],[-1,0,0],[1,0,0]];
var curveMapping8 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalSx = MAP(curveMapping8)(domain);
DRAW(curveVerticalSx);

//lato inferiore destro finale
var domain = INTERVALS(1)(20);
var controlpoints = [[3,10.5,0],[3,10.5,2],[1,0,0],[-1,0,0]];
var curveMapping9 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalDx = MAP(curveMapping9)(domain);
DRAW(curveVerticalDx);

//tappo orizzontale
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);

var sur_chiusura4 = CUBIC_HERMITE(S1)([curveMapping8 ,curveMapping9,[0,0.2,0],[0,-0.2,0]]);
var outchiusuraOn4= 	COLOR([0.18,0.18,0.18])(MAP(sur_chiusura4)(domain));
DRAW(outchiusuraOn4);

//tappo verticale

var domain = INTERVALS(1)(20);
var controlpoints = [[1.4,10.5,0],[3,10.5,0],[0,0,0],[0,0,0]];
var curveMapping10 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalSx = MAP(curveMapping10)(domain);
DRAW(curveVerticalSx);

//lato inferiore destro finale
var domain = INTERVALS(1)(20);
var controlpoints = [[1.4,10.5,2],[3,10.5,2],[0,0,1],[0,0,-1]];
var curveMapping11 = CUBIC_HERMITE(S0)(controlpoints);
var curveVerticalDx = MAP(curveMapping11)(domain);
DRAW(curveVerticalDx);


//tappo orizzontale
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);

var sur_chiusura5 = CUBIC_HERMITE(S1)([curveMapping10 ,curveMapping11,[0,0.2,0],[0,-0.2,0]]);
var outchiusuraOn5= 	COLOR([0.18,0.18,0.18])(MAP(sur_chiusura5)(domain));
DRAW(outchiusuraOn5);



var mitragliatore = function(){
	var domain2 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);

  var controlPoint1 = [[0,0,0],[0.6,0,0],[0,0,1],[0,0,-1]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var semiCerchio1front = MAP(c1)(domain);

  var controlPoint2 = [[0,0,0],[0.6,0,0],[0,0,-1],[0,0,1]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var semiCerchio2front = MAP(c2)(domain);

  var controlPoint3 = [[0,1,0],[0.6,1,0],[0,0,1],[0,0,-1]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var semiCerchio3front = MAP(c3)(domain);

  var controlPoint4 = [[0,1,0],[0.6,1,0],[0,0,-1],[0,0,1]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var semiCerchio5front = MAP(c4)(domain);

  var chiusuraSup = BEZIER(S1)([c1,c3]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);

  var chiusuraInf = BEZIER(S1)([c2,c4]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);

  var chiusuraFront = BEZIER(S1)([c1,c2]);
  var disChiusuraFront = MAP(chiusuraFront)(domain2);

  disChiusuraFront = COLOR([0,0,0,1])(disChiusuraFront);
  var esterno = STRUCT([disChiusuraInf, disChiusuraSup]);
  esterno = COLOR([0,0,0.5,1])(esterno);

  var chiusuraPost = BEZIER(S1)([c3,c4]);
  var disChiusuraPost = MAP(chiusuraPost)(domain2);
  disChiusuraPost = COLOR([0,0,0.5,1])(disChiusuraPost);

  var esterno = STRUCT([disChiusuraInf, disChiusuraSup, disChiusuraPost]);
  esterno = COLOR([0,0,0.5,1])(esterno);

  var presa = STRUCT([esterno, disChiusuraFront]);
  return presa;
}

var mitra = T([0,1,2])([2,9,-0.2])(mitragliatore());
DRAW(mitra);


var disegnaelica = function(){
	var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain2 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);



  var controlPoint1 = [[0,0,0],[0.6,0,0],[0,0,1],[0,0,-1]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var semiCerchio1front = MAP(c1)(domain);

  var controlPoint2 = [[0,0,0],[0.6,0,0],[0,0,-1],[0,0,1]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var semiCerchio2front = MAP(c2)(domain);

  var controlPoint3 = [[0.16,-0.3,0],[0.32,-0.3,0],[0,0,0.4],[0,0,-0.4]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var semiCerchio3front = MAP(c3)(domain);

  var controlPoint4 = [[0.16,-0.3,0],[0.32,-0.3,0],[0,0,-0.4],[0,0,0.4]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var semiCerchio4front = MAP(c4)(domain);

  var chiusuraInf = BEZIER(S1)([c1,c2]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);

  var chiusuraSup = BEZIER(S1)([c3,c4]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);

  var chiusuraLat = BEZIER(S2)([chiusuraInf, chiusuraSup]);
  var disChiusuraLat = MAP(chiusuraLat)(domain3);

  disChiusuraInf = COLOR([0.2901,0.439,0.545,1])(disChiusuraInf);
  disChiusuraSup = COLOR([0.2901,0.439,0.545,1])(disChiusuraSup);
  disChiusuraLat = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat);
  
  var corpo = STRUCT([T([0,1])([-0.3,0.1]) ,disChiusuraInf, disChiusuraSup, disChiusuraLat]);
  corpo = COLOR([0,0,0.5])(corpo);

  var controlPoint5 = [[0,0,0],[-0.5,0,2.5],[0,0,2.5]];
  var c5 = BEZIER(S0)(controlPoint5);
  //var disElica1 = MAP(c5)(domain);

  var controlPoint6 = [[0,0,0],[0.5,0,2.5],[0,0,2.5]];
  var c6 = BEZIER(S0)(controlPoint6);

  var c7 = BEZIER(S1)([c5,c6]);
  var disElica = MAP(c7)(domain2);
  disElica= COLOR([0,0,0,1])(disElica);

  elica = T([0,1,2])([2.2,10.6,1.2])(R([0,1])([ PI ])(STRUCT([corpo, disElica, R([0,2])([PI*2/3]), disElica, R([0,2])([PI*2/3]), disElica])));

  return elica;

}

var elica = disegnaelica();
DRAW(elica);

var disegna_carrello = function(){

	var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain2 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);
  
  var gancio = CUBOID([0.15,0.1,0.5]);

  var controlPoint1 = [[0,0,0],[0,0.3,0],[0,0,0.5],[ 0,0,-0.5]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var curva1 = MAP(c1)(domain);
  //prima circonferenza destra
  var controlPoint2 = [[0,0,0],[0,0.3,0],[0,0,-0.5],[ 0,0,0.5]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var controlPoint3 = [[0.15,0,0],[0.15,0.3,0],[0,0,0.5],[ 0,0,-0.5]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var curva3 = MAP(c3)(domain);
  //seconda circonferenza sinistra
  var controlPoint4 = [[0.15,0,0],[0.15,0.3,0],[0,0,-0.5],[ 0,0,0.5]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var curva4= MAP(c4)(domain);

  var latoDx = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disLatoDx = MAP(latoDx)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c3,c4, [0,0,0],[0,0,0]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var gommaSup = CUBIC_HERMITE(S1)([c1,c3, [0,0,0.2],[0,0,-0.2]]);
  var disGommaSup = MAP(gommaSup)(domain2);
  
  var gommaInf = CUBIC_HERMITE(S1)([c2,c4, [0,0,-0.2],[0,0,0.2]]);
  var disGommaInf = MAP(gommaInf)(domain2);
  

  var ruota1 = STRUCT([disLatoDx, disLatoSx, disGommaInf, disGommaSup]);
  var ruota2 = R([1,2])([PI/2])(ruota1);
  ruota2 = T([1,2])([0.15,-0.15])(ruota2);

  var ruota = STRUCT([ruota1, ruota2]);
  ruota = COLOR([0,0,0,1])(ruota);

  var carrello = STRUCT([ruota,T([1])([0.1]), gancio]);
  return carrello;
}

var carrello = T([0,1,2])([2.2,1,0.3])(disegna_carrello());
DRAW(carrello);

var disegna_carrello = function(){

	var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain2 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);

  var gancio = CUBOID([0.1,0.1,2]);
 
  var controlPoint1 = [[0,0,0],[0,0.6,0],[0,0,1],[ 0,0,-1]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var curva1 = MAP(c1)(domain);
  //mezzo cerchio sinistro
  var controlPoint2 = [[0,0,0],[0,0.6,0],[0,0,-1],[ 0,0,1]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var controlPoint3 = [[0.3,0,0],[0.3,0.6,0],[0,0,1],[ 0,0,-1]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var curva3 = MAP(c3)(domain);
  //mezzo cerchio sinistro
  var controlPoint4 = [[0.3,0,0],[0.3,0.6,0],[0,0,-1],[ 0,0,1]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var curva4= MAP(c4)(domain);

  var latoDx = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disLatoDx = MAP(latoDx)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c3,c4, [0,0,0],[0,0,0]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var gommaSup = BEZIER(S2)([latoSx, latoDx]);
  var disGommaSup = MAP(gommaSup)(domain3);
  
  

  var ruota = STRUCT([disLatoDx, disLatoSx, disGommaSup]);

  ruota = COLOR([0,0,0,1])(ruota);

  var carrello = STRUCT([ruota,T([0,1])([-0.1,0.25]), gancio,T([2])([1])]);
  return carrello;
}

var carrello_ala_sx = T([0,1,2])([-1,6.5,-0.6])(disegna_carrello());
DRAW(carrello_ala_sx);

var carrello_ala_dx = T([0,1,2])([5.5,6.5,-0.6])(disegna_carrello());
DRAW(carrello_ala_dx);




//##################################################################################################################

//STABILIZZATORE



var stabilizzatore_verticale = function (){
		
		var domain = INTERVALS(1)(20)
		var domain2 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
		var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);

		var controlPoint1 = [[1,0,0],[1,2.5,0],[-0.5,0,0],[0.5,0,0]];
	  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
	  var semiCerchio1base = MAP(c1)(domain);


	  var controlPoint2 = [[1,0,0],[1,2.5,0],[0.5,0,0],[-0.5,0,0]];
	  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
	  var semiCerchio2base = MAP(c2)(domain);


		var controlPoint3 = [[1,0.4,2],[1,1.3,2],[-0.3,0,0],[0.3,0,0]];
	  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
	  var semiCerchio3base = MAP(c3)(domain);


	  var controlPoint4 = [[1,0.4,2],[1,1.3,2],[0.3,0,0],[-0.3,0,0]];
	  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
	  var semiCerchio4base = MAP(c4)(domain);

	  var chiusuraBase = BEZIER(S1)([c1,c2]);
	  var disChiusuraBase = MAP(chiusuraBase)(domain2);

	  var chiusuraAltezza = CUBIC_HERMITE(S1)([c3,c4,[0,0,1],[0,0,-1]]);
	  var disChiusuraAltezza = MAP(chiusuraAltezza)(domain2);

	  var vertical_stabilizator = BEZIER(S2)([chiusuraBase, chiusuraAltezza]);
	  var disChiusuraLat = MAP(vertical_stabilizator)(domain3);


	  var stabilizator_verticale = STRUCT([disChiusuraBase,disChiusuraAltezza,disChiusuraLat]);
	  return stabilizator_verticale;
	}
  //stabilizator orizzontale

var stabilizzatore_laterale = function(){
	
	var domain = INTERVALS(1)(20)
	var domain2 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(14)]);
	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);

	var controlPoint5 = [[1,0,0],[1,1,0],[0,0,0.2],[0,0,-0.2]];
  var c5 = CUBIC_HERMITE(S0)(controlPoint5);
  var semiCerchio5base = MAP(c5)(domain);
  //DRAW(semiCerchio5base);

  var controlPoint6 = [[1,0,0],[1,1,0],[0,0,0.-0.2],[0,0,0.2]];
  var c6 = CUBIC_HERMITE(S0)(controlPoint6);
  var semiCerchio6base = MAP(c6)(domain);
  //DRAW(semiCerchio6base);


	var controlPoint7 = [[2.8,-0.2,0],[2.8,1.2,0],[0,0,0.5],[0,0,-0.5]];
  var c7 = CUBIC_HERMITE(S0)(controlPoint7);
  var semiCerchio7base = MAP(c7)(domain);
	//DRAW(semiCerchio7base);

  var controlPoint8 = [[2.8,-0.2,0],[2.8,1.2,0],[0,0,-0.5],[0,0,0.5]];
  var c8 = CUBIC_HERMITE(S0)(controlPoint8);
  var semiCerchio8base = MAP(c8)(domain);
  //DRAW(semiCerchio8base);


  var chiusuraBase = CUBIC_HERMITE(S1)([c5,c6,[-0.3,0,0],[0-3,0,0]]);
  var disChiusuraBase = MAP(chiusuraBase)(domain2);


  var chiusuraAltezza = CUBIC_HERMITE(S1)([c7,c8,[0,0,0],[0,0,0]]);
  var disChiusuraAltezza = MAP(chiusuraAltezza)(domain2);

  var vertical_stabilizator = BEZIER(S2)([chiusuraBase, chiusuraAltezza]);
  var disChiusuraLat = MAP(vertical_stabilizator)(domain3);



  var stabilizzatore_laterale = STRUCT([disChiusuraBase,disChiusuraAltezza,disChiusuraAltezza,disChiusuraLat]);
  //DRAW(stabilizzatore_laterale);
  return stabilizzatore_laterale
}

var verticale = stabilizzatore_verticale();
var orizzontale_sinistro = T([0,1])([-1.8,0.2])(stabilizzatore_laterale());
var orizzontale_destro = T([0,1,2])([3.8,0.2,0])(R([0,2])( PI )(stabilizzatore_laterale()));

var stabilizzatore = STRUCT([T([0,1,2])([1.2,0,1.6]),COLOR([0,0,0])(verticale),COLOR([0,0,0])(orizzontale_sinistro),COLOR([0,0,0])(orizzontale_destro)]);
DRAW(stabilizzatore);



