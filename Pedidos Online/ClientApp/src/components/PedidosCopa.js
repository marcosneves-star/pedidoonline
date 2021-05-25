import React, { Component } from 'react';

export class PedidosCopa extends Component {
    static displayName = PedidosCopa.name;

    constructor(props) {
        super(props);
        this.state = { forecasts/*vetor*/: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData/*Metodo*/();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Mesa</th>
                        <th>Prato</th>
                        <th>Quantidade</th>
                        <th>Solicitante</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                            <td>{forecast.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Cozinha</h1>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
