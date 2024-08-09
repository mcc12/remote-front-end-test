import axios from "axios";
import { propertiesEndpoint } from "../constants";

export const getPropertyListings = async () => {
    return (await axios.get(propertiesEndpoint)).data || [];
}