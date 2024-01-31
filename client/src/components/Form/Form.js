import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGloabalContext } from "../../context/GlobalContext";
import { plus,calendar } from "../../utils/Icon";
import Button from '../Button/Button'

const Form = () => {
  const { addIncome, getIncome, error, setError } = useGloabalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          placeholder="Salary Amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <div>
          {calendar} <DatePicker
          id="date"
          placeholderText="Select  a date"
          selected={date}
          dateFormat="dd/MM/yyyy"
           onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}   
          />
        </div>
      </div>

      <div classNmae="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Options
          </option>
          <option value="Salary">Salary</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Investment">Investment</option>
          <option value="Stock">Stock</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="youtube">Youtube</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <textarea
        name="description"
        id="description"
        value={description}
        placeholder="Add reference"
        cols="30"
        rows="4"
        onChange={handleInput("description")}
      />
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".5rem 1rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    background: #ffff;
    box-shadow: 3px 4px 8px 0 rgba(0, 0, 0, 0.2)
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 95%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

export default Form;
