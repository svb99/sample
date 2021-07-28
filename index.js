const express = require('express')
const app = express()
app.use(express.json())
const courses = [
    { id: 1, name: "cc1" },
    { id: 2, name: "cc2" },
    { id: 3, name: "cc3" },
    { id: 4, name: "cc4" }
]
app.get('/', (req, res) => {
    res.send("hello ghfhghkjn")
})

app.get('/array', (req, res) => {
    res.send(courses)
})

app.get('/array/:par', (req, res) => {
    console.log(req.params.par)
    let mycourse = courses.find(f => f.id == parseInt(req.params.par))
    if (mycourse)
        res.send(mycourse)
    else
        res.status(404).send("not found")
})

app.post('/array', (req, res) => {
    console.log(req)
    if (req.body.name && req.body.name.length > 3) {
        let t = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(t)
        res.send(t)
    }
    else {
        res.status(400).send("name is required and length should be 3")
    }
})

app.put('/array/:par', (req, res) => {
    let mycourse = courses.find(f => f.id == parseInt(req.params.par))
    if (mycourse) {
        if (req.body.name && req.body.name.length > 3) {
            mycourse.name = req.body.name
            res.send(mycourse)
        } else {
            res.status(400).send("name is required and length should be 3")
        }
    } else {
        res.status(404).send("not found")
    }
})
app.delete('/array/:par', (req, res) => {
    let mycourse = courses.find(f => f.id == parseInt(req.params.par))
    if (mycourse) {
        let t = courses.indexOf(mycourse)
        courses.splice(t, 1)
        res.send(mycourse)
    }
    else {
        res.status(404).send("not found")
    }
})




app.listen(3000, () => console.log("server started at 3000 port"))
