import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Pelicula from './Pelicula';
import DetailPelicula from './DetailPelicula';
import Grafica from './Grafica';

class ListaPeliculas extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            peliculas: [],
            selected: undefined
        };

        this.showDetail = this.showDetail.bind(this);
    }

    componentDidMount() {
        let lang = navigator.language || navigator.userLanguage;

        if(!navigator.onLine) {
            let all = localStorage.getItem('movies');
            if(all) {
                this.setState({ peliculas: JSON.parse(all) });
            }
        }
        else {
            if(lang.includes('es'))
            {
                fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
                .then(res => res.json())
                .then(data => {
                    this.setState({ peliculas: data });
                    localStorage.setItem('movies', JSON.stringify(data));
                })
                .catch((err) => {
                    console.error(err);
                    let all = localStorage.getItem('movies');
                    if(all) {
                        this.setState({ peliculas: JSON.parse(all) });
                    }
                });
            }
            else {
                fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
                .then(res => res.json())
                .then(data => {
                    this.setState({ peliculas: data });
                    localStorage.setItem('movies', JSON.stringify(data));
                })
                .catch((err) => {
                    console.error(err);
                    let all = localStorage.getItem('movies');
                    if(all) {
                        this.setState({ peliculas: JSON.parse(all) });
                    }
                });
            }
        }
    }

    showDetail(movie) {
        this.setState({ selected: movie });
    }

    render() {
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-8">        
                        <table className="table table-striped table-hover">
                            <thead className="thead-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col"><FormattedMessage id="Name" /></th>
                                    <th scope="col"><FormattedMessage id="DirectedBy" /></th>
                                    <th scope="col"><FormattedMessage id="Country" /></th>
                                    <th scope="col"><FormattedMessage id="Budget" /></th>
                                    <th scope="col"><FormattedMessage id="Release" /></th>
                                    <th scope="col"><FormattedMessage id="Views" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.peliculas.map( (e,i) => <Pelicula key={i} p={e} showDetail={this.showDetail} />)}
                            </tbody>
                        </table>
                        {
                            (this.state.peliculas.length > 0)?
                            <Grafica data={this.state.peliculas} /> :
                            <FormattedMessage id="Loading" />
                        }
                    </div>
                    <div className="col-4 offset-4 col-md-4 offset-md-0">
                        <DetailPelicula pelicula={this.state.selected} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ListaPeliculas;