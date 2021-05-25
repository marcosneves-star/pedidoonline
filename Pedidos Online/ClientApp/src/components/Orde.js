import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Orde extends Component {
    static displayName = Orde.name;

    render() {

        return (
            <Form>
                <FormGroup row>
                    <Label for="mesa" sm={2}>Mesa</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="tableSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="dish" sm={2}>Prato</Label>
                    <Col sm={10}>
                        <Input type="text" name="dish" id="dish" placeholder="Infome o prato de escolha" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="quantidade" sm={2}>Quantidade</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="amountDish">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="drink" sm={2}>Bebida</Label>
                    <Col sm={10}>
                        <Input type="text" name="drink" id="drink" placeholder="Informe a bebida" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="quantidade" sm={2}>Quantidade</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="amountDrink">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="requester" sm={2}>Solicitante</Label>
                    <Col sm={10}>
                        <Input type="text" name="requester" id="requester" placeholder="Infome o solicitante" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="warning">Efetuar pedido</Button>
                    </Col>
                </FormGroup>
            </Form>
        );

    }
}