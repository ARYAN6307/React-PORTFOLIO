import './PricingCardStyles.css';
import { FaCheck , FaCross} from 'react-icons/fa'
import React from 'react'

const PricingCard = () => {
  return (
    <div className='pricing'>
      <h1>Subscription & Pricing</h1>
        <section className="card container grid">
         <div className='card__container grid'>
        <article className="card__content grid">
    <div className="card__pricing">
      <div className="card__pricing-number">
        <span className="card__pricing-symbol">$</span>0
      </div>
      <span className="card__pricing-month">/month</span>
    </div>
    <header className="card__header">
      <div className="card__header-circle grid">
        <img
          src="assets/img/free-coin.png"
          alt=""
          className="card__header-img"
        />
      </div>
      <span className="card__header-subtitle">Free plan</span>
      <h1 className="card__header-title">Basic</h1>
    </header>
    <ul className="card__list grid">
      <li className="card__list-item">
        <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">3 user request</p>
      </li>
      <li className="card__list-item">
        <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">10 downloads per day</p>
      </li>
      <li className="card__list-item">
        <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">Unlock all features from our site</p>
      </li>
      <li className="card__list-item">
         <p className="card__list-description">Daily content updates</p>
      </li>
      <li className="card__list-item">
         <p className="card__list-description">Fully editable files</p>
      </li>
    </ul>
    <button className="card__button">Choose this plan</button>
  </article>
  {/*==================== CARD 2 ====================*/}
  <article className="card__content grid">
    <div className="card__pricing">
      <div className="card__pricing-number">
        <span className="card__pricing-symbol">$</span>19
      </div>
      <span className="card__pricing-month">/month</span>
    </div>
    <header className="card__header">
      <div className="card__header-circle grid">
        <img
          src="assets/img/pro-coin.png"
          alt=""
          className="card__header-img"
        />
      </div>
      <span className="card__header-subtitle">Most popular</span>
      <h1 className="card__header-title">Professional</h1>
    </header>
    <ul className="card__list grid">
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">100 user request</p>
      </li>
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">Unlimited downloads</p>
      </li>
      <li className="card__list-item">
        <i className="uil uil-check card__list-icon" />
        <p className="card__list-description">
          Unlock all features from our site
        </p>
      </li>
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">Daily content updates</p>
      </li>
      <li className="card__list-item">
        <i className="uil uil-check card__list-icon" />
        <p className="card__list-description">Fully editable files</p>
      </li>
    </ul>
    <button className="card__button">Choose this plan</button>
  </article>
  {/*==================== CARD 3 ====================*/}
  <article className="card__content grid">
    <div className="card__pricing">
      <div className="card__pricing-number">
        <span className="card__pricing-symbol">$</span>29
      </div>
      <span className="card__pricing-month">/month</span>
    </div>
    <header className="card__header">
      <div className="card__header-circle grid">
        <img
          src="assets/img/enterprise-coin.png"
          alt=""
          className="card__header-img"
        />
      </div>
      <span className="card__header-subtitle">For agencies</span>
      <h1 className="card__header-title">Enterprise</h1>
    </header>
    <ul className="card__list grid">
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>

        <p className="card__list-description">Unlimited user request</p>
      </li>
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">Unlimited downloads</p>
      </li>
      <li className="card__list-item">
         <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">
          Unlock all features from our site
        </p>
      </li>
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">Daily content updates</p>
      </li>
      <li className="card__list-item">
      <FaCheck size={20} style={{color:"#000" }}/>
        <p className="card__list-description">Fully editable files</p>
      </li>
    </ul>
    <button className="card__button">Choose this plan</button>
  </article>
        </div>
        </section>
    </div>
  )
}

export default PricingCard