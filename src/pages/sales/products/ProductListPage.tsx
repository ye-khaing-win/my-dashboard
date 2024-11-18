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
import CardTitle from '../../../components/ui/Card/CardTitle';
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
        <div className="font-bold">{info.getValue()}</div>
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
      <span className="text-xl font-bold">{formatPrice(info.getValue())}</span>
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

  return (
    <PageWrapper name="Product List">
      <Subheader>
        <SubheaderLeft>
          <FieldWrap
            firstChild={<HeroIcon2 className="mx-2" icon="HiMagnifyingGlass" />}
          >
            <Input id="example" name="example" placeholder="Search..." />
          </FieldWrap>
          <FieldWrap
            firstChild={<HeroIcon2 className="mx-2" icon="HiMagnifyingGlass" />}
          >
            <Input id="example" name="example" placeholder="Search..." />
          </FieldWrap>
        </SubheaderLeft>
        <SubheaderRight>
          <Button
            startIcon={<HeroIcon2 className="mx-2" icon="HiMagnifyingGlass" />}
          >
            New Product
          </Button>
        </SubheaderRight>
      </Subheader>
      <Container>
        <Card>
          <CardHeader>
            <CardHeaderChild>
              <CardTitle>All Products</CardTitle>
              <Badge variant="outline" className="border-transparent px-4">
                10 items
              </Badge>
            </CardHeaderChild>
          </CardHeader>
          <CardBody className="overflow-auto">
            <TableTemplate table={table} />
          </CardBody>
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default ProductListPage;
