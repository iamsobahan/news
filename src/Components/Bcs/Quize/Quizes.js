import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Quizes = (props) => {
  const { id, question, option1, option2, option3, option4, name } = props.item;

  const { changeHandler } = props;

  return (
    <>
      <h3 className="pt-4">
        {id}. {question}
      </h3>
      <Form className="form">
        <label className="custom-radio-btn">
          <input
            type="radio"
            value={`${option1.slice(1, 2)}`}
            name={name}
            onChange={(e) => changeHandler(e)}
          />
          <span className="checkmark"></span>
          <p>{option1}</p>
        </label>

        <label className="custom-radio-btn">
          <input
            type="radio"
            value={`${option2.slice(1, 2)}`}
            name={name}
            onChange={(e) => changeHandler(e)}
          />
          <span className="checkmark"></span>
          <p> {option2}</p>
        </label>
        <label className="custom-radio-btn">
          <input
            type="radio"
            value={`${option3.slice(1, 2)}`}
            name={name}
            onChange={(e) => changeHandler(e)}
          />
          <span className="checkmark"></span>
          <p>{option3}</p>
        </label>

        <label className="custom-radio-btn">
          <input
            type="radio"
            value={`${option4.slice(1, 2)}`}
            name={name}
            onChange={(e) => changeHandler(e)}
          />
          <span className="checkmark"></span>
          <p>{option4}</p>
        </label>
      </Form>
    </>
  );
};

export default Quizes;
