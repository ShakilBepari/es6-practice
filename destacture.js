// const student = {name:'Sakib Khan', age:22, profession:'actors', address:'dhaka',friends:[10,20,40,60]}
// const {name,profession,age,friends} = student;
// console.log(name,profession)
// console.log(age)
const friend = ['Sakib Khan', 'Amir Khan', 'Salman Kahna', 'Sharukh Khan', 'Arman Khan']

const [firstName,SecendName,...fullname] = friend;
console.log(fullname)