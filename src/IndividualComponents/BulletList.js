import React from 'react';
import './styles/BulletList.css';

const BulletList = () => {
    return (
        <div class="skills-container">
        <ul>
          <li class="main-li">Frontend:</li>
          <ul>
            <li class="sub-li">HTML</li>
            <li class="sub-li">CSS</li>
            <li class="sub-li">JavaScript</li>
            <li class="sub-li">jQuery</li>
            <li class="sub-li">React</li>
          </ul>
          <li class="main-li">Backend:</li>
          <ul>
            <li class="sub-li">Python</li>
            <li class="sub-li">Flask</li>
            <li class="sub-li">Node.js</li>
            <li class="sub-li">Express.js</li>
          </ul>
          <li class="main-li">SQL/Database Queries:</li>
          <ul>
            <li class="sub-li">PostgreSQL</li>
          </ul>
          <li class="main-li">Testing:</li>
          <ul>
            <li class="sub-li">Jasmine</li>
            <li class="sub-li">Jest</li>
            <li class="sub-li">Supertest</li>
          </ul>
          <li class="main-li">Data Structures/Algorithms:</li>
          <ul>
            <li class="sub-li">Comparative Sorts (Bubble, Selection, Insert)</li>
            <li class="sub-li">Linked Lists</li>
            <li class="sub-li">Trees</li>
            <li class="sub-li">Graphs</li>
          </ul>
        </ul>
      </div>
    )
}

export default BulletList