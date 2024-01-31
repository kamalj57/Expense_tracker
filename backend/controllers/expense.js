const ExpenseSchema = require("../models/expensemodule");

const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be positive!" });
    }
    await expense.save()
    res.status(200).json({message:"Expense Added"})
  } catch (err) {
    res.status(500).json({message:"Server-error!"})
  }
};

const getExpense=async(req,res)=>{
    try {
        const expenses=await ExpenseSchema.find().sort({createdAT:-1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message:"Server error!"})
    }
}

const deleteExpense=async(req,res)=>{
    const {id}=req.params;
    try {
        ExpenseSchema.findByIdAndDelete(id)
       .then((income)=>{
        res.status(200).json({message:"Expense Deleted"})
       })
       .catch((err)=>{
        res.status(500).json({message:"Server error!"})
       })  
    } catch (error) {
        res.status(500).json({message:"Server error!"})
    }
}

module.exports = {addExpense,getExpense,deleteExpense};
