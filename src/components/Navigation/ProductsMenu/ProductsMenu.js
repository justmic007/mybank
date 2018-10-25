import React from 'react';

import classes from './ProductsMenu.css'

const ProductsMenu = () => (
  <div className={classes.flexContainer}>
      <div className={classes.dropdownAccounts}>
          <button>Accounts</button>
          <div className={classes.dropdownAccountsContent}>
              <a href="/">Current Accounts</a>
              <a href="/">Savings Accounts</a>
              <a href="/">Domiciliary Accounts</a>
              <a href="/">Fixed Deposit Accounts</a>
              <a href="/">Diaspora Banking</a>
              <a href="/">Forms</a>
              <a href="/">Back To School</a>
          </div>

      </div>

        <div className={classes.dropdownBestLoansandMortgages} >
          <button>Best Loans and Mortgages</button>
          <div className={classes.dropdownBestLoansandMortgagesContent}>
            <a href="/">Personal Home Loan (Mortgage)</a>
            <a href="/">Joint Mortgage</a>
            <a href="/">Get a Loan for Houseold Equipment</a>
            <a href="/">Automobile Loan</a>
            <a href="/">Personal Loan Against Salary</a>

          </div>
        </div>

        <div className={classes.dropdownMoneyTransfers} >
          <button>Money Transfers</button>
          <div className={classes.dropdownMoneyTransfersContent}>
            <a href="/">Moneygram</a>
            <a href="/">Transfast</a>
            <a href="/">Western Union Money Transfer</a>
            <a href="/">Ria Money Transfer</a>
          </div>
        </div>

        <div className={classes.dropdownWaysToBank}>
          <button>Ways to Bank</button>
            <div className={classes.dropdownWaysToBankContent}>
              <a href="">Online Banking</a>
              <a href="">React Mobile Apps</a>
              <a href="">Cards</a>
              <a href="">Reactmonie Agent</a>
              <a href="">Payment Channels</a>
              <a href="">Online Security</a>
          </div>
        </div>

        <div className={classes.dropdownCards}>
          <button>Cards</button>
          <div className={classes.dropdownCardsContent}>
            <a href="">Debit Cards</a>
            <a href="">Credit Cards</a>
            <a href="">Prepaid Cards</a>
            <a href="">Perfect Summer Fit</a>
          </div>
        </div>

        <div className={classes.dropdownPaymentSolutions}>
          <button>Payment Solutions</button>
          <div className={classes.dropdownPaymentSolutionsContent}>
            <a href="">E-Payments</a>
            <a href="">Bills and Utilities Payments</a>
            <a href="">Schools Solutions</a>
            <a href="">Collections</a>
            <a href="">Trade</a>
            <a href="">Taxes and Duties</a>
          </div>
        </div>

  </div>

)

export default ProductsMenu
