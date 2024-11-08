import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Subheader from '../../../components/layouts/Subheader/Subheader';
import SubheaderLeft from '../../../components/layouts/Subheader/SubheaderLeft';
import SubheaderRight from '../../../components/layouts/Subheader/SubheaderRight';

const ProductListPage = () => {
  return (
    <PageWrapper name="Product List">
      <Subheader>
        <SubheaderLeft>
          <div />
        </SubheaderLeft>
        <SubheaderRight>
          <div></div>
        </SubheaderRight>
      </Subheader>
    </PageWrapper>
  );
};

export default ProductListPage;
