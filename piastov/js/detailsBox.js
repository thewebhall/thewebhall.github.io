
async function openBox(riddleID, clueID){
    let detailBox = document.getElementById("details-box");
    let clue = await getRiddleClue(riddleID, clueID);

    detailBox.innerHTML = '<div id="close-button" onclick="closeBox()"> X </div>';

    if(clue)
    {
        clue.clueData.forEach(d => {
            if(d.type == "text")
            {
                let textElement = document.createElement("p");
                textElement.classList.add("details-content");
                textElement.innerHTML = d.content;
                detailBox.appendChild(textElement);
            }
            else if(d.type == "img")
            {
                let  imgElement = document.createElement("img");
                imgElement.classList.add("details-img");
                imgElement.src = d.content;
                imgElement.alt = d.alt;
                detailBox.appendChild(imgElement);
            }
        });
    
        detailBox.style.display = "flex";
    }
}


function closeBox(){
    document.getElementById("details-box").style.display = "none";
}


async function getRiddleClue(riddleID, clueID){
    let riddles = await getRiddles();
    if(riddles){
        let riddle = riddles.find(r => r.riddleID == riddleID);

        if(riddle){
            return riddle.clues.find(c => c.clueID == clueID);
        }
    }

    return null;
}

async function getRiddles(){
    let res = await fetch("../js/riddles.json");
    let riddles = await res.json();

    return riddles;
}

async function showRiddles(){
    let riddles = await getRiddles();
    let content = document.getElementById("content");
    content.innerHTML = "";

    riddles.forEach(r => {
        let retractableContainer = document.createElement("div");
        retractableContainer.classList.add("retractable-container");
        retractableContainer.innerHTML = '<img id="' + r.riddleID + "-arrow" + '" class="retract-button" src="../imgs/arrow.png" onclick="retractContainer(\'' + r.riddleID + '\')"/> <h2 class="riddle-title">' + r.title  + '</h2>';
        let retractedContent = document.createElement("div");
        retractedContent.classList.add("retracted-content");
        retractedContent.classList.add("hidden");
        retractedContent.id = r.riddleID;

        r.clues.forEach(c => {
            let clueContainer = document.createElement("div");
            clueContainer.classList.add("container");
            
            if(c.clueData[0] && c.clueData[0].type == "text")
            {
                let contentTrim = c.clueData[0].content.substring(0, 400);
                clueContainer.innerHTML = '<p>' + contentTrim + '</p>';
            }
            else
            {
                clueContainer.innerHTML = '<p>' + c.clueData[0].alt + '</p>';
            }

            clueContainer.innerHTML += '<button onclick="openBox(\'' + r.riddleID + '\', \'' + c.clueID + '\')"> Czytaj dalej...</button>';
            retractedContent.appendChild(clueContainer);
            retractableContainer.appendChild(retractedContent);
        });

        content.appendChild(retractableContainer);
    });
}

function retractContainer(riddleID){
    document.getElementById(riddleID).classList.toggle("hidden");
    document.getElementById(riddleID + "-arrow").classList.toggle("rotate");
}

showRiddles();
