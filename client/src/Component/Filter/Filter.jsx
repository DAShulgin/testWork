import React, { useEffect, useState }  from 'react';
import Paginatior from '../Paginatior/Paginatior';
import Table from '../Table/Table';
import style from './filter.module.css';


const Filter = ({ products }) => {

    let limitCountPage = 20;  //кол-во на одной страниц


    let [totalItemCount, setTotalItemCount] = useState(0);
    let [pagesCount, setPagesCount] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        if(!products){
            return
        }
        setTotalItemCount(products.length); 
        const getPagesCount = Math.ceil(totalItemCount / limitCountPage);
        setPagesCount(getPagesCount);
    })


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let lastBlockRow  = currentPage * limitCountPage; 
    let firstBlockRow = (lastBlockRow - limitCountPage); 
    let currnetBlockRows = products.slice(firstBlockRow, lastBlockRow )



    const onNextClick = ()=>{
        if(currentPage > pagesCount -1){
            return
        }
        setCurrentPage(currentPage + 1);

    }
    const onPreviosClick = ()=> {
        if(currentPage < 2){
            return
        }
        setCurrentPage(currentPage -1);
    }
    const parametrList1 = [
        { value: "name", columnsName: "Название" },
        { value: "amount", columnsName: "Количество" },
        { value: "distance", columnsName: "Расстояние" }
    ]
    const parametrList2 = [
        { value: "equals", columnsName: "=" },
        { value: "more", columnsName: "<" },
        { value: "less", columnsName: ">" },
        { value: "contains", columnsName: "Cодержит" }
    ]

    let [value1, SetValueList1] = useState('name');
    let [value2, SetValueList2] = useState('equals');
    let [text, SetText] = useState('');


   
    const getFiltredData = () => {
        if (!text) {          
            return currnetBlockRows
        }
        else {
            const temp1 = value1;
            const temp2 = text;
            switch(value2){
                        case "contains": return products.filter( el => { 
                            return el[value1].toLowerCase().includes(text.toLowerCase()); 

                        });
                        case "more": return products.filter( el => el[value1] > text);   
                        case "less": return products.filter( el => el[value1] < text);  
                        case "equals": return products.filter( el => el[value1] == text);                              
                    }                      
                }      
        }
    
 const filtredProducts = getFiltredData();

    const SelectedList = ({ parametrList, nameList, value, SetValueList }) => {

        return <span>
            <label>
                {nameList}:
                <select value={value} onChange={(e) => SetValueList(e.target.value)} >
                    {parametrList.map(p => <option value={p.value}> {p.columnsName}</option>)}
                </select>
            </label>
        </span>
    }

    return <div>
        <div className={style.filter}>
            <div><b>Фильтр</b></div>
            <SelectedList nameList="Колонка" parametrList={parametrList1} value={value1} SetValueList={SetValueList1} />
            <SelectedList nameList="Условие" parametrList={parametrList2} value={value2} SetValueList={SetValueList2} />
            <span><input type="text" value={text} onChange={(e) => SetText(e.target.value)} /></span>
        </div>
        <Table products={filtredProducts} />
        {!text ? <Paginatior 
        pages={pages} 
        setCurrentPage = {setCurrentPage} 
        currentPage = {currentPage}
        onNextClick = {onNextClick}
        onPreviosClick = {onPreviosClick}
        /> :null}
    </div>
}


export default Filter;