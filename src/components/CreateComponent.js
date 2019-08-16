import React, { Component } from 'react';
import axios from 'axios';

export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onChangefecha= this.onChangefecha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            lugar: '',
            fecha: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            nombre: this.state.nombre,
            lugar: this.state.lugar,
            fecha: this.state.fecha
        }
        axios.post('http://localhost:3000/serverport/add', serverport)
            .then(res => console.log(res.data));
        this.setState({
            nombre: '',
            lugar: '',
            fecha: ''
        })
    }
    onChangeHostName(e) {
        this.setState({
            nombre: e.target.value
        });
    }
    onChangePort(e) {
        this.setState({
            lugar: e.target.value
        });
    }

    onChangefecha(e) {
        this.setState({
            fecha: e.target.value
        });
    }


    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Crear evento</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Añadir Nombre:  </label>
                        <input type="text" value={this.state.nombre} className="form-control" onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Añadir Lugar:  </label>
                        <input type="text" value={this.state.lugar} className="form-control" onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <label>añadir fecha: </label>
                        <input type="text" value={this.state.fecha} className="form-control" onChange={this.onChangefecha}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="crear evento" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}