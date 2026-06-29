/**
 * Image Fallback Utility for Sprouto Plant Store
 * Map specific names, categories, blogs, and pages to high-quality, relevant Unsplash images.
 */

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

import bonsai_tree from "../assets/images/bonsai_tree_1781845946993.jpg";
import calathea_medallion from "../assets/images/calathea_medallion_1781845961808.jpg";
import pilea_peperomioides from "../assets/images/pilea_peperomioides_1781845972108.jpg";
import tillandsia_air from "../assets/images/tillandsia_air_1781845983649.jpg";
import mandrake_root from "../assets/images/mandrake_root_1781845998233.jpg";
import howler_fern from "../assets/images/howler_fern_1781846012412.jpg";
import boston_fern from "../assets/images/boston_fern_1781846026786.jpg";
import spider_plant from "../assets/images/spider_plant_1781846037010.jpg";
import burros_tail from "../assets/images/burros_tail_1781846053430.jpg";

const PRODUCT_IMAGES: Record<string, string> = {
  "monstera deliciosa": monstera_product,
  "snake plant": snake_plant_product,
  "peace lily": peace_lily_product,
  "zz plant": zz_plant,
  "fiddle leaf fig": fiddle_leaf_fig,
  "golden pothos": golden_pothos,
  "rubber plant": rubber_plant,
  "areca palm": areca_palm,
  "jade plant": jade_plant_product,
  "aloe vera": aloe_vera_product,
  "string of pearls": string_of_pearls,
  "zebra haworthia": zebra_haworthia,
  "classic cactus": cactus_plant,
  "hibiscus": hibiscus_product,
  "bougainvillea": bougainvillea_product,
  "lavender": lavender_plant,
  "jasmine": jasmine_plant,
  "rosemary": rosemary_plant,
  "orchid": orchid_product,
  "rose plant": rose_plant_product,
  "anthurium": anthurium_plant,
  "african violet": african_violet,
  "begonia": begonia_plant,
  "bonsai tree": bonsai_tree,
  "calathea medallion": calathea_medallion,
  "pilea peperomioides": pilea_peperomioides,
  "tillandsia air plant": tillandsia_air,
  "mandrake root": mandrake_root,
  "howler fern": howler_fern,
  "boston fern": boston_fern,
  "spider plant": spider_plant,
  "burro's tail": burros_tail
};

const CATEGORY_IMAGES: Record<string, string> = {
  "indoor plants": "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop",
  "screaming plants": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop",
  "outdoor plants": "https://images.unsplash.com/photo-1508500383102-1324bc35c574?q=80&w=600&auto=format&fit=crop",
  "hanging plants": "https://images.unsplash.com/photo-1598880949551-897752ed4041?q=80&w=600&auto=format&fit=crop",
  "succulents": "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?q=80&w=600&auto=format&fit=crop",
  "flowering plants": "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=600&auto=format&fit=crop",
  "decorative plants": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop"
};

const SERVICE_IMAGES: Record<string, string> = {
  "garden consultation": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop",
  "plant doctor": "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=600&auto=format&fit=crop",
  "corporate greenery": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  "plant maintenance": "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=600&auto=format&fit=crop"
};

const BLOG_IMAGES: Record<string, string> = {
  "10 easy indoor plants": "https://images.unsplash.com/photo-1517576075253-1e2f129c540e?q=80&w=800&auto=format&fit=crop",
  "how to water your plants": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop",
  "benefits of having plants": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  "creating a balcony garden": "https://images.unsplash.com/photo-1508500383102-1324bc35c574?q=80&w=800&auto=format&fit=crop",
  "seasonal plant care guide": "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=800&auto=format&fit=crop",
  "best small trees for apartments": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
};

const TEAM_IMAGES: Record<string, string> = {
  "aiman siddiqui": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
};

const PAGE_IMAGES: Record<string, string> = {
  "about_hero": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop",
  "our_story": "https://images.unsplash.com/photo-1453906971074-af566ccd6906?q=80&w=800&auto=format&fit=crop",
  "hero_interior": "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
  "attractive_botanical_bg": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop",
  "premium_interior_plants": "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
  "why_choose_bg": "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=1200&auto=format&fit=crop",
  "best_sellers_bg": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
  "testimonials_bg": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
};

const PRODUCT_UNSPLASH_IMAGES: Record<string, string> = {
  "monstera deliciosa": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600&auto=format&fit=crop",
  "snake plant": "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600&auto=format&fit=crop",
  "peace lily": "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600&auto=format&fit=crop",
  "zz plant": "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=600&auto=format&fit=crop",
  "fiddle leaf fig": "https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600&auto=format&fit=crop",
  "golden pothos": "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=600&auto=format&fit=crop",
  "rubber plant": "https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=600&auto=format&fit=crop",
  "areca palm": "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=600&auto=format&fit=crop",
  "jade plant": "https://images.unsplash.com/photo-1598880940375-4a4dd7b736bf?q=80&w=600&auto=format&fit=crop",
  "aloe vera": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop",
  "string of pearls": "https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=600&auto=format&fit=crop",
  "zebra haworthia": "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  "classic cactus": "https://images.unsplash.com/photo-1551893478-d726eaf0442c?q=80&w=600&auto=format&fit=crop",
  "hibiscus": "https://images.unsplash.com/photo-1546832223-9c8df0c25a07?q=80&w=600&auto=format&fit=crop",
  "bougainvillea": "https://images.unsplash.com/photo-1589244159943-460088ed5c92?q=80&w=600&auto=format&fit=crop",
  "lavender": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop",
  "jasmine": "https://images.unsplash.com/photo-1534710951216-45c5df96c473?q=80&w=600&auto=format&fit=crop",
  "rosemary": "https://images.unsplash.com/photo-1515589654462-a9881e276b84?q=80&w=600&auto=format&fit=crop",
  "orchid": "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=600&auto=format&fit=crop",
  "rose plant": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
  "anthurium": "https://images.unsplash.com/photo-1569389397653-c04fe624e663?q=80&w=600&auto=format&fit=crop",
  "african violet": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop",
  "begonia": "https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=600&auto=format&fit=crop",
  "bonsai tree": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop",
  "calathea medallion": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
  "pilea peperomioides": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=600&auto=format&fit=crop",
  "tillandsia air plant": "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop",
  "mandrake root": "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=600&auto=format&fit=crop",
  "howler fern": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600&auto=format&fit=crop",
  "boston fern": "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=600&auto=format&fit=crop",
  "spider plant": "https://images.unsplash.com/photo-1572605412440-808959c50000?q=80&w=600&auto=format&fit=crop",
  "burro's tail": "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=600&auto=format&fit=crop"
};

export function getFallbackProductImage(name: string): string {
  const normalized = name.toLowerCase().trim();
  for (const [key, value] of Object.entries(PRODUCT_UNSPLASH_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  return "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop";
}

export function getFallbackCategoryImage(name: string): string {
  const normalized = name.toLowerCase().trim();
  for (const [key, value] of Object.entries(CATEGORY_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  return "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop";
}

export function getFallbackServiceImage(name: string): string {
  const normalized = name.toLowerCase().trim();
  for (const [key, value] of Object.entries(SERVICE_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  return "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=600&auto=format&fit=crop";
}

export function getFallbackBlogImage(title: string): string {
  const normalized = title.toLowerCase().trim();
  for (const [key, value] of Object.entries(BLOG_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  return "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=800&auto=format&fit=crop";
}

export function getFallbackTeamImage(name: string): string {
  const normalized = name.toLowerCase().trim();
  for (const [key, value] of Object.entries(TEAM_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  return "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
}

export function getFallbackPageImage(name: string): string {
  const normalized = name.toLowerCase().trim();
  for (const [key, value] of Object.entries(PAGE_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  return "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop";
}
