class bugatti{

    constructor(){
        if(this.constructor == bugatti){
            throw new Error("plese contect with suppler...")
        }
    }
    car() {
        console.log("you ordered Bugatti Chiron...")
    }
}

class Under_Ettore extends bugatti{

    car(){
        console.log("-----sppler got you-----")
        super.car()
    }
}

let s = new Under_Ettore();

s.car();