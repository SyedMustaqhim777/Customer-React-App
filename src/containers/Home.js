import React from 'react';
import Menu from '../containers/Menu'
import CustomerApp from '../containers/CustomerApp';
import customerService from '../services/customer';


   function Home() {
      return (
         <div>
            <Menu/>
            <h2>Home</h2>
            <p> No. of customers in record: {customerService.getRecords().length} </p>
         </div>
      );
   }
    export default Home;