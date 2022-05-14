import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Service = ({ service }) => {
    return (
        <section>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p className='text-center'>{service.description}</p>
                </div>

            </div>
            <br />
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

        </section>

    );
};

export default Service;