import { Component } from "@angular/core";
export interface myInterface {
    name: string;
    age: number;
    address: address;
}
export interface baseinterface {
    date: Date;
}
export interface address extends baseinterface {
    state: string;
    PinCode: number;
    Country: string;
}
@Component({
    selector: "app-mango",
    templateUrl: "./mango.component.html",
    styleUrls: ["./mango.component.scss"]
})

export class MangoComponent {
    myData: myInterface = {
        name: "string",
        age: 0,
        address: {
            state: "string",
            PinCode: 0,
            Country: "string",
            date: new Date(),
        },
    };
    myadress:address = {
        state: "string",
        PinCode: 0,
        Country: "string",
        date: new Date(),
    }
    isColorChange = false;
    uppercase = "uppercases"
    date = new Date();
    forSwitch = 0;
    forNgFor = [1, 2, 3, 4, 5];

    constructor() {
        // this.myData = this.myadress;
        setInterval(() => {
            this.isColorChange = !this.isColorChange
            this.forSwitch += 1;
        }, 1000);
    }

    tackBy(i: any, value: any) {
        console.log(value);
        return i;
    }
    getTheClass() {
        return this.isColorChange ? 'buttonRed' : 'buttonBlack';
    }

    gettheStyle() {
        return this.isColorChange ? 'red' : 'blue'
    }


}