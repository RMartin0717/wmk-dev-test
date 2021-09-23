import * as React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import '../styles.css'

/**
 *
 * @param {array} news - an array of NewsItem instances
 * @returns News article cards. Feature the data shown in the mockup link
 * here: https://www.figma.com/file/8hAFoMRUo9lLmBeDko0UVr/Untitled?node-id=0%3A1
 * Each card should link to the attachmentUrl in a new window.
 * (BONUS 1) - Make the image have a 10% zoom effect and darken the
 * drop shadow when the card is hovered.
 * (BONUS 2) - Also on hover: have the Outlet Name animate out to the left.
 * The Contact Name should slide in from the right in its place.
 * (BONUS 3) - When the cards are on the mobile breakpoint, hide the article
 * text and the graphic element, so that the cards are shorter in height.
 *
 */
 //iterate over news array of NewsItem instances and create cards
 //display all cards
const Challenge2 = ({ news }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdGZuRrRUHt80K1sKtAz1GB_BypEfyVr7sQ&usqp=CAU'

  }

  const cards = news.map(newsItem => {
    const { headline, imageUrl, date, attachmentUrl, newsId, text, outletName, contactName } = newsItem
    return (
      <Col key={newsId}>
        <Card className='card'>
          <Card.Img
            src={imageUrl}
            alt='News image'
            onError={addDefaultSrc}
            className='card-image'
          />
          <Card.ImgOverlay className='overlay'>
            <Badge className='badge'>
              {date}
            </Badge>
          </Card.ImgOverlay>
          <Card.Body className='card-body'>
            <Card.Text className='card-text'>{outletName}</Card.Text>
            <Card.Title className='card-title'>{headline}</Card.Title>
            <Card.Img
              src='https://see.fontimg.com/api/renderfont4/AjYx/eyJyIjoiZnMiLCJoIjoxNzEsInciOjI2MywiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/4qa1/preview.png'
              className='circle-horizontal-bar'
            />
            <Card.Text className='card-text'>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        {cards}
      </Row>
    </Container>
  )
};

export default Challenge2;
