import React, { Component } from 'react'
import { Image } from 'react-native'

const ImagesExample = () => (
   <Image source = {require('./Images/logo.png')} 
   style = {{ width: 200, height: 200 }}/>
)
export default ImagesExample