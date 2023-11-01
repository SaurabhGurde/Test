export async function getData(){
 try {
     const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getdata`, {
         method: 'POST',
         headers: {             
             'Content-Type': 'application/json'
         },         
     });
     const data = await response.json()
     return data;
 } catch (error) {
     console.log(error)
 }
}

export async function getFilterData(filter){
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getFilterdata`, {
            method: 'POST',
            headers: {             
                'Content-Type': 'application/json'
            },   
            body: JSON.stringify(filter)      
        });
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}