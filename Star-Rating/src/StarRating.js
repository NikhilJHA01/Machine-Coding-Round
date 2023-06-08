import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const StarRating = ({ value, total }) => {
  const [rating, setRating] = useState(value || 0);
  const [selection, setSelection] = useState(0);

  const onHover = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id")) {
      val = event.target.getAttribute("data-star-id");
    }
    setSelection(val);
  };
  return (
    <div
      onMouseLeave={() => onHover(null)}
      onMouseOver={onHover}
      onClick={(e) =>
        setRating(e.target.getAttribute("data-star-id") || rating)
      }
    >
      {Array.from({ length: total }, (_, index) => {
        return (
          <Star
            marked={selection ? selection >= index + 1 : rating >= index + 1}
            starId={index + 1}
            key={`star_${index}`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
