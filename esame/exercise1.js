
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
	var controlpoints = [[0.3,5,1],[3.4,5,1],[ 1,0,1.3],[1,0,-0.5]];
	var curveMappingUpInternal = CUBIC_HERMITE(S0)(controlpoints);

	//Curva interna inferiore
	var controlpoints = [[0.3,5,1],[3.4,5,1],[ 1,0,-1.3],[1,0,0.5]];
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
		var controlpoints = [[0.3,5,1],[3.4,5,1],[ 1,0,1.3],[1,0,-0.5]];
		var curveMappingUpInternal = CUBIC_HERMITE(S0)(controlpoints);

		//Curva interna inferiore
		var controlpoints = [[0.3,5,1],[3.4,5,1],[ 1,0,-1.3],[1,0,0.5]];
		var curveMappingDownInternal = CUBIC_HERMITE(S0)(controlpoints);
		
		//curva interna superiore attaccatura
		
		var controlpoints = [[0.1,5.2,1],[3.6,5.2,1],[ 1,0,1.3],[1,0,-0.5]];
		var curveMappingUpInternalFly = CUBIC_HERMITE(S0)(controlpoints);
		
		//Curva interna inferiore attaccatura traslata sulla y per dare inclinazione
		var controlpoints = [[0.1,5.2,1],[3.6,5.2,1],[ 1,0,-1.3],[1,0,0.5]];
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
	var ala = STRUCT([ala_principale,congiungiunzione_ala]);
	DRAW(ala);

	






