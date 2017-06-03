
function todoList()
{
    var item=document.getElementById("todoInput").value
     document.getElementById("todoInput").value="";
     if(item == "" || item == " "){
      alert("Enter Todo..!");
    }
    else
    {
    var text = document.createTextNode(item)
    var newItem=document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)






   
   var img = document.createElement("img");
   img.src = "del.png";
   img.onclick = function () { 
     var dli = this.parentNode; 
     var dul = dli.parentNode; 
     dul.removeChild(dli); 
    };
   li.appendChild(text)
   li.appendChild(img);
   ul.appendChild(li);
   
    }
}

    function remove()
{
    var newCode="<div id='content'><ul id='todoList'></ul></div>";
    document.getElementById("content").innerHTML=newCode;
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
