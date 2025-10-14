const train = document.getElementById("book-train") as HTMLElement
if (train) {
  // Clone all books once automatically for seamless loop
  train.innerHTML += train.innerHTML;

  let position = 0;
  let speed = 0.5;

  function move() {
    position -= speed;
    train.style.transform = `translateX(${position}px)`;

    const resetPoint = train.scrollWidth;
    if (Math.abs(position) >= resetPoint) {
      position = 0;
    }
    requestAnimationFrame(move);
  }
  move();
}

const train2 = document.getElementById("book-train-2") as HTMLElement;

if (train2) {
  // Clone all books once automatically for seamless loop
  train2.innerHTML += train2.innerHTML;
  
  const contentWidth = train2.clientWidth;
console.log(contentWidth); 
  let position2 = contentWidth * -1 ; // Start offscreen to left
  let speed2 = 0.5;

  function move2() {
    position2 += speed2; // Move to the right
    train2.style.transform = `translateX(${position2}px)`;

    // Reset once full loop completes
    if (position2 >= 0) {
      position2 = contentWidth * -1;
    }

    requestAnimationFrame(move2);
  }

  move2();
}