import React , { useEffect , useState } from 'react'

const PaymentDetail = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      const user_id = localStorage.getItem('userId');
      try {
        if (user_id) {
          const response = await fetch(`${process.env.REACT_APP_API}/api/cart-listuseridwise`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id }),
          });

          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data.ResponseData)) {
              setCartItems(data.ResponseData);
            } else {
              setCartItems([]);
            }
          } else {
            setError('Error fetching cart data: ' + response.statusText);
          }
        }
      } catch (error) {
        setError('Error fetching cart data: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, []);
  console.log(cartItems);
  function handleLogout() {
    localStorage.removeItem('userId');
    window.location.href = '/login'; 
  }


  
  return (
   <>
<div className="page-wrapper">
  <div className="page-content">
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">My Orders</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="/"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Account</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">My Orders</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="py-4">
      <div className="container">
        <h3 className="d-none">Account</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card shadow-none mb-3 mb-lg-0 border">
                  <div className="card-body">
                    <div className="list-group list-group-flush">	
                    <a href="/profile" className="list-group-item  d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                      <a href="/order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                      <a href="/address" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Addresses <i className="bx bx-home-smile fs-5" /></a>
                      <a href="/paymentdetail" className="list-group-item active d-flex justify-content-between align-items-center ">Payment Methods <i className="bx bx-credit-card fs-5" /></a>
                      <a href="/accountdetails" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i className="bx bx-user-circle fs-5" /></a>
                      <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={handleLogout}>Logout <i className="bx bx-log-out fs-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="table-light">
                          <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item , index) => (
                          <tr>
                            <td>{item.name.substring(0, 19)}</td>
                            <td>${item.discounted_price}</td>
                            <td>
                              <div className="d-flex gap-2">	<a href="javascript:;" className="btn btn-dark btn-sm rounded-0">Delete</a>
                              </div>
                            </td>
                          </tr>
                          ))}
                        </tbody>
                      </table>
                    </div> <a href="javascript:;" className="btn btn-dark rounded-0">Add Payment Method</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
   </>
  )
}

export default PaymentDetail
