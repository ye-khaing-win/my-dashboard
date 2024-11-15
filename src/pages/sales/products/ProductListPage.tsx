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

const ProductListPage = () => {
  return (
    <PageWrapper name="Product List">
      <Subheader>
        <SubheaderLeft>
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
            <div />
          </CardBody>
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default ProductListPage;
