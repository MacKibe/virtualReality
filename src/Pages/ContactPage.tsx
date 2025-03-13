import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_PUBLIC_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact-page" className="md:px-[15%] py-5">
        <section>
          <h2 className="text-center my-[2%]">Get in touch</h2>
        </section>
        <section className="flex flex-col-reverse gap-[5%] md:flex-row">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-1 flex-col text-[var(--secondary)]"
          >
            <div className="p-[5%] md:p-2 text-3xl">Fill in the form</div>
            <div>
              <input
                required
                name="firstName"
                className="input-text"
                type="text"
                placeholder="First Name"
              />
              <input
                required
                name="lastName"
                className="input-text"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                required
                name="emailSubject"
                className="input-text"
                type="text"
                placeholder="Enter Subject"
              />
              <input
                required
                name="phoneNumber"
                className="input-text"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <input
              required
              name="email"
              className="input-text"
              type="text"
              placeholder="Email"
            />
            <textarea
              required
              name="emailMessage"
              className="input-text"
              placeholder="Enter Message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-[var(--secondary)] text-[var(--text)] rounded-3xl p-[5%] m-2"
            />
          </form>
          <div className="flex flex-col gap-[5%] flex-1 px-[5%]">
            <div className="flex flex-col md:flex-row text-2xl md:text-sm justify-between">
              <div>
                <h3 className="text-xl text-[var(--primary)]">Our Address</h3>
                <ul className="ml-2">
                  <li>Virtual Reality Marketing Agency</li>
                  <li>PO BOX 4517-09001</li>
                  <li>Kiserian, Mutall Building - Kenya</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-[var(--primary)]">
                  Contact Information
                </h3>
                <ul className="ml-2">
                  <li>Phone: 0701069382</li>
                  <li>Email : info@vr.com</li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5773585854304!2d36.68626867496595!3d-1.4290634985574646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0131c033b1ef%3A0x569be8715ba7ec81!2sMutall%20Business%20Centre!5e0!3m2!1sen!2ske!4v1740562111431!5m2!1sen!2ske"
              className="border-2 w-full sm:min-h-[40dvh] h-full my-8 md:m-0"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
