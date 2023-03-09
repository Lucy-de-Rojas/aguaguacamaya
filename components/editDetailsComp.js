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
        alert('updating stock');


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
            id="name"

        />



        {/* volume: */}
        <p>Volume[ml]: {dataById.volume}</p>
        <input
            type='number'
            placeholder="new volume"
            step={1}
            id="volume"
        />


        {/* sparkling: */}
        {dataById.sparkling && <p>Current: Sparkling</p>}
        {!dataById.sparkling && <p>Current: Still</p>}

        <p>Change to sparkling:
            <input
                type='radio'
                name="sparkling"
                value={1}
                id="sparkling"
                />
                </p>


            <p>Change to still:
            <input
                type='radio'
                name='sparkling'
                value={0}
                id="still"
                />
                </p>








        {/*quantity:  */}
        <p>Quantity: {dataById.quantity}</p>
        <input
            type='number'
            min={0}
            placeholder="new quantity"
            id="quantity"
        />





        {/* price: */}
        {dataById.price && <p>Price: { (dataById.price).toFixed(2)  }
        <input
            type='number'
            step={0.01}
            min={0}
            placeholder="new price"
            id="price"
            />



        </p>}



            {/* SUBMIT: */}
            <input
                type='submit'
                value="Save Changes"
            />



    </form>
        <button onClick={hideForm}>Cancel</button>
    </div>);






};
