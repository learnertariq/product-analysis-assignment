import React from "react";
import { Link } from "react-router-dom";
import useReview from "../hooks/useReview";
import "../styles/home.css";
import ReviewCard from "./ReviewCard";

const Home = () => {
  const [reviews] = useReview();

  return (
    <>
      <section className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 g-3 g-md-0 align-items-center">
          <div className="col hero-info order-2 order-md-1">
            <h1 className="hero-info-heading text-primary text-uppercase fw-bold">
              The Theme You love
            </h1>
            <p className="hero-info-desc mt-3">
              You need a theme to show your website to the clients. We provide
              you the best and beautiful theme as your choice. As you choose our
              theme, you are worry free and get lifetime support.
            </p>
            <button className="c2a-btn btn btn-primary fw-bold text-uppercase px-4 py-3">
              Live Review
            </button>
          </div>
          <div className="col order-1 order-md-2">
            <img src="/hero-img.webp" alt="" className="img-fluid hero-img" />
          </div>
        </div>
      </section>

      {/* Customer Review section */}
      <section className="container text-center pt-5">
        <h2>Customer Reviews</h2>
        <div className="reviews-container my-4 text-start">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 justify-content-center">
            {reviews.slice(0, 3).map((r, index) => (
              <div key={index} className="col">
                <ReviewCard
                  name={r.name}
                  text={r.text}
                  rating={r.rating}
                  img={r.img}
                />
              </div>
            ))}
          </div>
        </div>
        <Link to="/reviews" className="btn btn-primary px-5">
          See All Reviews
        </Link>
      </section>
    </>
  );
};

export default Home;
