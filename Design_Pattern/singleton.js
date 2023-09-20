class Singleton {
    constructor() {
        if (!Singleton.a) {
            Singleton.a = this
        }
        return Singleton.a
    }

    getInstance() {
        return this.a
    }
}

const a = new Singleton()
console.log(a)
const b = new Singleton()
console.log(b)