const readline = require("readline");

class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
        });
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log("Dialing", phoneNumber);
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }
}

class PhoneNumberObserver {
    update(phoneNumber) {
        console.log("Phone number dialed:", phoneNumber);
    }
}

class CustomObserver {
    update(phoneNumber) {
        console.log("Now Dialing", phoneNumber);
    }
}

// Example usage:
const telephone = new Telephone();
const observer1 = new PhoneNumberObserver();
const observer2 = new CustomObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function promptUser() {
    
telephone.addPhoneNumber("08064572868");
telephone.dialPhoneNumber("08064572868");
    console.log("\n 08064572868");
    console.log("Now Dailing \n 08064572868")
    console.log("Exit");
}

rl.question("Enter your choice: ", function (phoneNumber) {
    switch (phoneNumber) {
        case "1":
            telephone.dialPhoneNumber("08064572868");
            promptUser();
            break;
        case "2":
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please input a correct choice.");
            promptUser();
    }
});

promptUser();
