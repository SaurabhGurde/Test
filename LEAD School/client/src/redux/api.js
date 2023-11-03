export const getData = async(code) => {
    try {
        const response = await fetch(`https://api.zippopotam.us/in/${code}`, {
            method: 'GET',
                    
        });
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}