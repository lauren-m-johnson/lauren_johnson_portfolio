import ProjectThumbnails from "../ProjectThumbnails/ProjectThumbnails";

export default function Project1() {
    return (
        <div id='main-container'>
        <div id='projects'>
            <h1>Projects</h1>
        </div>
        <section id='project-container'>
            <div id='project-img'>
                <img src="images/thumbnail-1.png" alt='webpage image' />
            </div>
            <div id='project-info'>
                <h1>Online Forum</h1>
                <h2>Supernatural Scribe | August 2023</h2>
                <h3>Designed and built an online forum for users to share stories about the supernatural.</h3>
                <p>I used a MERN(MongoDB, Express.js, React.js, Node.js)Stack as well as HTML, CSS and JavaScript.</p>
                <a href="https://www.loom.com/share/0290ec731aa1417ba6da84de5e1488a1?sid=828b52bc-20fd-4ba4-9c3c-94b4c96c7c16" target="_blank" rel='noreferrer'>Video Walk Through</a>
                <a href="https://supernatural-scribe-775c8db69f47.herokuapp.com/" target="_blank" rel='noreferrer'>Live Link</a>
                <a href="https://github.com/lauren-m-johnson/supernatural-scribe" target="_blank" rel='noreferrer'>Visit GitHub</a>
            </div>
        </section>
        <div id='projects'>
            <h3>Click a Project to View more</h3>
            <ProjectThumbnails />
        </div>        
    </div>
    )
}