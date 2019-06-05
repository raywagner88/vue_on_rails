import JQuery from 'jquery';
let $ = JQuery;

const NavTopStore = {
  namespaced: true,
  state: {
  },
  actions: {
    logout(context) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `sign_out`,
          type: 'delete',
          success: function() {
            resolve();
          }
        })
      });
    }
  }
};

export default NavTopStore;
