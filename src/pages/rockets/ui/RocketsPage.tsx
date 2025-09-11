import { rocketsModel } from '~entities/rockets';

export const RocketsPage = () => {
  const items = rocketsModel.selectors.useSelectItems();

  return (
    <div>
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

RocketsPage.actions = [rocketsModel.loadRockets];
