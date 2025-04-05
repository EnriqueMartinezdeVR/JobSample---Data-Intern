document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("image-form");
  const input = document.getElementById("image-url");
  const gallery = document.getElementById("gallery");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const url = input.value.trim();
    if (url) {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "User uploaded image";
      gallery.appendChild(img);
      input.value = "";
    }
  });
});
