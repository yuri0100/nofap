let addEl = document.getElementById("count-el")
let endEl = document.getElementById("save-el")


let count = 0

function add(){
    count += 1
    addEl.textContent = count
}

function end(){
    let streak = count + " - "
    endEl.textContent += streak
    console.log(count)
    addEl.textContent = 0
    count = 0
}