import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
  const {_id,title,img,price } = service;

  return (
    <div className="card w-96 shadow-xl border  hover:bg-slate-200 mb-5">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title t">{title}</h2>
        <p className="text-lg font-semibold text-rose-600">price : ${price}</p>
        <div className="card-actions  justify-end ">
          <Link to={`checkout/${_id}`}>
            <button className="btn btn-primary  ">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;