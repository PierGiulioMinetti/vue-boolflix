const app = new Vue({
    el: '#app',
    data: {
      movieName: '',
      arrayMovie: [],
      
      
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
            query: this.movieName,
            language: 'it-IT'
          }
        }
        )
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          self.arrayMovie = self.arrayMovie.concat(response.data.results);
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        // this.movieName = '';
        self.arrayMovie= [];
      }, //--> end genera()

      filtra(){

        const self = this;
        /**
         * axios
         */
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '7b9720487c48630ca9c8f0d06516ecac',
            query: this.movieName,
            language: 'it-IT'
          }
        }
        )
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          self.arrayMovie = self.arrayMovie.concat(response.data.results);
          

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        this.movieName = '';

      }, //-->end filtra

      filterMovies(){
        this.genera();
        this.filtra();
      },

        // *****************************
        // convert votes in stars
      convertStar(vote_average){
        return Math.ceil(vote_average / 2);
      } //--> end convertStar()


    } //--> end methods

  }) //--> end vue