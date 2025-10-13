var train = document.getElementById("book-train");
if (train) {
    // Clone all books once automatically for seamless loop
    train.innerHTML += train.innerHTML;
    var position_1 = 0;
    var speed_1 = 0.5;
    function move() {
        position_1 -= speed_1;
        train.style.transform = "translateX(".concat(position_1, "px)");
        var resetPoint = train.scrollWidth / 4;
        if (Math.abs(position_1) >= resetPoint) {
            position_1 = 0;
        }
        requestAnimationFrame(move);
    }
    move();
}
var train2 = document.getElementById("book-train-2");
if (train2) {
    // Clone all books once automatically for seamless loop
    train2.innerHTML += train2.innerHTML;
    var contentWidth_1 = train2.scrollWidth / 2;
    var position2_1 = contentWidth_1; // Start offscreen to left
    var speed2_1 = 0.5;
    function move2() {
        position2_1 += speed2_1; // Move to the right
        train2.style.transform = "translateX(".concat(position2_1, "px)");
        // Reset once full loop completes
        if (position2_1 >= 0) {
            position2_1 = -contentWidth_1;
        }
        requestAnimationFrame(move2);
    }
    move2();
}
