import React, { Component } from 'react';
import './App.css';
// Movie.js에서 Movie 클래스를 가져온다
import Movie from './Movie'

// const movieTitles = [
//   "Matrix",
//   "Oldboy",
//   "Terrace House",
//   "Suits",
// ]

// const movieImages = [
//   "https://cdn.vox-cdn.com/thumbor/veUKpCnSKflt86VfCpTfyUqEfYQ=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/52198011/c6f5a81cb0fcc1c0e5ae3cba9cc4f40ae35476cb.0.jpeg",
//   "https://static01.nyt.com/images/2018/10/18/arts/18terracehouse/18terracehouse-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
//   "https://cdn.vox-cdn.com/thumbor/GltBWgYa-A_SKHFx2CKHEr93Zvw=/0x0:5760x3840/1200x0/filters:focal(0x0:5760x3840):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9898277/_DSC_I1A7700.JPG",
//   "https://i.ytimg.com/vi/4qBl7_t0M_U/maxresdefault.jpg",
// ]

// const movies = [
//   {
//     title: "Matrix", 
//     poster: "https://cdn.vox-cdn.com/thumbor/veUKpCnSKflt86VfCpTfyUqEfYQ=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/52198011/c6f5a81cb0fcc1c0e5ae3cba9cc4f40ae35476cb.0.jpeg",
//   },
//   {
//     title: "Oldboy",
//     poster: "https://static01.nyt.com/images/2018/10/18/arts/18terracehouse/18terracehouse-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
//   },
//   {
//     title: "Terrace House",
//     poster: "https://cdn.vox-cdn.com/thumbor/GltBWgYa-A_SKHFx2CKHEr93Zvw=/0x0:5760x3840/1200x0/filters:focal(0x0:5760x3840):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9898277/_DSC_I1A7700.JPG",
//   },
//   {
//     title: "Suits",
//     poster: "https://i.ytimg.com/vi/4qBl7_t0M_U/maxresdefault.jpg",
//   }
// ]

// extends를 사용하여 Component를 가져와야 App 이름의 컴포넌트를 만들 수 있다
class App extends Component {

  // state는 컴포넌트 안에서 사용되는 객체
  // 특징은 state가 바뀔 때마다 render()가 실행된다

  state = {
    // greeting: 'Hello!',
    // movies: [
    //   {
    //     title: "Matrix", 
    //     poster: "https://cdn.vox-cdn.com/thumbor/veUKpCnSKflt86VfCpTfyUqEfYQ=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/52198011/c6f5a81cb0fcc1c0e5ae3cba9cc4f40ae35476cb.0.jpeg",
    //   },
    //   {
    //     title: "Oldboy",
    //     poster: "https://static01.nyt.com/images/2018/10/18/arts/18terracehouse/18terracehouse-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    //   },
    //   {
    //     title: "Terrace House",
    //     poster: "https://cdn.vox-cdn.com/thumbor/GltBWgYa-A_SKHFx2CKHEr93Zvw=/0x0:5760x3840/1200x0/filters:focal(0x0:5760x3840):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9898277/_DSC_I1A7700.JPG",
    //   },
    //   {
    //     title: "Suits",
    //     poster: "https://i.ytimg.com/vi/4qBl7_t0M_U/maxresdefault.jpg",
    //   },
    //   {
    //     title: 'Heart Signal',
    //     poster: 'https://t1.daumcdn.net/cfile/tistory/2165C83C58A206D523',
    //   }
    // ]
  }

  // 컴포넌트가 마운트(트리에 삽입되면)되면 작동하는 메소드
  // state 값을 설정하면 render를 재실행한다
  // componentDidMount(){
  //   // ()는 function()과 같은 의미
  //   setTimeout(() => {
  //     // 아래와 같이 state 값은 직접 접근해서 값을 변경하면 바뀌지 않는다
  //     // this.state.greeting = 'something'

  //     // setState()를 사용해 새로운 state 객체를 지정해야 정상 작동한다
  //     // 새로 state 객체를 지정하면 render가 다시 실행된다
  //     // this.setState({
  //     //   greeting: 'Hello again!'
  //     // })
  //     this.setState({
  //       // movies: [
  //         // state 객체 movies 값을 전체 불러온다
  //         // ...this.state.movies,

  //         // 새로 추가할 데이터를 입력한다
  //         // {
  //         //   title: 'Heart Signal',
  //         //   poster: 'https://t1.daumcdn.net/cfile/tistory/2165C83C58A206D523',
  //         // }

  //       movies: [
  //         {
  //           title: "Matrix", 
  //           poster: "https://cdn.vox-cdn.com/thumbor/veUKpCnSKflt86VfCpTfyUqEfYQ=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/52198011/c6f5a81cb0fcc1c0e5ae3cba9cc4f40ae35476cb.0.jpeg",
  //         },
  //         {
  //           title: "Oldboy",
  //           poster: "https://static01.nyt.com/images/2018/10/18/arts/18terracehouse/18terracehouse-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  //         },
  //         {
  //           title: "Terrace House",
  //           poster: "https://cdn.vox-cdn.com/thumbor/GltBWgYa-A_SKHFx2CKHEr93Zvw=/0x0:5760x3840/1200x0/filters:focal(0x0:5760x3840):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9898277/_DSC_I1A7700.JPG",
  //         },
  //         {
  //           title: "Suits",
  //           poster: "https://i.ytimg.com/vi/4qBl7_t0M_U/maxresdefault.jpg",
  //         },
  //         {
  //           title: 'Heart Signal',
  //           poster: 'https://t1.daumcdn.net/cfile/tistory/2165C83C58A206D523',
  //         }
  //       ]
  //     })
  //   }, 5000)
  // }

  // 마운트가 되면 해당 url에 접속하여 데이터를 fetch해온다(가지고온다)
  componentDidMount(){
    this._getMovies();
  }


  // 설정된 시간 이후에 내장함수 실행
  // componentDidMount(){
  //   setTimeout(function(){
  //     console.log('hello');
  //   }, 5000)
    // 위에는 옛 방식, 아래가 현 방식
    // setTimeout(() => {
    //   console.log('hello');
    // }, 5000)
  // }

  // 언더바를 사용한 이유는 헷갈림을 방지하고 나만의 메소드를 나타내기 위해
  _renderMovies = () => {
    // const movies = this.state.movies.map((movie, index) => {
    const movies = this.state.movies.map(movie => {
      // movies 변수를 출력하여 어떤 데이터(포스터, 제목, 장르, 설명 등)를 갖고 있는지 확인하기
      // console.log(movies)
      // return <Movie title={movie.title} poster={movie.large_cover_image} key={index}/> movie.id로 값 변경
      // 영화 데이터(포스터, 제목, 장르, 설명) 갖고오기 
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  // 이전 라인에서의 작업을 기다리지 않고 별도로 작업 실행
  // AJAX는 페이지 새로고침 없이 데이터를 가져올 수 있다. (비동기화=async)
  _getMovies = async () => {
    // await는 _callApi()가 끝나기(값을 반환할 때)를 기다리고,
    const movies = await this._callApi()
    // this._callApi()를 통해 반환된 값을 state에 담는다
    this.setState({
      movies
    })
  }

  // fetch한 promise를 반환한다
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    // => 화살표 자체에 return이 내포되어있다
    .then(json => json.data.movies)
    // err => 는 function(err)와 같은 뜻
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      // // <div className="App">
      //   {/* 컴포넌트에 속한 state 객체에서 greeting 값을 가져온다 */}
      //   {/* {this.state.greeting} */}

      //   {/* Movie 컴포넌트에 title, poster에 각각 값을 담아준다 */}
      //   {/* <Movie title={movieTitles[0]} poster={movieImages[0]} />
      //   <Movie title={movieTitles[1]} poster={movieImages[1]} />
      //   <Movie title={movieTitles[2]} poster={movieImages[2]} />
      //   <Movie title={movieTitles[3]} poster={movieImages[3]} /> */}

      //   {/* 리스트에 map 메소드를 사용하여 각 객체의 데이터를 컴포넌트로 전달 */}
      //   {/* index는 각 객체에 id 값을 넣어주며 key값으로 전달한다 */}
      //   {/* {this.state.movies.map((movie, index) => {
      //     return <Movie title={movie.title} poster={movie.poster} key={index}/>
      //   })} */}

      //   {/* 삼항연산자 사용 */}
      //   {/* 컴포넌트 state 객체에서 movies 값이 있다면 _renderMovies 실행 없으면 'Loading' 문자 출력 */}
      //   {/* {this.state.movies ? this._renderMovies() : 'Loading'} */}
      // // </div>
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;