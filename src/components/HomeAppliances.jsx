import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import girls2 from '../assets/img/girls2.jpg';
import girls1 from '../assets/img/girls1.jpg';
import earings4 from '../assets/img/earings4.jpg';
import earings3 from '../assets/img/earings3.jpg';
import earings2 from '../assets/img/earings2.jpg';
import necklace1 from '../assets/img/necklace1.jpg';
import necklance3 from '../assets/img/necklance3.jpg';
import necklace2 from '../assets/img/necklace2.jpg';
import rings1 from '../assets/img/rings1.jpg';
import ring2 from '../assets/img/ring2.jpg';
import ring4 from '../assets/img/ring4.jpg';
import ring7 from '../assets/img/ring7.jpg';
import ring6 from '../assets/img/ring6.jpg';
import ring5 from '../assets/img/ring5.jpg';
import earings5 from '../assets/img/earings5.jpg';

export const Homeproducts = [
  {
    id: uuidv4(),
    image: girls2,
    category: 'Accessories',
    subcategory: 'Watches',
    rating: "4.5",
    title: 'Elegant Golden Pearl Watch',
    price: 234.00,
    description: 'A sophisticated golden pearl watch that adds a touch of elegance to any outfit.'
  },
  {
    id: uuidv4(),
    image: girls1,
    category: 'Accessories',
    subcategory: 'Watches',
    rating: "5.0",
    title: 'Floral Enamel Watch',
    price: 345.00,
    description: 'A stylish floral enamel watch perfect for making a statement on special occasions.'
  },
  {
    id: uuidv4(),
    image: earings4,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.0",
    title: 'Gold Hoop Earrings',
    price: 123.00,
    description: 'Elegant gold hoop earrings.'
  },
  {
    id: uuidv4(),
    image: earings3,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.7",
    title: 'Silver Stud Earrings',
    price: 89.00,
    description: 'Classic silver stud earrings.'
  },
  {
    id: uuidv4(),
    image: earings2,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.3",
    title: 'Pearl Drop Earrings',
    price: 200.00,
    description: 'Elegant pearl drop earrings.'
  },
  {
    id: uuidv4(),
    image: necklace1,
    category: 'Accessories',
    subcategory: 'Necklaces',
    rating: "5.0",
    title: 'Gold Chain Necklace',
    price: 345.00,
    description: 'Stylish gold chain necklace.'
  },
  {
    id: uuidv4(),
    image: necklance3,
    category: 'Accessories',
    subcategory: 'Necklaces',
    rating: "4.5",
    title: 'Silver Pendant Necklace',
    price: 150.00,
    description: 'Elegant silver pendant necklace.'
  },
  {
    id: uuidv4(),
    image: necklace2,
    category: 'Accessories',
    subcategory: 'Necklaces',
    rating: "4.0",
    title: 'Diamond Necklace',
    price: 500.00,
    description: 'Luxurious diamond necklace.'
  },
  {
    id: uuidv4(),
    image: rings1,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.8",
    title: 'Gold Engagement Ring',
    price: 789.00,
    description: 'Beautiful gold engagement ring.'
  },
  {
    id: uuidv4(),
    image: ring2,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.3",
    title: 'Silver Wedding Band',
    price: 300.00,
    description: 'Classic silver wedding band.'
  },
  {
    id: uuidv4(),
    image: ring4,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "5.0",
    title: 'Rose Gold Ring',
    price: 450.00,
    description: 'Stylish rose gold ring.'
  },
  {
    id: uuidv4(),
    image: ring7,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.6",
    title: 'Vintage Ring',
    price: 675.00,
    description: 'Elegant vintage ring.'
  },
  {
    id: uuidv4(),
    image: ring6,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.2",
    title: 'Platinum Ring',
    price: 900.00,
    description: 'Luxury platinum ring.'
  },
  {
    id: uuidv4(),
    image: ring5,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.9",
    title: 'Diamond Ring',
    price: 1200.00,
    description: 'Exquisite diamond ring.'
  },
  {
    id: uuidv4(),
    image: earings5,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.0",
    title: 'Gold Drop Earrings',
    price: 234.00,
    description: 'Elegant gold drop earrings.'
  }
];

const HomeAppliances = () => {
  const [products, setProducts] = useState(Homeproducts);

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

export default HomeAppliances;

