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
    },
    {
      Header: 'Coluna 2',
      accessor: 'col2'
    },
    {
      Header: 'Coluna 3',
      accessor: 'col3'
    },
    {
      Header: 'Coluna 4',
      accessor: 'col4'
    },

  ]

  const data = [
    {
      col1: 'Content',
      col2: 'Content',
      col3: 'Content',
      col4: 'Content',
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
