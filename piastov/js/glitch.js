function makeGlitch(){
    let randomTimeout = Math.random() * 25000 + 2000;
    setTimeout(() => {

        document.getElementById("glitch").style.backgroundImage = 'url("../imgs/glitch/glitch' + Math.round(Math.random() * 3) + '.gif")';
        document.getElementById("glitch").style.display = "block";
        setTimeout(() => {
            document.getElementById("glitch").style.display = "none";
        }, 300);

        makeGlitch();
    }, randomTimeout)
}

makeGlitch();