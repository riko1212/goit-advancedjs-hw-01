import"./assets/styles-CAm4neCy.js";import{S as l}from"./assets/vendor-D0gBiHs0.js";const n=[{thumbnail:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",title:"Hokkaido Flower"},{thumbnail:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",title:"Container Haulage Freight"},{thumbnail:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",title:"Aerial Beach View"},{thumbnail:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",title:"Flower Blooms"},{thumbnail:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",title:"Alpine Mountains"},{thumbnail:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",title:"Mountain Lake Sailing"},{thumbnail:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",title:"Alpine Spring Meadows"},{thumbnail:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",title:"Nature Landscape"},{thumbnail:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",fullSize:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",title:"Lighthouse Coast Sea"}],c=(t,a)=>{const o=a.map(({thumbnail:p,fullSize:e,title:i})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${p}" alt="${i}" />
          </a>
        </li>`).join("");t.insertAdjacentHTML("beforeend",o)};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".gallery");c(t,n),new l(".gallery a",{captionDelay:250,captionsData:"alt"})});
//# sourceMappingURL=1-gallery.js.map
