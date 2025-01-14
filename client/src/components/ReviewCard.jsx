import React from "react";

const ReviewCard = ({ title, content, name, image, rating }) => {
  return (
    <div className="bg-white w-full  lg:w-2/6 flex flex-col justify-between shadow-custom-shadow2 rounded-xl p-6 mb-6">
      {/* <h3 className="text-lg font-semibold mb-3">{title}</h3> */}
      <div className="">
        <div className="flex-1">
          <img src="./src/assets/images/quotes.png" alt="" className="h-6" />
        </div>
        <div
          className="text-gray-600 mb-4 mt-6 Arial text-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-medium">{name}</p>
          <div className="flex">
            {[...Array(rating)].map((_, index) => (
              <span key={index} className="text-yellow-500">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
