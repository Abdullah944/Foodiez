import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const categoryCard = () => {
  return (
    <div className="category-cards">
      {/* ---------------------------------- BREAKFAST:: -------------------------------------------*/}
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="breakfast-img-text">
              <Card.Img
                className="category-card-img "
                variant="top"
                src="https://cdn4.vectorstock.com/i/1000x1000/05/08/breakfast-meal-with-milk-cereals-and-clock-set-vector-14240508.jpg"
              />
              <Card.Body className="card-body">
                <Card.Title>BREAKFAST</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* -----------------------------  LUNCH:: -------------------------------------------------------------------------------*/}

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="lunch-img-text">
              <Card.Img
                className="category-card-img "
                variant="top"
                src="https://jf-staeulalia.pt/img/other/26/collection-free-lunch-cliparts.jpg"
              />
              <Card.Body className="card-body">
                <Card.Title>LUNCH</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* -----------------------------  DINNER:: -------------------------------------------------------------------------------*/}

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="dinner-img-text">
              <Card.Img
                className="category-card-img "
                variant="top"
                src="https://thumbs.dreamstime.com/b/dinner-icon-logo-modern-line-style-high-quality-black-outline-pictogram-web-site-design-mobile-apps-vector-83645599.jpg"
              />
              <Card.Body className="card-body">
                <Card.Title>DINNER</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default categoryCard;
