class User{
    name: string
    age:  number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    showName =() => {
        console.log(this.name)
    }
}

const user = new User('Gu', 27)
user.showName()

const otherUser = new User ('LE', 25)
user.showName()
