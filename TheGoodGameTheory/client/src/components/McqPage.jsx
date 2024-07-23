import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./mcqpage.css";
import mcqData from '../Data';
import { addMarks } from "../redux/Slice";
import { useDispatch } from 'react-redux';

const McqPage = () => {
  const navigate = useNavigate();
  const { qid } = useParams();
  const id = parseInt(qid);
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const setMarks = (e) => {
    if (mcqData[id-1].answer === e.target.value) {
      console.log("correct");
      dispatch(addMarks(10));
    } else {
      dispatch(addMarks(0));
    }
  }

  const handleNavigation = () => {
    if (id === 10) {
      navigate("/resultpage");
    } else {
      navigate(`/mcqpage/${id + 1}`);
    }
  }

  useEffect(() => {
    // Reset the state when the component mounts
    setAnswer("");
  }, [id]); // Reset the state whenever the id changes

  return (
    <div className='box'>
      <h4>{mcqData[id - 1].qno}{")"} {mcqData[id - 1].question}</h4>
      <div>
        {mcqData[id - 1].options.map((e) => (
          <div className='answer-box' key={e}>
            <input type="radio" name={`answer-${id}`} value={e} onChange={(e) => { setMarks(e) }}/>
            <p className='mt-3 mx-2'>{e}</p>
          </div>
        ))}
      </div>
      <div className='mt-3 d-flex flex-row-reverse mr-5'>
        <button onClick={() => handleNavigation()} className='btn btn-primary'>Next &rarr;</button>
      </div>
    </div>
  )
}

export default McqPage;
