const Doors = 100;

function setUp() {
    doorStates = createDictionaryOfNumbersAndStates();
    startEnteringDoors(doorStates);
}

function createDictionaryOfNumbersAndStates() {
    let doorStates = [];

    for(id=1; id<=Doors; id++) {
        doorStates[id] = {
            doorID: (id),
            doorClose: true
        }
        //doorStates.doorClose = true
    }

    return doorStates
}

function startEnteringDoors(doorStates) {
    for(passNumber=1; passNumber<=Doors; passNumber++) {
        toggleDoorStates(getIDNumbersDivisibleByCurrentPass(passNumber), doorStates);
    }

    console.log(doorStates);
}

function getIDNumbersDivisibleByCurrentPass(currentPass) {
    let doorsToToggle = [];
    for(currentDoor=1; currentDoor<=Doors; currentDoor++) {
        if(currentDoor%currentPass === 0) {
            doorsToToggle.push(currentDoor);
        }
    }

    return doorsToToggle
}

function toggleDoorStates(doorsToToggle, doorStates) {
    doorsToToggle.forEach((idPass, index, doorsToToggle) => {
        console.log(doorStates[idPass].doorClose);
        doorStates[idPass].doorClose = !(doorStates[idPass].doorClose);
    })
}

setUp();