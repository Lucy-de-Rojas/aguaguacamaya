import { addProduct } from "utils/addProduct";

import AddProductComp from "./addProductComp";
import EditDetailsComp from "./editDetailsComp";
import AddToSalesCorner from "./add-to-sales-corner";






export default function Layout({children, header, id, idSalesCorner}) {






    return (<div>
        <h1>{header}</h1>
        <button onClick={addProduct}>Add Product</button>
        <button>Sales Corner</button>
        <button>Archive</button>

{children}


<AddProductComp />

        <EditDetailsComp id={id}/>

        <AddToSalesCorner id={idSalesCorner} />

    </div>);
};
