import {useState, useEffect} from 'react';


import Layout from 'components/layout';
import styles from '../styles/stock.module.css';
import AddProductComp from 'components/addProductComp';





export default function Stock() {


    const [stock, setStock] = useState([]);
    const [editDetailsID, setEditDetailsID] = useState();
    const [addItemToSalesCornerID, setAddItemToSalesCornerID] = useState();




// edit details:
    function editDetailsFunc(event) {


    // show the form:
    let target = document.querySelector('#editDetailsComp');
    target.style.transform = 'translateX(0%)';

// set the id:
    setEditDetailsID(event.target.id);



    }







// add item to sales corner:
function addItemToSalesCorner(event) {

    // get the id:
    let target = event.target.id;
    setAddItemToSalesCornerID(target);


    // slide out the component:
    let itemToSalesCorner = document.querySelector('#addItemToSalesCorner');
    itemToSalesCorner.style.transform = 'translateX(0%)';
    itemToSalesCorner.style.top = '40px';
    itemToSalesCorner.style.bottom = '40px';
    itemToSalesCorner.style.left = '20px';
    itemToSalesCorner.style.right = '20px';




}










    useEffect(()=>{

        async function getStock() {
            console.log('inside getStock func')

            let response = await fetch('/api/stock-display');
            let data = await response.json();
            console.log('data for the stock:>>>> ', data);

            setStock(data);
        }





        getStock();
    },[]);







    return (<Layout
                        header='Stock'
                        id={editDetailsID}
                        idSalesCorner={addItemToSalesCornerID}
                        >








<hr />


        {/* LISTING: */}
        {stock.map((item)=>{

            return (<div key={item.id}>
                id: {item.id},
                Name: {item.name},
                Quantity: {item.quantity},
                Volume: {item.volume},
                Note: {item.note},
                air: { item.sparkling ?<span>Sparkling</span> :<span>Still</span>},
                Price: {(item.price).toFixed(2)}

                <button id={item.id} onClick={editDetailsFunc}>Edit Details</button>


                <button id={item.id} onClick={addItemToSalesCorner}>Add to Sales Corner</button>

            </div>);

})}    {/* END OF LISTING */}


    </Layout>);

};






