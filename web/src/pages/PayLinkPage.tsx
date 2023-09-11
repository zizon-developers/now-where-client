import PayLinkForm from 'components/PayLinkFrom';
import PayLinkGuideCarousel from 'components/PayLinkGuideCarousel';
import { ReactComponent as LeftArrowIcon } from '../assets/arrow-icon/arrow_left_icon.svg';

const PayLinkPage = () => {
  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center mb-14">
        <LeftArrowIcon
          width="30"
          height="30"
        />
        <h1 className="text-2xl font-semibold flex-grow ml-20">송금 링크 등록</h1>
      </div>
      <PayLinkGuideCarousel />
      <div className="flex justify-between items-center mb-4 mt-12">
        <h2 className="text-xl font-semibold">송금 링크</h2>
      </div>

      <PayLinkForm />
    </div>
  );
};

export default PayLinkPage;
