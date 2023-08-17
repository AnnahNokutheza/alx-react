import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  return list1.concat(list2);
}

function mergeElements(page1, page2) {
  const map1 = Map(page1);
  return map1.merge(page2);
}

export {
  concatElements,
  mergeElements
};
