import Link from "next/link";


import { addProduct } from "utils/addProduct";

import styles from '../src/styles/layout.module.css';

import AddProductComp from "./addProductComp";
import EditDetailsComp from "./editDetailsComp";
import AddToSalesCorner from "./add-to-sales-corner";






export default function Layout({children, header, id, idSalesCorner}) {






    return (<div className={styles.wrapper}>

<AddProductComp />




        <h1>{header}</h1>
        <button onClick={addProduct}>Add Product</button>
        <button>
            <Link href='/sales-corner'>Sales Corner</Link>
            </button>
        <button>Archive</button>

{children}


{/* <EditDetailsComp id={id}/> */}
{/* <AddToSalesCorner id={idSalesCorner} /> */}


    </div>);
};
