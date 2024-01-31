import React from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/DateFormat";
import Button from '../Button/Button'
import {
    bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icon";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) => {
  const categoryIcon = () => {
    switch (category) {
      case "Salary":
        return money;
      case "Freelancing":
        return freelance;
      case "Investment":
        return stocks;
      case "Stock":
        return users;
      case "bitcoin":
        return bitcoin;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  }
  const expenseCatIcon = () => {
    switch (category) {
        case 'education':
            return book;
        case 'groceries':
            return food;
        case 'health':
            return medical;
        case 'subscriptions':
            return tv;
        case 'takeaways':
            return takeaway;
        case 'clothing':
            return clothing;
        case 'travelling':
            return freelance;
        case 'other':
            return circle;
        default:
            return ''
  }
  }

  return (
    <IncomeItemStyled>
      <div className="icon">
        {type==='expense' ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>{dollar}{amount}</p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-color">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={()=>deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
};

const IncomeItemStyled = styled.div`

  border: 2px solid #ffffff;
  background: #ffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 75px;
    border-radius: 10px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2rem;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.7rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem
