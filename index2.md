('use strict');



class Animal {
    constructor();
    console.log(' i am an animal');
    }


class Dog extends Animal{

    constructor(breed = 'mutt'){
        console.log('i am a dog');
        super();
        this.breed = breed;
    }
    speak(){
        return 'i am a ' + this.breed + ' barking';
    }
}

class Cat extends Animal{
    constructor(breed = 'mutt'){
        super();
        this.breed = breed;
    }
    speak(){
        return 'i am a ' + this.breed + ' barking';
    }
}


// lela = new Dog('bullalal');
// lela.birth();
// console.log(lela.bark());

const sophie = new Cat ();
console.log(sophie.speak());
console.log(sophie);

const felix = new Cat();