"use sctrict"
console.log("hello");


/* ------------- working with tabs ----------- */
const tabsTitleEls = document.querySelectorAll(".tabs-title");
const tabsContentEls = document.querySelectorAll(".tabs-content li")
const tabsList = document.querySelector(".tabs");
const tabsContentList = document.querySelector(".tabs-content")
tabsList.addEventListener('click', onTabClick)

tabsContentEls.forEach((tabsContentEl, index) => {
  if(index !== 0){
    tabsContentEl.style.display = "none"
  }
})
const activeTab = document.querySelector(".tabs-title.active")

function onTabClick(e) {
	const targetTab = e.target;
  let activeTab = document.getElementsByClassName("active")[0];

  if (activeTab) {
    activeTab.classList.remove("active");
  }
  targetTab.classList.add("active");
	const tabsArray = Array.from(tabsList.children);
	const tabIndex = tabsArray.indexOf(targetTab)
	const visibleContentItem = document.querySelector(`.tabs-content li:nth-child(${tabIndex + 1})`)
	tabsContentEls.forEach(tabsContentEl => tabsContentEl.style.display = "none")
	visibleContentItem.style.display = "block";
}



/* ---------------------- working with works ------------------- */

const workImages = [
  {src: "img/wordpress/wordpress5.jpg", category: "wordpress", imgTitle: "notebook wordpress", alt: "notebook wordpress"},
  {src: "img/landing-page/landing-page6.jpg", category: "landing page", imgTitle: "build landing page", alt: "build landing page"},
  {src: "img/graphic-design/graphic-design6.jpg", category: "graphic design", imgTitle: "in design we trust", alt: "in design we trust"},
  {src: "img/graphic-design/graphic-design11.jpg", category: "graphic design", imgTitle: "space", alt: "space"},
  {src: "img/wordpress/wordpress8.jpg", category: "wordpress", imgTitle: "wordpress logo", alt: "wordpress logo"},
  {src: "img/landing-page/landing-page2.jpg", category: "landing page", imgTitle: "second landing page", alt: "second landing page"},
  {src: "img/wordpress/wordpress6.jpg", category: "wordpress", imgTitle: "display wordpress", alt: "display wordpress"},
  {src: "img/landing-page/landing-page3.jpg", category: "landing page", imgTitle: "natural landing page", alt: "natural landing page"},
  {src: "img/wordpress/wordpress3.jpg", category: "wordpress", imgTitle: "publish wordpress", alt: "publish wordpress"},
  {src: "img/web-design/web-design1.jpg", category: "web design", imgTitle: "phone", alt: "phone"},
  {src: "img/landing-page/landing-page4.jpg", category: "landing page", imgTitle: "lorem ipsum landing", alt: "lorem ipsum landing"},
  {src: "img/graphic-design/graphic-design4.jpg", category: "graphic design", imgTitle: "black and yellow", alt: "black and yellow"},
  {src: "img/web-design/web-design4.jpg", category: "web design", imgTitle: "notebook", alt: "notebook"},
  {src: "img/graphic-design/graphic-design8.jpg", category: "graphic design", imgTitle: "yeah", alt: "yeah"},
  {src: "img/web-design/web-design6.jpg", category: "web design", imgTitle: "notebook and phone", alt: "notebook and phone"},
  {src: "img/wordpress/wordpress7.jpg", category: "wordpress", imgTitle: "add new post wp", alt: "add new post wp"},
  {src: "img/wordpress/wordpress4.jpg", category: "wordpress", imgTitle: "tablet wordpress", alt: "tablet wordpress"},
  {src: "img/landing-page/landing-page1.jpg", category: "landing page", imgTitle: "converting landing page", alt: "converting landing page"},
  {src: "img/landing-page/landing-page5.jpg", category: "landing page", imgTitle: "galaxy landing", alt: "galaxy landing"},
  {src: "img/wordpress/wordpress2.jpg", category: "wordpress", imgTitle: "comments wordpress", alt: "comments wordpress"},
  {src: "img/graphic-design/graphic-design5.jpg", category: "graphic design", imgTitle: "neon", alt: "neon"},
  {src: "img/graphic-design/graphic-design1.jpg", category: "graphic design", imgTitle: "ambrella", alt: "ambrella"},
  {src: "img/graphic-design/graphic-design2.jpg", category: "graphic design", imgTitle: "rainbow", alt: "rainbow"},
  {src: "img/graphic-design/graphic-design7.jpg", category: "graphic design", imgTitle: "your design here", alt: "your design here"},
  {src: "img/graphic-design/graphic-design10.jpg", category: "graphic design", imgTitle: "shelf", alt: "shelf"},
  {src: "img/web-design/web-design5.jpg", category: "web design", imgTitle: "notebook and notepad", alt: "notebook and notepad"},
  {src: "img/graphic-design/graphic-design12.jpg", category: "graphic design", imgTitle: "ambrella", alt: "ambrella"},
  {src: "img/wordpress/wordpress9.jpg", category: "wordpress", imgTitle: "code is poetry", alt: "code is poetry"},
  {src: "img/web-design/web-design2.jpg", category: "web design", imgTitle: "tablet", alt: "tablet"},
  {src: "img/web-design/web-design3.jpg", category: "web design", imgTitle: "notebook and cofee", alt: "notebook and cofee"},
  {src: "img/wordpress/wordpress1.jpg", category: "wordpress", imgTitle: "media wordpress", alt: "media wordpress"},
  {src: "img/graphic-design/graphic-design3.jpg", category: "graphic design", imgTitle: "cup", alt: "cup"},
  {src: "img/landing-page/landing-page7.jpg", category: "landing page", imgTitle: "bromo ladning page", alt: "bromo ladning page"},
  {src: "img/wordpress/wordpress10.jpg", category: "wordpress", imgTitle: "wp logo on tablet", alt: "wp logo on tablet"},
  {src: "img/graphic-design/graphic-design9.jpg", category: "graphic design", imgTitle: "flowers", alt: "flowers"},
  {src: "img/web-design/web-design7.jpg", category: "web design", imgTitle: "notebook and schema", alt: "notebook and schema"},
]

let loadedImages = [];
let lastIndex = 0;

const workImagesList = document.querySelector('.works-images-list')

const loadMoreWorksBtn = document.getElementById('works-button')
loadMoreWorksBtn.addEventListener('click', onPreloadWorks)

function onPreloadWorks() {
  loadMoreWorksBtn.classList.remove("ready");
  loadMoreWorksBtn.classList.add("loading");
  loadMoreWorksBtn.disabled = true;
  setTimeout(() => {
    loadMoreWorksBtn.classList.remove("loading");
    loadMoreWorksBtn.classList.add("ready");
    loadMoreWorksBtn.disabled = false;
    loadMoreWorks()
  }, 2000);
}



function loadMoreWorks() {
  const htmlFragmet = document.createDocumentFragment();
  const receivedImages = workImages.slice(lastIndex, lastIndex + 12);
  loadedImages = loadedImages.concat(receivedImages);
  lastIndex += 12;
  if(lastIndex >= 36) {
    loadMoreWorksBtn.style.display = "none"
  }
  const workItemsArr = addWorkItems(receivedImages)
  htmlFragmet.append(...workItemsArr);
  workImagesList.append(htmlFragmet);
}

function addWorkItems(receivedImagesArr) {
  const workItemsArr = [];
  receivedImagesArr.forEach(receivedImageObj => {
    const workItemTemplate = document.getElementById("work-item-template");
    const workItem = document.importNode(workItemTemplate.content, true);
    const img = workItem.querySelector('img');
    img.src = receivedImageObj.src;
    img.alt = receivedImageObj.alt;
    const backsideText = workItem.querySelector('.backside-text');
    backsideText.innerText = receivedImageObj.category;
    const backsideSubtext = workItem.querySelector('.backside-subtext');
    backsideSubtext.innerText = receivedImageObj.imgTitle;
    workItemsArr.push(workItem);
  })
  return workItemsArr;
}

loadMoreWorks()

const filtersMenu = document.querySelector('.filters-menu')
filtersMenu.addEventListener('click', onFilterButtonClick)

function onFilterButtonClick(e) {
  if(e.target.tagName === "BUTTON"){
    const activeBtn = document.querySelector(".filter-button.active");
    activeBtn.classList.remove('active');
    e.target.classList.add('active');
    console.log(loadedImages)
    const imagesList = document.querySelector(".works-images-list")
    const listItems = Array.from(imagesList.children);
    listItems.forEach((listItem, index)  => {
      console.log(e.target.dataset.collectionName)
      if(e.target.dataset.collectionName === "all") {
        listItem.style.display = "flex";
      } else if(e.target.dataset.collectionName !== loadedImages[index].category) {
        listItem.style.display = "none";
      } else {
        listItem.style.display = "flex";
      }
    })
  }
}


/* ----------------------------------------------------- */



/*----------------- working with slider -----------------*/

const slider = document.getElementById('slider');
const sliderItems = document.querySelectorAll("#slider .slider-item")
const sliderItemWidth = sliderItems[0].offsetWidth + Number.parseInt(window.getComputedStyle(sliderItems[0])['margin-right']);
sliderItems.forEach((li, idx) => {
  li.style.order = idx + 1;
})

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
prevBtn.addEventListener('click', prevBtnHandler);
prevBtn.addEventListener('click', liftItem);
nextBtn.addEventListener('click', nextBtnHandler);
nextBtn.addEventListener('click', liftItem);

slider.addEventListener('transitionstart', onSliderTransitionStart);
slider.addEventListener('transitionend', onSliderTransitionEnd);
slider.addEventListener('click', liftItem)

function prevBtnHandler() {
  slider.classList.add("slider-transition");
  slider.style.transform = `translateX(-${sliderItemWidth}px)`
}

function nextBtnHandler() {
	slider.classList.add("slider-transition")
  slider.style.transform = `translateX(${sliderItemWidth}px)`
}

function onSliderTransitionEnd(e) {
  if(e.target.nodeName === "UL") {
    if(e.target.style.cssText === `transform: translateX(${sliderItemWidth}px);`) {
      changeOrderNext()
    } else if(e.target.style.cssText === `transform: translateX(${2 * sliderItemWidth}px);`) {
      changeOrderNext();
      changeOrderNext();
    } else if(e.target.style.cssText === `transform: translateX(${(-1) * sliderItemWidth}px);`) {
      changeOrderPrev();
    } else if(e.target.style.cssText === `transform: translateX(${(-2) * sliderItemWidth}px);`) {
      changeOrderPrev();
      changeOrderPrev();
    }
  }
  slider.classList.remove("slider-transition");
  slider.style.transform = "translateX(0)";

  const dataItem = document.querySelector('.lifted-item').dataset.sliderItem;
  showSelectedItems(dataItem);
}

function changeOrderPrev() {
	sliderItems.forEach(listItem => {
		if(+listItem.style.order === 1) {
			listItem.style.order = sliderItems.length;
		} else {
			--listItem.style.order;
		}
  })
}

function changeOrderNext() {
	sliderItems.forEach(listItem => {
		if(+listItem.style.order === sliderItems.length) {
			listItem.style.order = 1;
		} else {
			++listItem.style.order;
		}
  })
}

function liftItem(e) {
  if(e.currentTarget.id === "next-btn") {
    liftThirdItem()
  } else if (e.currentTarget.id === "prev-btn") {
    liftFifthItem()
  } else if (+e.target.closest('li').style.order === 3) {
    console.log(+e.target.closest('li').style.order === 3);
    slider.classList.add("slider-transition")
    slider.style.transform = `translateX(${sliderItemWidth}px)`
    liftThirdItem()
  } else if (+e.target.closest('li').style.order === 5) {
    slider.classList.add("slider-transition");
    slider.style.transform = `translateX(-${sliderItemWidth}px)`
    liftFifthItem()
  } else if (+e.target.closest('li').style.order === 2) {
    slider.classList.add("slider-transition")
    slider.style.transform = `translateX(${2 * sliderItemWidth}px)`
    liftSecondItem()
  }

}

function liftSecondItem() {
  const thirdItem = document.querySelector('[style="order: 2;"]');
  if(thirdItem) {
    thirdItem.classList.remove("put-down")
    thirdItem.classList.add("lifted-item")
  }
  sliderItems.forEach(listItem => {
    if(listItem.style.order !== "2" && listItem.classList.contains("lifted-item")) {
      listItem.classList.remove("lifted-item")
      listItem.classList.add("put-down")
    }
  })
}

function liftThirdItem() {
  const thirdItem = document.querySelector('[style="order: 3;"]');
  if(thirdItem) {
    thirdItem.classList.remove("put-down")
    thirdItem.classList.add("lifted-item")
  }
  sliderItems.forEach(listItem => {
    if(listItem.style.order !== "3" && listItem.classList.contains("lifted-item")) {
      listItem.classList.remove("lifted-item")
      listItem.classList.add("put-down")
    }
  })
}

function liftFifthItem() {
  const fifthItem = document.querySelector('[style="order: 5;"]');
  if(fifthItem) {
    fifthItem.classList.remove("put-down")
    fifthItem.classList.add("lifted-item")
  }
  sliderItems.forEach(listItem => {
    if(listItem.style.order !== "5" && listItem.classList.contains("lifted-item")) {
      listItem.classList.remove("lifted-item")
      listItem.classList.add("put-down")
    }
  })
}



function onSliderTransitionStart() {
  hideSliderContent();
}

function  hideSliderContent() {
  hideActiveItem("review-text-item");
  hideActiveItem("review-author-item");
  hideActiveItem("review-position-item");
  hideActiveItem("enlarged-photo-item");
}

function hideActiveItem(itemClass) {
  const activeItem = document.querySelector(`.${itemClass}.active-item`)
  if(activeItem) {
    activeItem.classList.remove("active-item")
    activeItem.classList.add('hidden-item')
  }
}

function showSelectedItems(dataItem) {
  showSelectedItem("review-text-item", dataItem)
  showSelectedItem("review-author-item", dataItem);
  showSelectedItem("review-position-item", dataItem);
  showSelectedItem("enlarged-photo-item", dataItem);
}

function showSelectedItem(classItem, dataItem) {
  const hiddenItem = document.querySelector(`.${classItem}.hidden-item`);
  hiddenItem.classList.remove("hidden-item");
  const selectedItem = document.querySelector(`.${classItem}[data-item=${dataItem}]`)
  selectedItem.classList.add("active-item")
}

const initialLiftedItem = document.querySelector('.slider-item[style="order: 4;"]');
initialLiftedItem.classList.add("lifted-item")

const initialTextItem = document.querySelector(".review-text-item[data-item='man-4']")
initialTextItem.classList.add("active-item")

const initialAuthorItem = document.querySelector(".review-author-item[data-item='man-4']")
initialAuthorItem.classList.add("active-item")

const initialAuthorPositionItem = document.querySelector(".review-position-item[data-item='man-4']")
initialAuthorPositionItem.classList.add("active-item")

const initialAuthorPhotoItem = document.querySelector(".enlarged-photo-item[data-item='man-4']")
initialAuthorPhotoItem.classList.add("active-item")



/* ---------------- Masonry ------------*/

const galleryImages = [
  {src: "img/wordpress/wordpress5.jpg", category: "wordpress", imgTitle: "notebook wordpress", alt: "notebook wordpress"},
  {src: "img/landing-page/landing-page6.jpg", category: "landing page", imgTitle: "build landing page", alt: "build landing page"},
  {src: "img/graphic-design/graphic-design6.jpg", category: "graphic design", imgTitle: "in design we trust", alt: "in design we trust"},
  {src: "img/graphic-design/graphic-design11.jpg", category: "graphic design", imgTitle: "space", alt: "space"},
  {src: "img/wordpress/wordpress8.jpg", category: "wordpress", imgTitle: "wordpress logo", alt: "wordpress logo"},
  {src: "img/landing-page/landing-page2.jpg", category: "landing page", imgTitle: "second landing page", alt: "second landing page"},
  {src: "img/wordpress/wordpress6.jpg", category: "wordpress", imgTitle: "display wordpress", alt: "display wordpress"},
  {src: "img/landing-page/landing-page3.jpg", category: "landing page", imgTitle: "natural landing page", alt: "natural landing page"},
  {src: "img/wordpress/wordpress3.jpg", category: "wordpress", imgTitle: "publish wordpress", alt: "publish wordpress"},
  {src: "img/web-design/web-design1.jpg", category: "web design", imgTitle: "phone", alt: "phone"},
  {src: "img/landing-page/landing-page4.jpg", category: "landing page", imgTitle: "lorem ipsum landing", alt: "lorem ipsum landing"},
  {src: "img/graphic-design/graphic-design4.jpg", category: "graphic design", imgTitle: "black and yellow", alt: "black and yellow"},
  {src: "img/web-design/web-design4.jpg", category: "web design", imgTitle: "notebook", alt: "notebook"},
  {src: "img/graphic-design/graphic-design8.jpg", category: "graphic design", imgTitle: "yeah", alt: "yeah"},
  {src: "img/web-design/web-design6.jpg", category: "web design", imgTitle: "notebook and phone", alt: "notebook and phone"},
  {src: "img/wordpress/wordpress7.jpg", category: "wordpress", imgTitle: "add new post wp", alt: "add new post wp"},
  {src: "img/wordpress/wordpress4.jpg", category: "wordpress", imgTitle: "tablet wordpress", alt: "tablet wordpress"},
  {src: "img/landing-page/landing-page1.jpg", category: "landing page", imgTitle: "converting landing page", alt: "converting landing page"},
  {src: "img/landing-page/landing-page5.jpg", category: "landing page", imgTitle: "galaxy landing", alt: "galaxy landing"},
  {src: "img/wordpress/wordpress2.jpg", category: "wordpress", imgTitle: "comments wordpress", alt: "comments wordpress"},
  {src: "img/graphic-design/graphic-design5.jpg", category: "graphic design", imgTitle: "neon", alt: "neon"},
  {src: "img/graphic-design/graphic-design1.jpg", category: "graphic design", imgTitle: "ambrella", alt: "ambrella"},
  {src: "img/graphic-design/graphic-design2.jpg", category: "graphic design", imgTitle: "rainbow", alt: "rainbow"},
  {src: "img/graphic-design/graphic-design7.jpg", category: "graphic design", imgTitle: "your design here", alt: "your design here"},
  {src: "img/graphic-design/graphic-design10.jpg", category: "graphic design", imgTitle: "shelf", alt: "shelf"},
  {src: "img/web-design/web-design5.jpg", category: "web design", imgTitle: "notebook and notepad", alt: "notebook and notepad"},
  {src: "img/graphic-design/graphic-design12.jpg", category: "graphic design", imgTitle: "ambrella", alt: "ambrella"},
  {src: "img/wordpress/wordpress9.jpg", category: "wordpress", imgTitle: "code is poetry", alt: "code is poetry"},
  {src: "img/web-design/web-design2.jpg", category: "web design", imgTitle: "tablet", alt: "tablet"},
  {src: "img/web-design/web-design3.jpg", category: "web design", imgTitle: "notebook and cofee", alt: "notebook and cofee"},
  {src: "img/wordpress/wordpress1.jpg", category: "wordpress", imgTitle: "media wordpress", alt: "media wordpress"},
  {src: "img/graphic-design/graphic-design3.jpg", category: "graphic design", imgTitle: "cup", alt: "cup"},
  {src: "img/landing-page/landing-page7.jpg", category: "landing page", imgTitle: "bromo ladning page", alt: "bromo ladning page"},
  {src: "img/wordpress/wordpress10.jpg", category: "wordpress", imgTitle: "wp logo on tablet", alt: "wp logo on tablet"},
  {src: "img/graphic-design/graphic-design9.jpg", category: "graphic design", imgTitle: "flowers", alt: "flowers"},
  {src: "img/web-design/web-design7.jpg", category: "web design", imgTitle: "notebook and schema", alt: "notebook and schema"},
]


// init Masonry
let grid = document.querySelector('.grid');

let msnry = new Masonry( grid, {
  gutter: 20,
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});

let loadedGalleryImages = [];
let lastGalleryImageIndex = 0;

const loadMoreGalleryBtn = document.getElementById('gallery-button')
loadMoreGalleryBtn.addEventListener('click', onPreloadGallery)

function onPreloadGallery() {
  loadMoreGalleryBtn.classList.remove("ready");
  loadMoreGalleryBtn.classList.add("loading");
  loadMoreGalleryBtn.disabled = true;
  setTimeout(() => {
    loadMoreGalleryBtn.classList.remove("loading");
    loadMoreGalleryBtn.classList.add("ready");
    loadMoreGalleryBtn.disabled = false;
    loadMoreGallery()
  }, 2000);
}

function loadMoreGallery() {
  const htmlFragmet = document.createDocumentFragment();
  const receivedImages = galleryImages.slice(lastGalleryImageIndex, lastGalleryImageIndex + 6);
  loadedGalleryImages = loadedGalleryImages.concat(receivedImages);
  lastGalleryImageIndex += 6;
  if(lastGalleryImageIndex >= 12) {
    loadMoreGalleryBtn.style.display = "none"
  }
  const workItemsArr = addGalleryItems(receivedImages)
  htmlFragmet.append(...workItemsArr);
  grid.append(htmlFragmet);
  let msnry = new Masonry( grid, {
    gutter: 20,
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
  });
}

function addGalleryItems(receivedImagesArr) {
  const workItemsArr = [];
  receivedImagesArr.forEach(receivedImageObj => {
    const workItemTemplate = document.getElementById("gallery-template");
    const workItem = document.importNode(workItemTemplate.content, true);
    const img = workItem.querySelector('img');
    img.src = receivedImageObj.src;
    img.alt = receivedImageObj.alt;
    workItemsArr.push(workItem);
  })
  return workItemsArr;
}
