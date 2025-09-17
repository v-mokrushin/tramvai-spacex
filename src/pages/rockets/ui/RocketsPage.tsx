import { rocketsModel } from '~entities/rockets';
import { PageLayout, PageLoader } from '~shared/ui';
import styles from './RocketsPage.module.css';
import { RocketCard } from './rocketCard/RocketCard';

export const RocketsPage = () => {
  const items = rocketsModel.useRockets();

  const { isPending } = rocketsModel.useLoadingStatus();

  if (isPending) {
    return <PageLoader />;
  }

  return (
    <PageLayout title="Rockets">
      <div className={styles.innerContainer}>
        {items.map((item) => (
          <RocketCard key={item.id} rocket={item} />
        ))}
      </div>
    </PageLayout>
  );
};

RocketsPage.actions = [rocketsModel.loadRockets];

//   useEffect(() => {
//     // localStorage.setItem(`RocketsPage ${Math.random()}`, 'render');

//     return () => {
//       //   resetRockets();
//       //   localStorage.setItem(`RocketsPage ${Math.random()}`, 'unrender');
//     };
//   }, []);
