var chosen_profile = localStorage.getItem("selectedImage");
var profileImg_profile = document.getElementById("profile");
if (chosen_profile && profileImg_profile) {
    profileImg_profile.src = chosen_profile;
}
