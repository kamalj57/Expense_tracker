import React from "react";
import styled from "styled-components";
import { useGloabalContext } from "../../context/GlobalContext";

const History = () => {
  const { transactionHistory } = useGloabalContext();

  const [...history] = transactionHistory();
  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense" ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
};

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 2px solid #ffffff;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
