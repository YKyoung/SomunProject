const cm = {
    canvas: undefined,
    context: undefined,
    canvasWidth: 0,
    canvasHeight: 0
};

(function(){

    cm.canvas = document.querySelector('#the-canvas');
    cm.context = cm.canvas.getContext('2d');
    const canvasContainer = document.querySelector('.canvas-container');
    //const dpr = window.devicePixelRatio > 1 ? 2 : 1;  //2는 고해상도
    const dpr = 1;

    function setSize() {
        cm.canvasWidth = canvasContainer.clientWidth;
        cm.canvasHeight = canvasContainer.clientHeight;
        cm.canvas.width = cm.canvasWidth;
        cm.canvas.height = cm.canvasHeight;
        if (dpr > 1){
            cm.context.scale(dpr, dpr);
        }

    } 

    function setup() {
        setSize();
        draw();
    }

    //const particle = new Particle(100, 400);

    const line = new Line(200, 300);

    function draw() {
        //particle.draw();
        cm.context.clearRect(0, 0, cm.canvasWidth, cm.canvasHeight);
        line.draw();
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', setSize);
    window.addEventListener('load', setup);


})();
