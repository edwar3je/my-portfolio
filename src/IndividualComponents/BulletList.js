import React from 'react';
import './styles/BulletList.css';

const BulletList = () => {
    return (
        <div className="skills-container">
        <ul>
          <li className="main-li">Frontend:</li>
          <ul>
            <li className="sub-li">HTML</li>
            <li className="sub-li">CSS</li>
            <li className="sub-li">JavaScript</li>
            <li className="sub-li">jQuery</li>
            <li className="sub-li">React</li>
          </ul>
          <li className="main-li">Backend:</li>
          <ul>
            <li className="sub-li">Python</li>
            <li className="sub-li">Flask</li>
            <li className="sub-li">Node.js</li>
            <li className="sub-li">Express.js</li>
          </ul>
          <li className="main-li">SQL/Database Queries:</li>
          <ul>
            <li className="sub-li">PostgreSQL</li>
          </ul>
          <li className="main-li">Testing:</li>
          <ul>
            <li className="sub-li">Jasmine</li>
            <li className="sub-li">Jest</li>
            <li className="sub-li">Supertest</li>
          </ul>
          <li className="main-li">Data Structures/Algorithms:</li>
          <ul>
            <li className="sub-li">Comparative Sorts (Bubble, Selection, Insert)</li>
            <li className="sub-li">Linked Lists</li>
            <li className="sub-li">Trees</li>
            <li className="sub-li">Graphs</li>
          </ul>
        </ul>
      </div>
    )
}

export default BulletList