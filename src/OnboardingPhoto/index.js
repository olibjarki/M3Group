function selectImage(imagePath, element) {
    // Save selected image
    localStorage.setItem("selectedImage", imagePath);
    // Remove border from all images within <main>
    var images = document.querySelectorAll("main img");
    images.forEach(function (img) {
        img.style.border = "none";
    });
    //Border
    element.style.border = "3px solid #DE8417";
}
window.onload = function () {
    var selected = localStorage.getItem("selectedImage");
    if (!selected)
        return;
    var images = document.querySelectorAll("main img");
    images.forEach(function (img) {
        if (img.src.indexOf(selected) !== -1) {
            img.style.border = "3px solid #DE8417";
        }
    });
};
