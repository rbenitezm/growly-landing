import React from "react";

const Stars = () => {
  return (
    <div className="stars flex gap-0">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/yellow-star.webp"
          alt="star"
          className="h-4 "
        />
      ))}
    </div>
  );
};

export default Stars;
