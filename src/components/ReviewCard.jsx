import React from "react";
import "../styles/review-card.css";

const ReviewCard = ({ name, text, rating }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title text-success"> &#8594; {name}</h5>
        <blockquote className="review-text">&ldquo;{text}&rdquo;</blockquote>
        <div className="rating-text">
          Ratings: <span className="text-warning fw-bold">{rating}</span> star
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
