const app = new Vue({
    el: '#app',
    data: {
      movieName: '',
      arrayMovie: [],
      selectMovies: '',
      SelectSeries: '',
      
      
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

      // CALL MOVIES AND SERIES FROM API
      filterMovies(){
        this.genera();
        this.filtra();
      },


      // // NON FUNZIONA DA QUI
      // // // SELECT MOVIES
      // filtraFilm(){
      //   const self = this;
      //   /**
      //    * axios
      //    */
      //   axios.get('https://api.themoviedb.org/3/search/movie', {
      //     params: {
      //       api_key: '7b9720487c48630ca9c8f0d06516ecac',
      //       query: this.movieName,
      //       language: 'it-IT'
      //     }
      //   }
      //   )
      //   .then(function (response) {
      //     // handle success
          
      //     console.log('lista film' + self.listaFilm);
      //     if (self.selectMovies !== ''){
      //       self.arrayMovie = self.arrayMovie.filter(element=> element.genres.id === self.selectMovies)
      //     }
      //     console.log(response.data.results);
      //     self.arrayMovie = self.arrayMovie.concat(self.listaFilm);
          
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   // this.movieName = '';
      //   self.arrayMovie= [];
      // }, //--> end genera()
      
      // SELECT SERIES
      filtraSerie(){

      },


        // convert votes in stars
      convertStar(vote_average){
        return Math.ceil(vote_average / 2);
      } //--> end convertStar()


    } //--> end methods
  
  }) //--> end vue