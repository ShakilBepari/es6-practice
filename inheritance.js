class A{
    add(){
        console.log("Class A")
    }
}
class B extends A{
    add(){
        console.log('Class B')
    }
}
class C extends B{
    add(){
        console.log('Class C')
    }
}

const a = new A();
const b = new B();
const c = new C()
a.add()
b.add();
c.add()