function numeroAleatorio() {
    var doc = document.getElementById("container")
    var num = Math.floor(Math.random() * (10 + 1))
    doc.innerHTML = num
    
}
