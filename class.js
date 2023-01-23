class Student{
    constructor(Sname, Sage){
        this.name = Sname;
        this.age = Sage;
        this.school = 'Naria Govt. College';
    }
}

const mahi = new Student('Mahi',23);
const sumon = new Student('Sumon',25);
sumon.age = 20;
const pihu = new Student('Pihu',17)
console.log(sumon)