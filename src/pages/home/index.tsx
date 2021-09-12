import { useEffect } from "react"
import { typingAnimation } from "../../hooks/typingAnimation"

export function Home() {
  useEffect(() => {
    typingAnimation(document.querySelectorAll(".typing-animation"))
  }, [])
  return (
    <>
      <h1 className="typing-animation">Olá!§ Me chamo Vinícius!§</h1>
      <p className="typing-animation">Como vai!?</p>
    </>
  )
}