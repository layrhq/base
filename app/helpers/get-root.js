import Ember from 'ember';

export function getRoot(params/*, hash*/) {
  let model = params[0];
  let root = params[1];
  let areModels = params[2];

  if (areModels) {
    return `${root}.view`;
  } else {
    return `${root}.${model.path}`;
  }
}

export default Ember.Helper.helper(getRoot);
