
 const chosen = localStorage.getItem("selectedImage");
const profileImg = document.getElementById("profile") as HTMLImageElement;

if (chosen && profileImg) {
  profileImg.src = chosen;
}