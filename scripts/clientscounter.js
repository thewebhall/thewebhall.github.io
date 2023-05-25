var CLIENT_CTN = 15;

function animateClients(i, clients){
    let circle = document.getElementById('inner-circle');
    // let outcircle = document.getElementById('out-circle');

    if(i < clients * 2) i++;
    else return;

    setTimeout(() => {
        circle.style.width = (i*6) + "px";
        circle.style.height = (i*6) + "px";
        circle.style.lineHeight = (i*6) + "px";
        circle.innerText = Math.round(i / 2);

        // outcircle.style.width
        animateClients(i, clients);
    }, 20);
}


