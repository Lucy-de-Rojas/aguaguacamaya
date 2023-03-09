import fetch from "node-fetch";


// const ourIpURL = "https://ourips-lucy-de-rojas.vercel.app/api/ourips";


export async function mysqlConnect() {

    let response = await fetch(process.env.ourIp);
    let data = await response.json();

    const result = {
        host:data.ourIp,
        database: process.env.DATABASE,
        port: process.env.PORT,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,



    };

    // console.log('result of connecting to DB:>>>',result)


    return result;
}