// for heart section
const heartButtons = document.getElementsByClassName("heart-btn");

        for(hearts of heartButtons){
            hearts.addEventListener("click", function(e){
            e.preventDefault();
            heart= parseInt(document.getElementById("heart-balance").textContent);
            document.getElementById("heart-balance").textContent = heart+1;})
        }

//Coin system 
const callButtons = document.getElementsByClassName("call-btn");

        for (let calls of callButtons) {
            calls.addEventListener("click", function (e) {
                e.preventDefault();
                let coin = parseInt(document.getElementById("coin-balance").textContent);
                if(coin>0){
                    document.getElementById("coin-balance").textContent = coin - 20;
                }else{
                    alert("Coin amount is not sufficient!");
                }
            });
        }