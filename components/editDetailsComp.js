import {useState, useEffect} from 'react';


import styles from '../src/styles/editDetailsComp.module.css';







export default function EditDetailsComp({id}) {



    // hide the form:
    function hideForm() {
        let target = document.querySelector('#editDetailsComp');
        target.style.transform = 'translateX(150%)';
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






        <button onClick={hideForm}>Cancel</button>
    </div>);






};
