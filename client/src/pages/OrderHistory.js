import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>

    <div class="row">
      <div class="historyContainer">
        {/* <Link class="continueLink" to="/">← Continue Shopping</Link> */}

        {user ? (
          <>
            <h2 class="historyUserTitle">
              Order History
            </h2>
              
            <h2 class="historyUser">
              {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id}>
                <h3 class="historyDate">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div class="historyInner">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div class="historyProduct" key={index}>
                      <Link class="historyInfo" to={`/products/${_id}`}>
                       
                        <img class="historyImage" alt={name} src={`/images/${image}`} />
                       
                        <p class="historyText">{name}</p>

                        <span>${price}</span>
                      </Link>
                      
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>

      </div>
    </>
  );
}

export default OrderHistory;
