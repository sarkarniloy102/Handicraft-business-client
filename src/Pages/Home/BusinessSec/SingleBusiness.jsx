import React from 'react';

const SingleBusiness = ({ category }) => {
    const { name, years_of_operation, number_of_products, likes, image } = category;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={name}  // Changed alt text to be more descriptive
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{years_of_operation} years of operation</p>
                <p>{number_of_products} products available</p>
                <p>{likes} likes</p>
                <div className="card-actions">
                    <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBusiness;
