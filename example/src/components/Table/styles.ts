import styled, { css } from 'styled-components';

interface AlignProps {
  align: 'left' | 'center' | 'right';
}

interface DropDownProps {
  visible?: boolean;
  idSection?: number | undefined;
}

interface TableProps {
  variant: 'filled' | 'outlined';
  backgroundColor?: string;
  color?: string;
}

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableHead = styled.div`
  width: 100%;
`;
export const TableHeader = styled.h2`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.25px;
  text-align: left;
  padding-left: 16px;
  width: 180px;
`;

export const TableBody = styled.div`
  width: 100%;
  position: relative;
`;

export const TableTopRow = styled.div`
  width: 100%;
`;

export const TableBodyRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;
export const TableCell = styled.div<TableProps>`
  margin-top: 10px;
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  &:first-child {
    border-radius: 6px 0 0 6px;
    &:before {
      content: '';
      position: absolute;
      height: 60px;
      width: 10px;
      left: 0;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 6px 0 0 6px;
    }
  }
  &:last-child {
    border-radius: 0 6px 6px 0;
  }
  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      box-shadow: none;
      border-top: 0.12rem solid ${props.theme.colors.stroke};
      border-bottom: 0.12rem solid ${props.theme.colors.stroke};
      &:first-child {
        border-left: 0.12rem solid ${props.theme.colors.stroke};
        &:before {
          left: -2px;
        }
      }
      &:last-child {
        border-right: 0.12rem solid ${props.theme.colors.stroke};
      }
    `}
  ${(props) =>
    props.backgroundColor &&
    props.variant === 'filled' &&
    css`
      background-color: ${props.backgroundColor};
    `}
    ${(props) =>
    props.color &&
    css`
      &:first-child {
        &:before {
          background-color: ${props.color};
        }
      }
    `}
`;

export const TableCellText = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.25px;
  text-align: left;
  padding-left: 16px;
`;

export const PersonCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const DropDownContainer = styled.section<DropDownProps>`
  background-color: ${(props) => props.theme.colors.background};
  height: 128px;
  margin-top: -10px;
  border-radius: 0 0 6px 6px;
  padding-top: 16px;
  display: flex;
  opacity: 1;
  width: 100%;
  position: absolute;
`;

export const DropDownListener = styled.div<DropDownProps>``;

export const AlignContainer = styled.div<AlignProps>`
  display: flex;
  width: 160px;
  align-items: center;
  ${(props) =>
    props.align === 'left' &&
    css`
      justify-content: flex-start;
      margin-left: 16px;
    `}
  ${(props) =>
    props.align === 'center' &&
    css`
      justify-content: center;
      margin-left: -16px;
    `}
    ${(props) =>
    props.align === 'right' &&
    css`
      justify-content: flex-end;
    `}
`;
