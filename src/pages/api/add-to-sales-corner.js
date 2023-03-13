import mysql from 'mysql2/promise';
import { mysqlConnect } from 'utils/connectDB';


export default async function handler(req, res) {




    let data = req.body;
    console.log('data from the front to add to SALES CORNER:>>>> ',data)







    // connect to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);

    if(connection) {console.log('successfully connected to DB, adding to stock!!!')}
    const values = [];





// copy data to sales corner table   🟥✔

const queryAddToSalesCorner = `INSERT into sales_corner (id, name, date, quantity, volume, note, sparkling, price) VALUES ('${data.id}', '${data.name}', '${data.date}', '${data.quantitySalesCorner}', '${data.volume}', '${data.note}', '${data.sparkling}', '${data.price}')`;

const [results] = await connection.execute(queryAddToSalesCorner, values);










// update stock with new lower quantity  🟥✔
const queryUpdateStock = `UPDATE stock set quantity ='${data.stockQuantityNew}' WHERE id = '${data.id}'`;

const [resultsUpdate] = await connection.execute(queryUpdateStock, values);




}






