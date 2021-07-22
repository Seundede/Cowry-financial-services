import React from 'react'
import { FaFire } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../Navbar/Button'
import {Link} from 'react-router-dom'
import './Pricing.css'


function Pricing() {
    return (
      <IconContext.Provider value= {{color:'#fff', size: 64}}>
        <div>
          <div className="pricing_section">
            <div className="pricing_wrapper">
              <div className="pricing_heading">Pricing</div>
              <div className="pricing_container">
                <Link to="/sign-up" className="pricing_container-card">
                  <div className="pricing_container-cardInfo">
                    <div className="icon">
                      <FaFire />
                    </div>
                    <h3>Starter</h3>
                    <h4>#2000</h4>
                    <p>per month</p>
                    <ul className="pricing_container-features">
                      <li>100 Transactions</li>
                      <li>2% Cash Back</li>
                      <li>#10,000 Limit</li>
                    </ul>
                    <Button buttonSize="btn-wide" buttonColor="primary">
                      Choose Plan
                    </Button>
                  </div>
                </Link>

                <Link to="/sign-up" className="pricing_container-card">
                  <div className="pricing_container-cardInfo">
                    <div className="icon">
                      <FaFire />
                    </div>
                    <h3>Starter</h3>
                    <h4>#2000</h4>
                    <p>per month</p>
                    <ul className="pricing_container-features">
                      <li>100 Transactions</li>
                      <li>2% Cash Back</li>
                      <li>#10,000 Limit</li>
                    </ul>
                    <Button buttonSize="btn-wide" buttonColor="blue">
                      Choose Plan
                    </Button>
                  </div>
                </Link>

                <Link to="/sign-up" className="pricing_container-card">
                  <div className="pricing_container-cardInfo">
                    <div className="icon">
                      <FaFire />
                    </div>
                    <h3>Starter</h3>
                    <h4>#2000</h4>
                    <p>per month</p>
                    <ul className="pricing_container-features">
                      <li>100 Transactions</li>
                      <li>2% Cash Back</li>
                      <li>#10,000 Limit</li>
                    </ul>
                    <Button buttonSize="btn-wide" buttonColor="primary">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
}

export default Pricing
