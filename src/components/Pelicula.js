import React, { Component } from 'react';
import { FormattedPlural, FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';

class Pelicula extends Component {
    
    render() {
        let p = this.props.p;
        return (
            <tr onClick={() => this.props.showDetail(p)}>
                <th scope="row">{p.id}</th>
                <td>{p.name}</td>
                <td>{p.directedBy}</td>
                <td>{p.country}</td>
                <td>{p.budget} <FormattedPlural value={p.budget} one={<FormattedMessage id="Million"/>} other={<FormattedMessage id="Millions"/>} /></td>
                <td>
                  <FormattedDate
                    value={new Date(p.releaseDate)}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                    />
                </td>
                <td>
                    <FormattedNumber value={p.views} />
                </td>
            </tr>
        );
    }

}
 
export default Pelicula;