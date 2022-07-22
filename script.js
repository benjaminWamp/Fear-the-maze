const options = {
    size: 12,
    walls: true,
    enemies: true,
    hearts: true,
    loot: true,
    ice: true,
};

let position = getHeroPosition();

createGrid(options);
setHearts(3)

function addHeart(){
    if(getCellContent(position.x, position.y) === HEART && getHearts() < 5){
            setHearts(getHearts()+1)
        }
}

function figth(){
    if(getCellContent(position.x, position.y) === MONSTER){
        if(getHearts() > getMonsterPower(position.x, position.y)){
            setHearts(getHearts()- getMonsterPower(position.x, position.y))
            killMonster(position.x, position.y)
        } else{
            alert('Tu as perdu !')
        }
    }
}

function addTreasure(){
    if(getCellContent(position.x, position.y) === LOOT , getTreasures() != 0){
        loot(position.x, position.y);
    } else{
        alert('Vous avez récupérer tout les trésors !')
    }
}

function frozen(){
    if(position = isFrozen(position.x, position.y)){

    }
    
}
function goUp(){
    let position = getHeroPosition();
    let walls = getWalls(position.x, position.y);
    if(!walls.north){
        setHeroPosition(position.x, position.y-1);
        addHeart();
        figth();
        addTreasure();
        if(position = isFrozen(position.x, position.y)){
        goUp();
        }
    }
}

function goDown(){
    position = getHeroPosition();
    walls = getWalls(position.x, position.y);
    if(!walls.south){
        setHeroPosition(position.x, position.y+1);
        addHeart();
        figth();
        addTreasure();
        if(position = isFrozen(position.x, position.y)){
        goDown();
        }
    }
}

function goRight(){
    position = getHeroPosition();
    walls = getWalls(position.x, position.y);
    if(!walls.east){
        setHeroPosition(position.x+1, position.y);
        addHeart();
        figth();
        addTreasure();
        if(position = isFrozen(position.x, position.y)){
        goRight();
        }
    }
}

function goLeft(){
    position = getHeroPosition();
    walls = getWalls(position.x, position.y);
    if(!walls.west){
        setHeroPosition(position.x-1, position.y);
        addHeart();
        figth();
        addTreasure();
        if(position = isFrozen(position.x, position.y)){
        goLeft();
        }
    }
}

document.querySelector('#go-up').onclick = goUp;
document.querySelector('#go-down').onclick = goDown;
document.querySelector('#go-right').onclick = goRight;
document.querySelector('#go-left').onclick = goLeft;

