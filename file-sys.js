const fetch = require("node-fetch");
const url = 'http://jsonplaceholder.typicode.com/posts'

const fs = require('fs')
const fetchData = async() => {
    try{
        const response = await fetch(url);
        const data = await response.json();
       // console.log(data)
        fs.writeFile('result/file.json', JSON.stringify(data, null, 2), (err) => {
            if(err) throw err
        })


    } catch(err){
        throw err
    }
}
console.log("------async and await-----");
fetchData();