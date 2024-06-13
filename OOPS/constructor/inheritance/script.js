class A{
    #a;

     setA(a){
        this.#a=a
    }
     getA(){
        return this.#a
    }
}
class B extends A{
    #b;

     setB(b){
        this.#b=b
    }
     getB(){
        return this.#b
    }
    printsum(){
        console.log(this.getB() + this.getA());
    }
}

let b = new B()

b.setA(10)
b.setB(20)
b.printsum()