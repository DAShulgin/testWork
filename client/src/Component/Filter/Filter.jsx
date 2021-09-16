import React from 'react';
import style from './filter.module.css';


const Filter = ({value1, SetValueList1, value2, SetValueList2, text, SetText }) => {

    const parametrList1 = [
        { value: "names", columnsName: "Название" },
        { value: "amount", columnsName: "Количество" },
        { value: "distance", columnsName: "Расстояние" }
    ]
    const parametrList2 = [
        { value: "equals", columnsName: "=" },
        { value: "more", columnsName: "<" },
        { value: "less", columnsName: ">" },
        { value: "contains", columnsName: "Cодержит" }
    ]


    const SelectedList = ({ parametrList, nameList, value, SetValueList }) => {

        return <span>
            <label>
                <span>{nameList}:</span>
                <select value={value} onChange={(e) => SetValueList(e.target.value)} >
                    {parametrList.map(p => <option value={p.value}> {p.columnsName}</option>)}
                </select>
            </label>
        </span>
    }

    return <div>
        <div className={style.filter}>
            <SelectedList nameList="Колонка" parametrList={parametrList1} value={value1} SetValueList={SetValueList1} />
            <SelectedList nameList="Условие" parametrList={parametrList2} value={value2} SetValueList={SetValueList2} />
            <span><input type="text" value={text} onChange={(e) => SetText(e.target.value)} /></span>
        </div>
    </div>
}


export default Filter;