const express =require('express');
const router=express()
const {addIncome,getIncome,deleteIncome} =require('../controllers/transactions')
const {addExpense,getExpense,deleteExpense}=require('../controllers/expense')

router.post('/api/v1/addincome',addIncome)
router.get('/api/v1/getincomes',getIncome)
router.delete('/api/v1/deleteincome/:id',deleteIncome)
router.post('/api/v1/addexpense',addExpense)
router.get('/api/v1/getexpenses',getExpense)
router.delete('/api/v1/deleteexpense/:id',deleteExpense)





module.exports=router;