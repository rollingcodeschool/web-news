import React from "react";
import { Col,Card,Button } from "react-bootstrap";

const Noticia = ({article}) => {
  return (
    <>
      <Col md={4} lg={3} className='mb-3'>
        <Card className="h-100">
        <Card.Img variant="top" src={article.urlToImage} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
             {article.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a className="btn btn-primary" href={article.url} target='_blank'>Ver mas</a>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Noticia;
