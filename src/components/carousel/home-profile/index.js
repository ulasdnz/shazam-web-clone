import React from 'react'
import Slider from 'react-slick'
import styles from './styles.module.css'
import ProfileCard from '../../cards/profile-cards/index'
import { Arrow } from '../../../icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
    count:0
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      cssEase: 'cubic-bezier(.4,0,.2,1) ',
      speed: 700,
      slidesToShow: 7.3,
      slidesToScroll: 7,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 7 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 6.3,
            slidesToScroll: 6,
            initialSlide: 2
          }
        }, {
          breakpoint: 890,
          settings: {
            slidesToShow: 5.3,
            slidesToScroll: 5,
            initialSlide: 2
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 4.8,
            slidesToScroll: 5,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            initialSlide: 2
          }
        },  {
          breakpoint: 358,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },{
          breakpoint: 299,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]

    }

    return (
      <div className={styles.restrict}>
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          style={{ height: '370px' }}
          className={styles.cards}
        >
          {this.props.profiles.map((e, i) => (
            <ProfileCard key={i} ad={e.ad} link={e.link}></ProfileCard>
          ))}
        </Slider>

        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => {
              this.slider.slickGoTo(this.state.slideIndex - 7)
              this.setState({
                count: this.state.count-1
              })
            }}
            value={this.state.slideIndex}
            disabled={!this.state.count}
          >
            <Arrow
              style={{ color: 'white' }}
              className={styles.buttonSvgPrev}
            />
          </button>
          <button
            className={styles.button}
            onClick={() => {
              this.slider.slickGoTo(this.state.slideIndex + 7)
              this.setState({
                count: this.state.count + 1
              })
            }}
            value={this.state.slideIndex}
            disabled={this.state.count ===2}
          >
            <Arrow style={{ color: 'white' }} className={styles.buttonSvg} />
          </button>
        </div>
      </div>
    )
  }
}
