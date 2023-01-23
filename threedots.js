const age = [17,15,16,32];
const age2 = [14,21,15,42,22]
const age3 = [12,32,45];
//const total = age.concat(age2).concat([100,200]).concat(age3);
const total2 = [...age,...age2,...[100],1000,...age3]

const businessMan = 500;
const minister = 350;
const socib = 200;

const maximum = Math.max(...age,...age2)
console.log(maximum);