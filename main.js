import './index.scss';

const wrapp = document.querySelector('.js-img-contain');
const imgs = wrapp.querySelectorAll('img');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d", { willReadFrequently: true });

imgs.forEach(img => {
  const slide = img.closest('.slide');

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height)

  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;

  slide.style.cssText = `background-color: rgba(${r}, ${g}, ${b}, ${a/255});`;
});

