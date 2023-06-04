const reslt = document.getElementById('result');

function calc(x){
 
    
   reslt.value += x
}
function result(){
    reslt.value = eval(reslt.value)

}
function toZero(){
    reslt.value = '';
}



function del(){

      reslt.value = reslt.value.slice(0,-1)
     console.log(rslt)
 
}
function calculateSquareRoot() {
    let inputValue = parseFloat(reslt.value);
    let results = Math.sqrt(inputValue);
    reslt.value = results;
}