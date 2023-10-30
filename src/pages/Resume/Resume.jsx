import './Resume.css';

export default function Resume() {
    return (
        <div id='resume'>
            <div id='section-header'>
                <h1>Resume</h1>
                <a href='https://docs.google.com/document/d/1_yaJTYfk_uRq3jWYcX26D0IKhNrzLqgsBnkcseWqrbw/edit?usp=sharing' target="_blank" rel='noreferrer'><button>Download Resume</button></a>
            </div>
            <div id='resume-info'>
                <div id='resume-skills-container'>
                    <h2>Skills</h2>
                    <div id='resume-skills'>
                        <ul><h3>Languages</h3>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                        <ul><h3>Database</h3>
                            <li>PostgresSQL</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul><h3>Libraries and Frameworks</h3>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Django</li>
                            <li>Bootstrap</li>
                            <li>Mongoose</li>
                        </ul>
                        <ul><h3>Other</h3>
                            <li>RESTful Routing</li>
                            <li>JSON API</li>
                            <li>AWS</li>
                        </ul>
                        <ul><h3>Interpersonal Skills</h3>
                            <li>Collaborative</li>
                            <li>Creative</li>
                            <li>Adaptive</li>
                            <li>Strategic Problem Solver</li>
                            <li>Personable</li>
                            <li>Written and Verbal Communication</li>
                        </ul>
                    </div>
                </div>
                <h2>Education</h2>
                <h3>General Assembly | Software Engineering Immersive Program | Remote</h3>
                <a href='https://drive.google.com/file/d/1BlvFZIyO8LObAZsYO_hFmBP7TJObu3sN/view' target="_blank" rel='noreferrer'>View Certificate</a>
                <ul>
                    <li>Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development 
                        fundamentals, computer science, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
                        Developed a portfolio of individual and group projects.</li>
                </ul>
                <h3>CSU Chico | Bachelor of Art in Liberal Studies | Chico, CA</h3>
                <ul>
                    <li>Well-rounded education emphasizing critical thinking, research, and communication skills. Acquired a comprehensive understanding 
                        of humanities, mathematics, social sciences, and natural sciences. Proficient in approaching complex problems from diverse perspectives, 
                        fostering a holistic learning and problem-solving approach. Strong written and verbal communication abilities, enabling effective 
                        articulation of ideas and engaging in thoughtful discussions. Equipped with adaptability and intellectual agility to excel in a dynamic 
                        professional environment.</li>
                </ul>
                <h2>Work Experience</h2>
                <h3>Owner/Operator/Tutor | Learning with Lauren Tutoring Services | Ukiah, CA</h3>
                <h4>06/2021 - 06/2023</h4>
                <ul>
                    <li>Founded and managed all aspects of the business, including marketing, client acquisition, financial management, and day-to-day operations. </li>
                    <li>Worked one on one with students to assess their needs and provide individualized lessons, set learning goals and meet set learning goals within 95% accuracy.</li>
                    <li>Developed and implemented strategies to attract and retain clients in a competitive tutoring market.</li>
                    <li>Maintained a positive and professional image for the company through effective communication and relationship building with clients, students, and parents.</li>
                    <li>Utilized Google Suite to streamline administrative tasks, keep calendar, notes and improve efficiency in day-to-day operations.</li>
                </ul>
                <h3>Teacher | Potter Valley Community Unified School District | Potter Valley, CA</h3>
                <h4>08/2015 - 06/2021</h4>
                <ul>
                    <li>Developed and implemented innovative, technology-driven lessons in diverse subjects, resulting in an 80% increase in student math test scores.</li>
                    <li>Managed accurate student data records, meeting strict deadlines and utilizing data analysis to drive targeted interventions and student success.</li>
                    <li>Utilized technology in the classroom and in remote settings including Zoom administration.</li>
                    <li>Provided individualized support, differentiation and guidance to students with diverse needs to ensure their academic success and inclusion in the classroom.</li>
                    <li>Managed accurate student data records, meeting strict deadlines and utilizing data analysis to drive targeted interventions and student success.</li>
                </ul>
            </div>
        </div>
    )
}