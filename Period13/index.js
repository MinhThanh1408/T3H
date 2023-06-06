var products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price_news: 12,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "./assets/images/thumb_product.png",
    discount: "36%",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price_news: 12,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price_news: 12,
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },

  {
    id: 4,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price_news: 12,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "./assets/images/thumb_product.png",
    discount: "36%",
  },
  {
    id: 5,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price_news: 12,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
  {
    id: 6,
    title: "Mens Cotton Jacket",
    price_news: 12,
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
  {
    id: 7,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price_news: 12,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "./assets/images/thumb_product.png",
    discount: "36%",
  },
  {
    id: 8,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price_news: 12,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
];

const renderProductItem = () => {
  const listProduct = products.map((item) => {
    return `<div class="product-item">
        <div class="img-container">
          <img src="${item.image}" alt="product" />
          <p>- 36%</p>
        </div>

        <h3>${item.title}</h3>
        <p>
          ${item.description}
        </p>

        <div class="price">
          <div>
            <p>${item.price_news}</p>
            <p>${item.price}</p>
          </div>
          <button onClick='myFunction(${item.id})'>Buy Now</button>
        </div>
      </div>`;
  });
  document.querySelector(".product-container").innerHTML = listProduct.join("");

};
renderProductItem();
const myFunction = (item) => {
  window.location.assign(`/detail/${item}`);
};
// <button onclick="myFunction(${JSON.stringify(item)
          //   .split('"')
          //   .join("&quot;")})">By now
          // </button>