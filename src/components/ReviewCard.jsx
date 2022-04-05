import React from "react";
import Rating from "react-rating";
import "../styles/review-card.css";

const ReviewCard = ({ name, text, rating, img }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex align-items-center gap-2 mb-2">
          <img className="review-img" src={img} alt="" />
          <h5 className="card-title text-success">{name} &#8594;</h5>
        </div>
        <blockquote className="review-text">&ldquo;{text}&rdquo;</blockquote>
        <div className="rating-container opacity-75">
          <Rating readonly initialRating={rating} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
