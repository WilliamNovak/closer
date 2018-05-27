import React, { Component } from 'react'
import Slider from "react-slick"
import './styles.css'

export const Slides = props => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }

    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}

export const Slide = props => (
    <div className="slide">
        {props.children}
    </div>
)
