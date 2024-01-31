import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import { useGloabalContext } from "../../context/GlobalContext";
import { dollar } from "../../utils/Icon";
import History from "../History/History";
const Dashboard = () => {
  const {
    totalExpense,
    totalIncome,
    getExpense,
    totalBalance,
    transactionHistory,
    getIncome,
    incomes,
    expenses,
  } = useGloabalContext();

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transaction</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar}
                  {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar}
                  {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar}
                  {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {incomes.length > 0
                  ? Math.min(...incomes.map((item) => item.amount))
                  : 0}
              </p>
              <p>
                {incomes.length > 0
                  ? Math.max(...incomes.map((item) => item.amount))
                  : 0}
              </p>
            </div>
            <h2 className="salary-title">
              Min<span>Expense</span>Max
            </h2>
            <div className="salary-item">
            <p>{expenses.length > 0 ? Math.min(...expenses.map((item) => item.amount)) : 0}</p>
            <p>{expenses.length > 0 ? Math.max(...expenses.map((item) => item.amount)) : 0}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
};
const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #ffff;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border: 2px solid #ffffff;
          border-radius: 10px;
          padding: 10px;
          p {
            font-size: 3rem;
            font-weight: 500;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 3rem;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        gap: 1rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: 2px solid #ffffff;
        padding: 1rem;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;
export default Dashboard;