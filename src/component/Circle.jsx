/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import img1 from "../Pictures/img1.png";
import img2 from "../Pictures/img2.png";
import img3 from "../Pictures/img3.png";
import img4 from "../Pictures/img4.png";
import img5 from "../Pictures/img5.png";
import img6 from "../Pictures/img6.png";
import img7 from "../Pictures/img7.png";
const products = [
  {
    id: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  // More products...
];

export default function Circle() {
  return (
    <div className="flex flex-col justify-center items-center h-96 bg-gray-100 mx-10 relative z-10">
    
    <h1 className="mb-10 text-4xl font-jost ">You Might Like</h1>

      <div className="grid grid-cols-7 gap-4 rounded max-w-[1240px] bg-gray">
        <div className="rad col-span-1 flex flex-col justify-center items-center ">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center cursor-pointer">
            <img
              src={img1}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div>
          <p className="mt-2 text-center font-medium font-jost cursor-pointer">Women Tops</p>
        </div>
        <div className="rad col-span-1 flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center">
            <img
              src={img2}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div>
          <p className="mt-2 text-center font-medium font-jost cursor-pointer">Women Tops</p>
        </div>
        <div className="rad col-span-1 flex flex-col justify-center items-center ">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center">
            <img
              src={img3}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div>
          <p className="mt-2 text-center font-medium font-jost">Women Tops</p>
        </div>
        <div className="rad col-span-1 flex flex-col justify-center items-center ">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center">
            <img
              src={img4}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div>
          <p className="mt-2 text-center font-medium font-jost cursor-pointer">Women Pants</p>
        </div>
        <div className="rad col-span-1 flex flex-col justify-center items-center ">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center cursor-pointer">
            <img
              src={img5}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div>
          <p className="mt-2 text-center font-medium font-jost cursor-pointer">Women Cloths</p>
        </div>
        <div className="rad col-span-1 flex flex-col justify-center items-center ">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center cursor-pointer">
            <img
              src={img6}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div> 
          <p className="mt-2 text-center font-medium font-jost cursor-pointer">Men Jeans</p>
        </div>
        <div className="rad col-span-1 flex flex-col justify-center items-center ">
          <div className="rounded-full w-32 h-32 bg-[#ecebe9] flex justify-center items-center cursor-pointer">
            <img
              src={img7}
              alt="Image 01"
              className="w-24 h-24 rounded-full transition-transform duration-300 hover:scale-105 object-center"
            />
          </div>
          <p className="mt-2 text-center font-medium font-jost cursor-pointer">Men Shirts</p>
        </div>
      </div>
    </div>
  );
}

//   {products.map((product) => (
//     <div key={product.id} className="group relative">
//       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//         <img
//           src={product.imageSrc}
//           alt={product.imageAlt}
//           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//         />
//       </div>
//     </div>
//   ))}
