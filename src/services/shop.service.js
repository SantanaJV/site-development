export { getProductsByCategory, getProductById, getCategories };

const categories = [
  {
    category: "eletronicos",
    display: "Eletrônicos"
  },
  {
    category: "roupas",
    display: "Roupas"
  },
  {
    category: "eletrodomesticos",
    display: "Eletrodomésticos"
  }
];

const products = [];
let idCounter = 1;

categories.forEach(category => {
  let limit = idCounter + 50;
  for(idCounter; idCounter < limit; idCounter++) {
    let displayName = category.display.substr(0, category.display.length - 1) + ' ' + (limit - idCounter).toString();

    let product = {
      id: idCounter,
      name: displayName,
      category: category.category,
      price: (limit - idCounter) * 1000,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Diam donec adipiscing tristique risus. Nisi lacus sed viverra tellus in hac habitasse platea. Suspendisse potenti nullam ac tortor vitae. Diam donec adipiscing tristique risus nec feugiat in fermentum. Non odio euismod lacinia at quis risus sed vulputate odio. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Nulla at volutpat diam ut venenatis. Et ultrices neque ornare aenean euismod elementum nisi quis. A scelerisque purus semper eget. Vulputate ut pharetra sit amet aliquam id diam maecenas. Sit amet massa vitae tortor condimentum lacinia quis. Facilisi morbi tempus iaculis urna. Nisl rhoncus mattis rhoncus urna neque viverra. Pharetra magna ac placerat vestibulum lectus mauris. Vitae suscipit tellus mauris a diam maecenas sed. Ridiculus mus mauris vitae ultricies leo integer. Nisl nisi scelerisque eu ultrices vitae auctor. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.`
    }
    products.unshift(product);
  }
});

function getCategories() {
  return categories;
}

function getProductsByCategory(category, options) {
  let docs = [];
  for(let i = 0; i < products.length; i++){
    if(products[i].category === category.category) {
      docs.push(products[i]);
    }
  }

  console.log(docs);

  let data = [];
  if(docs.length > options.docs) {
    let startingIndex = options.docs * (options.page - 1);
    for(let i = startingIndex; i < options.docs * options.page; i++) {
      data.push(docs[i]);
    }
  } else {
    data = docs;
  }

  console.log(data);

  let pages = Math.ceil(docs.length / options.docs);

  return {
    data,
    navigationDetails: {
      docs: options.docs,
      page: options.page,
      pages
    }
  };
}

function getProductById(id) {
  let p = {};

  products.forEach(product => {
    if (product.id == id) {
      p = product;
    }
  });

  return p;
}
