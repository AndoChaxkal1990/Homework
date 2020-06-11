// 1. Exercises

class Author {
    constructor(name, gender, email){
        this.name=name;
        this.gender=gender;
        this.email=email;
    }
    get name(){
        return this._name;
    }
    set name(v){
        this._name=v;
    }
    get gender(){
        return this._gender;
    }
    set gender(v){
        this._gender=v;
    }
    get email(){
        return this._email;
    }
    set email(v){
        this._email=v;
    }
    toString(){
        console.log (this.name,this.gender,this.email)
    }
}

class Book{
    get name(){
        return this._name;
    }
    set name(v){
        this._name=v;
    }
    get outher(){
        return this._outher;
    }
    set outher(v){
        if(v instanceof Author){
            this._outher=v;
        }
    }
    get price(){
        return this._price;
    }
    set price(v){
        this._price=v;
    }
    get quantity(){
        return this._quantity;
    }
    set quantity(v){
        this._quantity=v;
    }
    getProfit (){
        return ((this.price)*(this.quantity))
    }
    toString(){
        console.log(this.name, this.price, this.quantity, this.profit)
    }
}

// 2. Exercises

class Account {
    constructor(name,id,balance){
        this.name=name;
        this._id=id;
        this.balance=balance;
    }
    get name(){
        return this._name;
    }
    set name(v){
        this._name=v;
    }
    get balance(){
        return this._balance;
    }
    set balance(v){
        this._balance=v;
    }
    get id(){
        return this._id
    }
    credit(amount){
        this.balance+=amount;
    }
    debit(amount){
        if(amount>this.balance){
            console.log("Amount exceeded balance")
        }else{
            this.balance-=amount;
        }
    }
    transferTo(anotherAccount, amount){
        if(amount>this.balance){
            console.log("Amount exceeded balance")
        }else{
            anotherAccount.balance+=amount
            this.balance-=amount
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        if(accountFirst instanceof Account && accountSecond instanceof Account){
            for(let key in accountFirst){
                if(accountFirst[key]!==accountSecond[key]){
                    return false
                }
            }
            return true
        }
        return false
    }
    toString(){
        console.log(this.name, this.id, this.balance)
    }
}


// 3. Exercises

class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.age=age;
    }
    get firestName(){
        return this._firstName;
    }
    set firestName(v){
        this._firstName=v
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(v){
        this._lastName=v;
    }
    get gender(){
        return this._gender;
    }
    set gender(v){
        this._gender=v;
    }
    get age(){
        return this._age;
    }
    set age(v){
        this._age=v;
    }
    toString(){
        console.log(this.firstName, this.lastName, this.gender, this.age)
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee){
        super(firstName, lastName, gender, age);
        this.program=program;
        this.year=year;
        this.fee=fee;
        this.data=new Map();
    }
    get year(){
        return this._year;
    }
    set year(v){
        this._year=v;
    }
    get fee(){
        return this._fee;
    }
    set fee(v){
        this._fee=v;
    }
    get program(){
        return this._program;
    }
    set program(v){
        if(Array.isArray(v)){
            for(let i of v){
                if(typeof i!='string'){
                    return
                }
            }
            this._program=v;
        }
    }
    passExam(program, grade){
        this.data.set(program, grade);
        if(this.program.length!==this.data.size){
            return
        }
        for(let value of this.data.values()){
            if(value<50){
                return "Ktrvar aper, kgas likvidin"
            }
        }
        this.year+=1;
    }
    toString(){
        console.log(this.firstName,this.data)
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay){
        super(firstName, lastName, gender, age);
        this.program=program;
        this.pay=pay;
    }
    get program(){
        return this._program;
    }
    set program(v){
        if(typeof v==='string'){
            this._program=v;
        }
    }
    get pay(){
        return this._pay;
    }
    set pay(v){
        this._pay=v;
    }
    toString(){
        console.log(this.firstName,this.program, this.pay)
    }
}

