// function loadCategory() {
//   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then((res) => res.json())
//     .then((data) => displayCategory(data.categories));
// }

// // API this call:-
// //             "category_id": "1001",
// //             "category": "Music"
// //         },

// function displayCategory(categories) {
//   for (const cate of categories) {
//     const CategoryContainer = document.getElementById("Category-container");

//     const categoryDiv = document.createElement("div");
//     categoryDiv.innerHTML = `
//       <button class="btn btn-sm hover:bg-[#FF1F3D]">${cate.category}</button>
//       `;
//     CategoryContainer.append(categoryDiv);
//   }
// }
// loadCategory();

// loadCategory Functions:
function loadCategory() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories#")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
}

// loadVideos function:
function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos));
}

// displayCategory function:
function displayCategory(typeNames) {
  for (const name of typeNames) {
    // get to the
    const CategoryContainer = document.getElementById("Category-container");

    //   created
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button class="btn btn-sm  hover:bg-[#FF1F3D] p-4">${name.category}</button>
      `;
    CategoryContainer.append(categoryDiv);
  }
}
//displayVideo function:

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
  videos.forEach((video) => {
    const videoContainer = document.getElementById("video-container");

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    videoContainer.append(videoCard);
  });
};

// call functions:
loadCategory();
loadVideo();
