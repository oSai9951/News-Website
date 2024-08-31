import React, { useContext } from 'react';
import FormClasses from "./Form.module.css";
import { NewsDataContext } from '../../Starter/StarterFile';

const Form = () => {
  const { handleInput, handleFormSubmit, signUp, user, formRef, resetForm } = useContext(NewsDataContext);

  return (
    <div className={FormClasses.container}>
      <h2 className={FormClasses.heading}>Get more updated news by connecting with us!</h2>

      <form onSubmit={handleFormSubmit} className={FormClasses.form} ref={formRef}>
        <div>
          <label className={FormClasses.label}>First name: </label>
          <br />
          <input
            type="text"
            placeholder="John"
            name="firstName"
            value={user.firstName}
            onChange={handleInput}
            className={FormClasses.input}
            required
          />
        </div>

        <div>
          <label className={FormClasses.label}>Last name: </label>
          <br />
          <input
            type="text"
            placeholder="Mayer"
            name="lastName"
            value={user.lastName}
            onChange={handleInput}
            className={FormClasses.input}
            required
          />
        </div>

        <div>
          <label className={FormClasses.label}>I am a: </label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleInput}
            className={FormClasses.select}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className={FormClasses.label}>Email Address: </label>
          <br />
          <input
            type="email"
            placeholder="abc@gmail.com"
            name="email"
            value={user.email}
            onChange={handleInput}
            className={FormClasses.input}
            required
          />
        </div>

        <div>
          <label className={FormClasses.label}>Password: </label>
          <br />
          <input
            type="password"
            placeholder="******"
            name="password"
            value={user.password}
            onChange={handleInput}
            className={FormClasses.input}
            required
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="tnc"
            checked={user.tnc}
            onChange={handleInput}
            required
          />
          <span>I accept all the terms and conditions.</span>
        </div>
        <br />

        <div className={FormClasses.twoButton}>
          <button type="submit" className={FormClasses.submit}>Submit</button>
          <button  className={FormClasses.submit} onClick={resetForm}>Log Out</button>
        </div>

        {signUp && <p className={FormClasses.signup}>Sign up successful!</p>}
      </form>
    </div>
  );
};

export default Form;
