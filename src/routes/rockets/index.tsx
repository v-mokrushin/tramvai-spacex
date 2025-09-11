import { rocketsModel } from '~entities/rockets';

const RocketsPage = () => {
  const items = rocketsModel.selectors.useSelectItems();

  return (
    <div>
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default RocketsPage;

RocketsPage.actions = [rocketsModel.loadRockets];
