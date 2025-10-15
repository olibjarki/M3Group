var train = document.getElementById("book-train");
if (train) {
    // Clone all books once automatically for seamless loop
    train.innerHTML += train.innerHTML;
    var position_1 = 0;
    var speed_1 = 0.5;
    function move() {
        position_1 -= speed_1;
        train.style.transform = "translateX(".concat(position_1, "px)");
        var resetPoint = train.scrollWidth;
        if (Math.abs(position_1) >= resetPoint) {
            position_1 = 0;
        }
        requestAnimationFrame(move);
    }
    move();
}
var train_2 = document.getElementById("book-train2");
if (train_2) {
    // Clone all books for seamless loop
    train_2.innerHTML += train_2.innerHTML;
    var position2_1 = 0;
    var speed2_1 = 0.5;
    function move_2() {
        position2_1 -= speed2_1;
        train_2.style.transform = "translateX(".concat(position2_1, "px)");
        var resetPoint = train_2.scrollWidth;
        if (Math.abs(position2_1) >= resetPoint) {
            position2_1 = 0;
        }
        requestAnimationFrame(move_2); // ✅ Correct function name
    }
    move_2(); // ✅ Start the correct animation loop
}
