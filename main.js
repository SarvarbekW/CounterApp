const countText = document.getElementById("count");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const countCon = document.querySelector("#count");
let count = 0;


plusBtn.addEventListener("click", () => {
    count += 1;
    countText.textContent = count;
})

minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count -= 1 
        countText.textContent = count;
    }
})


countCon.addEventListener("click", () => {
    count = 0;
    countText.textContent = 0;
})