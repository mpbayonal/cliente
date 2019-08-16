import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:3000/serverport/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.nombre}
                </td>
                <td>
                    {this.props.obj.lugar}
                </td>
                <td>
                    {this.props.obj.fecha}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Borrar</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;