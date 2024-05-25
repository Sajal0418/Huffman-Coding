const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { compress } = require('../services/huffman');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { compressedText, huffmanCodes } = compress(fileContent);

    res.json({ compressedText, huffmanCodes });
});

module.exports = router;
