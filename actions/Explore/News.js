import axios from "axios"
export const getAllNews =  async(req,res)=>{
    try {
        const data =  await axios.get("https://zenquip-backend.herokuapp.com/api/get-News");
        // const parsedData =  await data.json();
        if(data){
            return data.data

        }
    } catch (error) {
        return []
    }
}