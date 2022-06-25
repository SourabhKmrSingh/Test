export const getALlStories =  async(req,res)=>{
    try {
        const data =  await fetch("https://zenquip-backend.herokuapp.com/api/get-stories");
        const parsedData =  await data.json();
        if(parsedData)
            return parsedData
    } catch (error) {
        return []
    }
}