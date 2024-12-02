import FieldWrap from '../../../components/form/FieldWrap';
import Input from '../../../components/form/Input';
import HeroIcon2 from '../../../components/icons/HeroIcon2';
import Container from '../../../components/layouts/Container/Container';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Subheader from '../../../components/layouts/Subheader/Subheader';
import SubheaderLeft from '../../../components/layouts/Subheader/SubheaderLeft';
import SubheaderRight from '../../../components/layouts/Subheader/SubheaderRight';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card/Card';
import CardBody from '../../../components/ui/Card/CardBody';
import CardHeader from '../../../components/ui/Card/CardHeader';
import CardHeaderChild from '../../../components/ui/Card/CardHeaderChild';
import TableTemplate from '../../../templates/ui/table/TableTemplate';
import productsDb, { TProduct } from '../../../mocks/db/products.db';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import formatPrice from '../../../utils/formatPrice';
import Progress from '../../../components/ui/Progress';
import { useMemo } from 'react';
import CardFooter from '../../../components/ui/Card/CardFooter';
import CardFooterChild from '../../../components/ui/Card/CardFooterChild';
import TablePaginationTemplate from '../../../templates/ui/table/TablePaginationTemplate';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import capitalize from '../../../utils/capitalize';
import TableToolbarTemplate from '../../../templates/ui/table/TableToolbarTemplate';
import useBreadcrumbs from '../../../hooks/useBreadcrumbs';

const columnHelper = createColumnHelper<TProduct>();

const columns = [
  columnHelper.accessor('image', {
    header: 'Image',
    enableGlobalFilter: false,
    enableSorting: false,
    cell: (info) => (
      <Link to="/">
        <img
          className="aspect-[9/12] w-14 rounded object-cover 2xl:w-20"
          src={info.getValue().thumb}
          alt=""
        />
      </Link>
    ),
  }),
  columnHelper.accessor('productName', {
    header: 'Product Name',
    cell: (info) => (
      <Link to="/">
        <div className="">{info.getValue()}</div>
        <div className="text-sm">
          <b className="me-0.5">SKU:</b>
          {info.row.original.SKU}
        </div>
      </Link>
    ),
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (info) => (
      <span className="text-lg">{formatPrice(info.getValue())}</span>
    ),
  }),
  columnHelper.accessor('views', {
    header: 'Views',
    cell: (info) => <Progress value={info.getValue()} rounded="rounded" />,
  }),
  columnHelper.accessor('stock', {
    header: 'Stock',
    cell: (info) => (
      <Badge variant="outline" color={info.getValue().color}>
        {info.getValue().text}
      </Badge>
    ),
  }),
  columnHelper.accessor('likes', {
    header: 'Likes',
  }),
];

const ProductListPage = () => {
  const data = useMemo(() => productsDb, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { paths } = useBreadcrumbs();

  return (
    <PageWrapper name="Product List">
      <Container>
        <Subheader>
          <SubheaderLeft>
            <Breadcrumbs
              separator={
                <span className="inline-block h-1 w-1 rounded-[50%] bg-zinc-500" />
              }
              paths={paths}
            />

            {/* <FieldWrap
              firstChild={
                <HeroIcon2 className="mx-2" icon="HiMagnifyingGlass" />
              }
            >
              <Input id="example" name="example" placeholder="Search..." />
            </FieldWrap> */}
          </SubheaderLeft>
          <SubheaderRight>
            <Button
              variant="solid"
              startIcon={
                <HeroIcon2 className="mx-2" icon="HiMagnifyingGlass" />
              }
            >
              New Product
            </Button>
          </SubheaderRight>
        </Subheader>
        <Card>
          <CardHeader>
            <CardHeaderChild>
              <TableToolbarTemplate>
                <FieldWrap
                  firstChild={
                    <HeroIcon2 className="mx-2" icon="HiMagnifyingGlass" />
                  }
                >
                  <Input
                    id="example"
                    variant="solid"
                    name="example"
                    placeholder="Search..."
                  />
                </FieldWrap>
              </TableToolbarTemplate>
            </CardHeaderChild>
          </CardHeader>
          <CardBody className="overflow-auto">
            <TableTemplate table={table} />
          </CardBody>

          <CardFooter>
            <CardFooterChild></CardFooterChild>
            <CardFooterChild>
              <TablePaginationTemplate table={table} />
            </CardFooterChild>
          </CardFooter>
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default ProductListPage;
