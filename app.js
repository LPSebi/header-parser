import express from 'express'

const app = express()

app.get('/api/whoami', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent'],
    })
})

app.listen(3000, () => {
    console.log('Running!" Port 3000')
})
