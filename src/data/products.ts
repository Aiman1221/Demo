import { Product } from "../context/CartContext";
import { getFallbackProductImage } from "../utils/imageFallback";

import monstera_product from "../assets/images/best_monstera_prod_1782569004722.jpg";
import snake_plant_product from "../assets/images/best_snake_prod_1782569018625.jpg";
import peace_lily_product from "../assets/images/best_peace_lily_prod_1782569034817.jpg";
import jade_plant_product from "../assets/images/best_jade_prod_1782569050319.jpg";
import aloe_vera_product from "../assets/images/aloe_vera_product_1781760432125.jpg";
import hibiscus_product from "../assets/images/hibiscus_product_1781760445530.jpg";
import bougainvillea_product from "../assets/images/bougainvillea_product_1781760459871.jpg";
import orchid_product from "../assets/images/orchid_product_1781760471213.jpg";
import rose_plant_product from "../assets/images/rose_plant_product_1781760485592.jpg";

import zz_plant from "../assets/images/zz_plant_1781760839933.jpg";
import fiddle_leaf_fig from "../assets/images/fiddle_leaf_fig_1781760857069.jpg";
import golden_pothos from "../assets/images/golden_pothos_1781760869078.jpg";
import rubber_plant from "../assets/images/rubber_plant_1781760882358.jpg";
import lavender_plant from "../assets/images/lavender_plant_1781760895716.jpg";
import jasmine_plant from "../assets/images/jasmine_plant_1781760907367.jpg";
import string_of_pearls from "../assets/images/string_of_pearls_1781760920892.jpg";
import anthurium_plant from "../assets/images/anthurium_plant_1781760934113.jpg";
import african_violet from "../assets/images/african_violet_1781760954082.jpg";
import begonia_plant from "../assets/images/begonia_plant_1781760967785.jpg";
import zebra_haworthia from "../assets/images/zebra_haworthia_1781760984678.jpg";
import rosemary_plant from "../assets/images/rosemary_plant_1781761000849.jpg";
import areca_palm from "../assets/images/areca_palm_1781761017141.jpg";
import cactus_plant from "../assets/images/cactus_plant_1781761031047.jpg";

// New image imports
import bonsai_tree from "../assets/images/bonsai_tree_1781845946993.jpg";
import calathea_medallion from "../assets/images/calathea_medallion_1781845961808.jpg";
import pilea_peperomioides from "../assets/images/pilea_peperomioides_1781845972108.jpg";
import tillandsia_air from "../assets/images/tillandsia_air_1781845983649.jpg";
import mandrake_root from "../assets/images/mandrake_root_1781845998233.jpg";
import howler_fern from "../assets/images/howler_fern_1781846012412.jpg";
import boston_fern from "../assets/images/boston_fern_1781846026786.jpg";
import spider_plant from "../assets/images/spider_plant_1781846037010.jpg";
import burros_tail from "../assets/images/burros_tail_1781846053430.jpg";

const rawProducts: Product[] = [
  // Indoor Plants
  {
    id: "1",
    name: "Monstera Deliciosa",
    price: 899,
    category: "Indoor Plants",
    image: monstera_product,
    description: "A beautiful tropical plant known for its natural leaf holes.",
  },
  {
    id: "2",
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    image: snake_plant_product,
    description: "One of the best indoor plants for air purification.",
  },
  {
    id: "3",
    name: "Peace Lily",
    price: 699,
    category: "Indoor Plants",
    image: peace_lily_product,
    description: "An elegant air-purifying plant with white blooms.",
  },
  {
    id: "10",
    name: "ZZ Plant",
    price: 599,
    category: "Indoor Plants",
    image: zz_plant,
    description:
      "Virtually indestructible and tolerates low light beautifully.",
  },
  {
    id: "11",
    name: "Fiddle Leaf Fig",
    price: 1299,
    category: "Indoor Plants",
    image: fiddle_leaf_fig,
    description:
      "A highly sought-after plant with large, gorgeous violin-shaped leaves.",
  },
  {
    id: "12",
    name: "Golden Pothos",
    price: 299,
    category: "Indoor Plants",
    image: golden_pothos,
    description: "An easy-to-care trailing vine that grows quickly.",
  },
  {
    id: "13",
    name: "Rubber Plant",
    price: 799,
    category: "Indoor Plants",
    image: rubber_plant,
    description: "A striking plant with dark, glossy leaves.",
  },
  {
    id: "14",
    name: "Areca Palm",
    price: 1199,
    category: "Indoor Plants",
    image: areca_palm,
    description: "A lush, feathery palm that brings a tropical vibe indoors.",
  },

  // Succulents
  {
    id: "4",
    name: "Jade Plant",
    price: 399,
    category: "Succulents",
    image: jade_plant_product,
    description: "A popular succulent thought to bring good luck.",
  },
  {
    id: "5",
    name: "Aloe Vera",
    price: 349,
    category: "Succulents",
    image: aloe_vera_product,
    description: "A versatile medicinal plant requiring minimal care.",
  },
  {
    id: "15",
    name: "String of Pearls",
    price: 449,
    category: "Succulents",
    image: string_of_pearls,
    description: "A stunning cascading succulent with bead-like leaves.",
  },
  {
    id: "16",
    name: "Zebra Haworthia",
    price: 349,
    category: "Succulents",
    image: zebra_haworthia,
    description: "A striking and compact succulent with bold white stripes.",
  },
  {
    id: "17",
    name: "Classic Cactus",
    price: 399,
    category: "Succulents",
    image: cactus_plant,
    description: "A timeless desert companion requiring very little water.",
  },

  // Outdoor Plants
  {
    id: "6",
    name: "Hibiscus",
    price: 549,
    category: "Outdoor Plants",
    image: hibiscus_product,
    description: "Bright and beautiful tropical flowering plant.",
  },
  {
    id: "7",
    name: "Bougainvillea",
    price: 599,
    category: "Outdoor Plants",
    image: bougainvillea_product,
    description: "Vibrant, drought-tolerant vine perfect for sunny walls.",
  },
  {
    id: "18",
    name: "Lavender",
    price: 399,
    category: "Outdoor Plants",
    image: lavender_plant,
    description: "A fragrant, beautiful herb loved by bees and butterflies.",
  },
  {
    id: "19",
    name: "Jasmine",
    price: 499,
    category: "Outdoor Plants",
    image: jasmine_plant,
    description: "A climbing vine with intensely fragrant white blossoms.",
  },
  {
    id: "20",
    name: "Rosemary",
    price: 299,
    category: "Outdoor Plants",
    image: rosemary_plant,
    description: "A resilient culinary herb with a fresh, pine-like scent.",
  },

  // Flowering
  {
    id: "8",
    name: "Orchid",
    price: 1299,
    category: "Flowering Plants",
    image: orchid_product,
    description: "Exquisite and long-lasting exotic flowers.",
  },
  {
    id: "9",
    name: "Rose Plant",
    price: 449,
    category: "Flowering Plants",
    image: rose_plant_product,
    description: "Classic romantic blooms for outdoor gardens.",
  },
  {
    id: "21",
    name: "Anthurium",
    price: 899,
    category: "Flowering Plants",
    image: anthurium_plant,
    description: "Features glossy, heart-shaped red blooms that last for weeks.",
  },
  {
    id: "22",
    name: "African Violet",
    price: 499,
    category: "Flowering Plants",
    image: african_violet,
    description: "A charming, fuzzy-leaved plant with clustered purple flowers.",
  },
  {
    id: "23",
    name: "Begonia",
    price: 399,
    category: "Flowering Plants",
    image: begonia_plant,
    description: "Known for its vibrant, boldly patterned foliage and beautiful blooms.",
  },

  // Decorative
  {
    id: "24",
    name: "Bonsai Tree",
    price: 2999,
    category: "Decorative Plants",
    image: bonsai_tree,
    description:
      "A beautiful miniature tree trained with ancient techniques to bring peace and harmony to your space.",
  },
  {
    id: "25",
    name: "Calathea Medallion",
    price: 899,
    category: "Decorative Plants",
    image: calathea_medallion,
    description:
      "Known for its stunning, ornate leaves with deep green and burgundy patterns.",
  },
  {
    id: "26",
    name: "Pilea Peperomioides",
    price: 499,
    category: "Decorative Plants",
    image: pilea_peperomioides,
    description:
      "Often called the Chinese Money Plant, it features adorable coin-shaped leaves.",
  },
  {
    id: "27",
    name: "Tillandsia Air Plant",
    price: 299,
    category: "Decorative Plants",
    image: tillandsia_air,
    description:
      "A unique decorative plant that requires no soil to grow and thrive.",
  },

  // Screaming Plants
  {
    id: "28",
    name: "Mandrake Root",
    price: 9999,
    category: "Screaming Plants",
    image: mandrake_root,
    description:
      "A rare and mystical plant that emits a piercing scream when uprooted. Handle with extreme caution and ear muffs!",
  },
  {
    id: "29",
    name: "Howler Fern",
    price: 1499,
    category: "Screaming Plants",
    image: howler_fern,
    description:
      "Known for its leaves that vibrate and create a howling sound during strong winds.",
  },

  // Hanging Plants
  {
    id: "30",
    name: "Boston Fern",
    price: 599,
    category: "Hanging Plants",
    image: boston_fern,
    description: "A classic hanging plant with lush, feathery fronds.",
  },
  {
    id: "31",
    name: "Spider Plant",
    price: 349,
    category: "Hanging Plants",
    image: spider_plant,
    description: "An adaptable, easy-to-grow plant with cascading spiderettes.",
  },
  {
    id: "32",
    name: "Burro's Tail",
    price: 499,
    category: "Hanging Plants",
    image: burros_tail,
    description:
      "A visually striking trailing succulent with thick, fleshy leaves.",
  },
];

export const allProducts: Product[] = rawProducts.map(product => ({
  ...product,
  image: getFallbackProductImage(product.name) || product.image
}));
