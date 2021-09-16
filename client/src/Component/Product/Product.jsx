import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import Table from '../Table/Table';
import Paginatior from '../Paginatior/Paginatior';
import style from '../Paginatior/paginator.module.css'


const Product = ({ products }) => {

    let [value1, SetValueList1] = useState('names');
    let [value2, SetValueList2] = useState('equals');
    let [text, SetText] = useState('');

    const getFiltredData = () => {
        if (!text) {
            return products
        }
        else {
            switch (value2) {
                case "contains": return products.filter(el => {
                    return el[value1].toString().toLowerCase().includes(text.toLowerCase());

                });
                case "more": return products.filter(el => el[value1] > text);
                case "less": return products.filter(el => el[value1] < text);
                case "equals": return products.filter(el => el[value1] == text);
            }
        }
    }

    const filtredProducts = getFiltredData();

    let limitCountPage = 5;  //кол-во на одной страниц


    let [totalItemCount, setTotalItemCount] = useState(0);
    let [pagesCount, setPagesCount] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (!products) {
            return
        }
        setTotalItemCount(filtredProducts.length);
        const getPagesCount = Math.ceil(totalItemCount / limitCountPage);
        setPagesCount(getPagesCount);
    })


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let lastBlockRow = currentPage * limitCountPage;
    let firstBlockRow = (lastBlockRow - limitCountPage);
    let currnetBlockRows = filtredProducts.slice(firstBlockRow, lastBlockRow)


    const onNextClick = () => {
        if (currentPage > pagesCount - 1) {
            return
        }
        setCurrentPage(currentPage + 1);

    }
    const onPreviosClick = () => {
        if (currentPage < 2) {
            return
        }
        setCurrentPage(currentPage - 1);
    }

    return <div>
        <Filter
            value1={value1}
            SetValueList1={SetValueList1}
            value2={value2}
            SetValueList2={SetValueList2}
            text={text}
            SetText={SetText} />
        {currnetBlockRows.length != 0 ? <>
            <Table products={currnetBlockRows} />
            <Paginatior
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                onNextClick={onNextClick}
                onPreviosClick={onPreviosClick} />
        </>
            : <div className={style.error}>Введите новое условие поиска</div>
        }
    </div>
}

export default Product;