

class Bubbles{
    
    static flowBubbles(amount){
        for(let i=0; i<amount; i++){
            let bubble = document.createElement('div');
            bubble.classList.add('random-bubble');
            let size = Math.round(Math.random() * 35) + 8 + 'px'; 
            bubble.style.width = size
            bubble.style.height = size;

            let toX = Math.round(Math.random() * 70) + 5;
            let toY = Math.round(Math.random() * 70) + 5;

            if(Math.random() > 0.5) toX = -toX;
            if(Math.random() > 0.5) toY = -toY;

            Bubbles.translateTo(bubble, 0, 0, toX, toY, 1);

            document.getElementById('scorebox').appendChild(bubble);
        }
    }


    static translateTo(bbl, nowX, nowY, toX, toY, spd){
        setTimeout(() => {
            if(toX < 0){
                nowX -= 2;
                if(nowX < toX) return;
            } 
            else{
                nowX += 2;
                if(nowX > toX) return;
            }

            if(toY < 0){
                nowY -= 2;
                if(nowY < toY) return;
            } 
            else{
                nowY += 2;
                if(nowY > toY) return;
            }

            bbl.style.transform = 'translate(' + nowX + 'px, ' + nowY + 'px)';
            Bubbles.translateTo(bbl, nowX, nowY, toX, toY, spd);
        }, spd);
    }
}


//Bubbles.flowBubbles(18);