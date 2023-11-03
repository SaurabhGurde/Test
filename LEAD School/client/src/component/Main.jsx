import React, { useState } from 'react';
import NavBar from "./NavBar";
import { useSelector, useDispatch } from 'react-redux';
import { getDataAsync, removeData } from '../redux/slice';
import loading from "./loading.gif";


const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);
    const isLoading = useSelector((state) => state.data.loading);
    const codeError = useSelector((state) => state.data.codeError);

    const [isCodeCorrect, setIsCodeCorrect] = useState(false);
    const [postCode, setPostCode] = useState(0);
     
   if(data && data["post code"] ){
    document.title=data.places[0]["place name"].split(" ")[0]
   }

    const handleGetData = () => {

        const code = postCode.toString(); 
        if (code.length === 6) {
            setIsCodeCorrect(false);
            dispatch(getDataAsync({ code: code }));
        }
        else {
            setIsCodeCorrect(true);
        }

    }

    return (
        <div >
            {data && data["post code"] ?
                <NavBar city={data.places[0]["place name"].split(" ")[0]} />
                :
                <NavBar />
            }

            <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <div className="mx-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Postal code</label>
                    <input onChange={(e) => setPostCode(e.target.value)} className='form-control' type="number" placeholder="Zip Code" />
                    {(isCodeCorrect || codeError) && <div className="form-text text-danger">Plz Enter Valid Postal Code</div>}
                    <button disabled={postCode === 0} onClick={handleGetData} className='btn btn-success mt-2'>Submit</button>
                </div>
                <div>
                    {data && data["post code"] ?
                        (
                            <Address
                                postalCode={data["post code"]}
                                country={data.country}
                                city={data.places[0]["place name"].split(" ")[0]}
                                state={data.places[0].state}
                            />
                        )
                        :
                        null
                    }
                    {( isLoading === true) && <img className='mx-5' style={{ width: "65%" }} src={loading} alt="loading" />}
                </div>
            </div>
        </div>
    )
}
                     





const Address = ({ postalCode, country, city, state }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="card mx-5" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{postalCode}</h5>
                    <h5 className='text-success mt-3'>#Country:</h5>
                    <h6 className="card-subtitle mb-2  text-muted">{country}</h6>
                    <h5 className='text-success mt-3'>#State:</h5>
                    <h6 className="card-subtitle mb-2  text-muted">{state}</h6>
                    <h5 className='text-success mt-3'>#City:</h5>
                    <h6 className="card-subtitle mb-2  text-muted">{city}</h6>
                    <button onClick={() => dispatch(removeData())} className='btn btn-danger'>Remove</button>
                </div>
            </div>
        </>
    )
}
export default Main

