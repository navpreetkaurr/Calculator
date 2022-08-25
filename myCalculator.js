
//function to display content
function display(val){
  document.getElementById('result').value+= val;
  return val;
}

//function to clear the screen using the clear screen button
function clearScreen(){
  document.getElementById('result').value= ' ';
}

//main function to solve the equation being entered using buttons
function solve(){
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
  return y;
}

//funtion to chnage the sign but still trying to figure it out
function changeSign(){
    let x= document.getElementById('result').value;
    let y= x * (-1);
    return y;
}