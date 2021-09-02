import React from 'react'
import Slider from 'react-slick'
import styles from './styles.module.css'
import ChardCard from '../../cards/chart-card/index'
import { Arrow } from '../../../icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class SlickGoTo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
      updateCount: 0,
      count:0
    }
  }


  render() {
    const settings = {
      dots: false,
      infinite: false,
      cssEase: 'cubic-bezier(.4,0,.2,1) ',
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 2,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 2 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    }
    return (
      <div className={styles.restrict}>
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          style={{ height: '370px' }}
          className={styles.cards}
        >
          <ChardCard></ChardCard>
          <ChardCard></ChardCard>
          <ChardCard></ChardCard>
          <ChardCard></ChardCard>
        </Slider>

        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={(e) => {
              this.slider.slickGoTo(this.state.slideIndex - 2)
              this.setState({
                count:this.state.count-1
              })
            }}
            value={this.state.slideIndex}
            disabled={!this.state.count}
          >
            <Arrow
              className={styles.buttonSvgPrev}
              style={{ color: 'white' }}
            />
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              this.slider.slickGoTo(this.state.slideIndex + 2)
              this.setState({
                count:this.state.count+1
              })
            }}
            value={this.state.slideIndex}
            disabled={this.state.count === 1}
          >
            <Arrow className={styles.buttonSvg} style={{ color: 'white' }} />
          </button>
        </div>
      </div>
    )
  }
}
