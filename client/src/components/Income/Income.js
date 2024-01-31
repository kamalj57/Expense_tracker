import React, { useEffect } from "react";
import { useGloabalContext } from "../../context/GlobalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";

const Income = () => {
  const { addIncome, getIncome, incomes ,deleteIncome,totalIncome} = useGloabalContext();

  useEffect(() => {
    getIncome();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
         <h2 className="total-income">Total Income : <span>${totalIncome()}</span></h2>
        <div className="income-content">
          <div className="form-containerr">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description,type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
   
    border: 2px solid #ffffff;
    background: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Income;
