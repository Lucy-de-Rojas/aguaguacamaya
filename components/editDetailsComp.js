import {useState, useEffect} from 'react';


import styles from '../src/styles/editDetailsComp.module.css';







export default function EditDetailsComp({id}) {


    const [dataById, setDataById] = useState({});



    // hide the form:
    function hideForm() {
        let target = document.querySelector('#editDetailsComp');
        target.style.transform = 'translateX(150%)';
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





    // updating the stock on submit:
    async function updateStock(event) {
        event.preventDefault();
        console.clear();


        // name:
        let name = document.querySelector('#nameEdit').value ? document.querySelector('#nameEdit').value : dataById.name;



        // volume:
        let volume = document.querySelector('#volumeEdit').value ? document.querySelector('#volumeEdit').value : dataById.volume;





        // sparkling:
        let sparkling = document.querySelector('input[name="sparklingEdit"]:checked') ? document.querySelector('input[name="sparklingEdit"]:checked').value : dataById.sparkling;



        // quantity:
        let quantity = document.querySelector('#quantityEdit').value ? document.querySelector('#quantityEdit').value : dataById.quantity;




        // price:
        let price = document.querySelector('#priceEdit').value ? document.querySelector('#priceEdit').value : dataById.price;




        // date:
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');





        // note:
        let note = document.querySelector('#noteEdit').value ? document.querySelector('#noteEdit').value : dataById.note;









        let data = {
            name: name,
            volume: volume,
            sparkling: sparkling,
            quantity: quantity,
            price: price,
            id: id,
            date:date,
            note: note,
        };


        console.log('data from EDIT form:>>>> ', data);


        let response = await fetch('/api/stock-item-edit-details', {
            method: 'POST',
            mode:'cors',
            credentials: 'same-origin',
            headers: {
                "Content-Type":"application/json",
                        },
            body: JSON.stringify(data),
        });





        hideForm();
    }









    // fetch data based on ID:
    // set the state and display in the pre-filled form
    // create NEW value for the data to change
    // have orginal and new values next to each other with new being editable
    // UPDATE the mysql database with new values:
    // UPDATE stock
                // set columnName = "new value", columnName2 = 'new value 2'
                // WHERE id='{id}'




    return (<div className={styles.editDetailsComp} id="editDetailsComp">

        <h1>edit details of: {id}</h1>

<form onSubmit={updateStock}>

        {/* name: */}
        <p>Current name: {dataById.name}</p>
        <input
            type='text'
            placeholder="new name"
            id="nameEdit"

        />



        {/* volume: */}
        <p>Volume[ml]: {dataById.volume}</p>
        <input
            type='number'
            placeholder="new volume"
            step={1}
            id="volumeEdit"
        />


        {/* sparkling: */}
        {dataById.sparkling && <p>Current: Sparkling</p>}
        {!dataById.sparkling && <p>Current: Still</p>}

        <p>Change to sparkling:
            <input
                type='radio'
                name="sparklingEdit"
                value={1}
                id="sparklingEdit"
                />
                </p>


            <p>Change to still:
            <input
                type='radio'
                name='sparklingEdit'
                value={0}
                id="stillEdit"
                />
                </p>








        {/*quantity:  */}
        <p>Quantity: {dataById.quantity}</p>
        <input
            type='number'
            min={0}
            placeholder="new quantity"
            id="quantityEdit"
        />





        {/* price: */}
        {dataById.price && <p>Price: { (dataById.price).toFixed(2)  }
        <input
            type='number'
            step={0.01}
            min={0}
            placeholder="new price"
            id="priceEdit"
            />



        </p>}





        {/* NOTE: */}
        <p>Original note: {dataById.note}</p>
        <input
                type='text'
                placeholder='new note'
                id="noteEdit"
                maxLength={2000}

                />

<br /><br /><br />


            {/* SUBMIT: */}
            <input
                type='submit'
                value="Save Changes"
            />

<br /><br />


    </form>
        <button onClick={hideForm}>Cancel</button>
    </div>);






};
