import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext)
  const { title, _id, price, img} = service;
  
  const handleCheckOut = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value; 
    const email = user?.email;
    const date = form.date.value;

    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price
    }; 
    console.log(booking)
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          alert("booking added successfully");
        }
      });

  }

  return (
    <div className="my-10 ">
      <h2 className="text-center text-3xl font-bold my-10 ">
        Check Out :{title}
      </h2>
      <form onSubmit={handleCheckOut} className="bg-base-200 p-10 rounded-lg">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name='name' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Your Email</span>
            </label>
            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$ ' +price}
            
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
