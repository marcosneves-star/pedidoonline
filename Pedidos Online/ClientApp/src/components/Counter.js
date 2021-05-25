import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
            <h1>Comanda</h1>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Prato</Label>
                    <Input type="text" name="prato" id="exampleEmail" placeholder="Informe o prato escolhido" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Solicitante</Label>
                    <Input type="text" name="solicitante" id="examplePassword" placeholder="Informe o nome do solicitante" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Quantidade</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <Button color="secondary">Pedir</Button>{' '}
                <Button color="secondary">Copa</Button>{' '}
            </Form>
      </div>
    );
  }
}
