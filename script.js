document.addEventListener('DOMContentLoaded', () => {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');

    memeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const imageUrl = document.getElementById('image-url').value;
        const topText = document.getElementById('top-text').value;
        const bottomText = document.getElementById('bottom-text').value;

        if (!imageUrl || !topText || !bottomText) {
            alert('Please fill out all fields.');
            return;
        }

        createMeme(imageUrl, topText, bottomText);

        memeForm.reset();
    });

    function createMeme(imageUrl, topText, bottomText) {
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = 'Meme Image';

        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('meme-text', 'top-text');
        topTextDiv.textContent = topText;

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('meme-text', 'bottom-text');
        bottomTextDiv.textContent = bottomText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', () => {
            memeDiv.remove();
        });

        memeDiv.appendChild(image);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeDiv.appendChild(deleteBtn);

        memeContainer.appendChild(memeDiv);
    }
});
