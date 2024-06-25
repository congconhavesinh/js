function upDate(previewPic) {
    console.log("Mouseover event triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url()';
    imageDiv.innerHTML = 'Hover over an image below to display here.';
}

function addTabFocus() {
    console.log("Page loaded, adding tabindex attributes.");
    const previews = document.querySelectorAll('.preview');
    previews.forEach((preview, index) => {
        preview.setAttribute('tabindex', index + 1); // tabindex should start from 1
    });
}

const previews = document.querySelectorAll('.preview');
previews.forEach(preview => {
    preview.addEventListener('mouseover', function() {
        upDate(this);
    });
    preview.addEventListener('mouseout', unDo);
});
