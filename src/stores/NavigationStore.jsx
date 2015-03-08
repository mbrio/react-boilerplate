import Marty from 'marty';

export default Marty.createStore({
  displayName: 'NavigationStore',

  getInitialState: function () {
    return {
      'About': 'about',
      'Contact': 'contact',
    };
  }
});