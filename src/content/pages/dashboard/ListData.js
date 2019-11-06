import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

class ListData extends React.Component {
  render() {
    return (
      <div id="ListData" className="List">
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Mariana Salas
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>PH: 103.2</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Miguel Nuno
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>PH: 102.2</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default ListData;