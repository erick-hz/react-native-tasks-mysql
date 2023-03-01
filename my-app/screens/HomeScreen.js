import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const HomeScreen = () => {

  const loadTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen