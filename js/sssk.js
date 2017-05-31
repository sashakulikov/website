
var sk = 'https://gist.githubusercontent.com/sroechn/8710478ab71724241f064dd0793a3781/raw/8a3e4d3dff5d1da4464d6109b8fe6aaca704d214/sk-1.svg';

var sssk = new Group();

project.importSVG(sk, function(item) {
    var sssk = item;
    item.translate(view.size.width/2, view.size.height/2);
    item.scale(1);
    item.rotate(-19);
    item.onMouseDrag = function(event) {
    item.position += event.delta;
}
	});
