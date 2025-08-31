// for heart section
const heartButtons = document.getElementsByClassName("heart-btn");

        for(let hearts of heartButtons){
            hearts.addEventListener("click", function(e){
            e.preventDefault();
            let heart= parseInt(document.getElementById("heart-balance").textContent);
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

// copy system
const allCards = document.getElementsByClassName("cards");

for (let card of allCards) {
    const text = card.querySelector(".em-num");
    const copy = card.querySelector(".copy-btn");

    if (!text || !copy) continue; // safety check

    copy.addEventListener("click", async function (e) {  // make handler async
        e.preventDefault();

        let showText = text.textContent;  // text for this specific card
        let count = parseInt(document.getElementById("copy-count").textContent);
        document.getElementById("copy-count").textContent = count + 1;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Modern Clipboard API
                await navigator.clipboard.writeText(showText);
            } else {
                // Fallback for older browsers
                const ta = document.createElement("textarea");
                ta.value = showText;
                ta.style.position = "fixed"; // keep off-screen
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
            }

            alert(`The copied number: ${showText}`);
        } catch (err) {
            console.error("Failed to copy:", err);
            alert("Failed to copy the number!");
        }
    });
}