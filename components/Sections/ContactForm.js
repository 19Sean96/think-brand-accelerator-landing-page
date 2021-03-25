import ContentWrapper from "../ContentWrapper";
import Link from "next/link";

const ContactForm = (props) => {
  return (
    <section className="contact-form">
      <ContentWrapper>
        <div className="contact-form--content">
          <h3 className="capitalize contact-form--title">
            we'd love to work with you!
          </h3>
          <h6 className="contact-form--subtitle capitalize">
            get started below
          </h6>
          <div className="form__wrapper">
            <form className="form"></form>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ContactForm;
