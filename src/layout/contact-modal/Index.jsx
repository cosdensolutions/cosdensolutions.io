import React, { useEffect, useState, useRef } from 'react';

// external dependencies
const axios = require('axios');

// internal dependenies
//
import TextInput from 'components/text-input';
import TextArea from 'components/text-area';
import Button from 'components/button';

const Modal = (props) => {
  const { closeModal } = props;

  // state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // modal background
  const modalBackground = useRef(null);
  useEffect(() => {
    modalBackground.current.style.opacity = '1';
  }, [modalBackground]);

  // modal container
  const modalContainer = useRef(null);
  useEffect(() => {
    modalContainer.current.style.transform = 'translateY(0px)';
  }, [modalContainer]);

  // submits form
  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    setLoading(true);

    const elements = e.target.elements;

    // form data
    const formData = new FormData();

    Array.from(elements).map((element) => {
      formData.append(element.name, element.value);
    });

    axios
      .post('/api/v1/contact', formData)
      .then((response) => {
        setLoading(false);
        setMessage('Message sent successfully!');
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
      });
  };

  return (
    <div
      ref={modalBackground}
      className="modal__background"
      onClick={closeModal}
    >
      <div
        ref={modalContainer}
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__left">
          <img src="/assets/img/shared/contact.png" />
        </div>

        <div className="modal__right">
          <div className="modal__headline">
            <h2>Get in touch with us</h2>
            <a href="mailto:contact@cosdensolutions.io">
              <small>
                <i>contact@cosdensolutions.io</i>
              </small>
            </a>
          </div>

          <form className="modal__form" onSubmit={handleSubmit}>
            <TextInput name="email" label="What is your email?" />
            <TextArea name="message" label="What is your message?" />
            <Button text={loading ? 'Sending...' : 'Submit'} />
            {error && <span className="error">{error}</span>}
            {message && <span className="message">{message}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
