import { FC } from "react"
import {Slide} from 'react-slideshow-image'
import styles from './ProductSlideShow.module.css'

interface Props {
  images:string[]

}
export const ProductSlideShow:FC<Props> = ({images}) => {
  return (
    <Slide
      easing='ease'
      duration= { 7000}
      indicators
    >
        {
            images.map(img=>
                {
                  const url = `/products/${img}`
                  return (
                    <div 
                      className={styles['each-slide']}
                      key={img}
                      >
                        <div
                        style={{
                          backgroundImage:`url(${url})`,
                          backgroundSize:'cover'
                        }}>

                        </div>
                    </div>
                  )

                })
        }

    </Slide>
  )
}
