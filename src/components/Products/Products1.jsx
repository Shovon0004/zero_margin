
import React from "react";
import Img1 from "../../assets/grocery/lassi.jpg";
import Img2 from "../../assets/grocery/milk.jpg";
import Img3 from "../../assets/grocery/muesli.avif";
import Img4 from "../../assets/grocery/oreo.webp";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Amul lassi",
    rating: 5.0,
    color: "Expiry: 22/07/25",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Milk",
    rating: 4.5,
    color: "Expiry: 22/07/25",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Muesli",
    rating: 4.7,
    color: "Expiry: 22/07/25",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Oreo",
    rating: 4.4,
    color: "Expiry: 22/07/25",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];



const Products1 = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Fresh Groceries for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Groceries
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Fresh and affordable groceries delivered right to your doorstep. Shop now and enjoy the convenience of quality products at unbeatable prices.

          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Products1
