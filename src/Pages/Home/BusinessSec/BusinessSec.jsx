import axios from "axios";
import { useEffect, useState } from "react";
import SingleBusiness from "./SingleBusiness";


const BusinessSec = () => {
    const [categories, setcategories] = useState([]);
    const url = "https://handicraft-business-server.vercel.app/allcategory";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : [];
                setcategories(data);
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);
    return (
        <div>
            <h3 className="text-4xl font-bold text-center">Business Section</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3   gap-5 ">
                {
                    categories?.map(category => (
                        <SingleBusiness key={category._id} category={category}></SingleBusiness>
                    ))
                }
            </div>

        </div>
    );
};

export default BusinessSec;