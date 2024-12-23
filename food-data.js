export let keyArr;
export let productList = [
  {
    id: 1.1,
    desEng: `Look Haza`,
    desBangla: "ক্লাসিক বিফ বিরিয়ানি।",
    price: 350,
    hotel: "Briyani House",
    image: `https://i.postimg.cc/8c5Qvrg6/tacos.jpg|https://i.postimg.cc/NFzhkfQP/chicken-fry.jpg`,
    category: `Bangladeshi`,
    longDes: `A flavorful and aromatic biryani made with tender beef, basmati rice, and a blend of .`,
    keyword: `biryani`,
    weight: `750g`,
    rate: "4/400",
  },
  {
    id: 1.2,
    desEng: `solayman Classic Chicken Biryani it is tha long des is Classic Chicken Biryani it is tha long des is Classic Classic Chicken Biryani it is tha long des is Classic Chicken Biryani it is tha long des is Classic `,
    desBangla: "ক্লাসিক চিকেন বিরিয়ানি।",
    price: 300,
    hotel: "Biryani Express",
    image: `https://i.postimg.cc/k5yL5Nm7/chicken-curry.jpg|https://i.postimg.cc/fyf9Q6gF/biryani.jpg`,
    category: `Bangladeshi`,
    longDes: `A delightful biryani dish featuring perfectly cooked chicken and flavorful spices mixed with fragrant rice.`,
    keyword: `chicken biryani`,
    weight: `800g`,
    rate: "4.5/500",
  },
  {
    id: 1.3,
    desEng: `Kacchi Biryani`,
    desBangla: "কাচ্চি বিরিয়ানি।",
    price: 450,
    hotel: "Dhaka Delights",
    image: `https://i.postimg.cc/BvXYCFMr/kacchi.jpg|https://i.postimg.cc/SKY2rC6V/salad.jpg`,
    category: `Bangladeshi`,
    longDes: `Authentic kacchi biryani made with marinated mutton, fragrant rice, and a traditional blend of spices.`,
    keyword: `kacchi biryani`,
    weight: `850g`,
    rate: "5/300",
  },
  {
    id: 1.4,
    desEng: `Hyderabadi Dum Biryani`,
    desBangla: "হায়দ্রাবাদী ডুম বিরিয়ানি।",
    price: 500,
    hotel: "Indian Spice Corner",
    image: `https://i.postimg.cc/JhVF6TDf/dum-biryani.jpg|https://i.postimg.cc/MTX8NbX7/naan.jpg`,
    category: `Indian`,
    longDes: `Rich and flavorful dum biryani cooked with layers of meat and rice, sealed with a dough lid.`,
    keyword: `dum biryani`,
    weight: `900g`,
    rate: "4.8/600",
  },
  {
    id: 1.5,
    desEng: `Vegetable Biryani`,
    desBangla: "ভেজিটেবল বিরিয়ানি।",
    price: 250,
    hotel: "Green Leaf",
    image: `https://i.postimg.cc/wvhpyB0M/veg-biryani.jpg|https://i.postimg.cc/1XG5dtnh/veggies.jpg`,
    category: `Vegetarian`,
    longDes: `A delicious and healthy biryani featuring fresh vegetables, aromatic spices, and long-grain rice.`,
    keyword: `veg biryani`,
    weight: `700g`,
    rate: "4.2/350",
  },
  {
    id: 1.6,
    desEng: `Mutton Biryani`,
    desBangla: "মাটন বিরিয়ানি।",
    price: 550,
    hotel: "Royal Feast",
    image: `https://i.postimg.cc/5tGrD4XQ/mutton-biryani.jpg|https://i.postimg.cc/hjtWmy68/gravy.jpg`,
    category: `Bangladeshi`,
    longDes: `Tender mutton pieces cooked with basmati rice and an aromatic blend of herbs and spices.`,
    keyword: `mutton biryani`,
    weight: `900g`,
    rate: "4.7/450",
  },
  {
    id: 1.7,
    desEng: `Egg Biryani`,
    desBangla: "ডিম বিরিয়ানি।",
    price: 200,
    hotel: "Egg & More",
    image: `https://i.postimg.cc/yN2VRwDy/egg-biryani.jpg|https://i.postimg.cc/JhckV8kY/boiled-egg.jpg`,
    category: `Vegetarian`,
    longDes: `Simple yet delicious biryani with boiled eggs, rice, and a flavorful masala mix.`,
    keyword: `egg biryani`,
    weight: `650g`,
    rate: "4.1/250",
  },
  {
    id: 1.8,
    desEng: `Prawn Biryani`,
    desBangla: "চিংড়ি বিরিয়ানি।",
    price: 600,
    hotel: "Seafood Delight",
    image: `https://i.postimg.cc/TPKP7mrp/prawn-biryani.jpg|https://i.postimg.cc/ZRnmyTPK/prawns.jpg`,
    category: `Seafood`,
    longDes: `An exquisite biryani dish featuring fresh prawns and fragrant basmati rice cooked to perfection.`,
    keyword: `prawn biryani`,
    weight: `800g`,
    rate: "4.6/400",
  },
  {
    id: 1.9,
    desEng: `Fish Biryani`,
    desBangla: "মাছের বিরিয়ানি।",
    price: 400,
    hotel: "Blue Ocean",
    image: `https://i.postimg.cc/SKT2c9bD/fish-biryani.jpg|https://i.postimg.cc/jdMh6GqJ/fish.jpg`,
    category: `Seafood`,
    longDes: `A tasty biryani made with flaky fish fillets, aromatic rice, and a blend of traditional spices.`,
    keyword: `fish biryani`,
    weight: `750g`,
    rate: "4.3/300",
  },
  {
    id: 1.1,
    desEng: `Spicy Beef Biryani`,
    desBangla: "মসলাদার বিফ বিরিয়ানি।",
    price: 400,
    hotel: "Spice Haven",
    image: `https://i.postimg.cc/L58sQK9k/spicy-beef.jpg|https://i.postimg.cc/8kGQpwLp/spicy-rice.jpg`,
    category: `Bangladeshi`,
    longDes: `A rich and spicy biryani prepared with tender beef chunks and aromatic spices.`,
    keyword: `spicy biryani`,
    weight: `800g`,
    rate: "4.4/500",
  },
];
/**
 * The functoin make the unique key word array
 * @param {*} data
 * @returns
 */

// Generate unique keywords array
let uniqueKeywords = [
  ...new Set(
    productList
      .flatMap((product) => product.keyword.split(","))
      .map((keyword) => keyword.trim().toLowerCase())
  ),
];
keyArr = uniqueKeywords;

// tempo
productList.forEach((x) => {
  x.image = "https://i.postimg.cc/8c5Qvrg6/tacos.jpg";
});

const newLongDes = `Traditional Mexican tacos filled with spicy meat, fresh veggies, and tangy sauce.
1. Solayman is a good boy.
2. Nasim talk with his gf (temporary).
3. Salman is a fool but good boy.
4. Solayman is a good boy.
5. Nasim talk with his gf (temporary).
6. Salman is a fool but good boy.
7. Solayman is a good boy.
8. Nasim talk with his gf (temporary).
9. Salman is a fool but good boy.`;

productList.forEach((item) => {
  item.longDes = newLongDes;
});
