let inputValue = document.getElementById('inputText')




function checkFunction(number){

    inputValue.value+=number

}
function Result(){
 
 try{
    inputValue.value=eval(inputValue.value)
 }
 catch{
alert('Please enter valid Number' )
 }
}

function clearFunction(){
   

 if (inputValue.value.length>0){
    inputValue.value=''
 }

}

function deleteFunction(){

    if (inputValue.value.length>0){
    inputValue.value=inputValue.value.slice(0,-1)
 }

}
