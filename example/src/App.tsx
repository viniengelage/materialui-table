import React from 'react'

import Table from 'components/Table'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const App = () => {
  const columns = [
    {
      Header: 'Coluna 1',
      accessor: 'col1'
    }
  ]

  const data = [
    {
      col1: 'Content'
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <Table columns={columns} data={data}/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
