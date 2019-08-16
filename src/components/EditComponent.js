import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            lugar: '',
            fecha: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/serverport/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ nombre: response.data.nombre, lugar: response.data.lugar, fecha: response.data.fecha });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeHostName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePort(e) {
        this.setState({
            port: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
           nombre: this.state.nombre,
            lugar: this.state.lugar,
            fecha: this.state.fecha
        }
        axios.post('http://localhost:3000/serverport/update/'+this.props.match.params.id, serverport)
            .then(res => console.log(res.data));
        this.setState({
            nombre: '',
            lugar: '',
            fecha: ''
        })
        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Editar evento</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Añadir Nombre:  </label>
                        <input type="text" value={this.state.nombre} className="form-control" onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Añadir lugar: </label>
                        <input type="text" value={this.state.lugar} className="form-control" onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <label>Añadir fecha: </label>
                        <input type="text" value={this.state.fecha} className="form-control" onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Actualizar evento" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}