import React from 'react';
import './styles/ProjectCard.css';

const ProjectCard = ({ title, image, alt, description, siteLink, githubLink }) => {
    return (
        <div className='project-container'>
            <div className='project-title-container'>
                <h3>{title}</h3>
            </div>
            <div className='project-image-container'>
                <img src={image} alt={alt}/>
            </div>
            <div className='project-description-container'>
                <p>{description[0]}</p>
                <p>{description[1]}</p>
            </div>
            <div className='project-buttons-container'>
                <a href={siteLink}>
                    <button className='project-button'>
                        <p>Visit the site!</p>
                    </button>
                </a>
                <a href={githubLink}>
                    <button className='project-button'>
                        <p>See the code!</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard