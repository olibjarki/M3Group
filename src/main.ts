const train = document.getElementById("book-train") as HTMLElement
if (train) {
  // Clone all books once automatically for seamless loop
  train.innerHTML += train.innerHTML;

  let position = -200;
 
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
  
  train_2.innerHTML += train_2.innerHTML;

  console.log(train_2.scrollWidth)

  let position2 = -1500;
  let speed2 = 0.5;
  function move_2() {
    position2 += speed2;
    console.log(position2)
    train_2.style.transform = `translateX(${position2}px)`;

    const resetPoint = train_2.scrollWidth ;

    if (position2 >= resetPoint) {
      position2 = -1300;
    }

    requestAnimationFrame(move_2); // ✅ Correct function name
  }

  move_2(); // ✅ Start the correct animation loop
}
