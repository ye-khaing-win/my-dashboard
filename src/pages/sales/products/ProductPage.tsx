import Input from '../../../components/form/Input';
import Label from '../../../components/form/Label';
import Container from '../../../components/layouts/Container/Container';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Subheader from '../../../components/layouts/Subheader/Subheader';
import SubheaderLeft from '../../../components/layouts/Subheader/SubheaderLeft';
import SubheaderRight from '../../../components/layouts/Subheader/SubheaderRight';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card/Card';
import CardBody from '../../../components/ui/Card/CardBody';
import CardHeader from '../../../components/ui/Card/CardHeader';
import CardHeaderChild from '../../../components/ui/Card/CardHeaderChild';
import CardTitle from '../../../components/ui/Card/CardTitle';
import useBreadcrumbs from '../../../hooks/useBreadcrumbs';

const ProductPage = () => {
  const { paths } = useBreadcrumbs();

  return (
    <PageWrapper name="New Product">
      <Subheader>
        <SubheaderLeft>
          <Breadcrumbs
            separator={
              <span className="inline-block h-1 w-1 rounded-[50%] bg-zinc-500" />
            }
            paths={paths}
          />
        </SubheaderLeft>
        <SubheaderRight>
          <Button variant="solid">Save</Button>
        </SubheaderRight>
      </Subheader>
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <h1 className="my-4 font-bold">Product Edit</h1>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Card>
                  <CardHeader>
                    <CardHeaderChild>
                      <CardTitle>General Info</CardTitle>
                    </CardHeaderChild>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 lg:col-span-6">
                        <Label htmlFor="id">ID</Label>
                        <Input id="id" name="id" />
                      </div>

                      <div className="col-span-12 lg:col-span-6">
                        <Label htmlFor="sku">SKU</Label>
                        <Input id="sku" name="sku" />
                      </div>

                      <div className="col-span-12">
                        <Label htmlFor="productName">Name</Label>
                        <Input id="productName" name="productName" />
                      </div>

                      <div className="col-span-12 lg:col-span-6">
                        <Label htmlFor="price">Price</Label>
                        <Input type="number" id="price" name="price" />
                      </div>

                      <div className="col-span-12 lg:col-span-6">
                        <Label htmlFor="views">Views</Label>
                        <Input type="number" id="views" name="views" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default ProductPage;
