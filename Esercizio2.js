var cornerLeft = SIMPLEX_GRID([
	[1],
  [2],
  [1]]);

var poolBase = SIMPLEX_GRID([
	[20],
  [1,-9,7],
  [1]]);

var atriumBase = SIMPLEX_GRID([
	[15],
  [17],
  [1]]);

var scalesBase = SIMPLEX_GRID([
	[3],
  [1,-3,13],
  [1]]);

var rightBuilding = SIMPLEX_GRID([
	[8],
  [12],
  [1]]);


var rightCorner = T([0,1])([51,4])(SIMPLEX_GRID([
	[1],
  [2],
  [1]]));

var leftBuildingBase = T([1])([17])(SIMPLEX_GRID([
	[8],
  [5],
  [1]]));

var mainPool =T([1])([1])(SIMPLEX_GRID([
	[20],
  [9],
  [0.6]]));

var smallPool = T([1])([1]) (SIMPLEX_GRID([
	[4],
  [11],
  [0.6]]));

var boardSmallPool = SIMPLEX_GRID([
	[4],
  [1],
  [1]]);

var scales = STRUCT ([T([1])([1]),
											 SIMPLEX_GRID([[0.375],[3],[1]]),T([0])([0.375]),
											 SIMPLEX_GRID([[0.375],[3],[0.875]]),T([0])([0.375]),	
											 SIMPLEX_GRID([[0.375],[3],[0.75]]),T([0])([0.375]),	
											 SIMPLEX_GRID([[0.375],[3],[0.625]]),T([0])([0.375]),	
											 SIMPLEX_GRID([[0.375],[3],[0.5]]),T([0])([0.375]),	
											 SIMPLEX_GRID([[0.375],[3],[0.375]]),T([0])([0.375]),	
											 SIMPLEX_GRID([[0.375],[3],[0.25]]),T([0])([0.375]),	
											 SIMPLEX_GRID([[0.375],[3],[0.125]]),T([0])([0.375])]);

var baseStucture = STRUCT([cornerLeft,rightCorner,T([0])([1]),
													poolBase,mainPool,
													leftBuildingBase,T([0])([20]),
													atriumBase,T([0])([15]),
													scalesBase,scales,T([0])([3]),T([1])([4]),
													rightBuilding,T([0])([8]),
													smallPool,boardSmallPool,T([0])([4])
													]);

var bigWall = T([0])([7.5])(T([1])([15])(SIMPLEX_GRID([
	[20],
  [0.2],
  [3+1]])));

var banchesPillars = SIMPLEX_GRID([
  REPLICA(8)([0.2,-2]),
  [0.3],
  [1+0.25]]);

var banchesPlan = SIMPLEX_GRID([[2.2 * 7.3],[0.5],[-1,-0.25,0.1]]);

var banches = STRUCT([T([0])([8]),T([1])([14.7]),banchesPillars,T([0])([-0.2]),T([1])([-0.2]),banchesPlan]);

//Costruzione sinistra

var leftroof = T([1])([13])(SIMPLEX_GRID([[10],[10],[-1,-3,0.3]]));


var banchesPillars = SIMPLEX_GRID([[0.2,-2],[0.3],[1+0.25]]);

//vetrata frontale
var vertical = SIMPLEX_GRID([ REPLICA(6)([0.1,-0.8,0.1]),[0.1], [3] ]);
var orizontal = SIMPLEX_GRID([ REPLICA(2)([3]),[0.1], [0.2,-2.6,0.2] ]);
var wallWindow = STRUCT ([vertical,orizontal]);
wallWindow = T([0,1,2])([1,17,1])(wallWindow);

//muro portante sinistro
var wall2 = SIMPLEX_GRID([ [0.1], [1,-1,3], [3] ]);
var wall2 = T([0,1,2])([5,17, 1])(wall2);

var wall3 = SIMPLEX_GRID([ [1,-1,2], [0.1], [3] ]);
wall3 = T([0,1,2])([5,19,1])(wall3);

var wall4 = SIMPLEX_GRID([ [0.1], [1], [3] ]);
wall4 = T([0,1,2])([7,21, 1])(wall4);

var wall5 = SIMPLEX_GRID([ [1], [0.2], [3] ]);
wall5 = T([0,1,2])([8,17,1])(wall5);


var portantLeftBuildingWall1 = T([0])([1])(T([1])([17])(SIMPLEX_GRID([ [0.2],[5],[3+1] ])));

var portantLeftBuildingWall2 = T([0])([1])(T([1])([22])(SIMPLEX_GRID([ [8.2],[0.2],[3+1] ])));

var portantLeftBuildingWall3 = T([0])([9])(T([1])([17])(SIMPLEX_GRID([ [0.2],[5],[3+1] ])));

var leftBuildingStructure = STRUCT([leftroof,
																		wallWindow,
																		wall2,
																		wall3,
																		wall4,
																		wall5,
																		portantLeftBuildingWall1,
																		portantLeftBuildingWall2,
																		portantLeftBuildingWall3]);

//costruzione destra
var portantRightBuildingWall1 = SIMPLEX_GRID([ [7.9], [0.2], [3] ]);
portantRightBuildingWall1 = T([0,1,2])([25.1,7.25, 1])(portantRightBuildingWall1);

var portantRightBuildingWall2 = SIMPLEX_GRID([ [5.39], [0.2], [3] ]);
portantRightBuildingWall2 = T([0,1,2])([37.1,11.5, 1])(portantRightBuildingWall2);

var portantRightBuildingWall3 = SIMPLEX_GRID([ [13.343], [0.2], [4] ]);
portantRightBuildingWall3 = T([0,1])([37.66,15.8])(portantRightBuildingWall3);

//muro bordo piscina piccola destro
var portantRightBuildingWall4 = SIMPLEX_GRID([ [0.2], [11], [4] ]);
portantRightBuildingWall4 = T([0,1])([50.8,5])(portantRightBuildingWall4);

//muro bordo piscina piccola in basso
var portantRightBuildingWall5 = SIMPLEX_GRID([ [9.34], [0.2], [3] ]);
portantRightBuildingWall5 = T([0,1,2])([41.65,4.8, 1])(portantRightBuildingWall5);

//Finestre bordo piscina
var verticalGrid = SIMPLEX_GRID([[0.1], REPLICA(3)([0.33,-3,0.33]), [3] ]);
var orizontalGrid = SIMPLEX_GRID([  [0.1],REPLICA(2)([5.5]),[0.2,-2.6,0.2] ]);

var windowsSmallPool = STRUCT([T([0])([47]),
															 T([1])([5]),
															 T([2])([1]),
															 verticalGrid,
															 orizontalGrid]);

var externalWallRoom1 = SIMPLEX_GRID([ [0.1,-3.5],[3,-1,2.5],[3]]);
externalWallRoom1 = T([0,1,2])([38.8,5,1 ])(externalWallRoom1);

var externalWallRoom2 = SIMPLEX_GRID([ [0.1,-3.5],[6.5],[3]]);
externalWallRoom2 = T([0,1,2])([42.4,5,1 ])(externalWallRoom2);

//muro interno della strttura di destra(davanti alla piscina)
var internalRoomWall = SIMPLEX_GRID([[0.1],[7],[3] ]);
internalRoomWall = T([0,1,2])([44.80, 7, 1])(internalRoomWall);

//vetrate che circondano la pseudo-stanza
var inferiorOrizzontalGW = SIMPLEX_GRID([
  REPLICA(6)([2]), 
  [0.1], 
  [0.1,-2.8,0.1] 
  ]);

var inferiorVerticalGW = SIMPLEX_GRID([
  REPLICA(6)([0.1,-1.8,0.1]), 
  [0.1], 
  [3] 
  ]);

var inferiorGlassWindow = STRUCT([ T([0,1,2])([30, 4.9, 1]), inferiorOrizzontalGW, inferiorVerticalGW ]);

var superiorOrizzontalGW = SIMPLEX_GRID([
  REPLICA(5)([2]), 
  [0.1], 
  [0.1,-2.8,0.1] 
  ]);

var superiorVerticalGW = SIMPLEX_GRID([
  REPLICA(5)([0.1,-1.8,0.1]), 
  [0.1], 
  [3] 
  ]);

var superiorGlassWindow = STRUCT([ T([0,1,2])([30, 13.67, 1]), superiorOrizzontalGW, superiorVerticalGW ]);

var inferiorGlassDoorOrizz = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([1.125]), 
  [0.1,-2.8,0.1] 
  ]);
  
var inferiorGlassDoorVert = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([0.1,-0.925,0.1]), 
  [3]
  ]);

var inferiorGlassDoor = STRUCT([ T([0,1,2])([30,5,1]), inferiorGlassDoorVert,inferiorGlassDoorOrizz ]);


var superiorGlassDoorVert = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([1.065]), 
  [0.1,-2.8,0.1] 
  ]);
  
var superiorGlassDoorOrizz = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([0.1,-0.865,0.1]), 
  [3]
  ]);

var superiorGlassDoor = STRUCT([ T([0,1,2])([40,13.67,1]), superiorGlassDoorVert, superiorGlassDoorOrizz ]);

//la porta che unisce le due vetrate
var bigDoor = T([0,1])([31,7.25])(SIMPLEX_GRID([[1], [6.5], [3]]));

var rightRoof = T([0,1])([24,4])(SIMPLEX_GRID([[23],[13],[-1,-3,0.3]]));




//Struttura lato destro dell'edificio
var rightBuildingStructure = STRUCT([ portantRightBuildingWall1,
																			portantRightBuildingWall2,
																			portantRightBuildingWall3,
																			portantRightBuildingWall4,
																			portantRightBuildingWall5,
																			externalWallRoom1,
																			externalWallRoom2,
																			internalRoomWall,
																			inferiorGlassWindow,
																			superiorGlassWindow,
																			inferiorGlassDoor,
																			superiorGlassDoor,
																			bigDoor,
																			rightRoof,
																			windowsSmallPool]);



//Muri di contorno e strutture in muratura 

var portantExternalWall = T([0,1])([1,1])(SIMPLEX_GRID([ [0.2], [16], [3] ]));
var portantExternalWall2 = T([0,1])([1,1])(SIMPLEX_GRID([ [7], [0.2], [3] ]));

//Colonnato
var buildColumn = function (array_of_points){
	var column = function (point){
    var x = point[0];
    var y = point[1];
    
		var p1 = [x,y]
		c1 = T([0,1,2])([x - 0.075, y - 0.1,1])(SIMPLEX_GRID([[0.15],[0.2],[3]]));
		c2 = T([0,1,2])([x - 0.1, y - 0.075,1])(SIMPLEX_GRID([[0.2],[0.15],[3]]));
		var column = STRUCT([c1,c2]);
		DRAW(column);
	}

	MAP(column)(array_of_points);
}

var murature = STRUCT([bigWall,
											 banches,
											 leftBuildingStructure,
											 rightBuildingStructure,
											 portantExternalWall,
											 portantExternalWall2]);

//costruzione colonne (stesse coordinate della planimetria)

var array_of_points = [[38.8,7],[38.8,14],[32.2,7],[32.2,14],[26,7],[26,14],[45.5,7],[45.5,14]]

buildColumn(array_of_points);


var pavilion = STRUCT([baseStucture,murature]); 

DRAW(pavilion);
