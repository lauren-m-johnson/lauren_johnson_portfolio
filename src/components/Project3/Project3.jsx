import ProjectThumbnails from "../ProjectThumbnails/ProjectThumbnails";

export default function Project3() {
    return (
        <div id='main-container'>
        <div id='projects'>
            <h1>Projects</h1>
        </div>
        <section id='project-container'>
            <div id='project-img'>
                <img src="images/thumbnail-3.png" alt='webpage image' />
            </div>
            <div id='project-info'>
                <h1>Online Journal</h1>
                <h2>My Chronicles | July 2023</h2>
                <h3>Full-Stack Journaling web app designed to help users boost self-awareness, and cultivate a more mindful and fulfilling life.</h3>
                <p>Created using MongoDB, Express.js, Node.js, JavaScript, HTML and CSS. This link is currently expiriencing issues due to Heroku, please view the video walk through.</p>
                <a href="https://www.loom.com/share/a82a43f5679e48aa9aad84536f6b302a?sid=23a88d68-e6a1-4113-bb89-265516ffdd94" target="_blank" rel='noreferrer'>Video Walk Through</a>
                <a href="https://my-chronicles-60a6d00a70e1.herokuapp.com/" target="_blank" rel='noreferrer'>Live Link</a>
                <a href="https://github.com/lauren-m-johnson/My-Chronicles" target="_blank" rel='noreferrer'>Visit GitHub</a>
            </div>
        </section>
        <div id='projects'>
            <h3>Click a Project to View more</h3>
            <ProjectThumbnails />
        </div>
    </div>
    )
}