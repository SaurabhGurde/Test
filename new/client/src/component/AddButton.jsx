import React, { useEffect, useState } from 'react'

const AddButton = () => {

    // const [Add, setAdd] = useState()
    // const [A, setA] = useState(10)
    // const [B, setB] = useState(20)

    // useEffect(()=>{
    //    setAdd(A+4)
    //    setA(A+4)
    // },[])
    function findMissing(arr,N){
        let i;
        let temp = [];
        for (i = 0; i <= N; i++) {
                  temp[i] = 0;
              }
       
              for (i = 0; i < N; i++) {
                  temp[arr[i] - 1] = 1;
              }
       
              let ans = 0;
              for (i = 0; i <= N; i++) {
                  if (temp[i] == 0)
                      ans = i + 1;
              }
              console.log(ans);
      }
      findMissing( [1,2,3,4,5,7,8,10], 20)
  return (
    <div>
       
    </div>
  )
}

export default AddButton