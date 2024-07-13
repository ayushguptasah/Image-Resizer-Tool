document.getElementById("resizeButton").addEventListener("click", function () {
  const fileInput = document.getElementById("imageInput");
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");
  const canvas = document.getElementById("canvas");
  const resizedImage = document.getElementById("resizedImage");
  const downloadLink = document.getElementById("downloadLink");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const ctx = canvas.getContext("2d");
        const width = widthInput.value || img.width;
        const height = heightInput.value || img.height;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        resizedImage.src = canvas.toDataURL("image/png");
        resizedImage.style.display = "block";
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "resized-image.png";
        downloadLink.style.display = "block";
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
});
