import { useEffect } from "react"
import { appear } from "../../hooks/appear";
import { typingAnimation } from "../../hooks/typingAnimation"
import myImg from '../../img/euVerde.png';
import './style.css';

export function Home() {
  useEffect(() => {
    typingAnimation(document.querySelectorAll(".typing-animation"));
    appear(document.querySelector(".myImg"));
  }, [])
  return (
    <div className="home">
      <div className="greeting">
        <div className="greeting__txt">
          <h1 className="typing-animation">Hello!§ My name is Vinícius!§</h1>
          <p className="typing-animation">How are you doing!?</p>
        </div>
        <div className="greeting__img">
          <div className="greenball greenball-1"></div>
          <div className="greenball greenball-2"></div>
          <img src={myImg} className="myImg hidden" />
        </div>
      </div>
    </div>
  )
}