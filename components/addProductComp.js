import {useRouter} from 'next/router';


import styles from '../src/styles/addProductComp.module.css';







export default function AddProductComp() {
    const router = useRouter();


    function hideForm() {

        let form = document.querySelector('#addProductComp');
        form.style.transform = 'translateX(150%)';

    }








    // add to stock func:
    async function submitAddProduct(event) {

        // event.preventDefault();




        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log('timestamp:>>>', date)

        // name:
        let name = document.querySelector('#name').value;

        // volume:
        let volume = document.querySelector('#volume').value;

        // price:
        let price = document.querySelector('#price').value;

        // quantity:
        let quantity = document.querySelector('#quantity').value

        // note:
        let note = document.querySelector('#note').value;



        // sparkling:
        let sparkling = document.querySelector('input[name="sparkling"]:checked').value;



        // data:
        let data = {
            name: name,
            volume: volume,
            price: price,
            quantity: quantity,
            note:note,
            sparkling:sparkling,
            date:date,
        }


        console.log('data from ADD PRODUCT:>>>>>', data)



        // send data to /api/add-to-stock:
    let response = await fetch('/api/add-to-stock', {
        method: 'POST',
        mode:'cors',
        credentials: 'same-origin',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    });

    let result = await response.json();





    console.log('data from the add product form:>>>> ', data)
    hideForm();
}




    return (<div className={styles.addProductComp} id="addProductComp">
        <h1>Add Product</h1>
        <form onSubmit={submitAddProduct}>


            {/* name   ✔ */}
            <p>Name:</p>
            <input
                    type='text'
                    maxLength={50}
                    placeholder='product name'
                    required
                    id="name"/>





            {/* volume  ✔ */}
            <p>Volume</p>
            <input
                    type='number'
                    max={10000}
                    min={125}
                    placeholder='volume'
                    id="volume"
                    required
            />





            {/* price */}
            <p>Price:</p>
            <input
                type='number'
                required
                step={0.01}
                placeholder='price'
                id='price'
                min={0}
            />








            {/* quantity */}
            <p>Quantity:</p>
            <input
                type='number'
                required
                min={0}
                max={15000}
                id="quantity"
            />






            {/* note */}
            <p>Note:</p>
            <input
                    type='text'
                    required
                    minLength={3}
                    id='note'

                    />






            {/* sparkling */}
            <p>Sparkling</p>
            <input
                type='radio'
                id="sparkling"
                name="sparkling"
                value={1}
                required
                />

            <p>Still</p>
            <input
                type='radio'
                id="still"
                name='sparkling'
                value={0}
                required
            />





            <br />
            <input type="submit"/>



        </form>


        <button onClick={hideForm}>Cancel Adding Product</button>

    </div>);

};
