import React from 'react';
import BulletList from '../IndividualComponents/BulletList';
import ProjectCard from '../IndividualComponents/ProjectCard';
import './styles/Home.css';

const Home = () => {

    const projectContent = [
        {title: 'AniQuiz', image: '', alt: 'A picture showing the home page of AniQuiz.', description: ['Do you consider yourself an anime fan? Test your knowledge of anime quotes and compete against other users to be at the top of the leaderboards.', 'Application built using Python, Flask and Jinja.'], siteLink: 'https://aniquiz.onrender.com', githubLink: 'https://github.com/edwar3je/capstone-project-1'},
        {title: 'Witter', image: '', alt: 'A picture showing a feed on Witter.', description: ['A Twitter clone that has a Discord layout and a custom form of error handling.', 'Frontend and backend built using React and Node.js respectively.'], siteLink: 'https://witter-frontend.onrender.com', githubLink: 'https://github.com/edwar3je/Witter-Frontend'}
    ]
    
    return (
        <div className='page-container'>
            <div className='title-container'>
                <h1>James Edwards Portfolio</h1>
                <h2>Solving one problem at a time</h2>
            </div>
            <h3>About Me</h3>
            <hr/>
            <div className='about-container'>
                <p>Hi, my name is James and I am a junior level software engineer that specializes in full-stack development. I began my software engineering journey by enrolling in the Springboard Software Engineering Career Track in February 2023. Over the course of my program, I proceeded to learn about the fundamentals of web development and built web applications for both personal and professional use.</p>
                <p>I now want to bring these new found skills into a junior level position that either focuses on full-stack development, backend development or quality assurance. Feel free to check out what I have built further below. If you are interested in any of my projects, you can contact me via phone, email or LinkedIn (I like talking about my work)!</p>
            </div>
            <h3>Skills</h3>
            <hr/>
            <BulletList />
            <h3>Projects</h3>
            <hr/>
            <div className='projects-container'>
                <div class='actual-projects-container'>
                    {projectContent.map(({title, image, description, siteLink, githubLink}) => {
                        return <ProjectCard title={title} image={image} alt={alt} description={description} siteLink={siteLink} githubLink={githubLink} />
                    })}
                </div>
            </div>
            <div className='socials-container'>
                <div className='logos-container'>
                    <a href="https://github.com/edwar3je">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#865bd9" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/james-edwards-swe/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#865bd9" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                    </a>
                </div>
                <div className='other-socials-container'>
                    <p>jameserikedwards@gmail.com</p>
                    <p>703-439-0358</p>
                </div>
            </div>
        </div>
    )
}

export default Home