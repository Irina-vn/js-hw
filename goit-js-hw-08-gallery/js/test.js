const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


const galleryListRef = document.querySelector('ul.js-gallery');
galleryListRef.addEventListener('click', onOpenModal);


const createItem = (item, array) => {
  const itemRef = document.createElement('li');
  const linkRef = document.createElement('a');
  const imgRef = document.createElement('img');
  const { preview, original, description } = item;

  itemRef.classList.add('gallery__item');
  linkRef.classList.add('gallery__link');
  linkRef.href = original;
  imgRef.classList.add('gallery__image');
  imgRef.dataset.source = original;
  imgRef.src = preview;
  imgRef.alt = description;

  galleryListRef.append(itemRef);
  itemRef.append(linkRef);
  linkRef.append(imgRef);

  return itemRef;
};

// const galleryList = images.map((image, index) => {
//   const li = document.createElement('li');
//   li.classList.add('gallery__item');

//   const a = document.createElement('a');
//   a.classList.add('gallery__link');
//   a.href = image.original;

//   const img = document.createElement('img');
//   img.classList.add('gallery__image');
//   img.src = image.preview;
//   img.dataset.source = image.original;
//   img.dataset.index = index;
//   img.alt = image.description;

//   a.appendChild(img);
//   li.appendChild(a);

//   return li;
// });

const largeImgRef = document.querySelector('.lightbox__image');


const renderListItems = (array) => {
  const items = array.map( (item) => createItem(item));
  galleryListRef.append(...items);
};

renderListItems(images);

// galleryListRef.addEventListener('click', onImgClick);

////// Эта функция отвечает за то, что мы обрабатываем клик и смотрим,
//  что мы кликнули туда куда нужно
// function onImgClick (event) {
//   event.preventDefault();

//   if(event.target.nodeName !== 'IMG') {
//     return;
//       }
//       const activeImg = event.target;
//       const activeImgSource = activeImg.dataset.source;
// console.log(activeImgSource);
// // setActiveImgSrc(activeImgSource);
//     };
// function setActiveImgSrc() {
//       largeImgRef.src = largeImgRef.dataset.source;
//  }

const modalRef = document.querySelector('.js-lightbox');
const closeBtnRef = document.querySelector('button[data-action="close-lightbox"]',);
// modalRef.addEventListener('click', onOpenModal);
closeBtnRef.addEventListener('click', onCloseModal);


function onOpenModal(event) {
  event.preventDefault();
  console.log(event.target.nodeName);
  if (event.target.nodeName !== 'IMG') {
    return;
  
  }
  modalRef.classList.add('is-open');
  largeImgRef.src = event.target.dataset.source;
  console.log(event.target.dataset.source);
};
////
function onCloseModal() {
  modalRef.classList.remove('is-open');
};










/////Эта функция получает ссылку на активную картинку(тег) и делает снятие с 
// предыдущего на текущий + добавление на текущий класса
//       function setActiveImg(nextActiveImg){
//       const currentActiveImg = event.currentTarget.querySelector('.lightbox.is-open');

//       if(currentActiveImg) {
//             currentActiveImg.classList.remove('.lightbox.is-open');
//           }

//       nextActiveImg.classList.add('.lightbox.is-open');
// };
