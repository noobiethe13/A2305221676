const express = require('express');
const axios = require('axios');
const app = express();
const port = 9876;

const WINDOW_SIZE = 10;
let numberWindow = [];

const TEST_SERVER_BASE_URL = 'http://20.244.56.144/test';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQ3MTAxLCJpYXQiOjE3MjIyNDY4MDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY3ZWMxZmRkLTU0Y2UtNDIxMy1iNmQ2LWY1Y2I0NGUzODhkNSIsInN1YiI6ImRlYmF5YW5kYXMxMjExQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFNSVRZIFVOSVZFUlNJVFkgTk9JREEiLCJjbGllbnRJRCI6ImY3ZWMxZmRkLTU0Y2UtNDIxMy1iNmQ2LWY1Y2I0NGUzODhkNSIsImNsaWVudFNlY3JldCI6InBFbFZ3d2l2dVp2TUl5SWgiLCJvd25lck5hbWUiOiJEZWJheWFuIERhcyIsIm93bmVyRW1haWwiOiJkZWJheWFuZGFzMTIxMUBnbWFpbC5jb20iLCJyb2xsTm8iOiJBMjMwNTIyMTY3NiJ9.hMJq3NOaPbtqCvd_baBmdghqeGXklRUhojgK51usBgo';

app.get('/numbers/:numberType', async (req, res) => {
    const { numberType } = req.params;
    
    if (!['p', 'f', 'e', 'r'].includes(numberType)) {
        return res.status(400).json({ error: 'Invalid number type' });
    }

    try {
        const startTime = Date.now();
        const response = await axios.get(`${TEST_SERVER_BASE_URL}/${getEndpoint(numberType)}`, {
            timeout: 500,
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`
            }
        });
        
        if (Date.now() - startTime > 500) {
            throw new Error('Request timeout');
        }

        const newNumbers = response.data.numbers;
        updateNumberWindow(newNumbers);

        const result = {
            windowPrevState: [...numberWindow].slice(0, -newNumbers.length),
            windowCurrState: [...numberWindow],
            numbers: newNumbers,
            avg: calculateAverage(numberWindow)
        };

        res.json(result);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Error fetching numbers', details: error.message });
    }
});

function getEndpoint(numberType) {
    switch (numberType) {
        case 'p': return 'primes';
        case 'f': return 'fibo';
        case 'e': return 'even';
        case 'r': return 'rand';
    }
}

function updateNumberWindow(newNumbers) {
    const uniqueNewNumbers = [...new Set(newNumbers)];
    numberWindow = [...numberWindow, ...uniqueNewNumbers];
    if (numberWindow.length > WINDOW_SIZE) {
        numberWindow = numberWindow.slice(-WINDOW_SIZE);
    }
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return parseFloat((sum / numbers.length).toFixed(2));
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});