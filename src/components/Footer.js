import React from 'react';

const Footer = (props) => {

    function previous() {
        let currentPage = props.page === 1 ? 1 : props.page - 1;
        props.onChange(currentPage);
    }

    function next() {
        props.onChange(props.page + 1);
    }

    return (
        <div>
            <button onClick={() => previous()}> {'<'} </button>
            <h3>{props.page}</h3>
            <button onClick={() => next()}> {'>'} </button>
        </div>
    )
}

export default Footer
