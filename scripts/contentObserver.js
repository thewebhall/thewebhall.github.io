
class ContentObserver{

    constructor(){
        this.items = [];
        this.in = [];
        this.actions = [];
        this.hidder = [];
    }

    addItem(id, action, hidder=null){
        let item = document.getElementById(id);
        this.items.push(item);
        this.actions.push(action);
        this.hidder.push(hidder);
        this.in.push(false);
    }

    observe(){
        for(let i=0; i<this.items.length; i++){
            let item = this.items[i];
            let pos = item.getBoundingClientRect().top;

            if(pos < (window.innerHeight / 1.4)){
                if(!this.in[i]){
                    this.actions[i]();
                    this.in[i] = true;
                }
            }
            else if(pos >= window.innerHeight){
                if(this.in[i]){
                    if(this.hidder[i]) this.hidder[i]();
                    else this.actions[i]();
                    this.in[i] = false;
                } 
            }
        }
    }

    placeListener(){
        window.addEventListener('scroll', () => { this.observe(); });
    }

    obseverWithInterval(time){
        this.observe();
        setTimeout(() => { this.obseverWithInterval(time)}, time);
    }
}


let contentObserver = new ContentObserver();
contentObserver.addItem('basic-info', () => {
    document.getElementById('icon-idea').classList.toggle('inflate-animation');
    document.getElementById('icon-design').classList.toggle('inflate-animation');
    document.getElementById('icon-manage').classList.toggle('inflate-animation');

    document.getElementById('text-idea').classList.toggle('fadeIn-animation');
    document.getElementById('text-design').classList.toggle('fadeIn-animation');
    document.getElementById('text-manage').classList.toggle('fadeIn-animation');
});

contentObserver.addItem('sboxes', () => {
    document.getElementById('sboxes').classList.toggle('colorFlip-animation');
  //  document.getElementById('portfolio').classList.toggle('colorFlip-animation');
    document.getElementById('box1').classList.toggle('pushLeft-animation');
    document.getElementById('box2').classList.toggle('pushRight-animation');
})

// contentObserver.addItem('portfolio', () => {
//     console.log("OBSERVING PORTOFLIO!");
//     document.getElementById('portfolio').classList.toggle('colorFlipReverse-animation');
//     document.getElementById('out-circle').classList.toggle('fillUp-animation');
//     animateClients(1, 6);
// })


contentObserver.addItem('contact-section', () => {
    //document.getElementById('contact-section').classList.toggle('colorFlipReverse-animation');
})




contentObserver.placeListener();
//contentObserver.obseverWithInterval(500);