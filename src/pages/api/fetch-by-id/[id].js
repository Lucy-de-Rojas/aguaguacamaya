import mysql from 'mysql2/promise';
import { mysqlConnect } from 'utils/connectDB';




export default async function handler(req, res) {


    let id = req.query.id;


    console.log('selected id: >>>>>', id)











    // connect to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);

    if(connection) {console.log('successfully connected to DB!!!')}
    const values = [];



    // 🟥✔
    const query = `select * from stock where id=${id}`;

if(id) {

    const [results] = await connection.execute(query, values);
    console.log('results by ID: >>>>>', results)
    res.json(results);
}



















}






