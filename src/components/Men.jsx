import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import men4 from '../assets/img/men4.jpg';
import men3 from '../assets/img/men3.jpg';
import men5 from '../assets/img/men5.jpg';
import men1 from '../assets/img/men1.jpg';
import men2 from '../assets/img/men2.jpg';
import men6 from '../assets/img/men6.jpg';
import men7 from '../assets/img/men7.jpg';
import men8 from '../assets/img/men8.jpg';
import men9 from '../assets/img/men9.jpg';
import men10 from '../assets/img/men10.jpg';
import men11 from '../assets/img/men11.jpg';
import men12 from '../assets/img/men12.jpg';
import men13 from '../assets/img/men13.jpg';
import men15 from '../assets/img/men15.jpg';
import men14 from '../assets/img/men14.jpg';

export const Menproducts = [
  {
    id: uuidv4(),
    image: men4,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "3.5",
    title: 'Casual Shirt Navy Blue',
    price: 876.00,
    description: 'A casual shirt for any occasion.'
  },
  {
    id: uuidv4(),
    image: men3,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "4.5",
    title: 'Fawn Glen Plaid Check Blazer For Men',
    price: 556.00,
    description: 'A stylish blazer for formal events.'
  },
  {
    id: uuidv4(),
    image: men5,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Rust Plain Casual Shirt',
    price: 766.00,
    description: 'A comfortable rust-colored shirt.'
  },
  {
    id: uuidv4(),
    image: men1,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "2.4",
    title: 'Full Sleeve Denim Jacket Brown',
    price: 987.00,
    description: 'A denim jacket for casual outings.'
  },
  {
    id: uuidv4(),
    image: men2,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'Denim Solid Blue Shirt',
    price: 765.00,
    description: 'A formal blue shirt for business wear.'
  },
  {
    id: uuidv4(),
    image: men6,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "4.0",
    title: 'Checkered Wool Blend Suit',
    price: 654.00,
    description: 'A sophisticated suit for formal events.'
  },
  {
    id: uuidv4(),
    image: men7,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.5",
    title: 'Brown Striped Casual Trousers',
    price: 789.00,
    description: 'Comfortable trousers for casual wear.'
  },
  {
    id: uuidv4(),
    image: men8,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "3.8",
    title: 'Classic Chinos',
    price: 456.00,
    description: 'Classic chinos for everyday wear.'
  },
  {
    id: uuidv4(),
    image: men9,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'White Button Down Shirt',
    price: 345.00,
    description: 'A white shirt suitable for formal occasions.'
  },
  {
    id: uuidv4(),
    image: men10,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.2",
    title: 'Grey Slim Fit Jeans',
    price: 567.00,
    description: 'Stylish slim-fit jeans for casual wear.'
  },
  {
    id: uuidv4(),
    image: men11,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Black Denim Jacket',
    price: 432.00,
    description: 'A black denim jacket for casual outings.'
  },
  {
    id: uuidv4(),
    image: men12,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.4",
    title: 'Plaid Flannel Shirt',
    price: 432.00,
    description: 'A comfortable plaid shirt for everyday wear.'
  },
  {
    id: uuidv4(),
    image: men13,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "3.8",
    title: 'Tailored Grey Suit',
    price: 987.00,
    description: 'A grey suit tailored for formal occasions.'
  },
  {
    id: uuidv4(),
    image: men15,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.3",
    title: 'V-neck Casual Sweater',
    price: 654.00,
    description: 'A casual sweater perfect for layering.'
  },
  {
    id: uuidv4(),
    image: men14,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'Black Tie Formal Shirt',
    price: 876.00,
    description: 'A black tie shirt for formal events.'
  }];
  
  const Men = () => {
    const [products, setProducts] = useState(Menproducts);
  
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
  
  export default Men
