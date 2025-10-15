function selectImage(imagePath: string, element: HTMLElement): void {
  // Save selected image
  localStorage.setItem("selectedImage", imagePath);

  // Remove border from all images within <main>
  const images = document.querySelectorAll<HTMLImageElement>("main img");
  images.forEach((img) => {
    img.style.border = "none";
  });

  //Border
  (element as HTMLImageElement).style.border = "3px solid #DE8417";
}

window.onload = (): void => {
  const selected = localStorage.getItem("selectedImage");
  if (!selected) return;

  const images = document.querySelectorAll<HTMLImageElement>("main img");
  images.forEach((img) => {

    if (img.src.indexOf(selected) !== -1) {
      img.style.border = "3px solid #DE8417";
    }
  });
};
