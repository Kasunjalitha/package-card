const packages = [
  {
    packageName: "basic",
    packageTitle: "Icon Set",
    packagePrice: 20,
    packageDescription:
      "Up to 5 creative & professional icons and one color version/theme.",
    packageFeature: ["Include source files", "SVG format only"],
  },
  {
    packageName: "standard",
    packageTitle: "Icon Set",
    packagePrice: 120,
    packageDescription:
      "Up to 10 creative & professional icons + two color versions/themes.",
    packageFeature: [
      "Include source files",
      "Converted to responsive components",
    ],
  },
  {
    packageName: "Premium",
    packageTitle: "Icon Set",
    packagePrice: 500,
    packageDescription:
      "Up to 50 creative & professional icons + two color versions/themes + Commersial Use.",
    packageFeature: [
      "Include source files",
      "Converted to responsive components",
      "Extra design package for free",
    ],
  },
];

const pkgName = document.getElementById("pkg-name");
const titleNprice = document.querySelectorAll(".title-and-price");
const descriptionText = document.getElementById("description");
const featureContainer = document.querySelector(".features-container");
const navigateBtn = document.querySelectorAll(".navigate-btn");

let currentPkg = 1;

function loadPkg() {
  navigateBtn.forEach((btn) => {
    if (btn.classList.contains("navigate-btn-selected")) {
      btn.classList.remove("navigate-btn-selected");
    }
  });
  navigateBtn[currentPkg].classList.add("navigate-btn-selected");

  pkgName.innerText = packages[currentPkg].packageName;
  titleNprice[0].innerText = packages[currentPkg].packageTitle;
  titleNprice[1].innerText = `$${packages[currentPkg].packagePrice}`;
  descriptionText.innerText = packages[currentPkg].packageDescription;

  const removeAllChild = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };
  removeAllChild(featureContainer);

  packages[currentPkg].packageFeature.forEach((feature) => {
    const divF = document.createElement("div");
    divF.classList.add("feature");
    const divCheck = document.createElement("div");
    divCheck.classList.add("check-circle");
    imgSvg = document.createElement("img");
    imgSvg.src = "./assets/check-solid.svg";
    const featureName = document.createElement("p");
    featureName.innerText = feature;
    divCheck.appendChild(imgSvg);
    divF.appendChild(divCheck);
    divF.appendChild(featureName);
    featureContainer.appendChild(divF);
  });
}

loadPkg();

navigateBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    currentPkg = e.target.value;
    loadPkg();
  });
});
