import axios from 'axios';  
import { getPropertyListings } from '../dataUtils';

describe('dataUtils', () => {
    it('returns empty array when data missing from response', async () => {        
        jest.mock('axios');
        axios.get = jest.fn();

        // mock the response to getPropertyListings, return mock response missing the data object
        const resp = {};
        axios.get.mockResolvedValue(resp);

        const result = await getPropertyListings();
        
        // expect an array containing 0 elements
        expect(result).toHaveLength(0);
    });

    it('returns data as an array when request successful', async () => { 
        const DUMMY_PROPERTY = {
            id: 73864112,
            bedrooms: 3,
            summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
            displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950000,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-73864112.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
            propertyTitle: '3 bedroom flat for sale',
            mainImage: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
        };
        
        jest.mock('axios');
        axios.get = jest.fn();

        // mock the response to getPropertyListings, return an array with 5 DUMMY_PROPERTY elements
        const resp = { data: Array(5).fill(DUMMY_PROPERTY) };
        axios.get.mockResolvedValue(resp);

        const result = await getPropertyListings();
        
        // expect an array containing 5 elements
        expect(result).toHaveLength(5);

        // expect elements of the array to equal DUMMY_PROPERTY
        expect(result[0]).toEqual(DUMMY_PROPERTY);
    });
});