import { useEffect } from 'react';
import { rocketsModel } from '~entities/rockets';

export const RocketsPage = () => {
  const items = rocketsModel.useSelectItems();

  const status = rocketsModel.useSelectLoadingStatus();

  useEffect(() => {
    localStorage.setItem(`RocketsPage ${Math.random()}`, 'render');

    return () => {
      //   localStorage.setItem(`RocketsPage ${Math.random()}`, 'unrender');
    };
  }, []);

  return (
    <div style={{ paddingTop: 35 }}>
      <span>{status}</span>
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

RocketsPage.actions = [rocketsModel.loadRockets];
