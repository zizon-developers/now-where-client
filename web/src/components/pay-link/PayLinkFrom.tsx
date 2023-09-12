import { useState, ChangeEvent, FormEvent } from 'react';
import { useRegisterKakaoPayLinkId } from 'hooks/services/users';
import Input from 'components/Input';
import Button from 'components/Button';

const PayLinkForm = () => {
  const [link, setLink] = useState<string>('');

  const handleInputLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const { mutate: registerKakaoPayLinkId } = useRegisterKakaoPayLinkId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerKakaoPayLinkId({ kakaoPayLinkId: link });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="송금 링크를 여기에 붙여넣거나 입력해주세요."
        value={link}
        onChange={handleInputLinkChange}
        className="mt-4"
      />
      <Button
        type="submit"
        className="mt-4"
      >
        등록
      </Button>
    </form>
  );
};

export default PayLinkForm;
