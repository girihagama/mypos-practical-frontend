import axios from "axios";
import qs from 'qs';
import { useState, createContext } from "react";
import _ from 'lodash';
import endpoints from "../endpoints";

export const InvoiceContext = createContext();

function InvoiceContextProvider (props){
    const [hedAmount, setHedAmount] = useState(0);
    const [invProducts, setInvProducts] = useState([]);
    const [productInitLoad, setProductInitLoad] = useState(false);
    const [productList, setProductList] = useState([]);
    const [invListInitLoad, setInvListInitLoad] = useState(false);
    const [invList, setInvList] = useState([]);
    const [updatedProducts, setUpdatedProducts] = useState([]);

    function loadInvoices(token){
        axios({
            method: 'get',
            url: endpoints.getInvoices,
            headers : {
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            if(value.status == 200 && value.data){
                setInvList(value.data);
                setInvListInitLoad(true);
            }
        });
    }

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
                setProductInitLoad(true);
                setUpdatedProducts(mapProducts(value.data));
            }
        });
    }

    function addToInvoice(data){
        var currentArray = invProducts;
        currentArray.push(data);
        console.log(currentArray);
        setInvProducts(currentArray);

        var grandTotal = 0;
        currentArray.forEach(element => {
            grandTotal += element.amount;
        });
        //console.log('GT', grandTotal);
        setHedAmount(grandTotal);
    }

    function removeFromInvoice(index){
        var currentArray = invProducts;
        console.log("OLD",currentArray);
        var newArray = [];
        currentArray.map((value, localIndex)=>{
            if(index != localIndex){
                newArray.push(value);
            }
        });
        currentArray = newArray;
        console.log("NEW",currentArray);
        setInvProducts(currentArray);

        var grandTotal = 0;
        currentArray.forEach(element => {
            grandTotal += element.amount;
        });
        //console.log('GT', grandTotal);
        setHedAmount(grandTotal);
    }

    function createInvoice(head, detail, token){
        console.log(head,detail,token);

        axios({
            method: 'post',
            url: endpoints.createInvoiceHed,
            data: qs.stringify({
                Invoice_Hed_id : head.Invoice_Hed_id,
                Invoice_Hed_Amount : head.Invoice_Hed_Amount,
                Invoice_Hed_customer : head.Invoice_Hed_customer,
            }),
            headers : {
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            //console.log(value);
            if(value.data && value.data.action == 1){
                loadInvoices(token);

                //add invoice detail
                detail.map((invDetail)=>{
                    axios({
                        method: 'post',
                        url: endpoints.createInvoiceDetail,
                        data: qs.stringify({
                            Products_Products_id : invDetail.Products_id,
                            Invoice_Hed_Invoice_Hed_id : head.Invoice_Hed_id,
                            Invoice_Details_Amount : invDetail.amount,
                            Invoice_Details_qty : invDetail.qty,
                        }),
                        headers : {
                            'Authorization': `${token}`
                        },
                        responseType: 'json',
                    }).then((value)=>{
                        console.log(value.data);
                    });
                })
            }else{
                alert("Invoice ID already exist!");
                return;
            }           
        });

    }

    function mapProducts(jsonArray){
        var productKeyMap = {
            Products_id : 'text',
            Products_Name: 'key',
            Products_price: 'value',
            Products_qty: 'qty'
        };
    
        var mapped = jsonArray.map(function(obj) {
            return _.mapKeys(obj, function(value, key) {
              return productKeyMap[key];
            });
        });

        //console.log("Mapped",mapped);
        return mapped;
    }    

    function isInt(n) {
        return n % 1 === 0;
    }

    const value = {hedAmount, createInvoice, setHedAmount, removeFromInvoice, invProducts,setInvProducts, loadInvoices, loadProducts, invList, updatedProducts, productInitLoad, setProductInitLoad,invListInitLoad, setInvListInitLoad, productList, addToInvoice}
    return(
        <InvoiceContext.Provider value={value}>
            {props.children}
        </InvoiceContext.Provider>
    );
}

export default InvoiceContextProvider;