import { flexRender, Table as TTableProps } from '@tanstack/react-table';
import { FC } from 'react';
import TBody from '../../../components/ui/Table/TBody';
import Tr from '../../../components/ui/Table/Tr';
import Td from '../../../components/ui/Table/Td';
import classNames from 'classnames';

interface ITableBodyTemplate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: TTableProps<any>;
}

const TableBodyTemplate: FC<ITableBodyTemplate> = (props) => {
  const { table } = props;
  return (
    <TBody>
      {table.getRowModel().rows.map((row) => (
        <Tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Td
              key={cell.id}
              className={classNames({
                'text-left': cell.column.id !== 'Actions',
                'text-right': cell.column.id === 'Actions',
              })}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Td>
          ))}
        </Tr>
      ))}
    </TBody>
  );
};

export default TableBodyTemplate;
