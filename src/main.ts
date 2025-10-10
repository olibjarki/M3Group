const train = document.getElementById("book-train") as HTMLElement;

if (train) {
  // Clone all books once automatically for seamless loop
  train.innerHTML += train.innerHTML;

  let position = 0;
  let speed = 0.5;

  function move() {
    position -= speed;
    train.style.transform = `translateX(${position}px)`;

    const resetPoint = train.scrollWidth / 4;
    if (Math.abs(position) >= resetPoint) {
      position = 0;
    }
    requestAnimationFrame(move);
  }
  train.addEventListener("mouseenter", () =>{
    speed = 0; 
  })
  train.addEventListener("mouseleave", () =>{
    speed =0.5; 
  })

  move();
}

