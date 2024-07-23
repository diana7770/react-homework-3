import TransactionsItem from "../TransactionsItem/TransactionsItem";

const Transactions = ({ items }) => {
  return (
    <table className="transaction">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {/* {items.map((item) => (
          <TransactionsItem item={item} key={item.id} />
        ))} */}
      </tbody>
    </table>
  );
};

export default Transactions;
