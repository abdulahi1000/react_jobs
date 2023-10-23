import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  console.log("error", iconUrl)
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconUrl}
      resizeMethod={'cover'}
      style={styles.btnImg(dimension)}
      />

      
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn