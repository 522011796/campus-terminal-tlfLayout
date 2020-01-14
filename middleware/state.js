export default function ({ isHMR, app, store, route, params, error, redirect,req }) {
  if (isHMR) return;
  store.commit('SET_DEFAULT_RIGHT_OVERFLOWY', store.state.setDefaultRightOverflowy);
  store.commit('SET_LAYOUT', store.state.setLayout);
}
