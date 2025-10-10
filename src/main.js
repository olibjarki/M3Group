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
    train.addEventListener("mouseenter", function () {
        speed_1 = 0;
    });
    train.addEventListener("mouseleave", function () {
        speed_1 = 0.5;
    });
    move();
}
