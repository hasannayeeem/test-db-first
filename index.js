const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Look Mama! I can code Node Now!!!')
});
const users = [
    {id: 1, name: 'hasan', email: 'khay shudhu khali', phone: '017651472170'},
    {id: 2, name: 'hasan', email: 'hn@gmail.com', phone: '017651472170'},
    {id: 3, name: 'kopal', email: 'kopal shudhu khali', phone: '017651472170'},
    {id: 4, name: 'raju', email: 'raju', phone: '017651472170'},
    {id: 5, name: 'jumman', email: 'jummay shudhu khali', phone: '017651472170'},
]
app.get('/users', (req, res) =>{
    // filter by queiry / search parameter 
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        console.log(matched);
    }
    else{
        res.send(users);
    }
    
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges', 'banana'])
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send(['sour sour fazle'])
});

app.listen(port, () =>{
    console.log('Listening to port', port);
});