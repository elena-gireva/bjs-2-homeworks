"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  discriminant = b**2-4*a*c;

  if (a===0){
    alert(`Коэффициент "a" не может быть равным нулю!`); 
  }
  
  else if (discriminant < 0) {
    alert("Дискриминант = " + discriminant + " Корней нет!"); 
  } 
  else if (discriminant === 0) {
    let x1 = (-b/2*a);
    arr.push(x1);
  } 
  else {
    let x1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let x2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(x1,x2);
  };

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
