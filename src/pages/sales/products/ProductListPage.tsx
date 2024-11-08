import FieldWrap from '../../../components/form/FieldWrap';
import Input from '../../../components/form/Input';
import HeroIcon2 from '../../../components/icons/HeroIcon2';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Subheader from '../../../components/layouts/Subheader/Subheader';
import SubheaderLeft from '../../../components/layouts/Subheader/SubheaderLeft';
import SubheaderRight from '../../../components/layouts/Subheader/SubheaderRight';
import Button from '../../../components/ui/Button';

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
          <Button>New Product</Button>
        </SubheaderRight>
      </Subheader>
    </PageWrapper>
  );
};

export default ProductListPage;
