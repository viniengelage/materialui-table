import React from 'react';
import { useTable } from 'react-table';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'styles/theme'

import {
  TableContainer,
  TableHead,
  TableTopRow,
  TableBody,
  TableHeader,
  TableCell,
  TableBodyRow,
  TableCellText,
  PersonCardContainer,
  Image,
  AlignContainer,
  DropDownListener,
} from './styles';

let theme = defaultTheme;

export function addTableTheme(userTheme: any) {
  return theme = userTheme;
}

export interface ColumnProps {
  Header: string;
  accessor: string;
  Cell?: any;
}

export interface TableProps {
  columns: ColumnProps[];
  data: object[];
  backgroundColor?: string;
  color?: string;
  variant?: 'filled' | 'outlined';
  rowId?: number;
  visibleDropDown?: boolean;
}

export interface AlignProps {
  align: 'left' | 'center' | 'right';
}

interface PersonCardProps {
  url: string;
  name: string;
}

const TableComponent: React.FC<TableProps> = ({
  backgroundColor,
  color,
  columns,
  data,
  variant = 'outlined',
  rowId
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <ThemeProvider theme={theme}>

    <TableContainer {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableTopRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableHeader>
            ))}
          </TableTopRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <DropDownListener idSection={rowId}>
              <TableBodyRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                    variant={variant}
                    {...cell.getCellProps()}
                    color={color}
                    backgroundColor={backgroundColor}
                    >
                        <TableCellText>{cell.render('Cell')}</TableCellText>
                      </TableCell>
                  );
                })}
              </TableBodyRow>
            </DropDownListener>
          );
        })}
      </TableBody>
    </TableContainer>
          </ThemeProvider>
  );
};

export default TableComponent;

export const PersonCard: React.FC<PersonCardProps> = ({ url, name }) => {
  return (
    <PersonCardContainer>
      <Image src={url} alt={url} />
      <TableCellText style={{ paddingLeft: 5 }}>{name}</TableCellText>
    </PersonCardContainer>
  );
};

export const AlignCard: React.FC<AlignProps> = ({ children, align }) => {
  return <AlignContainer align={align}>{children}</AlignContainer>;
};
