function myTrennen() {
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");
    let radio1=document.getElementById("befor");
    let radio2=document.getElementById("after");
    let result1=document.getElementById("result1");
    let result2=document.getElementById("result2");
   
    let array = input1.value.split(input2.value)
    
   
    

    if (input1.value.indexOf(input2.value) == -1)  {
        
        
        result1.innerHTML = "Das Zeichnen konnte leider nicht gefunden werden"
        result2.innerHTML = input1.value
    }else if (befor.checked) {
        
            
            result1.innerHTML=array[0]+input2.value;
            result2.innerHTML=array[1]
        }else  {
            result2.innerHTML=input2.value+array[1];
            result1.innerHTML=array[0]
        }

}

