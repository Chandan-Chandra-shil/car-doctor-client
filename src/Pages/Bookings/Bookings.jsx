import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

       const handleDelete = (id) => {
         console.log(id);

         const proceed = confirm("Are you sure want to delete");
         if (proceed) {
           fetch(`http://localhost:5000/bookings/${id}`, {
             method: "DELETE",
             headers: {
               "content-type": "application/json",
             },
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               if (data.deleteCount > 0)
               
               alert("deleted successful");
               const remaining = bookings.filter(booking => booking._id !== id);
               setBookings(remaining)
              
             });
          
           
         }
       };


  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify({status:'confirm'})
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state 
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  }

  return (
    <div>
      <div>
        <p className="text-4xl font-bold text-center my-10">
          
          your booking information hare : {bookings.length}
        </p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
