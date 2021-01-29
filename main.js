const cm = {
    canvas: undefined,
    context: undefined,
    canvasWidth: 0,
    canvasHeight: 0,
    playedFrame: 0,
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
    ],
    
    charactersSrc: {
        somun: 'images/sprite-somun.png',
        ji: 'images/sprite-ji.png'
    }
};

(function(){

    cm.canvas = document.querySelector('#the-canvas');
    cm.context = cm.canvas.getContext('2d');
    const canvasContainer = document.querySelector('.canvas-container');
    //const dpr = window.devicePixelRatio > 1 ? 2 : 1;  //2는 고해상도
    const dpr = 1;
    const mouse ={x: 0, y: 0};
    const lights =[];
    const characters = [];
    const allItems = [];
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

    function setCharacters() {
        const somun = new Character(
            cm.charactersSrc.somun,
            'underAttack',
            (cm.canvasWidth*0.5) - 256 + 64,
            (cm.canvasHeight*0.5) - 64
        );
        const ji = new Character(
            cm.charactersSrc.ji,
            'attack',
            (cm.canvasWidth*0.5) - 64,
            (cm.canvasHeight*0.5) - 64
        );

        characters.push(somun);
        characters.push(ji);

        for(let i = 0; i < characters.length; i++){
            allItems.push(characters[i]);
        }
    }

    function setup() {
        setSize();
        setCharacters();
        draw();
    }

    

    function setZOrder() {
        let temp;
        for (let i = 0; i < allItems.length; i++) {
            for (let j = 0; j < allItems.length -i; j++) {
                if (j < allItems.length -1) {
                    if (allItems[j].yForOrder > allItems[j+1].yForOrder) {
                        temp = allItems[j];
                        allItems[j] = allItems[j+1];
                        allItems[j+1] = temp;
                    }
                }
            }
        }

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
        //let light;
        //let character;
        //let scaleRatio;
        let item;
        let scaleRatio;

        for(let i = 0; i < allItems.length; i++) {
            item = allItems[i];
            //console.log(item);
            if (item instanceof Character) {
                item.draw();
            }else {
               // scaleRatio = light.y/cm.canvasHeight + 1;
                scaleRatio = item.y/cm.canvasHeight + 1;
                cm.context.save();  //밑의 상태를 저장
                cm.context.translate(item.x, item.y);
                cm.context.scale(scaleRatio, scaleRatio);
                cm.context.translate(-item.x, -item.y);
                item.draw();
                cm.context.restore();   
            }
        }

       /* for (let i = 0; i < characters.length; i++) {
            character = characters[i];
            character.draw();
        }

        for (let i = 0; i < lights.length; i++) {
            light = lights[i];
            scaleRatio = light.y/cm.canvasHeight + 1;
            cm.context.save();  //밑의 상태를 저장
            cm.context.translate(light.x, light.y);
            cm.context.scale(scaleRatio, scaleRatio);
            cm.context.translate(-light.x, -light.y);
            light.draw();
            cm.context.restore();
            //console.log(light.y);
        } */

        cm.playedFrame++;
        if (cm.playedFrame > 1000000){
            cm.playedFrame = 0;
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
        allItems.push(light);
        
        indexOfLight++;
        //console.log(indexOfLight);

        if(indexOfLight >= cm.colors.length){
            characters[0].updateAction('attack');
            characters[1].updateAction('underAttack');

        }
        console.log("ggggg");

        setZOrder();

    });
    
    window.addEventListener('resize', setSize);
    window.addEventListener('load', setup);


})();
