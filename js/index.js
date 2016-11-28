app = {
  vue: {},
  repos: [
    {id: 1, name: 'react-mon', url: 'https://github.com/rgabriel01/react-mon'},
    {id: 2, name: 'vue-mon', url: 'https://github.com/rgabriel01/vue-mon'},
    {id: 3, name: 'lyfe', url: 'https://github.com/rgabriel01/lyfe'}
  ]
}

app.vue.hello = new Vue({
  el: '#app',
  data: {
    message: 'Hello world from a vue perspective!',
    hoverTitle: 'hover over me binding!'
  }
});

app.vue.listOfRepos = new Vue({
  el: '#repos-list',
  data: {
    repos: app.repos
  },

  methods: {
    addRepo: function() {
      var repoString = {
        id: 4,
        name: document.getElementById("name").value,
        url: document.getElementById("url").value
      };
      this.repos.push(repoString)
    }
  } 
})