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


const train_2 = document.getElementById("book-train2") as HTMLElement;

if (train_2) {
  // Clone all books for seamless loop
  train_2.innerHTML += train_2.innerHTML;

  let position2 = 0;
  let speed2 = 0.5;

  function move_2() {
    position2 -= speed2;
    train_2.style.transform = `translateX(${position2}px)`;

    const resetPoint = train_2.scrollWidth;
    if (Math.abs(position2) >= resetPoint) {
      position2 = 0;
    }

    requestAnimationFrame(move_2); // ✅ Correct function name
  }

  move_2(); // ✅ Start the correct animation loop
}
