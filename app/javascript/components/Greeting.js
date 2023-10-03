import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {

  const {greetings, loading} = useSelector((store) => store.greetings)

if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div key={greetings.id}>
      {greetings.greeting}
    </div>
  )
}

export default Greeting