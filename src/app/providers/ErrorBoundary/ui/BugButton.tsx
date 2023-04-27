import { FC, useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const BugButton: FC = () => {
  const { t } = useTranslation('main-page');

  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('THIS IS FAKE ERROR :)');
    }
  }, [error]);

  return (
    <Button onClick={ onThrow }>
      { t('Пробросить ошибку') }
    </Button>
  );
};

export default BugButton;
