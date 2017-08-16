paper.install(window);
var sk = 'https://gist.githubusercontent.com/sashakulikov/8710478ab71724241f064dd0793a3781/raw/8a3e4d3dff5d1da4464d6109b8fe6aaca704d214/sk-1.svg';
var paperProjCanvasless = new paper.Project();
var sssk = new Group();
project.importSVG(sk, function(item) {
    var sssk = item;
    item.position = [Math.random()*view.size.width, Math.random()*view.size.height];
    item.scale(1);
    item.rotate(Math.random()*(-60));
    item.shadowColor = new Color(0, 0, 0);
    item.onMouseDrag = function(event) {
    item.position += event.delta;

}
});
