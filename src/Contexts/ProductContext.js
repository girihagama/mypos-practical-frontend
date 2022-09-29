import axios from "axios";
import qs from 'qs';
import { useState, createContext } from "react";
import endpoints from "../endpoints";

export const ProductContext = createContext();

function ProductContextProvider (props){
    const [initLoad, setInitLoad] = useState(false);
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [qty, setQty] = useState();
    const [productList, setProductList] = useState([]);

    function loadProducts(token){
        axios({
            method: 'get',
            url: endpoints.getProducts,
            headers : {
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            if(value.status == 200 && value.data){
                setProductList(value.data);
                setInitLoad(true);
            }
        });
    }

    function addProduct(token){
        if(id==null || id==0 || !id) return;
        axios({
            method: 'post',
            url: endpoints.addProduct,
            data: qs.stringify({
                Products_id : id,
                Products_Name : name,
                Products_price : price,
                Products_qty : qty
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            if(value.status == 200 && value.data){
                setId(null);
                setName(null);
                setPrice(null);
                setQty(null);
            }
            loadProducts(token);
        });
    }

    function changeName(token, data){
        console.log(data);
        var value = prompt('Enter a New Name', data.Products_Name);
        if(!value || value.length > 45){
            alert('Input Rejected');
            return;
        }

        axios({
            method: 'post',
            url: endpoints.updateProduct,
            data: qs.stringify({
                Products_id : data.Products_id,
                Products_Name : value,
                Products_price : data.Products_price,
                Products_qty : data.Products_qty
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            loadProducts(token);
        });
    }

    function changePrice(token, data){
        console.log(data);
        var value = prompt('Enter new Price', data.Products_price);
        if(!value || isNaN(value) || value <= 0.00){
            alert('Input Rejected');
            return;
        }

        axios({
            method: 'post',
            url: endpoints.updateProduct,
            data: qs.stringify({
                Products_id : data.Products_id,
                Products_Name : data.Products_Name,
                Products_price : value,
                Products_qty : data.Products_qty
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            loadProducts(token);
        });
    }

    function changeQty(token, data){
        console.log(data);
        var value = prompt('Enter product QTY', data.Products_qty);
        if(!value || isNaN(value) || !isInt(value) || value < 0){
            alert('Input Rejected');
            return;
        }

        axios({
            method: 'post',
            url: endpoints.updateProduct,
            data: qs.stringify({
                Products_id : data.Products_id,
                Products_Name : data.Products_Name,
                Products_price : data.Products_price,
                Products_qty : value
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            loadProducts(token);
        });
    }

    function isInt(n) {
        return n % 1 === 0;
     }

    const value = {id, setId, name, setName, price, setPrice, qty, setQty, productList, setProductList, loadProducts, addProduct, changeName, changePrice,changeQty,initLoad, setInitLoad}
    return(
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;