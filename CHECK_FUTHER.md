import { useActions } from '@tramvai/state';
import { useEffect } from 'react';
import { rocketsModel } from '~entities/rockets';
import { useRoute } from '@tramvai/module-router';

const RocketsPage = () => {
const items = rocketsModel.selectors.useSelectItems();

const loadingStatus = rocketsModel.selectors.useSelectLoadingStatus();

const loadRockets = useActions(rocketsModel.loadRockets);

const route = useRoute();

// console.log('items', items, loadingStatus);

console.log('RocketsPage');

useEffect(() => {
loadRockets();
console.log('useEffect', useEffect);
}, [route.path]);

return (
<div>
{items.map(({ id, name }) => (
<div key={id}>{name}</div>
))}
</div>
);
};

export default RocketsPage;

// RocketsPage.actions = [rocketsModel.loadRockets];
