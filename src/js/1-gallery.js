import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    title: 'Hokkaido Flower',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    title: 'Container Haulage Freight',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    title: 'Aerial Beach View',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    title: 'Flower Blooms',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    title: 'Alpine Mountains',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    title: 'Mountain Lake Sailing',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    title: 'Alpine Spring Meadows',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    title: 'Nature Landscape',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    fullSize:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    title: 'Lighthouse Coast Sea',
  },
];

const createGallery = (container, galleryItems) => {
  const htmlContent = galleryItems
    .map(
      ({ thumbnail, fullSize, title }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${fullSize}">
            <img class="gallery-image" src="${thumbnail}" alt="${title}" />
          </a>
        </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', htmlContent);
};

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');
  createGallery(galleryContainer, galleryItems);

  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
});
