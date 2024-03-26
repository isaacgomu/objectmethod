console.log("hello world!");

const person = {
  name: "Bob",
  age: 30,
  favouriteColor: "red",
  sayHello: function () {
    console.log("Hello!");
  },
  getAge: function () {
    return person.age;
  },
};

person.sayHello();

const age = person.getAge();

console.log(age);

const car = {
  make: "Fiat",
  model: "Panda",
  Color: "Black",
  advert: function () {
    return `Buy my ${car.make} ${car.model}! It is ${car.Color} and it works.`;
  },
};

const carAd = car.advert();

console.log(carAd);
