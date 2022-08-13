const menu = [
  {
    id: 1,
    title: "Khinkali",
    category: "lunch",
    price: 19.99,
    img: "https://www.venturists.net/wp-content/uploads/2017/07/Khinkali-735x501.jpg",
    desc: `Khinkali is a very popular Georgian dumpling made of twisted knobs of dough, stuffed with meat and spices. It is considered to be one of the national dishes of Georgia.`,
  },
  {
    id: 2,
    title: "Adjarian Khachapuri",
    category: "lunch",
    price: 15.99,
    img: "https://www.seriouseats.com/thmb/4ot0rKhdwKTyRbUokaEuaTwCM20=/770x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__10__khachapuri-tourism-board-8a77c92ae7074b0280d1c0ab9fef0ca0.jpg",
    desc: `Adjarian Khachapuri is a football shaped fluffy white bread stuffed with cheese and topped with a sunny side-up egg. This gooey cheese bread is a favorite comfort food from the Country of Georgia.`,
  },
  {
    id: 3,
    title: "churchkhela",
    category: "sweets",
    price: 4.99,
    img: "https://www.seriouseats.com/thmb/xHDfmwZYO8uNse_X-9Tal8gwyRM=/770x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__10__churchkhela-shutterstock_290904899-c3f6f710326c430d905c910791cdd0b7.jpg",
    desc: `Churchkhela is a traditional Georgian cuisine candle-shaped candy.`,
  },
  {
    id: 4,
    title: "Tklapi",
    category: "sweets",
    price: 7.99,
    img: "https://www.seriouseats.com/thmb/xtG4bmb5Tlis7xAOUYX0Ajrj02k=/770x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__10__Tklapi-shutterstock_29255215-7043e4203b4e4e7799674e3a2e419f5a.jpg",
    desc: `Tklapi is a traditional Georgian puréed fruit roll-up leather. It is spread thinly onto a sheet and sun-dried on a clothesline.`,
  },
  {
    id: 5,
    title: "Lobiani",
    category: "lunch",
    price: 11.99,
    img: "https://www.seriouseats.com/thmb/0p6kX_xNoGAgfnKifMqb4a0SeyY=/770x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__10__lobiani-shutterstock_134611382-879d31c9466e4b4e8b6b1d3ca9e9f253.jpg",
    desc: `Lobiani is a delicious traditional Georgian dish of bean-filled bread.`,},
  {
    id: 6,
    title: "Nazuki",
    category: "sweets",
    price: 5.99,
    img: "https://bakingaround.files.wordpress.com/2017/08/img_5115.jpg?w=1000",
    desc: `Nazuki is sweet Georgian cinnamon bread with raisins`,
  },
  {
    id: 7,
    title: "Natakhtari lemonade",
    category: "drink",
    price: 2.99,
    img: "https://liyamash.com/images/natakhtari-page.jpg",
    desc: `Natakhtari is the leader of the Georgian beer and lemonade market. Company offers consumers 15 beer brands and 8 aromas of Natakhtari Lemonade.`,
  },
  {
    id: 8,
    title: "Georgian Chacha",
    category: "drink",
    price: 12.99,
    img: "https://georgiastartshere.com/wp-content/uploads/2018/11/Tanini-min.jpg",
    desc: `Chacha is a Georgian pomace brandy, clear and strong, which is sometimes called "wine vodka", "grape vodka", or "Georgian vodka/grappa"`,
  },
  {
    id: 9,
    title: "Badagoni Wine",
    category: "drink",
    price: 16.99,
    img: "http://iguide.ge/uploads/6106fc3e1e520.jpg",
    desc: `Badagoni wine - Balanced and exquisite aromas of ripe berries.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container")

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// filter items

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories.map(function (category) {
    return ` <button class="filter-btn" type="button"
     data-id="${category}">
      ${category}
     </button>`;
  }).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}