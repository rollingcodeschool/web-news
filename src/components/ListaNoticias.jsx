import React from "react";
import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({news}) => {
  return (
    <Row className="mt-5">
      {
        news.map((article, index) => <Noticia key={index} article={article}></Noticia>)
      }
    </Row>
  );
};

export default ListaNoticias;
