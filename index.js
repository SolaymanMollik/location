import * as data from "food-data.js";
let productData = data.productList,
  productKeyArr = data.keyArr;

/**
 * make the div
 * the function receved a filter of product
 * note that the function only recived a arry of filter object
 */
const section = document.getElementById("section");

const makeDivFunction = (arr) => {
  section.innerHTML = "";
  localStorage.setItem("lastSearch", JSON.stringify(arr));

  arr.forEach((x) => {
    let desEng;
    if (window.innerWidth < 600) {
      desEng = x.item.desEng.substring(0, 70);
    } else {
      desEng = x.item.desEng.substring(0, 200);
    }

    let theContent = `
  <img src="${
    x.item.image.split("|")[0]
  }" class="w-2/5 aspect-square rounded-xl" alt="" /><div class="w-[55%] flex-col flex justify-around"><div><p>${desEng} ${
      desEng.length === 70 ? "..." : ""
    } ${
      desEng.length === 200 ? "..." : ""
    }</p></div><div><p class="text-2xl font-bold text-red-600">${
      x.item.price
    } $</p><p>⭐${x.item.rate.split("/")[0]} (${
      x.item.rate.split("/")[1]
    }+)</p></div></div>
  
          `;
    let newDiv = document.createElement("div");
    newDiv.classList.add(
      "food-and-grocery",
      "flex",
      "justify-between",
      "rounded-xl",
      "px-2",
      "py-1",
      "bg-slate-100"
    );
    newDiv.innerHTML = theContent;

    section.appendChild(newDiv);
  });
  //  the content make and set

  // if media is mobile
  if (window.innerWidth < 600) {
    let classList = document.querySelectorAll(".food-and-grocery");
    let count = 0;
    classList.forEach((x) => {
      count++;
      if (count % 2 === 0) {
        x.classList.add("flex-row-reverse");
      }
    });
  }
};

/**
 * the search methood start here
 */
/**
 * It is the main main search function
 * it made by fuse.js
 */
const mainSearchFunction = (key) => {
  let options = {
    keys: ["desEng", "desBangla", "category", "keyword"],
    threshold: 0.5,
  };
  const fuse = new Fuse(productData, options);
  return fuse.search(key);
};
// it works for filter key
const keySearchFunction = (key) => {
  let options = {
    threshold: 0.7,
  };
  const fuse = new Fuse(productKeyArr, options);
  return fuse.search(key);
};

// get search input
let input = document.getElementById("input");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let arr = mainSearchFunction(input.value);
    makeDivFunction(arr);
  }
});
// on search
input.addEventListener("search", (e) => {
  let arr = mainSearchFunction(input.value);
  makeDivFunction(arr);
});
// on click search btn
document.getElementById("searchBtn").addEventListener("click", () => {
  let arr = mainSearchFunction(input.value);
  makeDivFunction(arr);
});
// last search
if (localStorage.getItem("lastSearch")) {
  makeDivFunction(JSON.parse(localStorage.getItem("lastSearch")));
}
