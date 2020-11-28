const app = new Vue({
    el: '#app',
    data: {
      movieName: '',
      arrayMovie: [],
      filteredMovies: [],
      arraySeries: [],
      filteredSeries: [],
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
                  ],
      seriesGenre: [
        {
            "id": 10759,
            "name": "Action & Adventure"
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
            "id": 10762,
            "name": "Kids"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10763,
            "name": "News"
        },
        {
            "id": 10764,
            "name": "Reality"
        },
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": 10766,
            "name": "Soap"
        },
        {
            "id": 10767,
            "name": "Talk"
        },
        {
            "id": 10768,
            "name": "War & Politics"
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
          self.filteredMovies = response.data.results;
          
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
          self.filteredSeries = response.data.results;
          

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


      // // SELECT MOVIES
      filtraFilm(){

       
        
        // console.log('film filtrati' + this.filteredMovies);
          // const filteredMovies = self.arrayMovie;

          if (this.selectMovies !== 'all' ){
            this.arrayMovie = this.arrayMovie.filter((element)=> {
              return element.genre_ids.includes(this.selectMovies)
          });
        }
             else {
               this.arrayMovie = this.filteredMovies;
             }
          // MODIFICARE QUI *********************
          
          
          
         
        
        // this.movieName = '';
        }, //--> end genera()
      
      // SELECT SERIES
      filtraSerie(){
        
          
          if (this.SelectSeries !== 'all'  ){
            this.arraySeries = this.arraySeries.filter(element=> element.genre_ids.includes(this.SelectSeries))
          } else {
            this.arraySeries = this.filteredSeries;
          }
          
         
      },


        // convert votes in stars
      convertStar(vote_average){
        return Math.ceil(vote_average / 2);
      } //--> end convertStar()


    } //--> end methods
  
  }) //--> end vue