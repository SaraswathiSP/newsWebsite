import {
    NewsList,NewsImage,NewsTitle,NewsDescription,ReadMore,MoreInfoContainer,RightArrow,AboutNews
} from './NewsItemStyledComponents'



const NewsItem = (props) =>{
    const {newsDetails} = props; 
    const {title,url,urlToImage,description} = newsDetails

    return (
        <NewsList>
            <NewsImage src={urlToImage} alt={title} />
            <AboutNews>
            <NewsTitle>{title}</NewsTitle>
            <NewsDescription>{description}</NewsDescription>
            <MoreInfoContainer>
            <ReadMore href={url}>Read More</ReadMore>
            <RightArrow/>
            </MoreInfoContainer>
            </AboutNews>
        </NewsList>

    )
}

export default NewsItem