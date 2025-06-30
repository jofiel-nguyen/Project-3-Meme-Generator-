document.addEventListener('DOMContentLoaded', () => {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');
    let memes = JSON.parse(localStorage.getItem('memes')) || []; 

    function renderMemes() {
        memeContainer.innerHTML = ''; 
        memes.forEach((meme, index) => {
            createMemeElement(meme.imageUrl, meme.topText, meme.bottomText, index);
        });
    }

    renderMemes();

    memeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const imageUrl = document.getElementById('image-url').value;
        const topText = document.getElementById('top-text').value;
        const bottomText = document.getElementById('bottom-text').value;

        if (!imageUrl || !topText || !bottomText) {
            alert('Please fill out all fields.');
            return;
        }

        const newMeme = { imageUrl, topText, bottomText };
        memes.push(newMeme); 
        localStorage.setItem('memes', JSON.stringify(memes)); 

        createMemeElement(imageUrl, topText, bottomText, memes.length - 1); 

        memeForm.reset();
    });

    function createMemeElement(imageUrl, topText, bottomText, index) {
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');
        memeDiv.dataset.index = index; 

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

            memes.splice(index, 1);
            localStorage.setItem('memes', JSON.stringify(memes));
            
            renderMemes();
        });

        memeDiv.appendChild(image);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeDiv.appendChild(deleteBtn);

        memeContainer.appendChild(memeDiv);
    }
});
