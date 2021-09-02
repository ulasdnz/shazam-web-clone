import React from 'react'
import Slider from 'react-slick'
import styles from './styles.module.css'
import { Arrow } from '../../../icons'
import Card from '../../../components/cards/song-card/card'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import getRightList from '../../../functions/getList'

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
    let LIST = getRightList(this.props.listType)

    let arr = LIST.filter((e, i) => i < 20)
    let x = 0,
      newArr = []
    for (; x < arr.length; x = x + 3) {
      newArr.push(
        <div key={x} style={{ height: '370px !important' }}>
          <div>
            <Card
              listType={this.props.listType}
              info={arr[x]}
              number={x}
              hand={this.props.hand}
            ></Card>
          </div>

          {arr[x + 1] ? (
            <div>
              <Card
                listType={this.props.listType}
                info={arr[x + 1]}
                number={x + 1}
                hand={this.props.hand}
              ></Card>
            </div>
          ) : null}
          {arr[x + 2] ? (
            <div>
              <Card
                listType={this.props.listType}
                info={arr[x + 2]}
                number={x + 2}
                hand={this.props.hand}
              ></Card>
            </div>
          ) : null}
        </div>
      )
    }

    const settings = {
      dots: false,
      infinite: false,
      cssEase: 'cubic-bezier(.4,0,.2,1) ',
      speed: 700,
      slidesToShow: 2.09,
      slidesToScroll: 2,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.07,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
          {
          breakpoint: 962,
          settings: {
            slidesToShow: 1.66,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1.18,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
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
          {newArr}
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
              style={{ color: 'white' }}
              className={styles.buttonSvgPrev}
            />
          </button>
          <button
            className={styles.button}
            onClick={() => {
              this.slider.slickGoTo(this.state.slideIndex + 2)
              this.setState({
                count:this.state.count+1
              })
            }}
            value={this.state.slideIndex}
            disabled={this.state.count === 3}
          >
            <Arrow style={{ color: 'white' }} className={styles.buttonSvg} />
          </button>
        </div>
      </div>
    )
  }
}
