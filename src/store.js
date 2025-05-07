import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        "userId": 1,
        "id": 1,
        "title": "テストタイトル１",
        "body": "テスト内容１"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "テストタイトル２",
        "body": "テスト内容２"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "テストタイトル３",
        "body": "テスト内容３"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "テストタイトル４",
        "body": "テスト内容４"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "テストタイトル５",
        "body": "テスト内容５"
      }
    ]
  },
  actions: {
    deletePost({ state, commit }, id) {
      commit(
        'setPosts',
        state.posts.filter(p => p.id != id)
      )
    },
    getSinglePost({ state }, id) {
      return state.posts.find(p => p.id == id)
    },
    savePost({ state, commit }, post) {
      let newPosts = state.posts;
      if (post.id) {
        newPosts = state.posts.map(p => {
          if (p.id == post.id) {
            return post;
          }
          return p;
        })
      } else {
        newPosts.push(post);
      }
      commit('setPosts', newPosts)
    }
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    }
  }
})

export default store;