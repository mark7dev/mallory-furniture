import React, { Component } from 'react'
import './styles/About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <h1>About</h1>
        <h3>Welcome inside our company</h3>
        <p>We are a values-driven company with a passion for life at home. Every product we create is our idea for making home a better place. At Mallory Furniture, we have 389 stores in 48 countries (as of August 2016).</p>
        <h3>Vision and business idea</h3>
        <p>“To create a better everyday life for the many people”, this is the Mallory Furniture vision. Our business idea is “to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them”. We work hard to achieve quality at affordable prices for our customers through optimising our entire value chain, by building long-term supplier relationships, investing in highly automated production and producing large volumes. Our vision also goes beyond home furnishing. We want to create a better everyday for all people impacted by our business.</p>
        <h3>For a sustainable future</h3>
        <p>We have a strong tradition of working with sustainability. Find out more information in our People & Planet section.</p>
      </div>
    )
  }
}
