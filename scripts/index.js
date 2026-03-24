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

function loadCategory() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories#")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
}
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

loadCategory();
