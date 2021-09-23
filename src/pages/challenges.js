import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import get from "lodash/get";
import { NewsItem } from "../components/solutions/Challenge1";
import Challenge2 from "../components/solutions/Challenge2";

const Challenge1 = () => {
  /**
   * CHALLENGE 1
   * Create a simple NewsItem class by editing the file
   * in the NewsItem import above.
   */
  const [newsData, setNewsData] = useState(null);
  const url = "https://calc.dipra.org/feed";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.log("err: ", err));
  }, [setNewsData]);
  const edges = get(newsData, `Results.Result`, []).map((e) => {
    return {
      node: e
    };
  });
  /**
   * CHALLENGE 2
   * Use the NewsItem class you created to structure data.
   * Save that structured data to the variable below,
   * creating an array of each NewsItem instance pulled via API
   */
  const news = edges.map(edge => new NewsItem(edge.node))
  return (
    <Container>
      <Row className="flex-column">
        <Col>
          <h1>Challenge 1</h1>
          <h2>Structuring Data from an API Source</h2>
          <p>
            Follow the instructions found in the comments of
            src/pages/challenge1.js
          </p>
        </Col>
        <Col>
          <h1>Challenge 2</h1>
          <h2>Rendering structured data</h2>
          <p>
            {`Pass the structured data to the <Challenge2 /> component to render cards that look like `}
            <a href="https://www.figma.com/file/8hAFoMRUo9lLmBeDko0UVr/Untitled?node-id=0%3A1">
              this.
            </a>
          </p>
          <p>
            Utilize react-bootstrap to make the cards responsive. There should
            be no more than four cards per row on large breakpoint or greater.
            On medium breakpoint, there should be two cards per row. At and
            below the small breakpoint, there should be one card per row.
          </p>
        </Col>
      </Row>
      <Container>
        <Row>
          <Challenge2 news={news} />
        </Row>
      </Container>
    </Container>
  );
};

export default Challenge1;
