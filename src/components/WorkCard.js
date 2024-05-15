import './WorkCardStyles.css';
import './buttons.css';
import Ecommerce from '../Projects/ecommerce.png';
import DSA from '../Projects/dsa.png';
import Event from '../Projects/eventosrm.png';
import Food from '../Projects/Food del.png';
import Travel from '../Projects/travelweb.png';
import Insta from '../Projects/insta.jpg';
import Chess from '../Projects/chess.png';
import Quiz from '../Projects/Web Quiz.png';

import React from 'react'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'> 
        <div className="card1">
    <a href="https://ecommerce-shopbag.netlify.app/" target="_blank">
      <img
        className="card-img-top"
        src={Ecommerce}
        alt="Ecommerce-ShopBag"
        style={{ height: 200 }}
      />
    </a>{" "}
    <div className="card--content">
      <p className="card__title">Ecommerce Website</p>
      <a
        className="fancy"
        href="https://ecommerce-shopbag.netlify.app/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <span className="top-key" />
        <span className="text">Link</span>
        <span className="bottom-key-1" />
        <span className="bottom-key-2" />
      </a>
      <p className="card--description">
        An ecommerce website named Shopbag includes pages of home, blog,
        product, cart, about, contact. Made using Html CSS and Javascript.{" "}
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://dsavisualiser.netlify.app/" target="_blank">
      <img
        className="card-img-top myVideo"
        src={DSA}
        alt="DSAS"
        style={{ height: 200 }}
      />
    </a>
    <div className="card--content">
      <p className="card__title">DSA Visualiser</p>
      <a href="https://dsavisualiser.netlify.app/" target="_blank">
        <button className="hg">
          <span className="text">Link</span>
        </button>
      </a>
      <p className="card--description">
        A beautiful designed tool for various algorithms of DSA with parallax .
        Helps in developing a proper understanding of algorithms.Made using Html
        CSS and Javascript.
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://event-o-srm.netlify.app/" target="_blank">
      <img
        className="card-img-top"
        src={Event}
        alt="Event-o-Srm"
        style={{ height: 200 }}
      />{" "}
    </a>
    <div className="card--content">
      <p className="card__title">Event-o-SRM</p>
      <a href="https://event-o-srm.netlify.app/" target="_blank">
        <button className="dcc">
          <span>Link</span>
        </button>{" "}
      </a>
      <p className="card--description">
        An Event Management website for activities happening in college campus
        in both Online as well as Offline Modes.
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://sugandh-fast-food.netlify.app/">
      <img
        className="card-img-top myVideo"
        src={Food}
        alt="DSAS"
        style={{ height: 200 }}
      />
    </a>{" "}
    <div className="card--content">
      <p className="card__title">Food Delivery</p>
      <a href="https://sugandh-fast-food.netlify.app/" target="_blank">
        <button id="vfr">
          <span className="box1">Link</span>
        </button>
      </a>
      <p className="card--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://chess-game-miniproj.netlify.app/" target="_blank">
      <img
        className="card-img-top myVideo"
        src={Travel}
        alt="quiz"
        style={{ height: 200 }}
      />
    </a>{" "}
    <div className="card--content">
      <p className="card__title">Travel Website</p>
      <a href="https://chess-game-miniproj.netlify.app/" target="_blank">
        <button id="uyi"> Link</button>{" "}
      </a>
      <p className="card--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://leocosta1.github.io/instagram-clone/#" target="_blank">
      <img
        className="card-img-top myVideo"
        src={Insta}
        alt="quiz"
        style={{ height: 200 }}
      />
    </a>{" "}
    <div className="card--content">
      <p className="card__title">Instagram Clone</p>
      <a href="https://leocosta1.github.io/instagram-clone/#" target="_blank">
        <button className="btn-shine">
          <span>Link</span>
        </button>{" "}
      </a>
      <p className="card--description">
        Enhanced Ui for Instagram with dark mode for better user experience.
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://website-quiz-miniproject.netlify.app/" target="_blank">
      <img
        className="card-img-top myVideo"
        src={Quiz}
        alt="quiz"
        style={{ height: 200 }}
      />
    </a>{" "}
    <div className="card--content">
      <p className="card__title">Web Quiz</p>
      <a href="https://website-quiz-miniproject.netlify.app/" target="_blank">
        <button className="btnj">Link</button>{" "}
      </a>
      <p className="card--description">
        A Quiz Website based on questions from Html Css and Javascript. Score is
        also provided at last.
      </p>
    </div>
  </div>
  <div className="card1">
    <a href="https://chess-game-miniproj.netlify.app/" target="_blank">
      <img
        className="card-img-top myVideo"
        src={Chess}
        alt="quiz"
        style={{ height: 200 }}
      />
    </a>{" "}
    <div className="card--content">
      <p className="card__title">Chess Online</p>
      <a href="https://chess-game-miniproj.netlify.app/" target="_blank">
        <button id="poo">Link</button>{" "}
      </a>
      <p className="card--description">
        A two player chess game coded with Javascript.
      </p>
    </div>
  </div>
        </div>
    </div>
  )
}

export default WorkCard