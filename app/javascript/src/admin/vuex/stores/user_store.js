import JQuery from 'jquery';
let $ = JQuery;
import helpers from '../../helpers';

const UserStore = {
  namespaced: true,
  state: {
    users: [],
    user: {},
    errors: {},
    progress: '',
    currentUser: {}
  },
  mutations: {
    one(state, data) {
      state.errors = {}
      state.user = data.user;
      return state;
    },
    many(state, data) {
      state.users = data.users;
      return state;
    },
    progress(state, step) {
      state.progress = step;
      return state.progress;
    },
    errors(state, data) {
      state.errors = helpers.showErrors(data);
      return state.errors;
    },
    currentUser(state, data) {
      state.currentUser = data.user;
      return state.currentUser;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: 'users',
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data)
        }
      })
    },
    new(context, id) {
      $.ajax({
        url: `users/new`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
    create(context, form) {
      context.commit('progress', 'loading')
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `users`,
          type: 'post',
          data: {
            user: form
          },
          success: function(data) {
            context.commit('progress', 'success')
            resolve(data);
          },
          error: function(data) {
            context.commit('progress', 'failed')
            context.commit('errors', data);
          }
        })
      })
    },
    edit(context, id) {
      $.ajax({
        url: `users/${id}/edit`,
        type: 'get',
        success: function(data) {
          context.commit('one', data);
        }
      });
    },
    update(context, user) {
      context.commit('progress', 'loading')
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `users/${user.id}`,
          type: 'put',
          data: {
            user: user
          },
          success: function(data) {
            context.commit('progress', 'success')
            resolve(data);
          },
          error: function(data) {
            context.commit('progress', 'failed')
            context.commit('errors', data);
            reject(data);
          }
        });
      });
    },
    destroy(context, user_id) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `users/${user_id}`,
          type: 'delete',
          success: function(data) {
            resolve(data);
          },
          error: function(data) {
            reject(data);
          }
        });
      });
    },
    user(context, query) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: 'users/user',
          type: 'get',
          data: query,
          success(data) {
            context.commit('currentUser', data)
            resolve(data);
          },
          error(data) {
            reject(data);
          }
        });
      });
    }
  }
};

export default UserStore;
