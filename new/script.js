function Addition(){
    // to create a container to store buttons and paragraph
    var parentShell = document.createElement("div");
    //placing the child inside the parent root
    document.getElementById("divtask").appendChild(parentShell);
    parentShell.className = "uniquefeature";
    var addItem = document.createElement("p");
    addItem.className = "itemVal";
    parentShell.appendChild(addItem);
    var itemVal = document.getElementById("enter-value").value;
    addItem.innerHTML = itemVal;
    // Striking tasks 
    var strikeButton = document.createElement("button");
    // inserted text for display character using html entity
    strikeButton.innerHTML = "&#8227;"; 
    strikeButton.className = "strikeButton";
    var strike = document.getElementsByClassName("strikeButton");
    parentShell.appendChild(strikeButton);
    for(var completebutton=0;completebutton<strike.length;completebutton++){
        strike[completebutton].onclick = function(){
            var parTarget = this.parentElement;
            var childTarget = parTarget.children[0];
            childTarget.style.textDecoration = "line-through";
        }
    }
    // Closing button part
    var addCloseButton = document.createElement("button");
    addCloseButton.innerHTML = "&#x2702"; 
    addCloseButton.className = "delButton";
    parentShell.appendChild(addCloseButton);
    var close = document.getElementsByClassName("delButton");
    for(var closebutton=0;closebutton<close.length;closebutton++){
        close[closebutton].onclick = function(){
            var divTarget = this.parentElement;
            divTarget.style.display = "none";
        }
    }
}