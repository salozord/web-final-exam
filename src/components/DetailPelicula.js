import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class DetailPelicula extends Component {
    
    render() { 
        if(this.props.pelicula) {
            let p = this.props.pelicula;
            return (
                <div className="card mb-2">
                    <img src={p.poster} alt={p.name + " movie"} className="card-img-top" />
                    <div className="card-body">
                        <h4 className="card-title">{ p.name }</h4>
                        <p className="card-text">{ p.description}</p>
                        <p className="card-text font-weight-bold"><FormattedMessage id="Cast"/>: { p.cast}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="card mb-2">
                    <div className="card-body">
                        <p className="card-text"><FormattedMessage id="Text"/></p>
                    </div>
                </div>
            );
        }
    }
}
 
export default DetailPelicula;