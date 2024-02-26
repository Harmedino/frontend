import classes from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to handle form submission (e.g., sending data to backend) goes here
    console.log("Form submitted!");
  };

  return (
    <div>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us for any inquiries or feedback.</p>
        </div>
      </section>

      <section className={classes.contactForm}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-10 pb-10">
          <div className={classes.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
    
  );
};

export default Contact;
