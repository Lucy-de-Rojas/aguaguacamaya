import {useState, useEffect} from 'react';


import Layout from 'components/layout';
// import { editDetails } from 'utils/editDetails';







export default function Stock() {


    const [stock, setStock] = useState([]);
    const [editDetailsID, setEditDetailsID] = useState();




// edit details:
    function editDetailsFunc(event) {


    // show the form:
    let target = document.querySelector('#editDetailsComp');
    target.style.transform = 'translateX(0%)';

// set the id:
    setEditDetailsID(event.target.id);



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







    return (<Layout header='Stock' id={editDetailsID}>


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
                <button id={item.id}>Add to Sales Corner</button>

            </div>);

})}    {/* END OF LISTING */}


    </Layout>);

};






