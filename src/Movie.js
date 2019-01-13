import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

// class Movie extends Component {

//     // 부모 컴포넌트에서 받은 데이터 형태를 규정하여 이와 다를 경우 에러가 발생한다
//     static propTypes = {
//         // isRequired는 필수사항으로 지정해준다. 부모컴포넌트에서 값이 없을 경우 오류발생
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string,
//     }

//     render() {
//         return(
//             <div>
//                 {/* MoviePoster 컴포넌트에 poster 값을 담아준다 */}
//                 <MoviePoster poster={this.props.poster} />
//                 {/* 부모컴포넌트에서 전달 받은 title 값을 출력한다 */}
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie({poster, title, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
            {/* alt는 영화포스터 타이틀에 해당한다. 마우스 포인트 접근시 타이틀이 노출된다 */}
            <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {/* genres 배열의 각 데이터를 mapping하여 MovieGenre 컴포넌트로 전달 */}
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                {/* 시놉시스를 3줄로 줄여서 나머지는 ...으로 처리 */}
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

// 어떤 컴포넌트는 return만 위해서 존재하는데 MoviePoster가 그에 해당된다
// componentWillMount, function, update state 따위는 필요가 없다
// 하나의 props인 poster 데이터와 html 태그만 있으면 된다
// class MoviePoster extends Component {
    
//     // 부모 컴포넌트에서 받은 데이터를 체크하고, 지정한 타입과 다르면 에러 발생
//     static propTypes = {
//         poster: PropTypes.string.isRequired,
//     }

//     render() {
//         return(
//             // 부모컴포넌트인 Movie 컴포넌트에서 전달 받은 poster 값을 출력한다
//             <img src={this.props.poster} alt="Movie Poster" />
//         )
//     }
// }

// function 컴포넌트는 state를 가지지 않고, render(), 라이프사이클이 없다
// alt를 title에 삽입하면 웹에서 이미지에 마우스 포인트를 다가가면 영화제목이 뜬다
function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie