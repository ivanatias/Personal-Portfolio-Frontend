import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Spinner } from "../../components";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";

import "./contact.scss";
import { PageWrapper, MotionWrapper } from "../../wrapper";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [animateForm, setAnimateForm] = useState({ y: 0, opacity: 1 });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.GATSBY_EMAIL_JS_SERVICEID,
        process.env.GATSBY_EMAIL_JS_TEMPLATEID,
        form.current,
        process.env.GATSBY_EMAIL_JS_USERID
      )
      .then(
        () => {
          setAnimateForm({ y: -100, opacity: 0 });
          setTimeout(() => {
            setSending(false);
            setMessageSent(true);
          }, 1000);
        },
        () => {
          return (
            <div className="page__flex">
              <p className="light">Whoops! something went wrong...</p>
            </div>
          );
        }
      );
  };

  return (
    <>
      <h1 className="head-text">
        Let's talk <span>business!</span>
      </h1>

      <div className="page__contact-emailBadge page__flex">
        <div>
          <img src={images.contact} alt="contact" />
          <p className="light">ivan.d.atias@gmail.com</p>
        </div>
      </div>

      {messageSent ? (
        <motion.div
          className="page__flex page__contact-messageSent"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={messageSent}
        >
          <h1 className="head-text">Thank you, I'll reply ASAP.</h1>
          <img src={images.emailsent} alt="Message sent" />
        </motion.div>
      ) : (
        <motion.div
          animate={animateForm}
          className="page__contact-formContainer"
          transition={{ duration: 1 }}
        >
          <form
            ref={form}
            className="contact-form page__flex"
            onSubmit={handleSubmit}
          >
            <h2 className="bold-text">
              Let's have a little chat, I'll buy the coffee 🙂
            </h2>
            <div className="contact-fields page__flex">
              <input
                type="text"
                name="user_name"
                placeholder="Full name"
                required
                className="p-text"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="p-text"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone number"
                className="p-text"
              />
              <small className="p-text">Please include your country code</small>
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                className="p-text"
                required
              />
              <button type="submit" className="page__flex">
                {sending ? <Spinner /> : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default PageWrapper(
  MotionWrapper(Contact, "page__contact"),
  "contact",
  "page__primarybg"
);
