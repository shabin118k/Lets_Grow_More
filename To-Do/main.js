function AddTask(){
    if(document.getElementById("Task").value.length==0){
        alert("Enter your task")
    }
    else{
        // to create a container to store buttons and paragraph
        var divContainer = document.createElement("div")
        divContainer.className="divClass"
        document.getElementById("Task-items").appendChild(divContainer)
        var paraContainer = document.createElement("p")
        divContainer.appendChild(paraContainer)
        paraContainer.innerHTML=document.getElementById("Task").value
        var strike=document.getElementsByTagName("p")
        for(var j=0;j<strike.length;j++){
            strike[j].onclick = function(){
                this.style.textDecoration="line-through"
            }
        }
        var closeButton = document.createElement("button")
        closeButton.innerHTML = "&#128465;"
        divContainer.appendChild(closeButton)
        var close=document.getElementsByTagName("button")
        for(var j=0;j<close.length;j++){
            close[j].onclick = function(){
                this.parentElement.style.display="none"
            }
        }
    }
   
}