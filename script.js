const body = document.querySelector('body');

body.addEventListener('click', e => {
    adicionarFlores(parseInt((Math.random() * 6)));
});

function adicionarFlores(quant) {
    adicionarFlor();
    for(let i = 0; i < quant; i++)
        setTimeout(() => adicionarFlor(), 100 * (i+1));
}

function adicionarFlor() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    const florDeg = parseInt(Math.random() * 360 - 1);
    const posX = parseInt(Math.random() * clientWidth - 1);
    const posY = parseInt(Math.random() * clientHeight - 1);
    const tamanho = parseInt((Math.random() * 70) + 90);
    // const hueOp = [10, 40, 30, 170, 180, 190, 200, 220, 260, 270, 280, 300, 320, 330, 340];
    const hueOp = [];
    for(let i = 0; i < 360; i += 45)
        hueOp.push(i);

    const divFlor = document.createElement('div');
    const imgFlor = document.createElement('img');

    imgFlor.src = './red-rose.webp';
    divFlor.appendChild(imgFlor);
    divFlor.style = `
    transform: rotate(${florDeg}deg); top: ${posY - 100}px; left: ${posX - 100}px; width: ${tamanho}px; height: ${tamanho}px;
    filter: blur(${ Math.random() * 3 }px) brightness(1.1) contrast(4) hue-rotate(${ hueOp[parseInt(Math.random() * hueOp.length)] }deg);
    `;

    document.getElementById('area-das-flores').appendChild(divFlor);
}