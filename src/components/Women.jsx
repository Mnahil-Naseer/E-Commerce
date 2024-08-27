import { v4 as uuidv4 } from 'uuid';
import React,{useState} from 'react';
import collection from '../assets/img/collection.jpg';
import hoverCollection from '../assets/img/hover collection.jpg';
import women3 from '../assets/img/women3.jpg';
import fashion from '../assets/img/fashion.jpg';
import women1 from '../assets/img/women1.jpg';
import women2 from '../assets/img/women2.jpg';
import women4 from '../assets/img/women4.jpg';
import women5 from '../assets/img/women5.jpg';
import women6 from '../assets/img/women6.jpg';
import women7 from '../assets/img/women7.jpg';
import women8 from '../assets/img/women8.jpg';
import women9 from '../assets/img/women9.jpg';
import women10 from '../assets/img/women10.jpg';
import women11 from '../assets/img/women11.jpg';
import women12 from '../assets/img/women12.jpg';
export const Womenproducts = [
  {
    id: uuidv4(),
    image: collection,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'Long Fitted Trench Coat',
    price: 238.00,
    description: 'A stylish coat perfect for any occasion.'
  },
  {
    id: uuidv4(),
    image: hoverCollection,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.5",
    title: 'Stylish Coat',
    price: 344.00,
    description: 'A stylish coat perfect for casual outings.'
  },
  {
    id: uuidv4(),
    image: women3,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Striped Cotton Perfect Shirt',
    price: 765.02,
    description: 'A casual shirt made from comfortable cotton.'
  },
  {
    id: uuidv4(),
    image: fashion,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "4.1",
    title: 'Stylish Coat',
    price: 98.03,
    description: 'A stylish coat perfect for formal occasions.'
  },
  {
    id: uuidv4(),
    image: women1,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "3.2",
    title: 'The Shorter One Button Blazer in Fluid Crepe',
    price: 189.00,
    description: 'A chic blazer for a professional look.'
  },
  {
    id: uuidv4(),
    image: women2,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.3",
    title: 'Geo Boatneck Flare Midi Dress',
    price: 234.23,
    description: 'A midi dress perfect for casual wear.'
  },
  {
    id: uuidv4(),
    image: women4,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Trouser Pant in Textured Drape',
    price: 456.33,
    description: 'Comfortable and stylish trousers for daily wear.'
  },
  {
    id: uuidv4(),
    image: women5,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "3.0",
    title: 'Trouser Pant in Seasonless Stretch',
    price: 555.00,
    description: 'Elegant trousers suitable for any season.'
  },
  {
    id: uuidv4(),
    image: women6,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Mirula Long Floral Dress',
    price: 876.88,
    description: 'A beautiful floral dress for casual outings.'
  },
  {
    id: uuidv4(),
    image: women7,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "4.8",
    title: 'Risky Business Blazer',
    price: 456.76,
    description: 'A professional blazer for business meetings.'
  },
  {
    id: uuidv4(),
    image: women8,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "4.0",
    title: 'Solid Lapel Collar Single Button Blazer & Tailored Pants',
    price: 900.00,
    description: 'A stylish blazer and pants set.'
  },
  {
    id: uuidv4(),
    image: women9,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Boat Lilies Cut Work Embroidered Shirt',
    price: 234.65,
    description: 'An embroidered shirt with floral details.'
  },
  {
    id: uuidv4(),
    image: women10,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "2.7",
    title: 'Trouser Jeans in Ivory',
    price: 123.22,
    description: 'Comfortable jeans in an elegant ivory color.'
  },
  {
    id: uuidv4(),
    image: women11,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.5",
    title: 'Wide Leg Chino Pants',
    price: 298.11,
    description: 'Casual wide leg pants for everyday wear.'
  },
  {
    id: uuidv4(),
    image: women12,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.3",
    title: 'Stripe Tie Waist Top',
    price: 356.00,
    description: 'A stylish striped top with a tie waist.'
  }
];
const Women = () => {
    const [products, setProducts] = useState(Womenproducts);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Accessories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-sm mb-2">{product.description}</p>
                <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No accessories found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Women;
  