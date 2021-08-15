let globalVar = "HI"

function saveMessage(){
    let myMessage = document.getElementById("my-message")
    globalVar = myMessage.value
    myMessage.value = ""
}

function loadMessage(){
    document.getElementById("my-message").value = globalVar
}