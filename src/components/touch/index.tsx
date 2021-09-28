import './style.css';

const linkedinProfile = "https://www.linkedin.com/in/vin%C3%ADcius-gabriel-leitempergher-758640205";

export function Touch() {
    return (
        <div className="touch">
            <h2 className="title touch__title">Get In Touch</h2>
            <a className="touch__item" href={linkedinProfile} target="_blank"><i className="fab fa-linkedin"></i><p>Linkedin</p></a>
            <div className="touch__item"><i className="fas fa-envelope"></i><p>viniciusleitempergher@gmail.com</p></div>
            <div className="touch__item"><i className="fab fa-whatsapp"></i><p>(47) 98415 - 8284</p></div>
        </div>
    )
}