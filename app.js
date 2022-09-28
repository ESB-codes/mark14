let inputEl=document.querySelector("#cost")
let quantityEl=document.querySelector("#quantity")
let finalEl=document.querySelector("#final")
let buttonEl=document.querySelector("#check")
let outputEl=document.querySelector("#output")

function random(){
    let cost=Number(inputEl.value);
    let quantity=Number(quantityEl.value)
    let final= Number(finalEl.value);

    if (cost<0 || quantity<0 || final<0){
        alert("only positive numbers allowed")
        return;
    }

    if (cost==0 || quantity==0 || final==0 ){
        alert("please provide all values");
        return;

    }
    
    calculate(cost,quantity,final)
}

function calculate(cost, quantity, final){
    if (cost>final){
        let loss=(cost-final)*quantity;
        let lossPercent= (cost-final)/cost*100;
        showOutput(`The loss is ${loss} and the loss percentage is ${lossPercent.toFixed(2)}%`)
    }
     else if(final>cost){
        let profit=(final-cost)*quantity;
        let profitPercent= (final-cost)/cost*100;
         showOutput(`Yay! You had a profit of ${profit}, profit percentage being ${profitPercent.toFixed(2)}`)
        
    }
    else{
        showOutput(`Neither profit, nor loss`)
    }
}


buttonEl.addEventListener("click", random)

function showOutput(msg){
    outputEl.innerHTML=msg
}