import { useRoute } from '@tramvai/module-router';

export const RocketPage = () => {
  const { id } = useRoute().params;

  return <span>RocketPage {id}</span>;
};
