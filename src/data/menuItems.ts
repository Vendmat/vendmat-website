export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: 'vegetarian' | 'non-vegetarian';
  image: string;
  description: string;
  ingredients: string;
  calories: number;
  popular: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Veg Bento",
    price: 189,
    category: "vegetarian",
    image: "/vendmat_photos/8.jpg",
    description: "Balanced meal with rice, roti, vegetables, curry and desert",
    ingredients: "Rice, Roti, Paneer curry, Mixed Vegetable, Desert",
    calories: 450,
    popular: true
  },
  {
    id: 2,
    name: "Chicken Bento",
    price: 199,
    category: "non-vegetarian",
    image: "/vendmat_photos/7.jpg",
    description: "Protein-rich meal with tender chicken curry",
    ingredients: "Rice, Roti, Chicken Curry, Vegetables, Desert",
    calories: 520,
    popular: true
  },
  {
    id: 3,
    name: "Chicken Sandwich",
    price: 159,
    category: "non-vegetarian",
    image: "/vendmat_photos/9.jpg",
    description: "Quick and tasty chicken sandwich",
    ingredients: "Bread, Chicken, Salad, Sauce, chips",
    calories: 350,
    popular: false
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: 159,
    category: "non-vegetarian",
    image: "/vendmat_photos/1.jpg",
    description: "Aromatic basmati rice cooked with tender chicken and spices",
    ingredients: "Chicken Biryani, curry and desert",
    calories: 650,
    popular: true
  },
  {
    id: 5,
    name: "Chicken Makhani Bowl",
    price: 139,
    category: "non-vegetarian",
    image: "/vendmat_photos/6.jpg",
    description: "Hearty chicken curry with rice",
    ingredients: "Rice, Chicken Curry, Desert and Chips",
    calories: 490,
    popular: false
  },
  {
    id: 6,
    name: "Alfredo Pasta",
    price: 159,
    category: "vegetarian",
    image: "/vendmat_photos/3.jpg",
    description: "Creamy Italian-style pasta in rich Alfredo sauce",
    ingredients: "Pasta, Cream, Cheese, Garlic, Herbs",
    calories: 520,
    popular: true
  }
];

// Helper function to get popular items
export const getPopularItems = (): MenuItem[] => {
  return menuItems.filter(item => item.popular);
};

// Helper function to get items by category
export const getItemsByCategory = (category: 'vegetarian' | 'non-vegetarian'): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};
