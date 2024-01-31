import React, { useContext, useState } from "react"
import axios from 'axios'
const GlobalContext= React.createContext()

const BASE_URL=process.env.REACT_APP_BACKEND_URL;

export const GlobalProvider=({children})=>{

    const [incomes,setIncomes]=useState([])
    const [expenses,setExpenses]=useState([])
    const [error,setError]=useState(null)

    ///calculate income
    const addIncome =async(income)=>{
          await axios.post(`${BASE_URL}/api/v1/addincome`,income)
           .then((res)=>{
              console.log(res)
           })
            .catch((err)=>{
                setError(err.response.data.message)
            })
             getIncome()
             
    }

    const getIncome =async(income)=>{
          await axios.get(`${BASE_URL}/api/v1/getincomes`)
          .then((response)=> setIncomes(response.data))
          .catch((err)=>{
                setError(err.response.data.message)
             })
           
    }

    const deleteIncome=async(id)=>{
        const res= await axios.delete(`${BASE_URL}/api/v1/deleteincome/${id}`)
        .then((res)=>console.log(res))
         getIncome()
    }


    const totalIncome=()=>{
        let totalIncome=0;
        incomes.forEach((income)=>{
            totalIncome=totalIncome+income.amount
        })
        return totalIncome;
    }

   ///calculate expense
   const addExpense =async(income)=>{
    const response=await axios.post(`${BASE_URL}/api/v1/addexpense`,income)
    .then((res)=>console.log(res))
       .catch((err)=>{
          setError(err.response.data.message)
       })
       getExpense()
}

const getExpense =async(income)=>{
    await axios.get(`${BASE_URL}/api/v1/getexpenses`)
    .then((response)=> setExpenses(response.data))
    .catch((err)=>{
          setError(err.response.data.message)
       })
      
}

const deleteExpense=async(id)=>{
  const res= await axios.delete(`${BASE_URL}/api/v1/deleteexpense/${id}`)
  .then((res)=>console.log(res))
  getExpense()
}


const totalExpense=()=>{
  let totalIncome=0;
  expenses.forEach((income)=>{
      totalIncome=totalIncome+income.amount
  })
  return totalIncome;
}
const totalBalance=()=>{
    return totalIncome()-totalExpense()
}

const transactionHistory=()=>{
    const history=[...incomes,...expenses]
    history.sort((a,b)=>{
        return new Date(b.createdAt)-new Date(a.createdAt)
    })
    return history.slice(0,3);
}


const transactionHistories=()=>{
    const history=[...incomes,...expenses]
    history.sort((a,b)=>{
        return new Date(b.createdAt)-new Date(a.createdAt)
    })
    return history;
}
    return (
        <GlobalContext.Provider value={{addIncome,getIncome,incomes,deleteIncome,totalIncome,
           expenses, addExpense,getExpense,deleteExpense,totalExpense,totalBalance,transactionHistory,error,setError,transactionHistories
        }} >
        {children}
        </GlobalContext.Provider>
    )
}



export const useGloabalContext=()=>{
    return useContext(GlobalContext)
}