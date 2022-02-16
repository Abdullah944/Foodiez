import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const categoryCard = () => {
  return (
    <div className="category-cards">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                className="category-card-img"
                variant="top"
                src="https://cdn4.vectorstock.com/i/1000x1000/05/08/breakfast-meal-with-milk-cereals-and-clock-set-vector-14240508.jpg"
              />
              <Card.Body className="card-body">
                <Card.Title>Card title</Card.Title>
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
