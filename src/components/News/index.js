import { NewsContainer,TotalNews,CategoryContainer,Input,SearchIcon,InputContainer,
  SearchIconContainer,SelectContainer,Option,Icon } from "./NewsStyledComponents";


import { useState, useEffect } from "react";

import NewsItem from '../NewsItem'


const tabsList = [
  {
      id:1,
      category:"NRIS",

  },
  {
      id:2,
      category:"STARTUPS",

  },
  {
    id:2,
    category:"SPORTS",

}

]

const News = () => {

  const [news, setNews] = useState([]);

  const [searchInput,setSearchInpu] = useState("");

    const [category,setCategory] = useState(tabsList[0].category);
   

    const onChangeSearchInput  = (e) => {
        setSearchInpu(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }

   
    useEffect(() => {
      let apiUrl = `https://newsapi.org/v2/everything?q=${category.toLowerCase()}&from=2023-03-17&sortBy=publishedAt&apiKey=32f697bc1a4e428fae57ce496b8425d8`;
      const fetchNews = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const jsonData = data.articles;
        setNews(jsonData);
        console.log(jsonData);
      };
      fetchNews();
    }, [category]);

  return (
    <NewsContainer>
       <CategoryContainer>
       <InputContainer class="group">
    <Icon class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </Icon>
    <Input placeholder="Search" type="search" class="input"/>
</InputContainer>
        
        <SelectContainer value={category} onChange={onChangeCategory}>
            {tabsList.map((each,i) =>(
                <Option key={i} value={each.category}>{each.category}</Option>
            ))}
        </SelectContainer>
    </CategoryContainer>
        <TotalNews>
        {news.map((each,i) =>(
            <NewsItem key={i} newsDetails = {each}/>
           ))}
        </TotalNews>
    </NewsContainer>
  )
};

export default News;
