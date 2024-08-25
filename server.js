const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


const isNumber = (value) => {
  return !isNaN(value);
};


const getHighestLowercaseAlphabet = (data) => {
  const lowercaseAlphabets = data.filter((item) => /^[a-z]$/.test(item));
  if (lowercaseAlphabets.length > 0) {
    return [lowercaseAlphabets.sort().pop()];
  }
  return [];
};


app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid data format',
    });
  }

  const numbers = data.filter(isNumber);
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const highestLowercaseAlphabet = getHighestLowercaseAlphabet(data);

  res.json({
    is_success: true,
    user_id: 'yashwani',
    email: 'yash.wani2021@vitbhopal.ac.in',
    roll_number: '21BCE11687',
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});


app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
