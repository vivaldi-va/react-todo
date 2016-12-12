import React from 'react';
import ProductListWrap from '../../../components/product-list/ProductListWrap';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <ul className="users-list"> { props.usersList &&
            Object.keys(props.usersList).map(key => (
                <li key={ key } >
                    { props.usersList[key].displayName } : { props.calculateTotal(props.usersList[key]) }
                </li>
            ))
        }
        </ul>
    );
}