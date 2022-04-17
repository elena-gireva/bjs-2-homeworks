function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let student3 = new Student("Lisa", "female", "24");
let student4 = new Student("John", "male", "22");
let student5 = new Student("Jessica", "female", "20");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
student3.setSubject("History");
student5.setSubject("Math");

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  } 
  this.marks.push(mark);
}
Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  } 
  this.marks.push(...mark);
}
Student.prototype.getAverage = function () {
  
  let average = this.marks.reduce((acc,item,idx,arr)=> {
    if (idx === arr.length - 1){
      return (acc+item)/ arr.length;
    }
    else {
      return acc+item;
    }
  }, 0)
  return average;
}

Student.prototype.exclude = function (reason) {
  // if(this.excluded === undefined){ 
    this.excluded = reason;
  // } 
  delete this.marks;
  delete this.subject;
}

student3.addMark(5);
student3.addMark(3);
student3.addMark(4);

student4.addMarks(5,4,4);
student4.addMarks(2,3);

console.log(student3.getAverage()); 
console.log(student4.getAverage()); 
student3.exclude('low grades')

console.log(student3);
console.log(student4);
console.log(student5);