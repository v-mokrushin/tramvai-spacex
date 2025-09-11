import { useNavigation } from '~shared/hooks';

export const MainPage = () => {
  const navigate = useNavigation();

  const onClickHandler = () => navigate.toRockets();

  return (
    <main>
      <button type="button" onClick={onClickHandler}>
        Rockets
      </button>
    </main>
  );
};
