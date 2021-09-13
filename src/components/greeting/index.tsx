import myImg from '../../img/euVerde.png';

import './style.css';

export function Greeting() {
  return (
    <div className="greeting">
      <div className="greeting__txt">
        <h1 className="greeting__txt__name">Vinícius Gabriel<br /> Leitempergher</h1>
        <p className="greeting__txt__desc">Fullstack Web Developer</p>
      </div>
      <div className="greeting__img">
        <div className="greenball greenball-1"></div>
        <div className="greenball greenball-2"></div>
        <div className="greenball greenball-3"></div>
        <div className="greenball greenball-4"></div>
        <img src={myImg} className="myImg" />
      </div>
    </div>
  )
}