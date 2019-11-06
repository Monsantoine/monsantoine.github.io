var camoBlack = paper.project.importSVG("svg/camo_90.svg", onLoad());
camoBlack.visible = true;

// Create a new path once, when the script is executed:
var myPath = new Path();
myPath.strokeColor = 'blue';
myPath.strokeWidth = '2px';

// This function is called whenever the user
// clicks the mouse in the view:
function onMouseDown(event) {
	// Add a segment to the path at the position of the mouse:
	myPath.add(event.point);
}
