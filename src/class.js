class A {
    constructor(name) {
        this.name = name;
    }

    foo() {
        console.log('A:foo()', this.name);
    }
}

class B extends A {
    constructor(name, type = 0) {
        super(name);
        this.type = type;
    }

    foo() {
        super.foo();
        console.log('B:foo()', this.name, this.type);
    }
}

var b = new B('I\'m boy', 0);
b.foo();

