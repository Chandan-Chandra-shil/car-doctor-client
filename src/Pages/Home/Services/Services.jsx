import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
    .then(data=>setServices(data))
  },[])
  

  return (
    <div className="my-10">
      <div className="text-center  space-y-5 my-8 ">
        <h3 className="text-3xl font-bold text-rose-500">Services</h3>
        <h2 className="text-6xl font-bold"> Our services Area </h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which do not look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-">
       {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
       }
      </div>
    </div>
  );
};

export default Services;
