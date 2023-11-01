import React, { useState } from 'react';

const DropDown = () => {
   
    const [country, setCountry] = useState("")
    const countries = [
        {
            name: "india", value: "IN", cities: ["delhi", "mumbai"]
        },
        {
            name: "pakistan", value: "PAK", cities: ["karachi", "lahore"]
        },
        {
            name: "bangladesh", value: "BG", cities: ["dhaka", "chittagong"]
        }
    ]
    return (
        <div>
            <button>Click</button>
            {countries.map((e, i) => <div key={i}>
                <div onClick={() => setCountry(country && country===e.name ? "" : e.name)} style={{ cursor: "pointer", width: "100px", backgroundColor: "yellow", marginLeft: "47vw", marginTop: "10px" }}>{e.name}</div>
                {country === e.name && e.cities.map((city) =>
                    <div style={{ width: "100px", backgroundColor: "aliceblue", marginLeft: "47vw", marginTop: "10px" }}>{city}</div>
                )
                }
            </div>)}
        </div>
    )
}

export default DropDown;
