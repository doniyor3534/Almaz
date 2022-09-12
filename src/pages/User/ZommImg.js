import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
const ZommImg = () => {
  return (
    <div>

<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: 'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_1200.c9182206.jpg'
    },
    largeImage: {
        src: 'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_1200.c9182206.jpg',
        width: 1200,
        height: 1800
    }
}} />
    </div>
  )
}

export default ZommImg