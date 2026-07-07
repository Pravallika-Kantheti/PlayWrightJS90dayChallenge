class Car {
    //CAB

    //constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation

    }

    //Attributes


    //Behaviour
    drive() {
        console.log("I am driving a", this.name);
    }

}


const tesla = new Car("Tesla Model S");
tesla.drive();

const hyundai = new Car("Hyundai Grand i10");
hyundai.drive();