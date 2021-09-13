import './style.css';

import html5img from '../../img/html.svg';
import css3img from '../../img/CSS3.png';
import jsimg from '../../img/js.png';

export function Skills() {
  return (
    <div className="skills hidden">
      <h2 className="title">My Skills</h2>
      <div className="cards">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>01</h2>
            <h3>HTML5</h3>
            <img src={html5img} />
          </div>
        </div>
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>02</h2>
            <h3>CSS3</h3>
            <img src={css3img} />
          </div>
        </div>
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>03</h2>
            <h3>JavaScript</h3>
            <img src={jsimg} />
          </div>
        </div>
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>04</h2>
            <h3>HTML</h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}