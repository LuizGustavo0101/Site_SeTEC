var flag = true

function ativarMenuBar(){
    const span1 = document.querySelector(".span1")
    const span2 = document.querySelector(".span2")
    const span3 = document.querySelector(".span3")
    const blackout = document.querySelector("#blackout")
    const menuLateral = document.querySelector(".menuLateral")

    if(flag == true){
        // Ativo

        flag = false
        
        span2.style.display = "none"

        span1.style.transform = "rotate(45deg)" 

        span3.style.transform = "rotate(-45deg)" 
        span3.style.marginTop = "-8px"

        // Menu lateral
        blackout.style.display = "block"
        setTimeout(() => {
            menuLateral.style.right = "0rem";
            menuLateral.style.transition = "0.6s";
        }, 10); 
    }else{
        // Desativado

        flag = true
        
        span1.style.transform = "rotate(0deg)" 
        
        span2.style.display = "inline"

        span3.style.transform = "rotate(0deg)" 
        span3.style.marginTop = "0px"

        // Menu lateral
        setTimeout(() => {
            blackout.style.display = "none";
            menuLateral.style.right = "-10rem";
        }, 10);
    }
}

const openPopup = () => document.querySelector("#popup").style.display = "flex";
const closePopup = () => document.querySelector("#popup").style.display = "none";