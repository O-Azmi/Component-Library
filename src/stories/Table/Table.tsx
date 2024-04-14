import styled, { css } from 'styled-components';
import { TableProps } from './Table.types';
import TableCell from './TableCell/TableCell';
import TableRow from './TableRow/TableRow'
import TableHeader from './TableHeader/TableHeader';
import TableFooter from './TableFooter/TableFooter'
const StyledTable = styled.table<{disabled?: boolean}>`
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    width: 80vw;
    height: 60vh;
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};
`;

export default function Table({ disabled }: TableProps) {
    return (
        <StyledTable data-testid="myTable" disabled={disabled}>
            <TableRow>
            <TableHeader width={'200px'} height={'50px'} backgroundColor={'#949494'} border={'right'} text={'Front End'}/>
            <TableHeader width={'200px'} height={'50px'} backgroundColor={'#949494'} border={'left'} text={'Back End'}/>
            <TableHeader width={'200px'} height={'50px'} backgroundColor={'#949494'} border={'left'} text={'Dev Tools'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Html'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Java'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Docker'} bold={'default'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Css'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Php'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Git'} bold={'default'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Javascript'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Sql'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Aws'} bold={'default'}/>
            </TableRow>
            <TableRow>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'React'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Ruby'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Github'} bold={'default'}/>
            </TableRow>
            <TableFooter width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Row'}/>
        </StyledTable>
    );
}
