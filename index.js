
const item = document.querySelectorAll('.fill');
const dropZone = document.querySelectorAll('.dropzone');
let currentItem;
const dragStart = (e) =>{   
    
    if(e.target !== undefined){
        currentItem = e.target;


        // this.className += ' hoverdropzone'
        setTimeout(()=>{
    
            e.target.className = "invisible"
    
        },0)
    } 



    
}
const dragEnd= (e) =>{
    e.preventDefault()
    
    // e.target.className = " fill"
    if(e.target !== undefined ){
        e.target.className = "fill"
        console.log("%c 🦄: dragEnd ->  e.target ", "font-size:16px;background-color:#3ebbc2;color:white;",  e.target)
        currentItem = '';
        
        
    }
    
}
const dragEnter = (e) =>{
    if(e.target.className == "dropzone" && e.target.className !== "fill"){
        e.target.className += " hoverdropzone"

    }

}
const dragLeave = (e) =>{
    

if(e.target.className !== "fill"){

    e.target.className = "dropzone"
}


}
const dragOver = (e) =>{
    e.preventDefault()

}

const dragDrop = (e) =>{
    e.preventDefault()
   if(e.target.className !== "fill"){

       e.target.append(currentItem)
       
       e.target.className = "dropzone"
       console.log("%c 🖍️: dragDrop -> e.target ", "font-size:16px;background-color:#c68ba1;color:white;", e.target)
    }


 
      
}

    for(const drops of dropZone){
        // event loop
        drops.addEventListener('dragenter',dragEnter)
        drops.addEventListener('dragleave',dragLeave)
        drops.addEventListener('dragover',dragOver)
        drops.addEventListener('drop',dragDrop)
    }
// Events
for(const items of item){
 

      items.addEventListener('dragstart',dragStart);
      items.addEventListener('dragend',dragEnd);
 



}
