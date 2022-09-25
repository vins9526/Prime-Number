let userinputBox=document.querySelector(".disp1")
let useroutput=document.querySelector(".disp2")
let btn=document.querySelector(".btnbox")

btn.onclick=function prime(){
    let con=false;
        for(let i=2; i < parseInt(userinputBox.value);  i++){
            if(userinputBox.value % i === 0 ){
                con=true;
                break;
                }
            }
    if(con===false){
        useroutput.innerText=("prime")
        }
    else{
        useroutput.innerText=("not prime")
        }
    }
