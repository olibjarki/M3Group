function selectImage(imagePath) {
    localStorage.setItem("selectedImage", imagePath);
    window.location.href = "index.html";
}
