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

var stabilizzatore = STRUCT([verticale,orizzontale_sinistro,orizzontale_destro]);
DRAW(stabilizzatore);

