const express = require('express');
const { addTransactions, getAllTransactions, editTransaction, deleteTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.post('/add-transaction', addTransactions)

router.post('/get-transaction', getAllTransactions)

router.post('/edit-transaction', editTransaction)

router.post('/delete-transaction', deleteTransaction)

module.exports = router;