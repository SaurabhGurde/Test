import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetMarks } from '../redux/Slice';
import { useDispatch } from 'react-redux';

const ResultPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const marks = useSelector((state)=>state.marks.marks)
    const handleNavgation = ()=>{
        dispatch(resetMarks())
          navigate("/")
    }
  return (
    <div style={{textAlign:"center", marginTop:"20vh"}}>
        <h2>Your Score Is <span className='text-primary'>{marks}</span></h2>
        <button onClick={()=>handleNavgation()} className='btn btn-primary'>Restart Test</button>
    </div>
  )
}

export default ResultPage