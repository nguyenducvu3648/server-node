// routes/shoeRoutes.js
const express = require('express');
const router = express.Router();
const shoeController = require('../controllers/shoeController');

// Thêm mới
router.post('/', shoeController.addShoe);

// Lấy danh sách giày
router.get('/', shoeController.getShoes);

// Lấy giày theo model
router.get('/:model', shoeController.getShoeByModel); // Route mới

// Cập nhật giày theo model
router.put('/:model', shoeController.updateShoe);

// Xóa giày theo model
router.delete('/:model', shoeController.deleteShoe);

module.exports = router;
