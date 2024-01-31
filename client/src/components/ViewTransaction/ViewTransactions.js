import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerLayout } from "../../styles/Layouts";
import { useGloabalContext } from "../../context/GlobalContext";
import ReactPaginate from 'react-paginate';
import { dateFormat } from "../../utils/DateFormat";
import {calendar,comment} from "../../utils/Icon";
const ViewTransactions = () => {
  const { transactionHistories } = useGloabalContext();
  const [currentPage, setCurrentPage] = useState(0); // Start from 0 for react-paginate
  const itemsPerPage = 8;

  const history = transactionHistories();
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = history.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(history.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <ViewTransactionStyle>
      <InnerLayout>
        <h2>Transactions</h2>
        {currentItems.map((item) => {
          const { _id, title, amount, type ,date,description} = item;
          return (
            <div key={_id} className="history-item">
              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                {title}
              </p>
              <p>
              {calendar} {dateFormat(date)}
            </p>
            {/* <p>
              {comment}
              {description}
            </p> */}
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
        <PaginationContainer>
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </PaginationContainer>
      </InnerLayout>
    </ViewTransactionStyle>
  );
};

const ViewTransactionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    
    border: 2px solid #ffffff;
    background: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 1rem;
    margin-top:1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .pagination {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    li {
      display: inline-block;
      padding: 0.5rem;
      border-radius: 4px;
    }

    a {
      text-decoration: none;
      color: #000;
    }

    .active {
      background-color: #f2f2f2;
    }
  }
`;

export default ViewTransactions;
