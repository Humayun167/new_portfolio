import { useState } from 'react';
import './Services.css'
const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section " id="services">
      <h2 className="section__title">Services </h2>
      <span className="section__subtitle">My Technology Level</span>

      <div className="services__container container grid">
      {/*? Content-1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title"> Product <br /> Designer
            </h3>
          </div>

          <span  className="services__button" onClick={()=> toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? " services__modal active-modal" : "services__modal"} >
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className=" uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet,
              </p>

              <ul className="services__modal__services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">UI/UX</p>
                </li>

              </ul>
            </div>
          </div>
        </div>

   {/*? Content-2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span  className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i
                className="uil uil-times
                        services__modal-close"
              ></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet,
              </p>

              <ul className="services__modal__services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">UI/UX</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

   {/*? Content-3 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Visual <br />
              designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet,
              </p>

              <ul className="services__modal__services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">UI/UX</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Services;