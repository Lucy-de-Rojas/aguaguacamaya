import {useState, useEffect} from 'react';
import Link from 'next/link';



export default function SalesCorner() {

    const [salesCorner, setSalesCorner] = useState([]);




// getting data from /sales-corner:
useEffect(()=>{

async function getSalesCornerData() {
    let response = await fetch('/api/sales-corner');
    let data = await response.json();
    console.log('data from SALES Corner:>>>> ',data);

    setSalesCorner(data);


}


getSalesCornerData();


}, []);








return <div>
    <h1>Sales Corner</h1>

    <button><Link href='/stock'>Stock</Link></button>



    {salesCorner.map((item)=>{
        return (<div key={item.id}>
            <p>Name: {item.name}</p>






        </div>);   })}         {/* end of displaying sales corner */}




</div>



};
