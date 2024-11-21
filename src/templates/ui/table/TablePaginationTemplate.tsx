import { FC } from 'react';
import { ITableProps } from '../../../components/ui/Table/Table';
import { Table as TTableProps } from '@tanstack/react-table';
import Button from '../../../components/ui/Button';
import HeroIcon2 from '../../../components/icons/HeroIcon2';
import Input from '../../../components/form/Input';

interface ITablePaginationTemplateProps extends ITableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: TTableProps<any>;
}

const TablePaginationTemplate: FC<ITablePaginationTemplateProps> = (props) => {
  const { table } = props;

  return (
    <>
      <Button
        startIcon={<HeroIcon2 icon="HiChevronDoubleLeft" />}
        onClick={() => table.setPageIndex(0)}
        isDisabled={!table.getCanPreviousPage()}
        className="!px-0"
      />
      <Button
        startIcon={<HeroIcon2 icon="HiChevronLeft" />}
        onClick={() => table.previousPage()}
        isDisabled={!table.getCanPreviousPage()}
        className="!px-0"
      />
      <span className="flex items-center gap-1">
        <p>Page</p>
        <strong>
          <Input
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const pageIndex = +e.target.value - 1 || 0;
              table.setPageIndex(pageIndex);
            }}
            className="inline-flex !w-12 text-center"
            name="page"
          />{' '}
          of {table.getPageCount()}
        </strong>
      </span>
      <Button
        startIcon={<HeroIcon2 icon="HiChevronRight" />}
        onClick={() => table.nextPage()}
        isDisabled={!table.getCanNextPage()}
        className="!px-0"
      />
      <Button
        startIcon={<HeroIcon2 icon="HiChevronDoubleRight" />}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        isDisabled={!table.getCanNextPage()}
        className="!px-0"
      />
    </>
  );
};

export default TablePaginationTemplate;
