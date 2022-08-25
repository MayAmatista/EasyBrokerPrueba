import React from 'react';

const Pagination = (props) => {

    function previous() {
        let currentPage = props.page === 1 ? 1 : props.page - 1;
        props.onChange(currentPage);
    }

    function next() {
        props.onChange(props.page + 1);
    }

    return (
        <div className='pagination'>
            <button className='page-button' onClick={() => previous()}> {'<'} </button>
            <h3 className='page'>{props.page}</h3>
            <button className='page-button' onClick={() => next()}> {'>'} </button>
        </div>
    )
}

export default Pagination
