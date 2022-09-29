import axios from "axios";
import qs from 'qs';
import { useState, createContext } from "react";
import endpoints from "../endpoints";

export const ReportsContext = createContext();

function ReportsContextProvider (props){
    const [fromDate, setFromDate] = useState("2022-09-28");
    const [toDate, setToDate] = useState("2022-09-29");
    const [generatedOn, setGeneratedOn] = useState();
    const [dataList, setGeneratedData] = useState(null);
    const [grandTotal, setGrandTotal] = useState(0);

    function generateReport(token){
        if(!fromDate || !toDate) return;

        axios({
            method: 'post',
            url: endpoints.generateReport,
            data: qs.stringify({
                fromDate,
                toDate
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `${token}`
            },
            responseType: 'json',
        }).then((value)=>{
            if(value.status == 200 && value.data){
                setGeneratedData(value.data);
                calculateGrandTotal(value.data);
                setGeneratedOn(new Date().toString());
            }
        });        
    }

    function clearReport(){
        setFromDate('');
        setToDate('');
        setGeneratedOn(null);
        setGeneratedData(null);
        setGrandTotal(0);
    }

    function calculateGrandTotal(tableData){
        var total = 0;
        for (let index = 0; index < tableData.length; ++index) {
            const element = tableData[index];
            total += element.Invoice_Hed_Amount;
        }
        setGrandTotal(total);
    }

    const value = {fromDate, setFromDate, toDate, setToDate, dataList, generatedOn, setGeneratedOn, generateReport, clearReport, grandTotal}
    return(
        <ReportsContext.Provider value={value}>
            {props.children}
        </ReportsContext.Provider>
    );
}

export default ReportsContextProvider;