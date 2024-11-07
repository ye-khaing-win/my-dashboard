import Header from '../../../components/layouts/Header/Header';
import HeaderLeft from '../../../components/layouts/Header/HeaderLeft';
import HeaderRight from '../../../components/layouts/Header/HeaderRight';

const DefaultHeaderTemplate = () => {
  return (
    <Header>
      <HeaderLeft>
        <div></div>
      </HeaderLeft>
      <HeaderRight>
        <div></div>
      </HeaderRight>
    </Header>
  );
};

export default DefaultHeaderTemplate;
