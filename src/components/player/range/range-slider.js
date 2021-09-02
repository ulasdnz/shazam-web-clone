import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import styles from './range-slider.module.css'
import styled from 'styled-components'
import { usePalette } from 'react-palette'

const Span = styled.span`
  background: ${(props) => props.color} !important;
`

const Input = styled.input`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    z-index: 9;
    background: ${(props) => props.color};
    border-radius: 50%;
    box-shadow: -410px 0 0 408px ${(props) => props.color};
    cursor: pointer;
    height: 4px;
    width: 4px;
    border: 0;
  }

  &::-moz-range-thumb {
    background: ${(props) => props.color};
    border-radius: 50%;
    box-shadow: -410px 0 0 408px ${(props) => props.color};
    cursor: pointer;
    height: 4px;
    width: 4px;
    border: 0;
  }
  &::-moz-range-track {
    background-color: ${(props) => props.color};
  }
  &::-moz-range-progress {
    background-color: ${(props) => props.color};
    height: 4px;
  }

  &::-ms-fill-lower {
    background-color: ${(props) => props.color};
  }

  &::-moz-range-thumb {
    background: black;
    box-shadow: -410px 0 0 408px ${(props) => props.color};
  }
`

function RangeSlider({ value, minvalue, maxvalue, handleChange, image }) {
  const inputRef = useRef(null)
  const inputWidth = useRef(null)
  const [spanLocation, setSpanLocation] = useState()

  var { data } = usePalette(image)

  useEffect(
    () =>
      (inputWidth.current = parseInt(
        window.getComputedStyle(inputRef.current).width.replace('px', '')
      ))
  )

  useEffect(
    () => setSpanLocation((value / maxvalue) * inputWidth.current - 2),
    [maxvalue, value]
  )
  const handleInputChange = (e) => handleChange(parseFloat(e.target.value))

  return (
    <div className={styles.progressBar}>
      <Input
        color={data.vibrant}
        ref={inputRef}
        type="range"
        onChange={handleInputChange}
        className={styles.slider}
        min={minvalue}
        max={maxvalue}
        step="0.1"
        value={value}
      />
      <Span
        color={data.vibrant}
        className={styles.thumb}
        style={{ left: `${spanLocation}px` }}
      ></Span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    image: state.trackData.coverSrc
  }
}

export default connect(mapStateToProps)(RangeSlider)
