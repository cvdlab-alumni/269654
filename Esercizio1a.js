/*Esercizio 1: disegno delle due piante del Barcelona Pavilion
1)internal floor plan
*/
var board = POLYLINE([[0,0],
											[39,0],
											[39,1],	
											[36,1],
											[36,4],
											[52,4],
											[52,6],
											[51,6],
											[51,16],
											[47,16],
											[47,17],
											[10,17],
											[10,23],
											[0,23],
											[0,13],
											[1,13],
											[1,2],
											[0,2],
											[0,0]]); 

var portantPoolWall = POLYLINE([[1,13],[1,1],[7,1]]);
COLOR([0,0,0])(portantPoolWall);


var pool = POLYLINE([[1,1],[21,1],[21,10],[1,10],[1,1]]);




var boardBuilding1 = POLYLINE([[0,13],[10,13],[10,23],[0,23],[0,13]]);

var wallBuilding1 = POLYLINE([[1,13],[1,22],[9,22],[9,17],[9,16.6]]);
COLOR([0,0,0])(wallBuilding1);


var roomsBuilding1 = STRUCT([POLYLINE([ [1,17], [7,17] ]),
											POLYLINE([ [8,17], [9,17] ]),
											POLYLINE([ [5,17], [5,18] ]),
											POLYLINE([ [5,19], [5,22] ]),
											POLYLINE([ [5,20], [6,20] ]),
											POLYLINE([ [7,20], [9,20] ]),
											POLYLINE([ [7,22], [7,21] ])]);


var building1 =STRUCT([boardBuilding1,wallBuilding1,roomsBuilding1]); 



//8 gradini divisi in 3 metri (0.375)
var scales = STRUCT([
POLYLINE([ [36.375,1], [36.375,4] ]),
POLYLINE([ [36.75,1], [36.75,4] ]),
POLYLINE([ [37.125,1], [37.125,4] ]),
POLYLINE([ [37.5,1], [37.5,4] ]),
POLYLINE([ [37.875,1], [37.875,4] ]),
POLYLINE([ [38.25,1], [38.25,4] ]),
POLYLINE([ [38.625,1], [38.625,4] ])
]);

var bigWall = POLYLINE ([[6.5,15],[26.5,15]]);

COLOR([0,0,0])(bigWall);

//Panchine situate di fronte alla piscina
var benches = STRUCT([ POLYLINE([[7,14],[7,14.6],[22,14.6],[22,14],[7,14]]),
											 POLYLINE([ [9.214,14],[9.214,14.6] ]),
											 POLYLINE([ [11.354,14],[11.354,14.6] ]),
											 POLYLINE([ [13.5,14],[13.5,14.6] ]),
											 POLYLINE([ [15.714,14],[15.714,14.6] ]),
											 POLYLINE([ [17.85,14],[17.85,14.6] ]),
											 POLYLINE([ [19.994,14],[19.994,14.6] ]) ]);

var boardsBuildingRight = POLYLINE([[24,4],[24,17],[47,17],[47,4],[24,4]]);
//COLOR([0,0,0])(boardsBuildingRight);

														
var wallRightBuilding = POLYLINE([ [37.66,16], [51,16],[51,5],[41.66,5] ]);
COLOR([0,0,0])(wallRightBuilding);

var externalRightWall = POLYLINE([ [30,5], [41.66,5] ]);
//COLOR([0,0,0])(externalRightWall);

var internalMainRightWall = STRUCT([ POLYLINE([ [25.10,7.25], [33.90,7.25] ]),
    																 POLYLINE([ [37.10,11.50], [42.50,11.50] ])]);
COLOR([0,0,0])(internalMainRightWall);




var internalRightWall = STRUCT([ POLYLINE([ [30,5], [30,7.25] ]),
																 POLYLINE([ [31,7.25], [31,13.65] ]),
																 POLYLINE([ [32,7.25], [32,13.65] ]),
														 		 POLYLINE([ [30,13.7], [40,13.7] ]),
																 POLYLINE([ [40,13.7], [40,16] ]),
																 POLYLINE([ [42.50,5.0], [42.50,11.5] ]),
																 POLYLINE([ [38.80,5], [38.80,11.5] ]),
																 POLYLINE([ [44.80,6.80], [44.80,14.20]])]);



var buildingRight = STRUCT([ boardsBuildingRight, wallRightBuilding, externalRightWall, internalMainRightWall, internalRightWall]);

var portantRightWall = POLYLINE([[46,16],[51,16],[51,5],[46,5]]);
COLOR([0,0,0])(portantRightWall);

var column = function (x,y){
	var p1 = [x + 0.2, y];
	var p2 = [x , y + 0.2];
	var p3 = [x - 0.2, y];
	var p4 = [x, y - 0.2];
	var column = POLYLINE([p1,p2,p3,p4,p1]);
	
	COLOR([0,0,0])(column);
	DRAW(column);
}

column(38.8,7);
column(38.8,14);
column(32.2,7);
column(32.2,14);
column(26,7);
column(26,14);
column(45,7);
column(45,14);



var floorPlan = STRUCT([portantPoolWall,portantRightWall,board,pool,building1,scales,bigWall,benches,buildingRight]); 


DRAW(floorPlan);



