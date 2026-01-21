import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "../App.css";
import image from "../assets/image.png"
function Newscards({title,description,src,url}) {
    // const defaultimg="https://cbx-prod.b-cdn.net/COLOURBOX32862851.jpg?width=380&height=280&quality=70"
  return (
    <Card style={{ width: '18rem' }} className="news-card shadow-sm">
      <Card.Img variant="top" src={src?src:image} style={{height:"180px"}}/>
      <Card.Body>
        <Card.Title>{title.slice(0,50)}</Card.Title>
        <Card.Text>
          {description?description.slice(0,90):"Description not available. Click 'Read More' to read full article."}
        </Card.Text>
        <Button href={url}  target="_blank" rel="noreferrer" variant="primary">Read More</Button>
      </Card.Body> 
    </Card>
  );
}

export default Newscards;