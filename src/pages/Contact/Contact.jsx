import './Contact.css';

export default function Contact() {
    return (
        <div id='contact'>
            <h1>Contact</h1>

            <div id='contact-form'>
            <h3>Send Me a Message</h3>
                <form action="https://api.web3forms.com/submit" method="POST" >
                <input type="hidden" name="access_key" value="86849d46-4cf5-46b3-9753-4c13dda2e728" />
                <h4>Your Name:</h4>
                <input type="text" name="name" required />
                <h4>Your Email:</h4>
                <input type="email" name="email" required />
                <h4>Message:</h4>
                <textarea name="message" required></textarea>
                <div className="h-captcha" data-captcha="true"></div>
                <button type="submit">Submit Form</button>
                </form>
                <script src="https://web3forms.com/client/script.js" async defer></script>
            </div>

            <div id='connect-linkedin'>
                <h3>Connect with me on LinkedIn</h3>
                <a href="https://www.linkedin.com/in/lauren-marie-johnson/" target="_blank" rel='noreferrer'><button>Connect</button></a>
            </div>
        </div>
    )
}