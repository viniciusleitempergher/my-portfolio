import './style.css';

import html5img from '../../img/html.svg';
import css3img from '../../img/CSS3.png';
import jsimg from '../../img/js.png';
import tsimg from '../../img/TS.png';

import { Card } from '../card';

export function Skills() {
  return (
    <div className="skills hidden">
      <h2 className="title">My Skills</h2>

      <div className="cards">
        <Card link={html5img} title="HTML5" number="01" />
        <Card link={css3img} title="CSS3" number="02" />
        <Card link={jsimg} title="JavaScript" number="03" />
        <Card link={tsimg} title="TypeScript" number="04" />
        <Card link={tsimg} title="TypeScript" number="04" />
        <Card link={tsimg} title="TypeScript" number="04" />
        <Card link={tsimg} title="TypeScript" number="04" />
        <Card link={tsimg} title="TypeScript" number="04" />
      </div>
    </div>
  )
}