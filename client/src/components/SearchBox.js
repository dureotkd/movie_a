import React from "react";
// import SelectOption from "./SelectOption";
import { Select } from "semantic-ui-react";

const genre = [
  { value: "", text: "장르선택" },
  { value: "1", text: "드라마" },
  { value: "2", text: "판타지" },
  { value: "3", text: "서부" },
  { value: "4", text: "공포" },
  { value: "5", text: "로맨스" },
  { value: "6", text: "모험" },
  { value: "7", text: "스릴러" },
  { value: "8", text: "느와르" },
  { value: "9", text: "컬트" },
  { value: "10", text: "다큐멘터리" },
  { value: "11", text: "코미디" },
  { value: "12", text: "가족" },
  { value: "13", text: "미스터리" },
  { value: "14", text: "전쟁" },
  { value: "15", text: "애니메이션" },
  { value: "16", text: "범죄" },
  { value: "17", text: "뮤지컬" },
  { value: "18", text: "SF" },
  { value: "19", text: "액션" },
  { value: "20", text: "무협" },
  { value: "21", text: "에로" },
  { value: "22", text: "서스펜스" },
  { value: "23", text: "서사" },
  { value: "24", text: "블랙코미디" },
  { value: "25", text: "실험" },
  { value: "26", text: "카툰" },
  { value: "27", text: "음악" },
];

const country = [
  { value: "", text: "국가선택" },
  { value: "KR", text: "한국" },
  { value: "FR", text: "프랑스" },
  { value: "GB", text: "영국" },
  { value: "HK", text: "홍콩" },
  { value: "JP", text: "일본" },
  { value: "US", text: "미국" },
  { value: "ETC", text: "기타" },
];

function SearchBox({ searchInputValue }) {
  const [search, setSearch] = React.useState({
    searchTitle: "",
    genre: "",
    country: "",
  });

  return (
    <div className="searchBox-wrap">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchInputValue(search);
          console.log(search);
        }}
      >
        <input
          className="search-input"
          type="text"
          value={search.searchTitle}
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            const cloneSearch = { ...search };
            cloneSearch.searchTitle = e.target.value;
            setSearch(cloneSearch);
          }}
        />
        <Select
          onChange={(event) => {
            console.log(event.target);
          }}
          placeholder="장르선택"
          options={genre}
        />
        <Select
          onChange={(e) => {
            console.log(e.target.value);
            const cloneSearch = { ...search };
            cloneSearch.searchTitle = e.target.value;
            setSearch(cloneSearch);
          }}
          placeholder="국가선택"
          options={country}
        />
      </form>
    </div>
  );
}

export default SearchBox;
