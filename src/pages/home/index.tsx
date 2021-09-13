import { useEffect } from "react"
import { Greeting } from "../../components/greeting";
import { Skills } from "../../components/skills";
import { controlSection } from "../../hooks/sectionsControl";
import './style.css';

export function Home() {
  useEffect(() => {
    //typingAnimation(document.querySelectorAll(".typing-animation"));
    //appear(document.querySelector(".myImg"));
    controlSection();
  }, [])
  return (
    <div className="home">
      <Greeting />
      <Skills />
    </div>
  )
}