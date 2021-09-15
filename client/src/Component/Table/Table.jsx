import React from 'react';
import style from './table.module.css';

const Table = ({ products }) => {

  return <div className={style.tableStyle}>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.date}</td>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

export default Table;