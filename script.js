var boxes = document.querySelectorAll(".box");
var image = document.querySelector(".image");

boxes.forEach(box => {
    box.addEventListener('dragover', (dets) =>{
        dets.preventDefault() 
    })
    box.addEventListener('drop', ()=>{
        box.appendChild(image)
    })
    
});