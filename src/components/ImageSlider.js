import React, { useState } from 'react';

function ImageSlider(props) {
    const [index, setIndex] = useState(0);

    const images = props.images.map(image => (
        <img className='image-slider' src={image.url} alt={image.title} index={props.images.indexOf(image)}></img>
    ))

    function previous() {
        let currentIndex = index === 0 ? props.images.length - 1 : index - 1;
        setIndex(currentIndex);
    }

    function next() {
        let currentIndex = index === props.images.length - 1 ? 0 : index + 1;
        setIndex(currentIndex);
    }

    return (
        <div className="slider">
            <button className='slider-button' id='button-previous' onClick={previous}> {'<'} </button>
            {images[index]}
            <button className='slider-button' id='button-next' onClick={next}> {'>'} </button>
        </div>
    )
}

export { ImageSlider }
