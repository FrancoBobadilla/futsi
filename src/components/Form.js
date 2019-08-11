import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  CustomInput,
  UncontrolledCollapse,
  Card,
  CardBody
} from "reactstrap";

import "./styles/form.css";

export default class Appform extends Component {
  render() {
    return (
      <div className="form-box">
        <Form>
          <Col md={4}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
          </Col>
          <Row>
            <Col md={2}>
              <FormGroup>
                <Label for="city">Province</Label>
                <Input type="select" name="city" id="city">
                  <option>Cordoba</option>
                  <option>Buenos Aires</option>
                  <option>Rosario</option>
                  <option>Santa Fe</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="select" name="city" id="city">
                  <option>I dont know</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="adress">Adress</Label>
                <Input type="text" name="adress" id="adress" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleCheckbox">Checkboxes</Label>
                <div>
                  <CustomInput type="switch" id="Monday" label="Monday" />
                  <UncontrolledCollapse toggler="#Monday">
                    <Card>
                      <CardBody>
                        <Col>
                          <Label>Open</Label>
                          <Input type="time" name="time1" id="time1" />
                        </Col>
                        <Col>
                          <Label>Close</Label>
                          <Input type="time" name="time2" id="time2" />
                        </Col>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="Tuesday" label="Tuesday" />
                  <UncontrolledCollapse toggler="#Tuesday">
                    <Card>
                      <CardBody>
                        <Col>
                          <Label>Open</Label>
                          <Input type="time" name="time1" id="time1" />
                        </Col>
                        <Col>
                          <Label>Close</Label>
                          <Input type="time" name="time2" id="time2" />
                        </Col>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="Wednesday" label="Wednesday" />
                  <UncontrolledCollapse toggler="#Wednesday">
                    <Card>
                      <CardBody>
                        <Col>
                          <Label>Open</Label>
                          <Input type="time" name="time1" id="time1" />
                        </Col>
                        <Col>
                          <Label>Close</Label>
                          <Input type="time" name="time2" id="time2" />
                        </Col>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="Thursday" label="Thursday" />
                  <UncontrolledCollapse toggler="#Thursday">
                    <Card>
                      <CardBody>
                        <Col>
                          <Label>Open</Label>
                          <Input type="time" name="time1" id="time1" />
                        </Col>
                        <Col>
                          <Label>Close</Label>
                          <Input type="time" name="time2" id="time2" />
                        </Col>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="Friday" label="Friday" />
                  <UncontrolledCollapse toggler="#Friday">
                    <Card>
                      <CardBody>
                        <Col>
                          <Label>Open</Label>
                          <Input type="time" name="time1" id="time1" />
                        </Col>
                        <Col>
                          <Label>Close</Label>
                          <Input type="time" name="time2" id="time2" />
                        </Col>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="Saturday" label="Saturday" />
                  <UncontrolledCollapse toggler="#Saturday">
                    <Card>
                      <CardBody>
                        <Col>
                          <Label>Open</Label>
                          <Input type="time" name="time1" id="time1" />
                        </Col>
                        <Col>
                          <Label>Close</Label>
                          <Input type="time" name="time2" id="time2" />
                        </Col>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleCheckbox">Type of canchas</Label>
                <div>
                  <CustomInput type="switch" id="five" label="5" />
                  <UncontrolledCollapse toggler="#five">
                    <Card>
                      <CardBody>
                        <Input type="text" placeholder="How many" />
                        <Input type="text" placeholder="Cost" />
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="seven" label="7" />
                  <UncontrolledCollapse toggler="#seven">
                    <Card>
                      <CardBody>
                        <Input type="text" placeholder="How many" />
                        <Input type="text" placeholder="Cost" />
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="nine" label="9" />
                  <UncontrolledCollapse toggler="#nine">
                    <Card>
                      <CardBody>
                        <Input type="text" placeholder="How many" />
                        <Input type="text" placeholder="Cost" />
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <CustomInput type="switch" id="eleven" label="11" />
                  <UncontrolledCollapse toggler="#eleven">
                    <Card>
                      <CardBody>
                        <Input type="text" placeholder="How many" />
                        <Input type="text" placeholder="Cost" />
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Button size="sm">Submit</Button>
        </Form>
      </div>
    );
  }
}
