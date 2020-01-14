export const state = (lang) => ({
  locales: ['en-US', 'zh-CN'],
  locale: 'zh-CN'
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_DEFAULT_RIGHT_OVERFLOWY(state, value) {
    state.setDefaultRightOverflowy = value;
  },
  SET_ALL_LOADING(state, value){
    state.setAllLoading = value;
  },
  SET_LAYOUT(state, value){
    state.setLayout = value;
  }
};
