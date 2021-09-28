import { useEffect } from "react"
import { Greeting } from "../../components/greeting";
import { Skills } from "../../components/skills";
import { Touch } from '../../components/touch';
import './style.css';

export function Home() {
  return (
    <div className="home">
      <Greeting />
      <Skills />
      <Touch />
    </div>
  )
}