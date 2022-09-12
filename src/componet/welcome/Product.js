import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductItemCorusel from './ProductItemCorusel'
import { useNavigate } from 'react-router-dom'
const Product = () => {
  const [product, setProduct] = useState([
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
    {
        name: "Orange Arm Chair",
        photo: "assets/images/furniture-images/new-arrival/2.jpg",
        discount: 15,
        category: "categ",
        view: 15000,
        price: 150,
        imgs: [
            'assets/images/fashion/1.jpg', 'assets/images/fashion/2.jpg',
            'assets/images/fashion/3.jpg', 'assets/images/fashion/4.jpg'
        ]
    },
]);
  const path = useNavigate()
  const [modal,setModal] = useState(false);
  return (
    <div>
      <section className="ratio_asos overflow-hidden ">
        <div className="container p-sm-0 mb-5">
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="title-3 text-center">
                <h2>New Arrival</h2>
                <h5 className="theme-color">Our Collection</h5>
              </div>
            </div>
          </div>

          <div className="row g-sm-4 g-3">
            {product.map((item, i) => {
              return (
                <div className="col-xl-3 col-lg-4 col-6" key={i}>
                  <div className="product-box" onClick={() => setModal(true)}>
                    <div className="img-wrapper">
                      <div onClick={() => path(`/${i}`)}>
                        <LazyLoadImage
                          className="d-block m-auto animate-img"
                          alt="sano one"
                          effect="blur"
                          src={item.photo} // use normal <img> attributes as props
                        />
                      </div>
                      <div className="circle-shape"></div>
                      <span className="background-text">SanOne</span>
                      <div className="label-block">
                        <span className="label label-theme float-start">
                          New
                        </span>
                      </div>
                      <div className="label-block">
                        <span className="label label-theme">
                          {item.discount}% Off
                        </span>
                      </div>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-bag-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-eye-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                              </svg>
                            </a>
                          </li>

                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-heart-fill"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-style-3 product-style-chair">
                      <div className="product-title d-block mb-0">
                        <p className="font-light mb-sm-2 mb-0">
                          {item.category}
                        </p>
                        <a
                          href="product-left-sidebar.html"
                          className="font-default"
                        >
                          <h5>Orange Arm Chair</h5>
                        </a>
                      </div>
                      <div className="main-price">
                        <ul className="rating  ratinglike mb-1 mt-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            class="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                        </ul>
                        <h3 className="priceAllProduct" ><s>${item.price}</s> <span className="theme-color">${item.price - (item.price / 100 * item.discount)}</span>  </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button type="button" class="btn btn-solid-default btn-spacing d-block m-auto ">More</button>
      </section>

      <div className={modal ? "modal fade quick-view-modal show" : "modal fade quick-view-modal "} id="quick-view" aria-modal="true" style={ modal ? { display:'block' } : {}}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button type="button" onClick={()=>setModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="quick-view-image ">
                    <div className="quick-view-slider ratio_medium">
                      <ProductItemCorusel show={product[0].imgs} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product-right">
                    <h2 className="mb-2">Orange Arm Chair2</h2>
                    <h6 className="font-light mb-1">Fully Confirtable</h6>
                    <ul className="rating">
                      <li>
                        <i className="fas fa-star theme-color"></i>
                      </li>
                      <li>
                        <i className="fas fa-star theme-color"></i>
                      </li>
                      <li>
                        <i className="fas fa-star theme-color"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                    <div className="price mt-3">
                      <h3>$49.68</h3>
                    </div>
                    <div className="color-types">
                      <h4>colors</h4>
                      <ul className="color-variant mb-0">
                        <li className="bg-half-light selected">
                        </li>
                        <li className="bg-light1"></li>
                        <li className="bg-blue1"></li>
                        <li className="bg-black1"></li>
                      </ul>
                    </div>
                    <div className="product-details">
                      <h4>product details</h4>
                      <ul>
                        <li>
                          <span className="font-light">Display type :</span> Chair
                        </li>
                        <li>
                          <span className="font-light">Mechanism:</span> Tilt Angle
                        </li>
                        <li>
                          <span className="font-light">Warranty:</span> 8 Months
                        </li>
                      </ul>
                    </div>
                    <div className="product-btns">
                      <a href="cart.html" className="btn btn-solid-default btn-sm">Add
                        to cart</a>
                      <a href="product-left-sidebar.html" className="btn btn-solid-default btn-sm">View
                        details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={modal ? "modal-backdrop fade show" : "modal-backdrop fade "} style={
        modal ? {display:'block'} : {display:'none'}
      }></div>
    </div>
  );
};

export default Product;
