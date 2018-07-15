let myNodeList = document.getElementsByTagName("LI")
var i;



for(i=0;i<myNodeList.length;i++){
    var span = document.createElement("SPAN");
    span.className = " glyphicon glyphicon-remove ";
    span.style.float="right";
    myNodeList[i].appendChild(span);

}

let todolist=document.getElementById('todolist')
let addTask=document.getElementById('addTask')
let newTask=document.getElementById('newTask')


addTask.onclick = function(){
    let li=document.createElement('li')
    li.innerText=newTask.value
    li.className="list-group-item list-group-item-info"
    if(newTask.value===""){
       alert("write something in text")
       //newTask.data
    }
    else{
        todolist.appendChild(li)
    }
 //   todolist.appendChild(li)

    var span=document.createElement('span')
    span.className="glyphicon glyphicon-remove remove"
    span.style.float="right";
    span.style.padding="5px"    
    li.appendChild(span)

    var span1=document.createElement('span')
    span1.className="glyphicon glyphicon-arrow-down down"
    span1.style.float="right";
    span1.style.padding="5px"
    
    li.appendChild(span1)
    var span2=document.createElement('span')
    span2.className="glyphicon glyphicon-arrow-up up"
    span2.style.float="right"
    span2.style.padding="5px"
    li.appendChild(span2)
    //let del =document.getElementsByClassName('remove')

    span.onclick=function(){
    span.parentElement.remove()
    }
    span1.onclick=function(){
        span1.parentElement.parentElement.insertBefore(
            span1.parentElement.nextElementSibling,span1.parentElement
        )
    }
    span2.onclick=function(){
        span2.parentElement.parentElement.insertBefore(
           span2.parentElement,span2.parentElement.previousElementSibling
        )
    }
 

   
     
}








