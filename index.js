// DATA
const menuData = {
  pita: [
    {
      name: "Falafel",
      img: "./assets/images/PitaImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
    ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Falafel",
      img: "./assets/images/PitaImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Falafel",
      img: "./assets/images/PitaImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Falafel",
      img: "./assets/images/PitaImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
  ],

  salad: [
    {
      name: "Kale cesar",
      img: "./assets/images/SaladImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
    ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Kale cesar",
      img: "./assets/images/SaladImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Kale cesar",
      img: "./assets/images/SaladImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Kale cesar",
      img: "./assets/images/SaladImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
  ],

  lunch: [
    {
      name: "Salade dej",
      img: "./assets/images/LaunchImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
    ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Salade dej",
      img: "./assets/images/LaunchImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Salade dej",
      img: "./assets/images/LaunchImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Salade dej",
      img: "./assets/images/LaunchImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
  ],

  snack: [
    {
      name: "Boule denergie",
      img: "./assets/images/SnackImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
    ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Boule denergie",
      img: "./assets/images/SnackImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Boule denergie",
      img: "./assets/images/SnackImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
    {
      name: "Boule denergie",
      img: "./assets/images/SnackImage.webp",
      description: `Kale, falafel, poivron, tomate, betterave, carotte
ciboulette, houmous, fromage végétal, sauce à lail.`,
      price: "10.00$",
    },
  ],
};

const MainDishesContainer = document.querySelector(".Main-Dishes-Container");
const categoryButtons = document.querySelectorAll(".Categories-Button");

let prevButton;

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", categoryButtonEvent);
});

function categoryButtonEvent(e) {
  const containerType = e.target.getAttribute("data-value");

  const dishesContainer = document.createElement("div");
  dishesContainer.classList.add("Dish-Container");

  if (prevButton) {
    prevButton.style.color = "#2a5631";
    prevButton.style.background = "#ffff";
  }

  e.target.style.color = "#ffff";
  e.target.style.background = "#2a5631";

  menuData[containerType].forEach(({ name, img, description, price }) => {
    const dishItem = `
                <div class="Dish-Item">
                    <span class="Dish-Price">${price}</span>
        
                    <img src="${img}" class="Dish-Image" />
        
                    <div class="Dish-Desc">
                        <span class="Dish-Desc-Title">${name}</span>
                        <span class="Dish-Desc-Body">${description}</span>
                        <button class="Dish-Desc-Button">COMMANDER EN LIGNE</button>
                    </div>
            </div>
            `;

    dishesContainer.innerHTML += dishItem;
  });

  dishesContainer.innerHTML += `
        <div class="View-All-Container">
            <h3>Pitas</h3>
            <button>CONSULTER TOUS LES PLATS</button>
        </div>
    `;

  MainDishesContainer.innerHTML = "";
  MainDishesContainer.append(dishesContainer);

  prevButton = e.target;

  dishesContainer.addEventListener("mousemove", (e) =>
    mouseMoveEvent(e, dishesContainer)
  );
  dishesContainer.addEventListener("mousedown", (e) =>
    startDragging(e, dishesContainer)
  );
  dishesContainer.addEventListener("mouseup", stopDragging);
  dishesContainer.addEventListener("mouseleave", stopDragging);
}

// Dishes Containers dragging with mouse
let mouseDown = false;
let startX, scrollLeft;

function startDragging(e, container) {
  mouseDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
}

function stopDragging() {
  mouseDown = false;
}

function mouseMoveEvent(e, container) {
  e.preventDefault();
  if (!mouseDown) return;
  const x = e.pageX - container.offsetLeft;
  const scroll = x - startX;
  container.scrollLeft = scrollLeft - scroll;
}

//Scroll Dishes Div On Left and Right Arrows Click
const leftArrow = document.querySelector(".Left-Arrow");
const rightArrow = document.querySelector(".Right-Arrow");

leftArrow.addEventListener("click", () => {
  const activeContainer = document.querySelector(
    ".Main-Dishes-Container > div"
  );

  if (activeContainer) activeContainer.scrollLeft -= 380;
});

rightArrow.addEventListener("click", () => {
  const activeContainer = document.querySelector(
    ".Main-Dishes-Container > div"
  );

  if (activeContainer) activeContainer.scrollLeft += 380;
});

// Menu For Mobile
const menuButton = document.querySelector(".Menu-Image");
const MenuContainer = document.querySelector(".Menu-Container");
const FooterContainer = document.querySelector(".Footer-Container");
const WorkingDaysContainer = document.querySelector(".Working-Days-Wrapper");

let menuActive = false;

menuButton.addEventListener("click", () => {
  if (menuActive) {
    MenuContainer.style.display = "none";
    WorkingDaysContainer.style.display = "block";

    FooterContainer.classList.remove("Footer-Mobile");
    menuActive = false;
    return;
  }

  MenuContainer.style.display = "block";
  WorkingDaysContainer.style.display = "none";

  FooterContainer.classList.add("Footer-Mobile");
  menuActive = true;
});
