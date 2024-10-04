function upDate(previewPic) {
    console.log("Hover event triggered");

    const altText = previewPic.alt;
    const src = previewPic.src;

    console.log(`Alt Text: ${altText}`);
    console.log(`Image Source: ${src}`);

    const imageDiv = document.getElementById("image");
    imageDiv.innerText = altText;
    imageDiv.style.backgroundImage = `url('${src}')`;
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}

function addFocusBlurListeners() {
    const previews = document.querySelectorAll('.preview');
    
    previews.forEach(preview => {
        preview.addEventListener('focus', () => {
            console.log("Focus event triggered");
            preview.setAttribute('tabfocus', 'true');
        });
        
        preview.addEventListener('blur', () => {
            console.log("Blur event triggered");
            preview.removeAttribute('tabfocus');
        });
    });
}

function initialize() {
    console.log("Page loaded");
    addFocusBlurListeners();
}

// Agregar listener para el evento onload
window.onload = initialize;
