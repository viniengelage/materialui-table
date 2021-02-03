# viniengelage-materialui-button

> A table UI Component crafted with react-table and styled-components. This a module for Vinicios Engelage's MaterialUI. Is still under development.

[![NPM](https://img.shields.io/npm/v/viniengelage-materialui-button.svg)](https://www.npmjs.com/package/viniengelage-materialui-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @viniengelage/materialui-table
```

or

```bash
yarn add @viniengelage/materialui-table
```

## Usage

#### First

Define columns and data, this is a necessary prop for table.


```tsx
  const columns = [
    {
      Header: 'Column 1',
      accessor: 'col1'
    },
    {
      Header: 'Column 2',
      accessor: 'col2'
    },
    {
      Header: 'Column 3',
      accessor: 'col3'
    }
  ]

  const data = [
    {
      col1: 'Content',
      col2: 'Content 2',
      col3: 'Conent 3'
    },
    {
      col1: 'Content',
      col2: 'Content 2',
      col3: 'Conent 3'
    },
    {
      col1: 'Content',
      col2: 'Content 2',
      col3: 'Conent 3'
    }
  ]
```

### Second

Now you can define your table

```tsx
import React from 'react'

import Table from '@viniengelage/materialui-table'

const App = () => {
  const columns = [
    {
      Header: 'Column 1',
      accessor: 'col1'
    },
    {
      Header: 'Column 2',
      accessor: 'col2'
    },
    {
      Header: 'Column 3',
      accessor: 'col3'
    }
  ]

  const data = [
    {
      col1: 'Content',
      col2: 'Content 2',
      col3: 'Conent 3'
    },
    {
      col1: 'Content',
      col2: 'Content 2',
      col3: 'Conent 3'
    },
    {
      col1: 'Content',
      col2: 'Content 2',
      col3: 'Conent 3'
    }
  ]

  return <Table columns={columns} data={data}/>
}

export default App;

```

## License

MIT © [viniengelage](https://github.com/viniengelage)
