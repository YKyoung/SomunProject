const cm = {
    canvas: undefined,
    context: undefined,
    canvasWidth: 0,
    canvasHeight: 0,
    colors: [
        '222, 35, 18', //red
        '238, 150, 63', //orange
        '255, 228, 0', //Yellow
        '63, 145, 255', //blue
        '185, 22, 226'  //purple
    ],
    colors2: [
        '255, 160, 150', //red
        '255, 200, 120', //orange
        '255, 250, 180', //Yellow
        '200, 220, 255', //blue
        '239, 173, 255'  //purple
    ]
};

(function(){

    cm.canvas = document.querySelector('#the-canvas');
    cm.context = cm.canvas.getContext('2d');
    const canvasContainer = document.querySelector('.canvas-container');
    //const dpr = window.devicePixelRatio > 1 ? 2 : 1;  //2는 고해상도
    const dpr = 1;
    const mouse ={x: 0, y: 0};
    const lights =[];
    let indexOfLight = 0;

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
    //const line = new Line(200, 300);
    //const light = new Light(300, 400);

    function draw() {
        //particle.draw();
        cm.context.clearRect(0, 0, cm.canvasWidth, cm.canvasHeight);
        //particle.draw();
        //line.draw();
        //light.draw();
        for (let i = 0; i < lights.length; i++) {
            lights[i].draw();
        }

        requestAnimationFrame(draw);
    }

    cm. canvas.addEventListener('click', function(e){
        if(indexOfLight >= cm.colors.length) return;
        
        //mouse.x = e.layerX;  // browser마다 다를 수 있음
        //mouse.y = e.layerY;
        mouse.x = e.clientX - cm.canvas.getBoundingClientRect().left;
        mouse.y = e.clientY - cm.canvas.getBoundingClientRect().top;

        const light = new Light(indexOfLight, mouse.x, mouse.y);
        lights.push(light);
        indexOfLight++;
        //console.log(indexOfLight);

    });

    window.addEventListener('resize', setSize);
    window.addEventListener('load', setup);


})();
