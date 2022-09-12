export const HeaderNav = () => {
  return (
    <div className="headerNav pad">
      <nav className="userNav">
        <div className="maxsulot">
          <a href="#maxsulot">barcha mahsulotlar</a>
        </div>
        <div className="logo">
          <a href="#logo">
            <img src="./logo/logo.svg" alt="logo" />
          </a>
        </div>
        <ul className="detil">
          <li>UZ</li>
          <li>
            <a href="tel:+998995192378">Bog’lanish</a>
          </li>
        </ul>
      </nav>
      {/* header */}
      <header className="headerUser">
        <h1>
          PROFESSIONAL VA HAVASKOR <br /> BARBERLAR UCHUN
        </h1>
        <div className="animate_header">
          <div className="animate__">
            <img src="./img/doira_1.svg" alt="" />
          </div>
          <div className="animate__">
            <img src="./img/doira_.svg" alt="" />
          </div>
          <div className="animate__">
            <img src="./img/ustara_headers.png" alt="" />
          </div>
          <div className="animate_text">
            <h2>ai-ma7</h2>
            <p>XAVFSIZ USTARASI</p>
          </div>
          
        </div>
      </header>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="contact  ">
      <div className="grid ">
        <div className="contactBox">
          <h1>
            O‘z ishini <br />
            mukammal darajada <br />
            bajarishni istagan <br />
            <span> har bir</span> <br />
            Barber uchun <br />
            <span> albatta kerak</span> <br />
            <span>bo‘ladigan uskuna</span> <br />
          </h1>
          <button className="btn_">BOG‘LANISH</button>
        </div>
        <div className="contactBox">
          <img src="./img/contact.png " alt="" />
          <div className="imgContact"></div>
        </div>
      </div>
      <img src="./img/BlobShape.svg" alt="fon-circle" className="circle" />
    </div>
  );
};

export const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="shape2">
        <img src="./img/shape1.svg" alt="shape1" />
        <img src="./img/shape2.svg" alt="shape2" />
      </div>
      <div className="imgContact"></div>
      <div className="contactusItem">
        <h1>
          Mukammal uskuna bilangina <br />
          MUKAMMAL ISH BAJARISH MUMKIN
        </h1>
        <div className="pad">
          <div className="grid3">
            <div className="grid_item contact_net">
              <img src="./img/phone.svg" alt="contact" />
              <p>Murojaat uchun</p>
              <p>+998 90 123 45 67</p>
            </div>
            <div className="grid_item contact_net">
              <img src="./img/phone.svg" alt="contact" />
              <p>Murojaat uchun</p>
              <p>+998 90 123 45 67</p>
            </div>
            <div className="grid_item contact_net">
              <img src="./img/phone.svg" alt="contact" />
              <p>Murojaat uchun</p>
              <p>+998 90 123 45 67</p>
            </div>
          </div>
        </div>
        <p className="manzil">
          Manzil <br />
          <span>Namangan v., Namangan t., ko’cha nomi, 12-uy</span>
        </p>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="pad">
        <div className="footer">
          <ul className="footerBox">
            <li>
              <a href="#almaz" className="footer-link">
                +998 90 123 45 67
              </a>
            </li>
            <li>
              <a href="#almaz" className="footer-link">
                almaz@gmail.com
              </a>
            </li>
          </ul>
          <div className="logo-footer">
            <a href="#logo">
              <img src="./logo/logo.svg" alt="logo" />
            </a>
          </div>
          <ul className="footerBox">
            <li>
              <a href="#almaz" className="footer-link">
                barcha mahsulotlar
              </a>
            </li>
            <li>
              <a href="#link" className="footer-link">
                Yuqoriga
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pad">
      <div className="flexFooter ">
        <p>Barcha huquqlar himoyalangan</p>
        <p>
          Sayt “ <a href="uitc.uz">UNITED IT CLUBS</a> ” tomonidan ishlab
          chiqildi{" "}
        </p>
      </div>
      </div>
    </footer>
  );
};
