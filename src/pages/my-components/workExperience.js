import '../../App.css';
// import placeholder from '../../images/placeholder.jpg';
import nimbus from '../../images/nimbus.jpg';
import cubre from '../../images/cubrecomecrece.png';
import bbraun from '../../images/bbraun.jpg'
import React from 'react';

function WorkExperience() {
  return (
    <div class="container big">
      <backdrop class="container">
        <h2>B. Braun Medical</h2>
        <img src={bbraun} alt="this is a placeholder" width="80%" class="centeredimg"/>
        <p>Assistant to the manager for the head of the logistics and supply chain division </p>
        <p>Supervised billing procedures and tracking of orders, writing letters to customers 
          and suppliers to ensure on-time deliveries</p>
        <p>Provided critical information about the proper handling and storage of medical items</p>
      </backdrop>

      <backdrop class="container">
        <h2>Nimbus DT</h2>
        <img src={nimbus} alt="this is a placeholder" width="80%" class="centeredimg"/>
        <p>Used React and React hooks to manage the state of elements in a web page</p>
        <p>Used Amazon Web Services to build a backend and deploy code to the cloud</p>
        <p> Integrated responsive behavior to a web application so that it could maintain functionality
           and style in a mobile device</p>
      </backdrop>

      <backdrop class="container">
        <h2>Cubre, Come, Crece</h2>
        <img src={cubre} alt="this is a placeholder" width="100%" />
        <p>Taught elementary-level English classes to over 60 kids ages 8-13 without any previous experience in
        the language and helping them prepare for the A1-J7 certification</p>
        <p>Organized and participated in the 2021 FUSATE Santa Tecla Christmas dinner</p>
        <p>Arranged a charity drive in partnership with “Grupo AGAPE”, resulting in the collection and donation
        of over 100 articles of clothing</p>
      </backdrop>
    </div>
  );
}

export default WorkExperience;
