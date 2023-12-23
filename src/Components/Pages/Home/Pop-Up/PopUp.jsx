import React, { useState, useEffect } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import style from './PopUp.module.css';

const PopUp = ({ onClose }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const lastEmailEntryTime = localStorage.getItem('lastEmailEntryTime');

    if (!lastEmailEntryTime || isTwoDaysPassed(lastEmailEntryTime)) {
      setShowPopUp(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('lastEmailEntryTime', new Date().getTime());

    // Close the pop-up
    onClose();

    // Remove lastEmailEntryTime from local storage after two days
    setTimeout(() => {
      localStorage.removeItem('lastEmailEntryTime');
    }, 2 * 24 * 60 * 60 * 1000); // Two days in milliseconds
  };

  const isTwoDaysPassed = (lastTime) => {
    const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - parseInt(lastTime);
    return timeDifference >= twoDaysInMilliseconds;
  };

  return (
    <>
      {showPopUp && (
        <div className={style.popup}>
          <CloseButton aria-label="Hide" className={style.close} onClick={onClose} />
          <div className={style.popupContent}>
            <div className={style.popupForm}>
              <img src="assets/images/promo/ad-2.webp" className="img-fluid" alt="404" />
            </div>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className={style.popupForm}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    className={style.popupInput}
                  />
                </Form.Group>
                <div>
                  <Button type="submit" className={style.btn} data-message="Your custom message here">
                    Submit
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
