import { useNavigation } from '~shared/hooks';
// import styles from './index.module.css';

export const IndexPage = () => {
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

export default IndexPage;
