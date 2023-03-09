import mysql from 'mysql2/promise';
import { mysqlConnect } from 'utils/connectDB';




export default async function handler(req, res) {




    let data = req.body;
    console.log('data from the front to add to stock:>>>> ',data)




    // connect to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);

    if(connection) {console.log('successfully connected to DB!!!')}
    const values = [];



    // 🟥
    const query = `insert into stock (name, date, quantity, volume, note, sparkling,  price) values ("${data.name}", "${data.date}","${data.quantity}","${data.volume}","${data.note}", "${data.sparkling}", "${data.price}" )`;


    const [results] = await connection.execute(query, values);


    // console.log('DB fetch outcome >>>>>>',results)



    // res.json(results);










}






