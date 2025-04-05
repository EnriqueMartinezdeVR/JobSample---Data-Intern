const axios = require("axios");
const fs = require("fs");
const path = require("path");

const categories = ["nature", "city", "technology"];
const imagesPerCategory = 5;
const API_URL = "https://loremflickr.com/600/400/";

const counters = {};

async function downloadImage(category) {
  try {
    const url = `${API_URL}${category}?random=${Math.random()}`; // forzar imagen única
    const response = await axios.get(url, { responseType: "stream" });

    const folder = path.join(__dirname, "images", category);
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

    counters[category] = (counters[category] || 0) + 1;
    const filename = `${category}_${counters[category]}.jpg`;
    const filePath = path.join(folder, filename);

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    console.log(`Guardado: ${filePath}`);
  } catch (error) {
    console.error(` Error al descargar imagen para "${category}": ${error.message}`);
  }
}

async function fetchImages() {
  for (const category of categories) {
    console.log(`\nDescargando imágenes de la categoría: ${category}`);
    for (let i = 0; i < imagesPerCategory; i++) {
      await downloadImage(category);
    }
  }
}

fetchImages();
