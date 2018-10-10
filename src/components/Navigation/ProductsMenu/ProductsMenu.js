import React from 'react';

import classes from './ProductsMenu.css'

const ProductsMenu = () => (
  <div className={classes.menuArea}>
    <ul>
        <li><a href="/">Accounts</a>
            <ul className={classes.dropdown1}>
                <li><a href="">Current Accounts</a></li>
                <li><a href="">Savings Accounts</a></li>
                <li><a href="">Domiciliary Accounts</a></li>
                <li><a href="">Fixed Deposit Account</a></li>
                <li><a href="">Diaspora Banking</a></li>
                <li><a href="">Forms</a></li>
                <li><a href="">Back To School</a></li>
            </ul>
        </li>
        <li><a href="/">Best Loans and Mortgages</a>
            <ul className={classes.dropdown1}>>
                <li><a href="">Personal Home Loan (Mortgage)</a></li>
                <li><a href="">Joint Mortgage</a></li>
                <li><a href="">Get a Loan for Household Equipment</a></li>
                <li><a href="">Automobile Loan</a></li>
                <li><a href="">Personal Loan Against Salary</a></li>
            </ul>
        </li>
        <li><a href="/">Money Transfers</a>
          <ul className={classes.dropdown1}>
              <li><a href="">Moneygram</a></li>
              <li><a href="">TransFast</a></li>
              <li><a href="">Western Union Money Transfer</a></li>
              <li><a href="">Ria Money Transfer</a></li>
          </ul>
        </li>
        <li><a href="/">Ways to Bank</a>
        <ul className={classes.dropdown1}>
            <li><a href="">Online Banking</a></li>
            <li><a href="">React Mobile Apps</a></li>
            <li><a href="">Cards</a></li>
            <li><a href="">Reactmonie Agent</a></li>
            <li><a href="">Payment Channels</a></li>
            <li><a href="">Online Security</a></li>
        </ul>
        </li>
        <li><a href="/">Cards</a>
            <ul className={classes.dropdown1}>
                <li><a href="">Debit Cards</a></li>
                <li><a href="">Credit Cards</a></li>
                <li><a href="">Prepaid Cards</a></li>
                <li><a href="">Perfect Summer Fit</a></li>
            </ul>
        </li>
        <li><a href="/">Payment Solutions</a>
        <ul className={classes.dropdown1}>
            <li><a href="">E-Payments</a></li>
            <li><a href="">Bills and Utilities Payments</a></li>
            <li><a href="">Schools Solutions</a></li>
            <li><a href="">Collections</a></li>
            <li><a href="">Trade</a></li>
            <li><a href="">Taxes and Duties</a></li>
        </ul>
        </li>
    </ul>

  </div>

)

export default ProductsMenu
