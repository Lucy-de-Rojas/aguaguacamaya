import {useState, useEffect} from 'react';
import styles from '../src/styles/addToSalesCorner.module.css';


export default function AddToSalesCorner({id}) {

    const [dataById, setDataById] = useState({});







// hiding component:
    function hideComponent() {
        let itemToSalesCorner = document.querySelector('#addItemToSalesCorner');

        itemToSalesCorner.style.transform = 'translateX(150%)';
        itemToSalesCorner.style.top = '400px';
        itemToSalesCorner.style.bottom = '200px';
        itemToSalesCorner.style.left = '200px';
        itemToSalesCorner.style.right = '200px';
    }







    // getting dataById:
    useEffect(()=>{

        async function getDataById() {
            let response = await fetch(`/api/fetch-by-id/${id}`);
            let data = await response.json();
            console.log('data in front by ID:>>>> ', data[0])
            setDataById(data[0]);
        }

        getDataById();
    }, [id]);







    // sending data to /api:
    async function addToSalesCornerFunc(event) {
        event.preventDefault();


        let price = document.querySelector('#priceSalesCorner').value;
        let quantity = document.querySelector('#quantitySalesCorner').value;


        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');


        let data = {
            date: date,
            price: price,
            quantity: quantity,
            id: dataById.id,
            name: dataById.name,
            volume: dataById.volume,
            note:dataById.note,
            sparkling: dataById.sparkling,
            quantityStockUpdated: dataById.quantity - quantity,
        };

        console.log('data to go to /api:>>>> ', data);


// sending data to the back:

        // send data to /api/add-to-stock:
        let response = await fetch('/api/add-to-sales-corner', {
            method: 'POST',
            mode:'cors',
            credentials: 'same-origin',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        });

        let result = await response.json();






    }













    return (<div className={styles.addItemToSalesCorner} id="addItemToSalesCorner">



        <h1>Add to Sales Corner {id}</h1>



        <p>Name:{dataById.name}</p>
        {dataById.price && <p>Price: {(dataById.price).toFixed(2)}</p>}
        <p>Quantity: {dataById.quantity}</p>
        <p>Volume: {dataById.volume}</p>
        <p>Note: {dataById.note}</p>

        {dataById.sparkling ? <p>Sparkling</p> : <p>Still</p>}



        <form onSubmit={addToSalesCornerFunc}>


            {/* QUANTITY: */}
            <span>Max quantity: {dataById.quantity} </span>
            <input
                    type="number"
                    placeholder="quantity"
                    max={dataById.quantity}
                    id="quantitySalesCorner"
                    required

                    />


<br />


            {/* PRICE: */}
            {dataById.price && <span>Max price: {(dataById.price).toFixed(2)} </span>}
            <input
                    type="number"
                    step='0.01'
                    placeholder="sales price"
                    max={dataById.price}
                    id="priceSalesCorner"
                    required

                    />


<br />


                   <input
                        type='submit'
                        value='Add To Sales Corner'
                   />






        </form>






{/* cancelling: */}
<form onSubmit={hideComponent}>
<input type='submit' value="Cancel" />
</form>


        </div>)
};
