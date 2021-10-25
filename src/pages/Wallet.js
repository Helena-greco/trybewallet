import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import expenseAPI from '../service/ExpenseAPI';

class Wallet extends React.Component {
  constructor() {
    super();

    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  render() {
    return (
      <main>
        <Header />
        <ExpenseForm />
      </main>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(expenseAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);
