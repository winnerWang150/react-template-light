import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'

// import { Button, Space } from 'antd';

import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()

  return (
    <div className='app'>
      <Suspense fallback={<h3>加载中...</h3>}>
        <div className='page'>
          {useRoutes(routers)}
        </div>
      </Suspense>
    </div>
  )
})

export default App