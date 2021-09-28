import './style.css';

import html5img from '../../img/html.svg';
import css3img from '../../img/CSS3.png';
import jsimg from '../../img/js.png';
import tsimg from '../../img/TS.png';

import mysqlImg from '../../img/MySQL.png';
import javaImg from '../../img/java.png';
import expoImg from '../../img/expo.png';
import nodeImg from '../../img/node.png';
import postgreImg from '../../img/postgre.png';
import reactImg from '../../img/react.png';
import sequelizeImg from '../../img/sequelize.png';
import hibernateImg from '../../img/hibernate.png';
import springBootImg from '../../img/spring.png';

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
        <Card link={javaImg} title="Java" number="05" />
        <Card link={springBootImg} title="SpringBoot" number="06" />
        <Card link={nodeImg} title="Node" number="05" />
        <Card link={reactImg} title="React" number="07" />
        <Card link={expoImg} title="Expo" number="08" />
        <Card link={reactImg} title="ReactNative" number="09" />
        <Card link={mysqlImg} title="MySQL" number="09" />
        <Card link={postgreImg} title="PostgreSQL" number="09" />
        <Card link={hibernateImg} title="Hibernate" number="09" />
        <Card link={sequelizeImg} title="Sequelize" number="09" />
      </div>
    </div>
  )
}