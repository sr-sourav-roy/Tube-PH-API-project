// removes active class:
function activeRemoveClass() {
  const removeActiveClass = document.getElementsByClassName("active");
  for (let bttn of removeActiveClass) {
    bttn.classList.remove("active");
  }
}

//😊 loadCategory functions:
function loadCategory() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories#")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
}

// 😊 loadVideos function:
function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
      activeRemoveClass();
      document.getElementById("bttn-all").classList.add("active");
      displayVideo(data.videos);
    });
}
// 😊 loadCategoryVideo:d
const loadCategoryVideos = (id) => {
  const ulr = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(ulr);
  fetch(ulr)
    .then((res) => res.json())
    .then((data) => {
      // call this removed actives functions:
      activeRemoveClass();

      // dynamical created btn:
      const clickButton = document.getElementById(`btn-${id}`);

      // add styles items:
      clickButton.classList.add("active");

      // call the object and array:
      displayVideo(data.category);
    });
};

// ☠️ displayCategory function:
function displayCategory(typeNames) {
  for (const name of typeNames) {
    // get to the
    const CategoryContainer = document.getElementById("Category-container");

    //   created category btn of 3 dynamical
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button id="btn-${name.category_id}" onclick="loadCategoryVideos(${name.category_id})" class="btn btn-sm  hover:bg-[#FF1F3D] p-4">${name.category}</button>
      `;
    CategoryContainer.append(categoryDiv);
  }
}

// ☠️ displayVideo function:

// "category_id": "1001",
// "video_id": "aaaa",
// "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
// "title": "Shape of You",
// "authors": [
// {
// "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
// "profile_name": "Olivia Mitchell",
// "verified": ""
// }
// ],
// "others": {
// "views": "100K",
// "posted_date": "16278"
// },
// "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");

  // this point--> finish hum all videos
  videoContainer.innerHTML = "";

  // random call function:
  if (videos.length == 0) {
    videoContainer.innerHTML = `
     <div
        class="col-span-full flex justify-center items-center flex-col py-20"
      >
        <img class="w-[200px]" src="./assests/Icon.png" alt="" />
        <h2 class="text-3xl font-bold">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
    `;
    return;
  }

  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
         <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[300px] object-cover" src="${video.thumbnail}" alt="" />
          <span
            class="absolute bottom-2 right-3 text-sm text-white bg-black px-2 rounded-sm"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="font-semibold">Midnight Serenade</h2>
            <p class="text-gray-400 text-sm flex gap-1">
              ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png"
                alt=""
              />
            </p>
            <p class="text-gray-400 text-sm">${video.others.views} views</p>
          </div>
        </div>
      </div>
    `;
    videoContainer.append(videoCard);
  });
};

// 🔥call functions:
loadCategory();
