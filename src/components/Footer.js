import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    previous() {
        let currentPage = this.props.page === 1 ? 1 : this.props.page - 1;
        this.props.onChange(currentPage);
    }

    next() {
        this.props.onChange(this.props.page + 1);
    }

    render() {

        return (
            <div>
                <button onClick={() => this.previous()}> {'<'} </button>
                <h3>{this.props.page}</h3>
                <button onClick={() => this.next()}> {'>'} </button>
            </div>
        )
    }

}

export default Footer