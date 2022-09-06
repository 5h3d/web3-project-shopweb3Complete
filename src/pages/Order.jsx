import React, { useEffect, useState } from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { Container, Row, Col } from "reactstrap";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, abi } from '../Constants';


const Order = () => {

    // let day = new Date(1662473388)
    // console.log(day)
//    console.log( new Date(item.time.toNumber() * 1000).toLocaleString())
  const [orderTransactions, setOrderTransactions] = useState([])

  const getTransactions = async()=>{
    try {
      

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
      const getOrders = await contract.customerTransactions()
      
      
      console.log( await contract.customerTransactions())

      setOrderTransactions((prev)=>  getOrders)
     
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getTransactions()
  },[])


//   orderTransactions.current.map((item)=>{
//     return console.log(item)
// })
  
orderTransactions.map((item)=>{
    console.log(item)
})

    
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Orders" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
                { orderTransactions.length === 0 ? (
                <h5 className="text-center">Your Order is empty</h5>
              ) : (
                 <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Time </th>
                      <th>Product Name</th>                      
                      <th>Total price </th>
                      <th>Order state</th>
                    </tr>
                  </thead>
                  <tbody>
                 
                   {orderTransactions.map((item)=>(
                    <tr key={parseInt(item.transactionId._hex)}>

                        <td>{parseInt(item.transactionId._hex)}</td>
                        {/* <td>{item.time.toString()}</td> */}
                        <td>{new Date(item.time.toNumber() * 1000).toLocaleString()}</td>
                        <td>{item.productName.map((name)=>(<span>{name},</span>))}</td>
                        <td>{ethers.utils.formatEther(item.price)  } ETH</td>
                        
                        <td>{item.orderState == 0 ?"pending" : (item.orderState == 1? "confirmed": "canceled" ) }</td>
                    </tr>
                   ))}
                  </tbody>

            </table>
              )}



             
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};



export default Order;
