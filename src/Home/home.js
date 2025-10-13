var chosen = localStorage.getItem("selectedImage");
var profileImg = document.getElementById("profile");
if (chosen && profileImg) {
    profileImg.src = chosen;
}
