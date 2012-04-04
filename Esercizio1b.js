

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


var pool = POLYLINE([[1,1],[21,1],[21,10],[1,10],[1,1]]);

//Tetto della strttura sinistra
var boardBuildingLeft = POLYLINE([[0,13],[10,13],[10,23],[0,23],[0,13]]);

var buildingLeft =STRUCT([boardBuildingLeft]); 

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

var bigWall = POLYLINE ([[10,15],[24,15]]);

//Panchine situate di fronte alla piscina
var benches = STRUCT([	POLYLINE([[10,14],[10,14.6],[22,14.6],[22,14],[10,14]]),
						POLYLINE([ [11.354,14],[11.354,14.6] ]),
				        POLYLINE([ [13.5,14],[13.5,14.6] ]),
						POLYLINE([ [15.714,14],[15.714,14.6] ]),
						POLYLINE([ [17.85,14],[17.85,14.6] ]),
						POLYLINE([ [19.994,14],[19.994,14.6] ]) ]);

var boardsBuildingRight = POLYLINE([[24,4],[24,17],[47,17],[47,4],[24,4]]);

var externalRightPool = POLYLINE([[47,5],[51,5],[51,16],[47,16],[47,5]]);
														
var buildingRight = STRUCT([ boardsBuildingRight,externalRightPool]);

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



var floorPlan = STRUCT([board,pool,buildingLeft,scales,bigWall,benches,buildingRight]); 


DRAW(floorPlan);
