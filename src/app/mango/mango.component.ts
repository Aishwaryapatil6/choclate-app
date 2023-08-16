import { Component } from "@angular/core";
import { NewPipePipe } from "../pipes/new-pipe.pipe";
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
    myadress: address = {
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
    printData: any = this.date;
    menu: any = {
        coffee: [
            { name: "coffee1", price: "1rs" },
            { name: "coffee2", price: "2rs" },
            { name: "coffee3", price: "3rs" }],
        snacks: [
            { name: "snacks1", price: "1rs" },
            { name: "snacks2", price: "2rs" },
            { name: "snacks3", price: "3rs" },
            { name: "snacks4", price: "4rs" }],
        drinks: [
            { name: "Coco", price: "25rs" },
            { name: "Pepsi", price: "30rs" }]
    };
    menu2: any = {
        coffee: [
            { coffee1: "1rs" },//0
            { coffee2: "2rs" },//1
            { coffee3: "3rs" }],//2
        snacks: [
            { snacks1: "1rs" },
            { snacks2: "2rs" },
            { snacks3: "3rs" },
            { snacks4: "4rs" }],
        drinks: [
            { Coco: "25rs" },
            { Pepsi: "30rs" }]
    };

    // objFromTs: any;
    constructor(public newpipi: NewPipePipe) {
        this.printData = this.newpipi.transform(this.printData);
        setInterval(() => {
            this.isColorChange = !this.isColorChange
            this.forSwitch += 1;
        }, 1000);
    }

    returnKeys(obj:Object){
        return Object.keys(obj);
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

    getDateForpipes(datePar: Date) {
        return datePar;
    }

}