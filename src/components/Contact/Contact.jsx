import React, { useRef } from "react";
import "./Contact.css";

export default function Contact() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const commentRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Get values from refs
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const comment = commentRef.current.value;
    
        // Do something with the form data (e.g., store in local storage)
        const formData = { name, email, comment };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    
        // Clear form fields
        nameRef.current.value = '';
        emailRef.current.value = '';
        commentRef.current.value = '';
    
        // Optionally, you can redirect or perform other actions after submission
      };
    return (
        <section>
            <h1 className="contact-title">Contact <b className="purple"> Me</b></h1>
            <section className="contact" id="contact">
            <p class="animate__animated animate__zoomInDown">
                Feel free to reach out! Whether you have a question, want to
                discuss a potential collaboration, or just want to say hello,
                I'd love to hear from you. Your feedback and inquiries are
                valuable to me. Please use the form below to drop me a message,
                and I'll get back to you as soon as possible. Alternatively, you
                can connect with me through the social media icons provided.
                Looking forward to hearing from you and exploring new
                opportunities together!
            </p>
            <form id="usrform" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name:"  ref={nameRef}/>
                <input type="email" placeholder="Email:" ref={emailRef}/>
                <textarea name="comment" form="usrform" ref={commentRef}>
                    Enter text here...
                </textarea>
                <input type="submit" value="Submit" />
            </form>
        </section>
    </section>
    );
}