import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Statistik = () => {
  const [product, setProduct] = useState([
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
    {
      name: "Orange Arm Chair",
      photo: "assets/images/furniture-images/new-arrival/2.jpg",
      discount: 15,
      category: "categ",
      view: 15000,
      price: 150,
    },
  ]);

  return (
    <div>
      <section className="product-slider overflow-hidden">
        <div>
          <div className="container">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="title-3 pb-4 title-border">
                  <h2>Kop sotilgan</h2>
                  <h5 className="theme-color">Our Collection</h5>
                </div>
                <div className="product-slider round-arrow">
                  <div>
                    <div className="row g-3">
                      {product.map((item, i) => {
                        return (
                          <div className="col-lg-12 col-md-6 col-12">
                            <div className="product-image">
                              <a href="product-left-sidebar.html">
                                <LazyLoadImage
                                  className="d-block m-auto animate-img"
                                  alt="sano one"
                                  effect="blur"
                                  src={item.photo}
                                />
                              </a>
                              <div className="product-details">
                                <a href="product-left-sidebar.html">
                                  <h6 className="font-light">
                                   {item.category}
                                  </h6>
                                  <h3>{item.name}</h3>
                                  <h4 className="font-light mt-1">
                                    <del>${item.price}</del>{" "}
                                    <span className="theme-color">${item.price-(item.price/100*item.discount)}</span>
                                  </h4>
                                  <div className="cart-wrap">
                                    <ul>
                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Buy"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                        >
                                          <i data-feather="shopping-bag"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Quick View"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                        >
                                          <i data-feather="eye"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Compare"
                                      >
                                        <a href="compare.html">
                                          <i data-feather="refresh-cw"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Wishlist"
                                      >
                                        <a
                                          href="wishlist.html"
                                          className="wishlist"
                                        >
                                          <i data-feather="heart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="title-3 pb-4 title-border">
                  <h2>Kop ko'rilgan</h2>
                  <h5 className="theme-color">Our Collection</h5>
                </div>
                <div className="product-slider round-arrow">
                  <div>
                    <div className="row g-3">
                      {product.map((item, i) => {
                        return (
                          <div className="col-lg-12 col-md-6 col-12">
                            <div className="product-image">
                              <a href="product-left-sidebar.html">
                                <LazyLoadImage
                                  className="d-block m-auto animate-img"
                                  alt="sano one"
                                  effect="blur"
                                  src={item.photo}
                                />
                              </a>
                              <div className="product-details">
                                <a href="product-left-sidebar.html">
                                  <h6 className="font-light">
                                   {item.category}
                                  </h6>
                                  <h3>{item.name}</h3>
                                  <h4 className="font-light mt-1">
                                    <del>${item.price}</del>{" "}
                                    <span className="theme-color">${item.price-(item.price/100*item.discount)}</span>
                                  </h4>
                                  <div className="cart-wrap">
                                    <ul>
                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Buy"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                        >
                                          <i data-feather="shopping-bag"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Quick View"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                        >
                                          <i data-feather="eye"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Compare"
                                      >
                                        <a href="compare.html">
                                          <i data-feather="refresh-cw"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Wishlist"
                                      >
                                        <a
                                          href="wishlist.html"
                                          className="wishlist"
                                        >
                                          <i data-feather="heart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="title-3 pb-4 title-border">
                  <h2>oxirgi sotilgan</h2>
                  <h5 className="theme-color">Our Collection</h5>
                </div>
                <div className="product-slider round-arrow">
                  <div>
                    <div className="row g-3">
                      {product.map((item, i) => {
                        return (
                          <div className="col-lg-12 col-md-6 col-12">
                            <div className="product-image">
                              <a href="product-left-sidebar.html">
                                <LazyLoadImage
                                  className="d-block m-auto animate-img"
                                  alt="sano one"
                                  effect="blur"
                                  src={item.photo}
                                />
                              </a>
                              <div className="product-details">
                                <a href="product-left-sidebar.html">
                                  <h6 className="font-light">
                                   {item.category}
                                  </h6>
                                  <h3>{item.name}</h3>
                                  <h4 className="font-light mt-1">
                                    <del>${item.price}</del>{" "}
                                    <span className="theme-color">${item.price-(item.price/100*item.discount)}</span>
                                  </h4>
                                  <div className="cart-wrap">
                                    <ul>
                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Buy"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                        >
                                          <i data-feather="shopping-bag"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Quick View"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                        >
                                          <i data-feather="eye"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Compare"
                                      >
                                        <a href="compare.html">
                                          <i data-feather="refresh-cw"></i>
                                        </a>
                                      </li>

                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Wishlist"
                                      >
                                        <a
                                          href="wishlist.html"
                                          className="wishlist"
                                        >
                                          <i data-feather="heart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistik;
