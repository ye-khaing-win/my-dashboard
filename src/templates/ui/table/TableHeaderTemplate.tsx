import { flexRender, Table as TTableProps } from '@tanstack/react-table';
import { FC } from 'react';
import THead from '../../../components/ui/Table/THead';
import Tr from '../../../components/ui/Table/Tr';
import Th from '../../../components/ui/Table/Th';
import classNames from 'classnames';
import HeroIcon2 from '../../../components/icons/HeroIcon2';

interface ITableHeaderTemplateProps {
  table: TTableProps<unknown>;
}

const TableHeaderTemplate: FC<ITableHeaderTemplateProps> = (props) => {
  const { table } = props;

  return (
    <THead>
      {table.getHeaderGroups().map((headerGroup) => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <Th
              key={header.id}
              className={classNames({
                'text-left': header.id !== 'Actions',
                'text-right': header.id === 'Actions',
              })}
            >
              {header.isPlaceholder ? null : (
                <div
                  className={classNames('')}
                  onClick={() => header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}

                  {
                    {
                      asc: <HeroIcon2 icon="HiChevronUp" className="ml-1.5" />,
                      desc: (
                        <HeroIcon2 icon="HiChevronDown" className="ml-1.5" />
                      ),
                    }[(header.column.getIsSorted() as string) ?? null]
                  }
                </div>
              )}
            </Th>
          ))}
        </Tr>
      ))}
    </THead>
  );
};

export default TableHeaderTemplate;
