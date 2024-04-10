# My Portfolio (James Edwards)

Link: https://james-edwards-portfolio.onrender.com/

## Description:

This is my (James Edwards) software engineering portfolio created via React.js. My portfolio consists of a single-page-application that contains information about me, my skills, my projects and my contact information.

## Features:

My portfolio consists of a single route that contains a component that renders the page (```<Home />```), and two individual components that display my skills (```<BulletList />```) and projects (```<ProjectCard />```) respectively. The ```<ProjectCard />``` component also contains two buttons that redirects users to either the deployed site, or the virtual repository for the project on GitHub.

## User Flow:

The application consists of a single route (endpoint ```'/'```) which contains information on me, my skills, my projects and my contact information. While users are mostly limited to viewing the information present on the page, each instance of the ```<ProjectCard />``` component contains two buttons that redirect the user to a different page. The first link redirects the user to the site where the project is deployed. The second link redirects the user to the virtual repository for the project on GitHub.

## Routes:

### `/`

This is the only route that is rendered by the application. It is rendered via the ```<Home />``` component, which contains information on me and my contact information by default. It also uses two other components, ```<BulletList />``` and ```<ProjectCard />```, which displays a bullet list of my skills and information on my projects respectively.

## Components:

### ```<Home />```

This component renders the main home route at endpoint `/`. By default, the component lists information about me and my contact information. The component also contains further information used to render two helper components: ```<BulletList />``` and ```<ProjectCard />```.

### ```<BulletList />```

This component renders an unordered list of my top software engineering skills. Each list element contains a software topic (e.g frontend development, testing/debugging), followed by another unordered list that contains specific skills where I am proficient on the topic. For instance, if the topic is 'frontend development', one of the skills listed would be 'HTML', 'JavaScript' and more. 

### ```<ProjectCard />```

This component is used to render a card that contains information on a specific project. The component contains up to 6 different props that are required to display the component: ```title``` (the title of the project), ```image``` (the image stored in the public folder), ```alt``` (an alt description of the image displayed), ```description``` (an array containing one string that describes the purpose of the application, followed by another string describing what tools were used to build the application), ```siteLink``` (a link to the deployed site for the project) and ```githubLink``` (a link to the virtual repository on GitHub for the project). The information needed to render the component is defined in the ```<Home />``` component as an array containing objects (the ```map()``` function is used against the array to render each instance of the component).

## How to Set Up:

Assuming you have the application folder installed on your computer, use your preferred terminal to access the directory. Once inside the directory, install all dependencies using the command ```npm install``` (if you do not have 'npm' already installed in your terminal, please do so). Once the dependencies have been installed, enter the command ```npm start``` while inside the directory containing the application. Please note that the starting sequence may take upwards of a minute-and-a-half to start rendering the application in a browser.