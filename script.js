
 

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  

  var numbers = [1,2,3,4];
  var classNames =["one", "two", "three", "four"];
  const colors = ["red", "blue", "red", "blue"];
  
  shuffle(numbers);
  console.log(numbers);


  document.getElementById(classNames[0]).style.order = numbers[0];
  document.getElementById(classNames[1]).style.order = numbers[1];
  document.getElementById(classNames[2]).style.order = numbers[2];
  document.getElementById(classNames[3]).style.order = numbers[3];




  



