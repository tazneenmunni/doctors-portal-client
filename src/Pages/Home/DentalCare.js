import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className=" rounded-lg shadow-2xl w-96" alt='' />
                <div className='ml-20'>
                    <h1 className="text-4xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content <br /> here', making it look like readable English. Many desktop <br /> publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;