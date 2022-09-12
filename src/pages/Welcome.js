import React from 'react'

const Welcome = () => {
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
                                    <a href="index.html">
                                        <svg className="svg-icon">
                                            {/* <use className="fill-color" xlink:href="assets/svg/icons.svg#logo"></use> */}
                                        </svg>
                                        <img src="assets/images/logo.png" className="img-fluid blur-up lazyload" alt="logo"/>
                                    </a>
                                </div>
                                <div className="category-menu">
                                    <div className="category-dropdown">
                                        <div className="close-btn d-xl-none">
                                            Category List
                                            <span className="back-category"><i className="fa fa-angle-left"></i>
                                            </span>
                                        </div>
                                        <ul>
                                            <li className="submenu">
                                                <a href="javascript:void(0)">watches</a>
                                                <ul className="category-mega-menu">
                                                    <li>
                                                        <div className="row">
                                                            <div className="col-xl-3">
                                                                <div className="category-childmenu">
                                                                    <div className="title-category">
                                                                        <h6>Watch Brands</h6>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Coros</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Titan</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Citizen</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Casio</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Movado</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Tissot</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="category-childmenu">
                                                                    <div className="title-category">
                                                                        <h6>Watch Display</h6>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Analog</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Digital</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Hybrid</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Tactile</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Touchscreen</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="category-childmenu">
                                                                    <div className="title-category">
                                                                        <h6>Watch Style</h6>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Casual</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Dress</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Fashion</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)">Luxury</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="category-banner">
                                                                    <img src="assets/images/electronics/banner/4.jpg"
                                                                        className="img-fluid blur-up lazyload" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">footwear</a>
                                            </li>

                                            <li className="submenu">
                                                <a href="javascript:void(0)">clothing</a>
                                                <ul className="category-mega-menu">
                                                    <li>
                                                        <div className="row">
                                                            <div className="col-xl-3">
                                                                <div className="category-childmenu">
                                                                    <div className="title-category">
                                                                        <h6>Women's fashion</h6>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Dress</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Skirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Western
                                                                                wear</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Etahnic
                                                                                wear</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Sports
                                                                                wear</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="category-childmenu">
                                                                    <div className="title-category">
                                                                        <h6>Men's fashion</h6>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Sports
                                                                                wear</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Etahnic
                                                                                wear</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">Western
                                                                                wear</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="category-childmenu">
                                                                    <div className="title-category">
                                                                        <h6>Accesories</h6>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="shop-left-sidebar.html">earrings</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">fashion
                                                                                jewellery</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">ties</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">caps and
                                                                                hats</a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-left-sidebar.html">cufflinks</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-left-sidebar.html">precious
                                                                                jewellery</a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-left-sidebar.html">necklaces</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="category-banner">
                                                                    <img src="assets/images/banner/1.jpg"
                                                                        className="img-fluid blur-up lazyload" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Accessories</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Home &amp; decor</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Bags</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Kitchan</a>
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
                                                    <span className="mobile-back"><i className="fa fa-angle-left"></i>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="mega-menu dropdown home-menu">
                                                <a href="javascript:void(0)" className="nav-link menu-title">home</a>
                                                <div className="mega-menu-container menu-content">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="opensubmegamenu">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="index.html"
                                                                                    className="megamenu-image">
                                                                                    <img src="assets/images/demo-image/fashion.jpg"
                                                                                        className="img-fluid blur-up lazyload"
                                                                                        alt=""/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="megamenu-image-title pb-0">
                                                                        <h5 className="mb-0">Fashion Demo</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="opensubmegamenu">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="flower-demo.html"
                                                                                    className="megamenu-image">
                                                                                    <img src="assets/images/demo-image/flower.jpg"
                                                                                        className="img-fluid blur-up lazyload"
                                                                                        alt=""/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="megamenu-image-title pb-0">
                                                                        <h5 className="mb-0">Flowers Demo</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="opensubmegamenu">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="furniture-demo.html"
                                                                                    className="megamenu-image">
                                                                                    <img src="assets/images/demo-image/furniture.jpg"
                                                                                        className="img-fluid blur-up lazyload"
                                                                                        alt=""/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="megamenu-image-title pb-0">
                                                                        <h5 className="mb-0">Furniture Demo</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="opensubmegamenu">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="electronic-demo.html"
                                                                                    className="megamenu-image">
                                                                                    <img src="assets/images/demo-image/electonic.jpg"
                                                                                        className="img-fluid blur-up lazyload"
                                                                                        alt=""/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="megamenu-image-title pb-0">
                                                                        <h5 className="mb-0">Electronic Demo</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="opensubmegamenu">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="shoes-demo.html"
                                                                                    className="megamenu-image">
                                                                                    <img src="assets/images/demo-image/shoes.jpg"
                                                                                        className="img-fluid blur-up lazyload"
                                                                                        alt=""/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="megamenu-image-title pb-0">
                                                                        <h5 className="mb-0">Shoes Demo</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="opensubmegamenu">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="vegetables-demo.html"
                                                                                    className="megamenu-image">
                                                                                    <img src="assets/images/demo-image/vagetables.jpg"
                                                                                        className="img-fluid blur-up lazyload"
                                                                                        alt=""/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="megamenu-image-title pb-0">
                                                                        <h5 className="mb-0">Vegetables Demo</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <a href="javascript:void(0)" className="nav-link menu-title">shop</a>
                                                <ul className="nav-submenu menu-content">
                                                    <li>
                                                        <a href="shop-canvas-filter.html">Shop Canvas Filter</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-category-slider.html">Shop Category Filter</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-filter-hide.html">Shop Filter Hide</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-left-sidebar.html">Shop Left Sidebar
                                                            <span>Trending</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list-infinite.html">Shop List Infinite</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list.html">Shop Shop List</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-top-filter.html">Shop Top Filter</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-with-category.html">Shop With Category <span
                                                                className="tren-budge">New</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="javascript:void(0)" className="nav-link menu-title">product</a>
                                                <ul className="nav-submenu menu-content">
                                                    <li>
                                                        <a href="product-4-image.html">Product 4 Images</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-360-view.html">Product 360 View</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-bundle.html">Product Bundle</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-left-sidebar.html">Product Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-left-thumbnail.html">Product Left thumbnail</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-no-sidebar.html">Product No Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-right-sidebar.html">Product Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-right-thumbnail.html">Product Right
                                                            thumbnail</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-sticky.html">Product Sticky</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-video-thumbnail.html">Product Video
                                                            Thumbnail</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu dropdown ratio_40">
                                                <a href="javascript:void(0)" className="nav-link menu-title">
                                                    <div className="gradient-title">Voxo plus</div>
                                                </a>
                                                <div className="mega-menu-container poster-bg-image menu-content">
                                                    <div className="container-fluid">
                                                        <div className="row row-cols-5">
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Email Template</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/abandonment-email.html">Abandonment
                                                                                    Email</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/black-friday.html">Black
                                                                                    Fridday</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/email-template-1.html">Email
                                                                                    Template 1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/email-template-2.html">Email
                                                                                    Template 2</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="https://themes.pixelstrap.com/voxo/email-template/offer.html">Offer
                                                                                    Template</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/order-success-1.html">Order
                                                                                    Success 1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/order-success-2.html">Order
                                                                                    Success 2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Email Template</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/product-review.html">Product
                                                                                    Review</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/reset-password.html">Reset
                                                                                    Password</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="https://themes.pixelstrap.com/voxo/email-template/welcome.html">Welcome
                                                                                    Template</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Invoice Template</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-1.html">Invoice
                                                                                    1 Template</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-2.html">Invoice
                                                                                    2 Template</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-3.html">Invoice
                                                                                    3 Template</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Portfolio Page</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a href="portfolio-2-grid.html">Portfolio
                                                                                    2 Grid</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="portfolio-2-masonary.html">Portfolio
                                                                                    2 Masonary</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="portfolio-3-grid.html">Portfolio
                                                                                    3 Grid</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="portfolio-3-masonary.html">Portfolio
                                                                                    3 Masonary</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="portfolio-4-grid.html">Portfolio
                                                                                    4 Grid</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="portfolio-4-masonary.html">Portfolio
                                                                                    4 Masonary</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="portfolio-no-space.html">Portfolio
                                                                                    No Space</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Element Page</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a href="element-button.html">Element
                                                                                    Button</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="element-category.html">Element
                                                                                    Category</a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="element-collection-banner.html">Element
                                                                                    Collection Banner</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="element-deal-banner.html">Element
                                                                                    Deal Banner</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="element-header.html">Element
                                                                                    Header</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="element-home.html">Element
                                                                                    Home</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="element-product.html">Element
                                                                                    Product</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Cookie Bar</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a href="furniture-demo.html">Bottom</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="electronic-demo.html">Bottom
                                                                                    Left</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="index.html">Bottom Right</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div className="link-section">
                                                                    <div className="submenu-title">
                                                                        <h5>Search</h5>
                                                                    </div>
                                                                    <div className="submenu-content opensubmegamenu">
                                                                        <ul className="list">
                                                                            <li>
                                                                                <a href="vegetables-demo.html">Ajax
                                                                                    Search</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <a href="javascript:void(0)" className="nav-link menu-title">pages</a>
                                                <ul className="nav-submenu menu-content">
                                                    <li>
                                                        <a href="404.html">404</a>
                                                    </li>
                                                    <li>
                                                        <a href="log-in.html">Log In</a>
                                                    </li>
                                                    <li>
                                                        <a href="sign-up.html">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="forgot.html">Forgot Password</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">coming soon<span>trending</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">compare</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-us.html">contact us</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">faq</a>
                                                    </li>
                                                    <li>
                                                        <a href="order-success.html">order success</a>
                                                    </li>
                                                    <li>
                                                        <a href="order-tracking.html">order tracking</a>
                                                    </li>
                                                    <li>
                                                        <a href="review.html">review</a>
                                                    </li>
                                                    <li>
                                                        <a href="search.html">search</a>
                                                    </li>
                                                    <li>
                                                        <a href="user-dashboard.html">user dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">wishlist</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="javascript:void(0)" className="nav-link menu-title">blog</a>
                                                <ul className="nav-submenu menu-content">
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-infinite-scroll.html">Blog Infinite Scroll</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-listing.html">Blog Listing</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-masonary.html">blog Masonary <span>New</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-no-sidebar.html">blog No Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mobile-poster d-flex d-xl-none">
                                                <img src="assets/images/pwa.png" className="img-fluid" alt=""/>
                                                <div className="mobile-contain">
                                                    <h5>Enjoy app-like experience</h5>
                                                    <p className="font-light">With this Screen option you can use Website
                                                        like an App.</p>
                                                    <a href="javascript:void(0)" id="installApp"
                                                        className="btn btn-solid-default btn-spacing w-100">ADD TO
                                                        HOMESCREEN</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="menu-right">
                                <ul>
                                    <li>
                                        <div className="search-box theme-bg-color">
                                            <i data-feather="search"></i>
                                        </div>
                                    </li>
                                    <li className="onhover-dropdown">
                                        <div className="cart-media">
                                            <i data-feather="user"></i>
                                        </div>
                                        <div className="onhover-div profile-dropdown">
                                            <ul>
                                                <li>
                                                    <a href="log-in.html" className="d-block">Login</a>
                                                </li>
                                                <li>
                                                    <a href="sign-up.html" className="d-block">Register</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="onhover-dropdown wislist-dropdown">
                                        <div className="cart-media">
                                            <a href="wishlist.html">
                                                <i data-feather="heart"></i>
                                                <span className="label label-theme rounded-pill">5</span>
                                            </a>
                                        </div>
                                        <div className="onhover-div">
                                            <a href="wishlist.html">
                                                <div className="wislist-empty">
                                                    <i className="fab fa-gratipay"></i>
                                                    <h6 className="mb-1">Your wislist empty !!</h6>
                                                    <p className="font-light mb-0">explore more and shortlist items.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="onhover-dropdown cart-dropdown">
                                        <button type="button" className="btn btn-solid-default btn-spacing">
                                            <i data-feather="shopping-cart" className="pe-2"></i>
                                            <span>$5686.25</span>
                                        </button>
                                        <div className="onhover-div">
                                            <div className="cart-menu">
                                                <div className="cart-title">
                                                    <h6>
                                                        <i data-feather="shopping-bag"></i>
                                                        <span className="label label-theme rounded-pill">5</span>
                                                    </h6>
                                                    <span className="d-md-none d-block">
                                                        <i className="fas fa-arrow-right back-cart"></i>
                                                    </span>
                                                </div>
                                                <ul className="custom-scroll">
                                                    <li>
                                                        <div className="media">
                                                            <img src="assets/images/fashion/product/front/1.jpg"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                            <div className="media-body">
                                                                <h6>Slim Fit Plastic Coat</h6>
                                                                <div className="qty-with-price">
                                                                    <span>$78.00</span>
                                                                    <span>
                                                                        <input type="number" className="form-control"
                                                                            value="1" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn-close d-block d-md-none"
                                                                aria-label="Close">
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="media">
                                                            <img src="assets/images/fashion/product/front/7.jpg"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                            <div className="media-body">
                                                                <h6>Womens Stylish Jacket</h6>
                                                                <div className="qty-with-price">
                                                                    <span>$24.00</span>
                                                                    <span>
                                                                        <input type="number" className="form-control"
                                                                            value="1"/>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn-close d-block d-md-none"
                                                                aria-label="Close">
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="cart-btn">
                                                <h6 className="cart-total"><span className="font-light">Total:</span> $
                                                    542.00</h6>
                                                <button onclick="location.href = 'cart.html';" type="button"
                                                    className="btn btn-solid-default btn-block">
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
                                    <input type="text" className="form-control search-type" placeholder="Search here.."/>
                                    <span className="input-group-text close-search">
                                        <i data-feather="x" className="font-light"></i>
                                    </span>
                                </div>
                                <div className="search-suggestion">
                                    <ul className="custom-scroll">
                                        <li>
                                            <div className="product-cart media">
                                                <img src="assets/images/electronics/product/1.jpg"
                                                    className="img-fluid blur-up lazyload" alt=""/>
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
                                                <img src="assets/images/electronics/product/5.jpg"
                                                    className="img-fluid blur-up lazyload" alt=""/>
                                                <div className="media-body">
                                                    <a href="javascript:void(0)">
                                                        <h6 className="mb-1">Powermatic 900 W Juicer</h6>
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

    <div className="mobile-menu d-sm-none">
        <ul>
            <li>
                <a href="demo3.html" className="active">
                    <i data-feather="home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" className="toggle-category">
                    <i data-feather="align-justify"></i>
                    <span>Category</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <i data-feather="shopping-bag"></i>
                    <span>Cart</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <i data-feather="heart"></i>
                    <span>Wishlist</span>
                </a>
            </li>
            <li>
                <a href="user-dashboard.html">
                    <i data-feather="user"></i>
                    <span>Account</span>
                </a>
            </li>
        </ul>
    </div>

    <section className="pt-0 poster-section">
        <div className="poster-image slider-for custome-arrow classic-arrow">
            <div>
                <img src="assets/images/furniture-images/poster/1.png" className="img-fluid blur-up lazyload" alt=""/>
            </div>
            <div>
                <img src="assets/images/furniture-images/poster/2.png" className="img-fluid blur-up lazyload" alt=""/>
            </div>
            <div>
                <img src="assets/images/furniture-images/poster/3.png" className="img-fluid blur-up lazyload" alt=""/>
            </div>
        </div>
        <div className="slider-nav image-show">
            <div>
                <div className="poster-img">
                    <img src="assets/images/furniture-images/poster/t2.jpg" className="img-fluid blur-up lazyload" alt=""/>
                    <div className="overlay-color">
                        <i className="fas fa-plus theme-color"></i>
                    </div>
                </div>
            </div>
            <div>
                <div className="poster-img">
                    <img src="assets/images/furniture-images/poster/t1.jpg" className="img-fluid blur-up lazyload" alt=""/>
                    <div className="overlay-color">
                        <i className="fas fa-plus theme-color"></i>
                    </div>
                </div>

            </div>
            <div>
                <div className="poster-img">
                    <img src="assets/images/furniture-images/poster/t3.jpg" className="img-fluid blur-up lazyload" alt=""/>
                    <div className="overlay-color">
                        <i className="fas fa-plus theme-color"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="left-side-contain">
            <div className="banner-left">
                <h4>Sale <span className="theme-color">35% Off</span></h4>
                <h1>New Latest <span>Furniture</span></h1>
                <p>BUY ONE GET ONE <span className="theme-color">FREE</span></p>
                <h2>$79.00 <span className="theme-color"><del>$65.00</del></span></h2>
                <p className="poster-details mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</p>
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
                                <img src="assets/images/furniture-images/banner/1.jpg" className="w-100 blur-up lazyload"
                                    alt=""/>
                            </a>
                            <div className="banner-details">
                                <a href="wishlist.html" className="heart-button">
                                    <i data-feather="heart"></i>
                                </a>
                                <h4>26% <span className="theme-color">OFF</span></h4>
                                <div className="banner-price">
                                    <h2>$79.00</h2>
                                    <h5 className="theme-color"><del>$65.00</del></h5>
                                </div>
                            </div>

                            <a href="shop-left-sidebar.html" className="banner-shop text-center">
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
                                <img src="assets/images/furniture-images/banner/2.jpg" className="w-100 blur-up lazyload"
                                    alt=""/>
                            </a>

                            <div className="banner-details">
                                <a href="wishlist.html" className="heart-button">
                                    <i data-feather="heart"></i>
                                </a>
                                <h4>45% <span className="theme-color">OFF</span></h4>
                                <div className="banner-price">
                                    <h2>$42.00</h2>
                                    <h5 className="theme-color"><del>$40.00</del></h5>
                                </div>
                            </div>

                            <a href="shop-left-sidebar.html" className="banner-shop text-center">
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
                                <img src="assets/images/furniture-images/banner/3.jpg" className="w-100 blur-up lazyload"
                                    alt=""/>
                            </a>

                            <div className="banner-details">
                                <a href="wishlist.html" className="heart-button">
                                    <i data-feather="heart"></i>
                                </a>
                                <h4>15% <span className="theme-color">OFF</span></h4>
                                <div className="banner-price">
                                    <h2>$50.00</h2>
                                    <h5 className="theme-color"><del>$45.00</del></h5>
                                </div>
                            </div>

                            <a href="shop-left-sidebar.html" className="banner-shop text-center">
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

    <section className="ratio_asos overflow-hidden">
        <div className="container p-sm-0">
            <div className="row m-0">
                <div className="col-12 p-0">
                    <div className="title-3 text-center">
                        <h2>New Arrival</h2>
                        <h5 className="theme-color">Our Collection</h5>
                    </div>
                </div>
            </div>

            <div className="row g-sm-4 g-3">
                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/1.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-theme">30% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/2.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-theme float-start">New</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Fancy Yellow Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/3.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">50% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/4.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-theme float-start">New</span>
                                <span className="label label-black float-end">50% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/5.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">50% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/7.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-theme float-start">New</span>
                                <span className="label label-black float-end">50% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/8.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">50% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <a href="product-left-sidebar.html">
                                <img src="assets/images/furniture-images/new-arrival/9.jpg"
                                    className="w-100 bg-img blur-up lazyload" alt=""/>
                            </a>
                            <div className="circle-shape"></div>
                            <span className="background-text">Furniture</span>
                            <div className="label-block">
                                <span className="label label-theme float-start">New</span>
                                <span className="label label-black float-end">50% Off</span>
                            </div>
                            <div className="cart-wrap">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                            data-bs-target="#addtocart">
                                            <i data-feather="shopping-bag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#quick-view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                            <div className="product-title d-block mb-0">
                                <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                <a href="product-left-sidebar.html" className="font-default">
                                    <h5>Orange Arm Chair</h5>
                                </a>
                            </div>
                            <div className="main-price">
                                <ul className="rating mb-1 mt-0">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <h3 className="theme-color">$32.87</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="deal-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 px-0">
                    <div className="discount-image-details-1">
                        <div className="discount-images">
                            <div className="theme-circle"></div>
                            <img src="assets/images/furniture-images/deal/1.png"
                                className="img-fluid shoes-images blur-up lazyload" alt=""/>
                        </div>

                        <div className="discunt-details mt-xl-0 mt-4">
                            <div>
                                <div className="heart-button">
                                    <i data-feather="heart"></i>
                                </div>

                                <div className="discount-shop">
                                    <h2 className="text-spacing">Shop Now</h2>
                                    <h6>BUY ONE GET ONE FREE</h6>
                                </div>

                                <h5 className="mt-3">Special Discount <span className="theme-color">70% OFF</span></h5>
                                <h2 className="my-2 deal-text">Deal Of The Day <br/>from <span className="theme-color">$75</span>
                                </h2>
                                <div className="timer-style-2 my-2 justify-content-center d-flex">
                                    <ul>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h2 id="days1" className="theme-color"></h2>Days
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h2 id="hours1" className="theme-color"></h2>Hour
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h2 id="minutes1" className="theme-color"></h2>Min
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter">
                                                <div>
                                                    <h2 id="seconds1" className="theme-color"></h2>Sec
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                    className="btn default-light-theme default-theme mt-2">Shop
                                    Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="product-slider overflow-hidden">
        <div>
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-4">
                        <div className="title-3 pb-4 title-border">
                            <h2>Most Popular</h2>
                            <h5 className="theme-color">Our Collection</h5>
                        </div>

                        <div className="product-slider round-arrow">
                            <div>
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/1.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/2.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/3.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/4.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/5.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/6.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="javascript:void(0)">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/7.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/8.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="title-3 pb-4 title-border">
                            <h2>Recent Popular</h2>
                            <h5 className="theme-color">Our Collection</h5>
                        </div>

                        <div className="product-slider round-arrow">
                            <div>
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/1.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/2.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/3.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/4.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/5.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/6.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/7.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/8.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="title-3 pb-4 title-border">
                            <h2>Most Popular</h2>
                            <h5 className="theme-color">Our Collection</h5>
                        </div>

                        <div className="product-slider round-arrow">
                            <div>
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/1.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/2.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/3.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/4.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/5.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/6.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/7.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-12">
                                        <div className="product-image">
                                            <a href="product-left-sidebar.html">
                                                <img src="assets/images/furniture-images/product/8.jpg"
                                                    className="blur-up lazyload" alt=""/>
                                            </a>
                                            <div className="product-details">
                                                <a href="product-left-sidebar.html">
                                                    <h6 className="font-light">Fully Confirtable</h6>
                                                    <h3>Latest wood handle chair 7854</h3>
                                                    <h4 className="font-light mt-1"><del>$49.00</del> <span
                                                            className="theme-color">$35.50</span>
                                                    </h4>
                                                    <div className="cart-wrap">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <a href="javascript:void(0)" className="addtocart-btn"
                                                                    data-bs-toggle="modal" data-bs-target="#addtocart">
                                                                    <i data-feather="shopping-bag"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Quick View">
                                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#quick-view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>


                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="ratio_asos overflow-hidden">
        <div className="px-0 container-fluid p-sm-0">
            <div className="row m-0">
                <div className="col-12 p-0">
                    <div className="title-3 text-center">
                        <h2>Our Product</h2>
                        <h5 className="theme-color">Our Collection</h5>
                    </div>
                </div>

                <div className="our-product">
                    <div>
                        <div className="product-box">
                            <div className="img-wrapper">
                                <a href="product-left-sidebar.html">
                                    <img src="assets/images/furniture-images/new-arrival/1.jpg"
                                        className="w-100 bg-img blur-up lazyload" alt=""/>
                                </a>
                                <div className="circle-shape"></div>
                                <span className="background-text">Furniture</span>
                                <div className="label-block">
                                    <span className="label label-theme">30% Off</span>
                                </div>
                                <div className="cart-wrap">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                                data-bs-target="#addtocart">
                                                <i data-feather="shopping-bag"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#quick-view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-style-3 product-style-chair">
                                <div className="product-title d-block mb-0">
                                    <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                    <a href="product-left-sidebar.html" className="font-default">
                                        <h5>Orange Arm Chair</h5>
                                    </a>
                                </div>
                                <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
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
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3 className="theme-color">$32.87</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-box">
                            <div className="img-wrapper">
                                <a href="product-left-sidebar.html">
                                    <img src="assets/images/furniture-images/new-arrival/2.jpg"
                                        className="w-100 bg-img blur-up lazyload" alt=""/>
                                </a>
                                <div className="circle-shape"></div>
                                <span className="background-text">Furniture</span>
                                <div className="label-block">
                                    <span className="label label-theme float-start">New</span>
                                </div>
                                <div className="cart-wrap">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                                data-bs-target="#addtocart">
                                                <i data-feather="shopping-bag"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#quick-view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-style-3 product-style-chair">
                                <div className="product-title d-block mb-0">
                                    <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                    <a href="product-left-sidebar.html" className="font-default">
                                        <h5>Fancy Yellow Chair</h5>
                                    </a>
                                </div>
                                <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
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
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3 className="theme-color">$32.87</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-box">
                            <div className="img-wrapper">
                                <a href="product-left-sidebar.html">
                                    <img src="assets/images/furniture-images/new-arrival/3.jpg"
                                        className="w-100 bg-img blur-up lazyload" alt=""/>
                                </a>
                                <div className="circle-shape"></div>
                                <span className="background-text">Furniture</span>
                                <div className="label-block">
                                    <span className="label label-black">New</span>
                                    <span className="label label-theme">50% Off</span>
                                </div>
                                <div className="cart-wrap">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                                data-bs-target="#addtocart">
                                                <i data-feather="shopping-bag"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#quick-view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-style-3 product-style-chair">
                                <div className="product-title d-block mb-0">
                                    <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                    <a href="product-left-sidebar.html" className="font-default">
                                        <h5>Orange Arm Chair</h5>
                                    </a>
                                </div>
                                <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
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
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3 className="theme-color">$32.87</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-box">
                            <div className="img-wrapper">
                                <a href="product-left-sidebar.html">
                                    <img src="assets/images/furniture-images/new-arrival/4.jpg"
                                        className="w-100 bg-img blur-up lazyload" alt=""/>
                                </a>
                                <div className="circle-shape"></div>
                                <span className="background-text">Furniture</span>
                                <div className="label-block">
                                    <span className="label label-theme float-start">New</span>
                                    <span className="label label-black float-end">50% Off</span>
                                </div>
                                <div className="cart-wrap">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                                data-bs-target="#addtocart">
                                                <i data-feather="shopping-bag"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#quick-view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-style-3 product-style-chair">
                                <div className="product-title d-block mb-0">
                                    <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                    <a href="product-left-sidebar.html" className="font-default">
                                        <h5>Orange Arm Chair</h5>
                                    </a>
                                </div>
                                <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
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
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3 className="theme-color">$32.87</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-box">
                            <div className="img-wrapper">
                                <a href="product-left-sidebar.html">
                                    <img src="assets/images/furniture-images/new-arrival/5.jpg"
                                        className="w-100 bg-img blur-up lazyload" alt=""/>
                                </a>
                                <div className="circle-shape"></div>
                                <span className="background-text">Furniture</span>
                                <div className="label-block">
                                    <span className="label label-black">New</span>
                                    <span className="label label-theme">50% Off</span>
                                </div>
                                <div className="cart-wrap">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                                data-bs-target="#addtocart">
                                                <i data-feather="shopping-bag"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#quick-view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-style-3 product-style-chair">
                                <div className="product-title d-block mb-0">
                                    <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                    <a href="product-left-sidebar.html" className="font-default">
                                        <h5>Orange Arm Chair</h5>
                                    </a>
                                </div>
                                <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
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
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3 className="theme-color">$32.87</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-box">
                            <div className="img-wrapper">
                                <a href="product-left-sidebar.html">
                                    <img src="assets/images/furniture-images/new-arrival/7.jpg"
                                        className="w-100 bg-img blur-up lazyload" alt=""/>
                                </a>
                                <div className="circle-shape"></div>
                                <span className="background-text">Furniture</span>
                                <div className="label-block">
                                    <span className="label label-theme float-start">New</span>
                                    <span className="label label-black float-end">50% Off</span>
                                </div>
                                <div className="cart-wrap">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="addtocart-btn" data-bs-toggle="modal"
                                                data-bs-target="#addtocart">
                                                <i data-feather="shopping-bag"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#quick-view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-style-3 product-style-chair">
                                <div className="product-title d-block mb-0">
                                    <p className="font-light mb-sm-2 mb-0">Fully Confirtable</p>
                                    <a href="product-left-sidebar.html" className="font-default">
                                        <h5>Orange Arm Chair</h5>
                                    </a>
                                </div>
                                <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
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
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3 className="theme-color">$32.87</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="tab-section">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-3 text-center">
                        <h2>Hurry up!</h2>
                        <h5 className="theme-color">Special Offer</h5>
                    </div>
                    <div className="tab-wrap">
                        <ul className="nav nav-tabs" id="myTab">
                            <li className="nav-item">
                                <button className="nav-link" id="camera-tab" data-bs-toggle="tab" data-bs-target="#Camera"
                                    type="button">Lamps</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="audio-tab" data-bs-toggle="tab" data-bs-target="#Audio"
                                    type="button">Sofa-set</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="navigation-tab" data-bs-toggle="tab"
                                    data-bs-target="#Navigation" type="button">Tables</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" id="other-tab" data-bs-toggle="tab"
                                    data-bs-target="#Others" type="button">Mixer</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="phones-tab" data-bs-toggle="tab" data-bs-target="#Phones"
                                    type="button">Chair</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="computer-tab" data-bs-toggle="tab"
                                    data-bs-target="#Computer" type="button">Beds</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="accesories-tab" data-bs-toggle="tab"
                                    data-bs-target="#Accesories" type="button">Window</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade" id="Camera" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Audio" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-2">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Navigation" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade show active" id="Others" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Phones" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Computer" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Accesories" role="tabpanel">
                                <div className="offer-wrap product-style-1">
                                    <div className="row g-xl-4 g-3">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="circle-shape"></div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/3.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 order-lg-0 order-1">
                                            <div className="product-banner product-banner-circle">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <div className="label-block">
                                                            <span className="label label-black">New</span>
                                                            <span className="label label-theme">50% Off</span>
                                                        </div>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/furniture-images/special-offer/a1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                        <div className="offer-end offer-end-demo4">
                                                            <h3>Hurry Up !!!!! </h3>
                                                            <h6>Offer Expire in 02 hours</h6>
                                                        </div>
                                                    </div>
                                                    <div className="product-details text-center">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="javascript:void(0)" className="font-default" tabindex="-1">
                                                            <h5 className="main-title">Latest Yellow Sofa Furniture Fully
                                                                Comfortable</h5>
                                                        </a>
                                                        <ul className="rating rating-2">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="product-list">
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/1.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
                                                            <li>
                                                                <i className="fas fa-star theme-color"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/2.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
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
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-box product-box1">
                                                    <div className="img-wrapper">
                                                        <a href="product-left-sidebar.html" className="text-center">
                                                            <img src="assets/images/furniture-images/special-offer/5.png"
                                                                className="img-fluid blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="product-details">
                                                        <h3 className="theme-color">$49.00<span
                                                                className="font-light ms-1">$52.00</span></h3>
                                                        <a href="product-left-sidebar.html" className="font-default">
                                                            <h5>Latest Yellow Sofa Furniture Fully Comfortable</h5>
                                                        </a>
                                                        <ul className="rating">
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
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="title-3 text-center">
                        <h2>Instagram Shop</h2>
                        <h5 className="theme-color">New Collection</h5>
                    </div>
                    <div className="product-style-1">
                        <div className="product-wrapper insta-slider instagram-wrap">
                            <div>
                                <div className="product-box product-box1">
                                    <div className="img-wrapper">
                                        <div className="top-wishlist">
                                            <a href="javascript:void(0)" className="heart-wishlist ms-auto">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </div>
                                        <a href="javascript:void(0)" className="text-center">
                                            <img src="assets/images/furniture-images/shop/1.png"
                                                className="img-fluid blur-up lazyload" alt=""/>
                                        </a>
                                    </div>
                                    <div className="insta-hover insta-hover-gradient text-center">
                                        <div>
                                            <h2>Women</h2>
                                            <h5>New Offer -56% Discount</h5>
                                            <h3 className="brand-name">Latest Night Lamp From $35</h3>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                                className="btn btn-light-white">Shop now <i
                                                    className="fas fa-chevron-right ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-box product-box1">
                                    <div className="img-wrapper">
                                        <div className="top-wishlist">
                                            <a href="javascript:void(0)" className="heart-wishlist ms-auto">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </div>
                                        <div className="share">
                                            <span className="share-plus">+</span>
                                            <span className="text-dark">Share</span>
                                        </div>
                                        <a href="javascript:void(0)" className="text-center">
                                            <img src="assets/images/furniture-images/shop/2.png"
                                                className="img-fluid blur-up lazyload" alt=""/>
                                        </a>
                                    </div>
                                    <div className="insta-hover insta-hover-gradient text-center">
                                        <div>
                                            <h2>Women</h2>
                                            <h5>New Offer -56% Discount</h5>
                                            <h3 className="brand-name">Latest Night Lamp From $35</h3>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                                className="btn btn-light-white">Shop now <i
                                                    className="fas fa-chevron-right ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-box product-box1">
                                    <div className="img-wrapper">
                                        <div className="top-wishlist">
                                            <a href="javascript:void(0)" className="heart-wishlist ms-auto"><i
                                                    className="far fa-heart"></i></a>
                                        </div>
                                        <a href="javascript:void(0)" className="text-center">
                                            <img src="assets/images/furniture-images/shop/3.png"
                                                className="img-fluid blur-up lazyload" alt=""/>
                                        </a>
                                    </div>
                                    <div className="insta-hover insta-hover-gradient text-center">
                                        <div>
                                            <h2>Women</h2>
                                            <h5>New Offer -56% Discount</h5>
                                            <h3 className="brand-name">Latest Night Lamp From $35</h3>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                                className="btn btn-light-white">Shop now <i
                                                    className="fas fa-chevron-right ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-box product-box1">
                                    <div className="img-wrapper">
                                        <div className="top-wishlist">
                                            <a href="javascript:void(0)" className="heart-wishlist ms-auto"><i
                                                    className="far fa-heart"></i></a>
                                        </div>
                                        <div className="share">
                                            <span className="share-plus">+</span>
                                            <span className="text-dark">Share</span>
                                        </div>
                                        <a href="javascript:void(0)" className="text-center">
                                            <img src="assets/images/furniture-images/shop/4.png"
                                                className="img-fluid blur-up lazyload" alt=""/>
                                        </a>
                                    </div>
                                    <div className="insta-hover insta-hover-gradient text-center">
                                        <div>
                                            <h2>Women</h2>
                                            <h5>New Offer -56% Discount</h5>
                                            <h3 className="brand-name">Latest Night Lamp From $35</h3>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                                className="btn btn-light-white">Shop now <i
                                                    className="fas fa-chevron-right ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-box product-box1">
                                    <div className="img-wrapper">
                                        <div className="top-wishlist">
                                            <a href="javascript:void(0)" className="heart-wishlist ms-auto"><i
                                                    className="far fa-heart"></i></a>
                                        </div>
                                        <a href="javascript:void(0)" className="text-center">
                                            <img src="assets/images/furniture-images/shop/1.png"
                                                className="img-fluid blur-up lazyload" alt=""/>
                                        </a>
                                    </div>
                                    <div className="insta-hover insta-hover-gradient text-center">
                                        <div>
                                            <h2>Women</h2>
                                            <h5>New Offer -56% Discount</h5>
                                            <h3 className="brand-name">Latest Night Lamp From $35</h3>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                                className="btn btn-light-white">Shop now <i
                                                    className="fas fa-chevron-right ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-box product-box1">
                                    <div className="img-wrapper">
                                        <div className="top-wishlist">
                                            <a href="javascript:void(0)" className="heart-wishlist ms-auto"><i
                                                    className="far fa-heart"></i></a>
                                        </div>
                                        <a href="javascript:void(0)" className="text-center">
                                            <img src="assets/images/furniture-images/shop/2.png"
                                                className="img-fluid blur-up lazyload" alt=""/>
                                        </a>
                                    </div>
                                    <div className="insta-hover insta-hover-gradient text-center">
                                        <div>
                                            <h2>Women</h2>
                                            <h5>New Offer -56% Discount</h5>
                                            <h3 className="brand-name">Latest Night Lamp From $35</h3>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" type="button"
                                                className="btn btn-light-white">Shop now <i
                                                    className="fas fa-chevron-right ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="service-section service-style-2 section-b-space">
        <div className="container">
            <div className="row g-4 g-sm-3">
                <div className="col-xl-3 col-sm-6">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <svg>
                                {/* <use xlink:href="assets/svg/icons.svg#customer"></use> */}
                            </svg>
                        </div>
                        <div className="service-content">
                            <h3 className="mb-2">Customer Servcies</h3>
                            <span className="font-light">Top notch customer service.</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <svg>
                                {/* <use xlink:href="assets/svg/icons.svg#shop"></use> */}
                            </svg>
                        </div>
                        <div className="service-content">
                            <h3 className="mb-2">Pickup At Any Store</h3>
                            <span className="font-light">Free shipping on orders over $65.</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <svg>
                                {/* <use xlink:href="assets/svg/icons.svg#secure-payment"></use> */}
                            </svg>
                        </div>
                        <div className="service-content">
                            <h3 className="mb-2">Secured Payment</h3>
                            <span className="font-light">We accept all major credit cards.</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <svg>
                                {/* <use xlink:href="assets/svg/icons.svg#return"></use> */}
                            </svg>
                        </div>
                        <div className="service-content">
                            <h3 className="mb-2">Free Returns</h3>
                            <span className="font-light">30-days free return policy.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer-sm-space">
        <div className="main-footer">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer-contact">
                            <div className="brand-logo">
                                <a href="index.html" className="footer-logo">
                                    <svg className="svg-icon">
                                        {/* <use className="fill-color" xlink:href="assets/svg/icons.svg#logo"></use> */}
                                    </svg>
                                    <img src="assets/images/logo.png" className="img-fluid blur-up lazyload" alt="logo"/>
                                </a>
                            </div>
                            <ul className="contact-lists">
                                <li>
                                    <span><b>phone:</b> <span className="font-light"> + 185659635</span></span>

                                </li>
                                <li>
                                    <span><b>Address:</b><span className="font-light"> 1418 Riverwood Drive, Suite 3245
                                            Cottonwood, CA 96052, United States</span></span>
                                </li>
                                <li>
                                    <span><b>Email:</b><span className="font-light"> Voxo123@gmail.com</span></span>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="footer-links">
                            <div className="footer-title">
                                <h3>About us</h3>
                            </div>
                            <div className="footer-content">
                                <ul>
                                    <li>
                                        <a href="index.html" className="font-dark">Home</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Shop</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html" className="font-dark">About Us</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Blog</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-links">
                            <div className="footer-title">
                                <h3>New Categories</h3>
                            </div>
                            <div className="footer-content">
                                <ul>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Latest Shoes</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Branded Jeans</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">New Jackets</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Colorfull Hoodies</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="font-dark">Shiner Goggles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-links">
                            <div className="footer-title">
                                <h3>Get Help</h3>
                            </div>
                            <div className="footer-content">
                                <ul>
                                    <li>
                                        <a href="user-dashboard.html" className="font-dark">Your Orders</a>
                                    </li>
                                    <li>
                                        <a href="user-dashboard.html" className="font-dark">Your Account</a>
                                    </li>
                                    <li>
                                        <a href="order-tracking.html" className="font-dark">Track Orders</a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="font-dark">Your Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="faq.html" className="font-dark">Shopping FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
                        <div className="footer-newsletter">
                            <h3>Let’s stay in touch</h3>
                            <div className="form-newsletter">
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control color-4" placeholder="Your Email Address" />
                                    <span className="input-group-text" id="basic-addon4"><i
                                            className="fas fa-arrow-right"></i></span>
                                </div>
                                <p className="font-dark mb-0">Keep up to date with our latest news and special offers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-footer">
            <div className="container">
                <div className="row gy-3">
                    <div className="col-md-6">
                        <ul>
                            <li className="font-dark">We accept:</li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/payment-icon/1.jpg" className="img-fluid blur-up lazyload"
                                        alt="payment icon"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/payment-icon/2.jpg" className="img-fluid blur-up lazyload"
                                        alt="payment icon" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/payment-icon/3.jpg" className="img-fluid blur-up lazyload"
                                        alt="payment icon" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/payment-icon/4.jpg" className="img-fluid blur-up lazyload"
                                        alt="payment icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-0 font-dark">© 2022, Voxo Theme. Made with heart by Pixelstrap</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="modal fade quick-view-modal" id="quick-view">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="quick-view-image ">
                                <div className="quick-view-slider ratio_medium">
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/1.jpg"
                                            className="img-fluid bg-img blur-up lazyload" alt="product"/>
                                    </div>
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/2.jpg"
                                            className="img-fluid bg-img blur-up lazyload" alt="product"/>
                                    </div>
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/3.jpg"
                                            className="img-fluid bg-img blur-up lazyload" alt="product"/>
                                    </div>
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/4.jpg"
                                            className="img-fluid bg-img blur-up lazyload" alt="product"/>
                                    </div>
                                </div>
                                <div className="quick-nav">
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/1.jpg"
                                            className="img-fluid blur-up lazyload" alt="product"/>
                                    </div>
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/2.jpg"
                                            className="img-fluid blur-up lazyload" alt="product"/>
                                    </div>
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/3.jpg"
                                            className="img-fluid blur-up lazyload" alt="product"/>
                                    </div>
                                    <div>
                                        <img src="assets/images/furniture-images/new-arrival/4.jpg"
                                            className="img-fluid blur-up lazyload" alt="product"/>
                                    </div>
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
    <div className="modal fade newletter-modal" id="newsletter">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content ">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <img src="assets/images/newletter-icon.png" className="img-fluid blur-up lazyload" alt=""/>
                    <div className="modal-title">
                        <h2 className="tt-title">Sign up for our Newsletter!</h2>
                        <p className="font-light">Never miss any new updates or products we reveal, stay up to date.</p>
                        <p className="font-light">Oh, and it's free!</p>

                        <div className="input-group mb-3">
                            <input placeholder="Email" className="form-control" type="text" />
                        </div>

                        <div className="cancel-button text-center">
                            <button className="btn default-theme w-100" data-bs-dismiss="modal"
                                type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade cart-modal" id="addtocart" tabindex="-1" role="dialog" aria-label="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content ">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <div className="modal-contain">
                        <div>
                            <div className="modal-messages">
                                <i className="fas fa-check"></i> 3-stripes full-zip hoodie successfully added to
                                you cart.
                            </div>
                            <div className="modal-product">
                                <div className="modal-contain-img">
                                    <img src="assets/images/fashion/instagram/4.jpg" className="img-fluid blur-up lazyload"
                                        alt=""/>
                                </div>
                                <div className="modal-contain-details">
                                    <h4>Premier Cropped Skinny Jean</h4>
                                    <p className="font-light my-2">Yellow, Qty : 3</p>
                                    <div className="product-total">
                                        <h5>TOTAL : <span>$1,140.00</span></h5>
                                    </div>
                                    <div className="shop-cart-button mt-3">
                                        <a href="shop-left-sidebar.html"
                                            className="btn default-light-theme conti-button default-theme default-theme-2 rounded">CONTINUE
                                            SHOPPING</a>
                                        <a href="cart.html"
                                            className="btn default-light-theme conti-button default-theme default-theme-2 rounded">VIEW
                                            CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ratio_asos mt-4">
                        <div className="container">
                            <div className="row m-0">
                                <div className="col-sm-12 p-0">
                                    <div
                                        className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space spacing-slider">
                                        <div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/fashion/product/front/1.jpg"
                                                                className="bg-img blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-details text-center">
                                                    <div className="rating-details d-block text-center">
                                                        <span className="font-light grid-content">BY Jacket</span>
                                                    </div>
                                                    <div className="main-price mt-0 d-block text-center">
                                                        <h3 className="theme-color">$78.00</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/fashion/product/front/2.jpg"
                                                                className="bg-img blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-details text-center">
                                                    <div className="rating-details d-block text-center">
                                                        <span className="font-light grid-content">B&Y Jacket</span>
                                                    </div>
                                                    <div className="main-price mt-0 d-block text-center">
                                                        <h3 className="theme-color">$78.00</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/fashion/product/front/3.jpg"
                                                                className="bg-img blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-details text-center">
                                                    <div className="rating-details d-block text-center">
                                                        <span className="font-light grid-content">B&Y Jacket</span>
                                                    </div>
                                                    <div className="main-price mt-0 d-block text-center">
                                                        <h3 className="theme-color">$78.00</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <a href="product-left-sidebar.html">
                                                            <img src="assets/images/fashion/product/front/4.jpg"
                                                                className="bg-img blur-up lazyload" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-details text-center">
                                                    <div className="rating-details d-block text-center">
                                                        <span className="font-light grid-content">B&Y Jacket</span>
                                                    </div>
                                                    <div className="main-price mt-0 d-block text-center">
                                                        <h3 className="theme-color">$78.00</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="cookie-bar-section">
        <div className="content">
            <img src="assets/images/cookie.png" alt=""/>
            <p className="font-light">This website use cookies to ensure you get the best experience on our website.</p>
            <div className="cookie-buttons">
                <button className="btn default-theme" id="button">I understand</button>
            </div>
        </div>
    </div>
    <div className="theme-setting">
        <ul>
            <li>
                <button id="darkButton" className="btn btn-sm dark-buttton">Dark</button>
            </li>
            <li>
                <button className="btn btn-sm rtl-button">RTL</button>
            </li>
            <li className="color-picker">
                <input type="color" className="form-control form-control-color" id="ColorPicker1" value="#e87316"
                    title="Choose your color"/>
            </li>
        </ul>
    </div>
    <div className="tap-to-top">
        <a href="#home">
            <i className="fas fa-chevron-up"></i>
        </a>
    </div>
    <div className="bg-overlay"></div>

    </div>
  )
}

export default Welcome