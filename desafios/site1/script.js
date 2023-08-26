function carregar() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('foto')
    var fim = document.getElementById('fim')
    //Data
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()

    if(horas < 10){
        horas = '0'+horas
    }
    if(minutos < 10){
        minutos = '0'+minutos
    }

    msg.innerHTML = `Agora são <strong>${horas}h${minutos}m</strong>`

    if(horas < 12) {
        img.src = "fotos/manhã.png"
        fim.innerHTML = ("<strong>BOM DIA =)</strong>")
        
    }
    else if(horas < 19) {
        img.src = " fotos/tarde.png"
        fim.innerHTML = ("<strong>BOA TARDE =)</strong>")
    }
    else {
        img.src = "fotos/noite.png"
        fim.innerHTML = ("<strong>BOA NOITE =)</strong>")
    }
     
}
