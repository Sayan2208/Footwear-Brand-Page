// import React from 'react';

function Hero() {
  return (
    <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST.</h1>
            <p>Your feet deserve the best and we are here to help you with our shoes. Your feet deserve the best and we are here to help you with our shoes.</p>

            <div className="hero-btn">
                <button>Shop now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="Amazon logo" />
                    <img src="/images/flipkart.png" alt="Flipkart logo" />
                </div>

            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="Hero Image" />
        </div>
    </main>
  )
}

export default Hero