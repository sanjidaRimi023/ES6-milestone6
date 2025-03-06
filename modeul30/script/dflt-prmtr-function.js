const person = {
    name : "rimi",
    age : 19,
    Roll : 711909
}
 person.name = "sanjida";
//  console.log(person);

 const student = ['rimi', 'rihan', 'mahir', 'mahdi'];

// normal output

// console.log(student);

// for loop use 
 for(let i =0; i < student.length; i++){
    const element = student[i];
    // console.log(element);
 }
// normal function
function total (mark1, mark2){
    const result = mark1 + mark2;
    // console.log(result);
}
total(90, 80);

// function user default parameter 

function mark(math=0, english=0){
    const totalMark = math + english;
    // console.log(totalMark);
}
mark(45) //math r english sudu dile output NaN asbe 
mark(43) // math = 0 and english = 0 diye ja argumet deya ace tai asbe. aitai hosche default parameters

// default parameter depend on his function equation 