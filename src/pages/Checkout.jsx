import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, abi } from '../Constants';
import { useNotification } from "@web3uikit/core"

import "../styles/checkout.css";

const Checkout = () => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enteraAddress, setEnterAddress] = useState("");

  let productId = []
  let price = []
  let productQuantity = []
  let title = []

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch2 = useNotification();
  const handleNewNotification = (info, message) => {
    dispatch2({
        type: info,
        message: message,
        title: 'New Notification',
        position: 'bottomR',
    });
  };

 



  const makePayment = async(e)=>{

    try {
      e.preventDefault();

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      const ethPrice = await contract.getLatestPrice()
      console.log(ethPrice)
      console.log((cartTotalAmount / ethers.utils.formatEther(ethPrice._hex) ) / 1e10)

      const parsedPrice = (cartTotalAmount / ethers.utils.formatEther(ethPrice._hex) ) / 1e10

      cartItems.map((item)=>{
        productId.push(item.id)
        price.push(item.price)
        productQuantity.push(item.quantity)
        title.push(item.title)
      })

      // console.log(productId,title, cartTotalAmount,price, productQuantity,enterEmail, enteraAddress, enterCity, enterCountry,enterNumber)
      console.log(productId)
      console.log(title)
      console.log(cartTotalAmount)
      console.log(price)
      console.log(productQuantity)
      console.log(enterEmail)
      console.log(enteraAddress)
      console.log(enterCity)
      console.log(enterCountry)
      console.log(enterNumber)

      const payment = await contract.makePayment(productId,title, cartTotalAmount,price, productQuantity,enterEmail, enteraAddress, enterCity, enterCountry,enterNumber,{value: ethers.utils.parseEther(`${parsedPrice}`) })
      handleNewNotification("info", "pending")

      payment.wait()
      handleNewNotification("info", "compeleted")
  
  
      

      
    } catch (error) {
      handleNewNotification("error", `${error.message}`)
    }
  }



  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={makePayment}>
                

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    // required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    // required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="address"
                    // required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    // required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    // required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>

                
                
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
