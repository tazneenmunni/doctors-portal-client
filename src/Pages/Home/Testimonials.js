import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "The services that I receive from (DN) is excellent.",
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: "William Herry",
            review: "Great medical office, wonderful and warm experience from start to finish",
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: "Watson Herry",
            review: "Great experience as a first timer.",
            location: 'California',
            img: people3
        },

    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;