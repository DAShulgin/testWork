import React from 'react';
import style from './paginator.module.css';

const Paginatior = ({ pages, setCurrentPage, currentPage, onNextClick, onPreviosClick }) => {

    return <div className = {style.pgPosition}>

        <button onClick={() => { onPreviosClick() }}> Назад </button>

        {pages
            .map((p) => {

                return <span className={currentPage === p ? style.selectedPage : style.pageLine}
                    key={p} onClick={() => { setCurrentPage(p); }}>{p}
                </span>
            })}

        <button onClick={() => { onNextClick() }} >Вперед</button>

    </div>
}

export default Paginatior;