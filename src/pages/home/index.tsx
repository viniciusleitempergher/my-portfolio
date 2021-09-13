import { useEffect } from "react"
import { Greeting } from "../../components/greeting";
import { Skills } from "../../components/skills";
import { controlSection } from "../../hooks/sectionsControl";
import './style.css';

export function Home() {
  useEffect(() => {
    controlSection();
  }, [])
  return (
    <div className="home">
      <Greeting />
      <Skills />
    </div>
  )
}