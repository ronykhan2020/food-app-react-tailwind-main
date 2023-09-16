import React from "react";

export const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out , BOGO's Out</p>
          <p className=" px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className=" px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">We Delivery Desserts Too</p>
          <p className=" px-2">Tastey Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2878737/pexels-photo-2878737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};
