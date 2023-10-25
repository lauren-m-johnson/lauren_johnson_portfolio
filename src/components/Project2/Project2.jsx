import ProjectSlider from "../ProjectSlider/ProjectSlider";

export default function Project2() {
    return (
        <div id='main-container'>
        <div id='projects'>
            <h1>Projects</h1>
            <h3>Click a Project to View more</h3>
            <ProjectSlider />
        </div>
        <div id='project-info'>
            <h1>Communication Software</h1>
            <h2>Pawfolio | August 2023</h2>
            <h3>Full-Stack web app designed to help doggy day care owners communicate with their clients.</h3>
            <p>This app was created collaboratively with 2 other programmers. We used Git Version Control, Python, Django, AWS, HTML and CSS. This link is currently expiriencing issues due to Heroku, please view the video walk through.</p>
            <a href="https://www.loom.com/share/7c908ccf850b4073be1905c54e751be2?sid=da94253c-e412-463c-ba94-585d9bb89d59" target="_blank" rel='noreferrer'>Video Walk Through</a>
            <a href="https://pawfolio-lovelace-7c9477f097c5.herokuapp.com/" target="_blank" rel='noreferrer'>Live Link</a>
            <a href="https://github.com/shaneyoung91/pawfolio" target="_blank" rel='noreferrer'>Visit GitHub</a>
        </div>
    </div>
    )
}