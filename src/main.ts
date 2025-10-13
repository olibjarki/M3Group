const train = document.getElementById("book-train") as HTMLElement
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
  move();
}

const train2 = document.getElementById("book-train-2") as HTMLElement;

if (train2) {
  // Clone all books once automatically for seamless loop
  train2.innerHTML += train2.innerHTML;
  
  const contentWidth = train2.scrollWidth / 2;

  let position2 = contentWidth; // Start offscreen to left
  let speed2 = 0.5;

  function move2() {
    position2 += speed2; // Move to the right
    train2.style.transform = `translateX(${position2}px)`;

    // Reset once full loop completes
    if (position2 >= 0) {
      position2 = -contentWidth;
    }

    requestAnimationFrame(move2);
  }

  move2();
}