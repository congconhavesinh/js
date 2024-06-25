function upDate(previewPic) {
    // Use console.log to check the event is triggering
    console.log("Mouseover event triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Update the text of the element with id 'image'
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;

    // Update the background image of the element with id 'image'
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
    // Reset the background image and text
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url()';
    imageDiv.innerHTML = 'Hover over an image below to display here.';
}

// Adding event listeners to each preview image
const previews = document.querySelectorAll('.preview');
previews.forEach(preview => {
    preview.addEventListener('mouseover', function() {
        upDate(this);
    });
    preview.addEventListener('mouseout', unDo);
});
