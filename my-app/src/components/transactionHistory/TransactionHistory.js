import React from 'react';
import TransactionItem from './transactionItem/TransactionItem';
import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({transactions}) => (
    <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(transaction => <TransactionItem transactions={transaction} key={transaction.id}/>)}
    
  </tbody>
</table>
);

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object)
}

export default TransactionHistory;