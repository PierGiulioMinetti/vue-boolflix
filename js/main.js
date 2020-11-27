const app = new Vue({
    el: '#app',
    data: {
      movieName: '',
      arrayMovie: [],
      arraySeries: [],
      selectMovies: '',
      SelectSeries: '',
      movieGenre : [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
      
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
          self.arrayMovie = response.data.results;
          
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
          self.arraySeries = response.data.results;
          

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        this.movieName = '';
        self.arrayMovie= [];
      }, //-->end filtra

      // CALL MOVIES AND SERIES FROM API
      filterMovies(){
        this.genera();
        this.filtra();
      },


      // NON FUNZIONA DA QUI
      // // SELECT MOVIES
      filtraFilm(){
        const self = this;
          
          if (self.arrayMovie.length > 0 ){
            self.arrayMovie = self.arrayMovie.filter(element=> element.genre_ids.includes(self.selectMovies))
          }
          
         console.log(self.arrayMovie);
          
         
        
        // this.movieName = '';
      }, //--> end genera()
      
      // SELECT SERIES
      filtraSerie(){

      },


        // convert votes in stars
      convertStar(vote_average){
        return Math.ceil(vote_average / 2);
      } //--> end convertStar()


    } //--> end methods
  
  }) //--> end vue