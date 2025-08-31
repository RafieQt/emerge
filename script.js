// for heart section
const heartButtons = document.getElementsByClassName("heart-btn");

        for(hearts of heartButtons){
            hearts.addEventListener("click", function(e){
            e.preventDefault();
            coins= parseInt(document.getElementById("heart-balance").textContent);
            document.getElementById("heart-balance").textContent = coins+1;})
        }

