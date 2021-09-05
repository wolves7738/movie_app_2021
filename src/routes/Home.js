// 필요 모듈: axios, prop-types { npm install axios } { npm install prop-types }
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import './Home.css';


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  
  //프로미스(Promise)는 자바스크립트 비동기 처리에 사용되는 객체
  //프로미스(Promise)의 3가지 상태(states)
  //Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
  //Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
  //Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

  getMovies = async () => { //async는 기다려야 할것이 있다고 명시하고 await는 실제로 기다려야하는 내용을 지칭
    const { //json에서 movies의 경로가 data -> data -> movies
      data: {
        data: { movies },
      },
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); //영화 데이터 가져오는 함수 async await 사용이유 : 영화 데이터를 가져오는데 걸리는 시간때문
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies(); // react 실행 순서: constructor() -> render() -> Mount
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? ( //삼항연산자 isLoading이 true이면 Loading... 출력 false이면 Movie 컴포넌트에 props 전달하여 반환
          <div className="loader"> 
            <span className="loader_text">Loading...</span> 
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

//ES6 문법 정리:
//-템플릿 문자열{} JS 병합문자열은 코드가 지저분하고 길어진다.
//작은따옴표 대신 -> `(백틱)사용
//특수기호 ${}안에 변수넣기  
//----------------------------------예시
// var cart = {name : '도서', price : 1500}
// var getTotal = function(cart) {
//   return `${cart.price}원`
// }
// var myCart = `장바구니에 ${cart.name}가 있습니다. 가격은 ${cart.price}원 입니다.`
//----------------------------------
//배열이나 객체
//var array1 = ['one','two']
//var array2 = ['three','four']
//var combined = [...array1, ...array2]
//결과:['one','two','three','four']
//----------------------------------
//

export default Home;

