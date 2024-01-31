const IncomeSchema = require("../models/incomemodule");

const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = IncomeSchema({
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
    await income.save()
    res.status(200).json({message:"Income Added"})
  } catch (err) {
    res.status(500).json({message:"Server-error!"})
  }
};

const getIncome=async(req,res)=>{
    try {
        const incomes=await IncomeSchema.find().sort({createdAT:-1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:"Server error!"})
    }
}

const deleteIncome=async(req,res)=>{
    const {id}=req.params;
    try {
       IncomeSchema.findByIdAndDelete(id)
       .then((income)=>{
        res.status(200).json({message:"Income Deleted"})
       })
       .catch((err)=>{
        res.status(500).json({message:"Server error!"})
       })  
    } catch (error) {
        res.status(500).json({message:"Server error!"})
    }
}

module.exports = {addIncome,getIncome,deleteIncome};
