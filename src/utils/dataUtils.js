import axios from "axios";
import { propertiesEndpoint } from "../constants";

/**
 * @returns array of property listings, will default to empty array if no data retrieved
 */
export const getPropertyListings = async () => {
    return (await axios.get(propertiesEndpoint)).data || [];
}