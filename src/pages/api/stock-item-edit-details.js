import mysql from 'mysql2/promise';
import { mysqlConnect } from 'utils/connectDB';







export default async function handler(req, res) {


    let data = req.body;

    console.log('data arriving at the back from EDIT:>>>>> ', data)







    // connect to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);

    if(connection) {console.log('successfully connected to DB!!!')}
    const values = [];



    // 🟥
    const query = `UPDATE stock SET volume='${data.volume}', name = '${data.name}', sparkling = '${data.sparkling}', quantity = '${data.quantity}', price = '${data.price}', date = '${data.date}', note = '${data.note}'  WHERE id = ${data.id}`;


    const [results] = await connection.execute(query, values);


    // console.log('DB fetch outcome >>>>>>',results)



    // res.json(results);










}






