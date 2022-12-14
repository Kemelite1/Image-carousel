const heading = document.querySelector('h1');
const disImg = document.querySelector('.displayed-img');

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];
const altText = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];

document.querySelector('.prev').addEventListener('click', () => {
    const imageSrc = disImg.getAttribute('src')
    const i = (images.indexOf(imageSrc.split('/')[1]) - 1 + 6) % 6;
    const image = `img/${images[i]}`;

    // disImg.setAttribute('src', image);
    disImg.src = image
    disImg.setAttribute('alt', altText[i]);
    disImg.setAttribute('srcset', image)
})

document.querySelector('.next').addEventListener('click', () => {
    const imageSrc = disImg.getAttribute('src')
    const i = (images.indexOf(imageSrc.split('/')[1]) + 1) % 6;
    const image = `img/${images[i]}`;

    disImg.setAttribute('src', image);
    disImg.setAttribute('alt', altText[i]);
    disImg.setAttribute('srcset', image)
})
