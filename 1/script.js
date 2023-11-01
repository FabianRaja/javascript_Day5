//For the given JSON ,
//iterate over all for loops(for,for in,for of,forEach)

const object={
    name:"fabian",
    age:"21",
    gender:"male",
    batch:"B51 WD2",
    gmail:"fabiraja21052002@gmail.com"
}

//for loop
console.log("FOR LOOP:");

const first=Object.values(object);
for(let i=0;i<first.length;i++){
    console.log(first[i]);
}

console.log("---------------------------");

//for in
console.log("FOR IN:");

for(second in object){
    console.log(`
Keys   : ${second}
Values : ${object[second]}`);
}

console.log("---------------------------");

//for of
console.log("FOR OF:");

const values=Object.values(object);
for(third of values){
    console.log(third);
}

console.log("---------------------------");

//forEach
console.log("FOREACH:")

const data=Object.values(object);
data.forEach((value,index,actualArray)=>{
    console.log(`
value: ${value}
index: ${index}
array: ${actualArray}`);
})