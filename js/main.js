const app = new Vue({
    el: '#app',
    data: {
      movieName: '',
      array: [],
    },
    created(){
     
    },
    methods: {
      // filtra film
      genera(){
        console.log(this.movieName);
        const self = this;
        /**
         * axios
         */
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '7b9720487c48630ca9c8f0d06516ecac',
            query: this.movieName
          }
        }
        )
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          self.array = response.data.results;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        this.movieName = '';
      }
    }
  })