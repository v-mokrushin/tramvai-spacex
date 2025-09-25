import { launchesModel } from '~entities/launches';

export const Table = () => {
  const launches = launchesModel.useLaunches();

  return (
    <div>
      {launches.map(({ id, name }, index) => (
        <div key={id}>{`${index + 1} ${name}`}</div>
      ))}
    </div>
  );
};
