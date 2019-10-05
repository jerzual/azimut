import uniloc from 'uniloc';

const Router = uniloc({
  menu: 'GET /',
  actions: 'GET /actions',
  turns: 'GET /turns',
  turnDetail: 'GET /turns/:turnId',
  turnEnd: 'POST /turns/:turnId/ready',
  city: 'GET /city',
  cityTiles: 'GET /city/:cityId',
  tiles: 'GET /tiles',
  tileContent: 'GET /tiles/:tileId',
  entityDetail: 'GET /entity/:entityId',
  inventory: 'GET /entity/:entityId/inventory',
  itemDetail: 'GET /entity/:entityId/inventory/:itemId',
  itemDrop: 'POST /entity/:entityId/inventory/',
  itemEquip: 'POST /entity/:entityId/history/:actonId',
});

export function onHashChange(event: Event) {
  const route = document.location.hash;
  return Router.lookup(route);
}

export default Router;
