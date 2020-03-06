import React from 'react'
import PropTypes from 'prop-types';
import './transactionItem.module.css'

const TransactionItem = ({transactions:{type, amount, currency}}) => (
        <tr> 
            <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
);

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}

export default TransactionItem;