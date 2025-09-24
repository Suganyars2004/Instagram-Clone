import React from 'react'
import SideBar from './SideBar'
function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-25'><SideBar/></div>
      <div className='w-50 bg-secondary'>Feed</div>
      <div className='w-30'>Suggestions</div>
    </div>
  )
}

export default App