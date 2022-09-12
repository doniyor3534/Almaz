import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <header className="header-style-2" id="home">
        <div className="main-header navbar-searchbar">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="brand-logo">
                      <Link to="/">
                        <svg className="svg-icon">
                          {/* <use className="fill-color" xlink:href="assets/svg/icons.svg#logo"></use> */}
                        </svg>
                        <LazyLoadImage
                          alt="sano one"
                          effect="blur"
                          src="./logo/logo.svg" // use normal <img> attributes as props
                        />
                      </Link>
                    </div>
                    <div className="category-menu">
                      <div className="category-dropdown">
                        <div className="close-btn d-xl-none">
                          Category List
                          <span className="back-category">
                            <i className="fa fa-angle-left"></i>
                          </span>
                        </div>
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Home &amp; decor</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <nav>
                    <div className="main-navbar">
                      <div id="mainnav">
                        <div className="toggle-nav">
                          <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu">
                          <li className="back-btn d-xl-none">
                            <div className="close-btn">
                              Menu
                              <span className="mobile-back">
                                <i className="fa fa-angle-left"></i>
                              </span>
                            </div>
                          </li>
                          <li className="mega-menu dropdown home-menu">
                            <Link to='/product'
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              KATALOG
                            </Link>
                          </li>
                          <li className="mega-menu dropdown home-menu">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              BIZ HAQIMIZDA
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="menu-right">
                    <ul>
                      <li>
                        <div className="search-box theme-bg-color">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </div>
                      </li>
                      <li className="onhover-dropdown">
                        <div className="cart-media">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                              fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                          </svg>
                        </div>
                        <div className="onhover-div profile-dropdown">
                          <ul>
                            <li>
                              <a href="log-in.html" className="d-block">
                                Login
                              </a>
                            </li>
                            <li>
                              <a href="sign-up.html" className="d-block">
                                Register
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="onhover-dropdown wislist-dropdown">
                        <div className="cart-media">
                          <a href="wishlist.html">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className="label label-theme rounded-pill">
                              5
                            </span>
                          </a>
                        </div>
                        <div className="onhover-div">
                          <a href="wishlist.html">
                            <div className="wislist-empty">
                              <i className="fab fa-gratipay"></i>
                              <h6 className="mb-1">Your wislist empty !!</h6>
                              <p className="font-light mb-0">
                                explore more and shortlist items.
                              </p>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="onhover-dropdown cart-dropdown">
                        <button
                          type="button"
                          className="btn btn-solid-default btn-spacing"
                        >
                          <i data-feather="shopping-cart" className="pe-2"></i>
                          <span>$5686.25</span>
                        </button>
                        <div className="onhover-div">
                          <div className="cart-menu">
                            <div className="cart-title">
                              <h6>
                                <i data-feather="shopping-bag"></i>
                                <span className="label label-theme rounded-pill">
                                  5
                                </span>
                              </h6>
                              <span className="d-md-none d-block">
                                <i className="fas fa-arrow-right back-cart"></i>
                              </span>
                            </div>
                            <ul className="custom-scroll">
                              <li>
                                <div className="media">
                                  <img
                                    src="assets/images/fashion/product/front/1.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Slim Fit Plastic Coat</h6>
                                    <div className="qty-with-price">
                                      <span>$78.00</span>
                                      <span>
                                        <input
                                          type="number"
                                          className="form-control"
                                          value="1"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn-close d-block d-md-none"
                                    aria-label="Close"
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </li>
                              <li>
                                <div className="media">
                                  <img
                                    src="assets/images/fashion/product/front/7.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Womens Stylish Jacket</h6>
                                    <div className="qty-with-price">
                                      <span>$24.00</span>
                                      <span>
                                        <input
                                          type="number"
                                          className="form-control"
                                          value="1"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn-close d-block d-md-none"
                                    aria-label="Close"
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="cart-btn">
                            <h6 className="cart-total">
                              <span className="font-light">Total:</span> $
                              542.00
                            </h6>
                            <button
                              onclick="location.href = 'cart.html';"
                              type="button"
                              className="btn btn-solid-default btn-block"
                            >
                              Proceed to payment
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light"></i>
                      </span>
                    </div>
                    <div className="search-suggestion">
                      <ul className="custom-scroll">
                        <li>
                          <div className="product-cart media">
                            <img
                              src="assets/images/electronics/product/1.jpg"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <div className="media-body">
                              <a href="javascript:void(0)">
                                <h6 className="mb-1">New Smart Watch 4 ERT2</h6>
                              </a>
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
                              <p className="mb-0 mt-1">$28.00</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="product-cart media">
                            <img
                              src="assets/images/electronics/product/5.jpg"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <div className="media-body">
                              <a href="javascript:void(0)">
                                <h6 className="mb-1">
                                  Powermatic 900 W Juicer
                                </h6>
                              </a>
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
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                              </ul>
                              <p className="mb-0 mt-1">$35.00</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
