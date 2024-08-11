import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { getPropertyListings } from '../../utils';

const PropertyListing = () => {
    const [listings, setListings] = useState([]);
    
    useEffect(() => { 
        const fetchData = async () => {
            getPropertyListings().then((result) => {
                setListings(result);
            }); 
        }
        fetchData();
    }, []);

    return (
        <ul className="PropertyListing">
            {listings.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
