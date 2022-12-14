import React from "react";
import { MovieCard, SearchBox } from "../components";
import axios from "axios";

function Main() {
  const [movieList, setMovieList] = React.useState([]);
  const [searchData, setSearchData] = React.useState({
    searchTitle: "",
    genre: "",
    country: "",
  });

  const searchMovie = async () => {
    const url = "http://localhost:5000/search/movie";
    await axios({
      url: url,
      method: "get",
      params: {
        title: searchData.searchTitle,
        display: 20,
        genre: searchData.genre,
        country: searchData.country,
      },
    })
      .then((response) => {
        const data = response.data.items.map((item) => {
          item.director = item.director.slice(0, -1);
          item.actor = item.actor.slice(0, -1);
          item.director = item.director.replaceAll(/\|/g, " | ");
          item.actor = item.actor.replace(/\|/g, " | ");
          return item;
        });
        data.total = response.data.total;
        setMovieList(data);
        console.log(data);
      })
      .catch(() => {
        console.log("에러");
      })
      .finally(() => {});
  };

  React.useEffect(() => {
    searchMovie();
  }, [searchData]);

  const searchInputValue = (x) => {
    setSearchData(x);
    console.log(searchData);
  };

  return (
    <div className="main-wrap">
      <SearchBox searchInputValue={searchInputValue} />
      <p className="totalText">
        {searchData.searchTitle === ""
          ? "찾으시는 영화를 검색해주세요"
          : `"${searchData.searchTitle}"검색 결과 총${
              movieList.total === undefined ? "0" : movieList.total
            }개의 영화가 검색되었습니다.`}
      </p>
      {movieList &&
        movieList.map((item, index) => {
          return <MovieCard key={`movieCard-${index}`} data={item} />;
        })}
    </div>
  );
}

export default Main;
