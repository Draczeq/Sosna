let lvl 

function licz(s) {
    if(isNaN(s.click))
      s.click = 0
    s.click++
    if(s.click >= 0)
        s.style.display = "none"
        s.value='klik #'+s.click
        s.innerHTML='klik #'+s.click
}

document.getElementByClass("orangeButton").onclick = function(){
    lvl = lvl + 1
}

console.log(lvl)



document.getElementById("navButton1").onclick = function(){
    alert("Nie chciało mi się tego robić, więc nic tu nie ma ;)")
}

document.getElementById("navButton2").onclick = function(){
    alert("Tutaj również niczego nie znajdziesz :D")
}

document.getElementById("navButton3").onclick = function(){
    alert("Myślisz że znajdziesz tu coś? To sie mylisz B)")
}
