import { Table as TTableProps } from '@tanstack/react-table';
import { FC } from 'react';
import Table, { ITableProps } from '../../../components/ui/Table/Table';
import TableHeaderTemplate from './TableHeaderTemplate';
import TableBodyTemplate from './TableBodyTemplate';

interface ITableTemplateProps extends ITableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: TTableProps<any>;
  hasHeader?: boolean;
}

const TableTemplate: FC<ITableTemplateProps> = (props) => {
  const { table, hasHeader = true, ...rest } = props;

  return (
    <Table {...rest}>
      {
        <>
          {hasHeader && <TableHeaderTemplate table={table} />}
          <TableBodyTemplate table={table} />
        </>
      }
    </Table>
  );
};

export default TableTemplate;
