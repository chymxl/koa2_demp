"use strict";

export default class Person{
    constructor(name = 'Unknown'){
        this.name = name;
    }

    speak(){
        console.log(this.name);
        let a = 3;
        console.log(a);
        
        console.log(a);
    }
}