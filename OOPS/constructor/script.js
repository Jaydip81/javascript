class Animal {
  name;
  type;

  constructor() {}

  setdata(name, type) {
    this.name = name;
    this.type = type;
  }
  getdata() {
    console.log(`name :${this.name}`);
    console.log(`type :${this.type}`);
  }
}

let dog = new Animal();
dog.setdata("Cow", "Domestic");
dog.getdata();
