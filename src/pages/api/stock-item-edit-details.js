import mysql from 'mysql2/promise';
import { mysqlConnect } from 'utils/connectDB';




export default async function handler(req, res) {


    // connect to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);

    if(connection) {console.log('successfully connected to DB!!!')}
    const values = [];



    // 🟥
    const query = 'UPDATE';
    const [results] = await connection.execute(query, values);


    // console.log('DB fetch outcome >>>>>>',results)



    res.json(results);










}






