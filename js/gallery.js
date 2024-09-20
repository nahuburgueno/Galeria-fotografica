// gallery.js

function upDate(previewPic) {
    // Comprobar que la función se llama correctamente
    console.log("Hover event triggered");

    // Obtener el alt y la fuente de la imagen
    const altText = previewPic.alt;
    const src = previewPic.src;

    console.log(`Alt Text: ${altText}`);
    console.log(`Image Source: ${src}`);

    // Cambiar el texto del div con id "image"
    const imageDiv = document.getElementById("image");
    imageDiv.innerText = altText;

    // Cambiar la imagen de fondo del div
    imageDiv.style.backgroundImage = `url('${src}')`;
}

function unDo() {
    // Obtener el div con id "image"
    const imageDiv = document.getElementById("image");

    // Restablecer la imagen de fondo
    imageDiv.style.backgroundImage = "url('')";

    // Cambiar el texto de vuelta al original
    imageDiv.innerText = "Hover over an image below to display here.";
}
