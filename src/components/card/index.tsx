import './style.css';

type Props = {
    number: string,
    title: string,
    link: string,
}

export function Card({ number, title, link }: Props) {
    return (
        <div className="card">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
                <h2>{number}</h2>
                <h3>{title}</h3>
                <img src={link} />
            </div>
        </div>
    )
}