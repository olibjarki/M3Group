const chosen_profile = localStorage.getItem("selectedImage");
const profileImg_profile = document.getElementById("profile") as HTMLImageElement;

if (chosen_profile && profileImg_profile) {
  profileImg_profile.src = chosen_profile;
}
