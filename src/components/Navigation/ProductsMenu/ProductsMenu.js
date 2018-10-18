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
            <a href="/">Personal Loan against Salary</a>

          </div>
        </div>

        <div>
          <button>Money Transfers</button>
        </div>

        <div>
          <button>Ways to Bank</button>
        </div>

        <div>
          <button>Cards</button>
        </div>

        <div>
          <button>Payment Solutions</button>
        </div>

  </div>

)

export default ProductsMenu
