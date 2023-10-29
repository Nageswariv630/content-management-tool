function addText() {
    const text = document.getElementById("text-editor").value;
    const blogContent = document.getElementById("blog-content");
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    blogContent.appendChild(paragraph);
}

function addImage() {
    const imageUpload = document.getElementById("image-upload");
    const blogContent = document.getElementById("blog-content");
    const imagePreview = document.getElementById("image-preview");

    if (imageUpload.files && imageUpload.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const image = new Image();
            image.src = e.target.result;
            blogContent.appendChild(image);
        };

        reader.readAsDataURL(imageUpload.files[0]);
    }
}