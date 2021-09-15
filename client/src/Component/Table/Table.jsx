import React from 'react';
import style from './table.module.css';

const Table = ({ products }) => {

  return <div className={style.tableStyle}>
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>{product.dates}</td>
            <td>{product.names}</td>
            <td>{product.amount}</td>
            <td>{product.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

export default Table;