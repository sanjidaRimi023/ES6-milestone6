class girl {
    live = 'china';
    home = 'bangladesh';
    details() {
        // console.log("Her hometown Dhaka");
    }

}

// const rimi = new girl();
// rimi.details();

// const rihan = new girl();
// console.log(rihan.home);

// class with constructor function

class product {
    constructor(name, model, size, price) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.size = size;
    }

    phoneName() {
        // console.log(`my phone name is ${this.name} .the model of my phone is ${this.model} . the phone price ${this.price}`);
    }
}
const mobile1 = new product('techno', 'techno tech', 6.5, 16000);
const mobile2 = new product('Iphone', '16 pro max', 6.0, 102300);

// mobile1.phoneName();
// mobile2.phoneName();

