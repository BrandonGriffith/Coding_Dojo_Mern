class Ninja{
    constructor(name){
        this.name = name;
        this.health = 50;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(` Name: ${this.name} \n Strength: ${this.strength} \n Speed: ${this.speed} \n Health: ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();



class Sensei extends Ninja{
    constructor(name){
        super();
        this.name = name;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}




const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
