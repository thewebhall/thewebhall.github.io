var PAGES = [
    ['piastov/index.html', 'Główna'],
    ['piastov/html/game.html', 'Gra'],
    ['piastov/html/riddles.html', 'Tajemnice'],
    ['piastov/html/about.html', 'O nas']
];

var MENU_VISIBLE = false;

function createMenu(){
    let menu = document.getElementById('menu');
    menu.innerHTML = '<h1 id="title"> PIASTOV </h1>';

    let currentPageName = window.location.pathname.split('/').pop();
    if(currentPageName  == "") currentPageName  = 'index.html';

    for(let i=0; i<PAGES.length; i++){
        let link = document.createElement('a');
        link.classList.add('menu-button');
        link.href = PAGES[i][0];
        link.innerHTML = PAGES[i][1];
        
        let pageName = PAGES[i][0].split('/').pop();
        if(pageName == currentPageName){
            link.classList.add('active');
        }

        menu.appendChild(link);
    }
}

function toggleMenu(){
    let menu = document.getElementById('menu');
    let buttons = menu.getElementsByTagName('a');

    

    for(let i=0; i<buttons.length; i++){
        if(MENU_VISIBLE){
            buttons[i].classList.remove('menu-button-mobile');
            buttons[i].classList.add('menu-button');

            menu.style.height = "55px";
            // menu.style.position = "static";
        } 
        else{
            buttons[i].classList.add('menu-button-mobile');
            buttons[i].classList.remove('menu-button');

            menu.style.height = "100%";
            // menu.style.position = "absolute";
        }
    }

    MENU_VISIBLE = !MENU_VISIBLE;
}

createMenu();