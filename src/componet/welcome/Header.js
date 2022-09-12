import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  const [img, setImg] = useState([
    { img: "assets/images/furniture-images/poster/1.png" },
    { img: "assets/images/furniture-images/poster/2.png" },
    { img: "assets/images/furniture-images/poster/3.png" },
  ]);
  const [showImg, setShowImg] = useState({
    i: 0,
    img: "assets/images/furniture-images/poster/1.png",
  });
  return (
    <div>
      <section className="pt-0 poster-section">
        <div className="poster-image slider-for custome-arrow classic-arrow">
          <div className="center">
            <LazyLoadImage
              className="d-block m-auto animate-img"
              alt="sano one"
              effect="blur"
              src={showImg.img} // use normal <img> attributes as props
            />
          </div>
          <div>
            <img
              src="assets/images/furniture-images/poster/2.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </div>
          <div>
            <img
              src="assets/images/furniture-images/poster/3.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </div>
        </div>
        <div className="slider-nav image-show image-shows">
          {img.map((item, i) => (
            <div
              className="poster-img"
              onClick={() => setShowImg({ i: i, img: item.img })}
            >
              <LazyLoadImage
                alt="sano one"
                effect="blur"
                style={{
                  width: "120px",
                  height: "120px",
                  background: "white",
                  objectFit: "contain",
                  padding: "10px",
                }}
                className={"sliders" + i}
                src={item.img} // use normal <img> attributes as props
              />
              <div
                className={
                  i == showImg.i ? "overlay-color active" : "overlay-color"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  class="bi bi-plus-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="left-side-contain">
          <div className="banner-left">
            <h4>
              Sale <span className="theme-color">35% Off</span>
            </h4>
            <h1>
              New Latest <span>Furniture</span>
            </h1>
            <p>
              BUY ONE GET ONE <span className="theme-color">FREE</span>
            </p>
            <h2>
              $79.00{" "}
              <span className="theme-color">
                <del>$65.00</del>
              </span>
            </h2>
            <p className="poster-details mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="right-side-contain">
          <div className="social-image">
            <h6>Facebook</h6>
          </div>

          <div className="social-image">
            <h6>Instagram</h6>
          </div>

          <div className="social-image">
            <h6>Twitter</h6>
          </div>
        </div>
      </section>
      <section className="banner-section pt-4">
        <div>
          <div className="container-fluid">
            <div className="row g-3">
              <div className="col-lg-4 col-md-6">
                <div className="banner-image">
                  <a href="shop-left-sidebar.html">
                    <LazyLoadImage
                      className="d-block m-auto animate-img"
                      alt="sano one"
                      effect="blur"
                      src="assets/images/furniture-images/banner/1.jpg" // use normal <img> attributes as props
                    />
                  </a>
                  <div className="banner-details">
                    <a href="wishlist.html" className="heart-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    </a>
                    <h4>
                      26% <span className="theme-color">OFF</span>
                    </h4>
                    <div className="banner-price">
                      <h2>$79.00</h2>
                      <h5 className="theme-color">
                        <del>$65.00</del>
                      </h5>
                    </div>
                  </div>

                  <a
                    href="shop-left-sidebar.html"
                    className="banner-shop text-center"
                  >
                    <div>
                      <h5>SHOP NOW</h5>
                      <p className="mb-0 mt-2">BUY ONE GET ONE FREE</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="banner-image">
                  <a href="shop-left-sidebar.html">
                    <LazyLoadImage
                      className="d-block m-auto animate-img"
                      alt="sano one"
                      effect="blur"
                      src="assets/images/furniture-images/banner/2.jpg" // use normal <img> attributes as props
                    />
                  </a>

                  <div className="banner-details">
                    <a href="wishlist.html" className="heart-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                    
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                        fill="white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    </a>
                    <h4>
                      45% <span className="theme-color">OFF</span>
                    </h4>
                    <div className="banner-price">
                      <h2>$42.00</h2>
                      <h5 className="theme-color">
                        <del>$40.00</del>
                      </h5>
                    </div>
                  </div>

                  <a
                    href="shop-left-sidebar.html"
                    className="banner-shop text-center"
                  >
                    <div>
                      <h5>SHOP NOW</h5>
                      <p className="mb-0 mt-2">BUY ONE GET ONE FREE</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="banner-image">
                  <a href="shop-left-sidebar.html">
                    <LazyLoadImage
                      className="d-block m-auto animate-img"
                      alt="sano one"
                      effect="blur"
                      src="assets/images/furniture-images/banner/3.jpg" // use normal <img> attributes as props
                    />
                  </a>

                  <div className="banner-details">
                    <a href="wishlist.html" className="heart-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    </a>
                    <h4>
                      15% <span className="theme-color">OFF</span>
                    </h4>
                    <div className="banner-price">
                      <h2>$50.00</h2>
                      <h5 className="theme-color">
                        <del>$45.00</del>
                      </h5>
                    </div>
                  </div>

                  <a
                    href="shop-left-sidebar.html"
                    className="banner-shop text-center"
                  >
                    <div>
                      <h5>SHOP NOW</h5>
                      <p className="mb-0 mt-2">BUY ONE GET ONE FREE</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
