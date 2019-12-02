import React, { Component } from 'react';
import { FormattedPlural, FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';

class Pelicula extends Component {
    
    render() {
        return (
            <tr onClick={this.props.showDetail(this.props.p)}>
                <th scope="row">{this.props.p.id}</th>
                <td>{this.props.p.name}</td>
                <td>{this.props.p.directedBy}</td>
                <td>{this.props.p.country}</td>
                <td>{this.props.p.budget} <FormattedPlural value={this.props.p.budget} one={<FormattedMessage id="Million"/>} other={<FormattedMessage id="Millions"/>} /></td>
                <td>
                  <FormattedDate
                    value={new Date(this.props.p.releaseDate)}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                    />
                </td>
                <td>
                    <FormattedNumber value={this.props.p.views} />
                </td>
            </tr>
        );
    }

}
 
export default Pelicula;