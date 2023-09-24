document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;

function handleDragStart(e){
    this.style.opacity = '0.4';
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
        item.classList.remove('over');
      });
  }

function handleDrop(e) {
    e.stopPropagation();

    if(!String(this.innerHTML).includes('png')){ 
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
    }
  
    return false;
  }
  let items = document.querySelectorAll('.card');
  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});

function oncheckclick(){
    var card1 = document.getElementById("card1")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")

    if(String(card1.innerHTML).includes("2.png") &&
       String(card3.innerHTML).includes("1.png")){
        document.getElementById("uncorrect").style.display = "none";
        document.getElementById("correct").style.display = "block";
    }
    else{
        document.getElementById("correct").style.display = "none";
        document.getElementById("uncorrect").style.display = "block";
    }
    return false;
};