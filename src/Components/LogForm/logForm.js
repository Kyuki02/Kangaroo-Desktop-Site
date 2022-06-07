import React from "react";
import "./logForm.css";
import { Button } from "../Button/button";

export const LogForm = () => {
  return (
    <>
      <section className="div__log">
        <div className="div__log__title">
          <img href="https://upload.wikimedia.org/wikipedia/it/0/09/Twitter_bird_logo.png?20160903181542"></img>
          <h1>Clear Kangaroo</h1>
        </div>
        <div className="div__log__form">
          
          <form className="form">
            <div className="form__input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form__input">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="form__input">
              <label htmlFor="Forgot">Forgot Password?</label>
            </div>
            <div className="form__input">
              <Button disabled={true} />
            </div>
          </form>

          <div className="div__footer">
            <p className="div__footer__text">
              Terms of services and privacy policy
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
