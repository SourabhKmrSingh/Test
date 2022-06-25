import axios from "axios";
export const getALlGeneralArticles =  async(req,res)=>{
    try {
        const data =  await axios.get("https://zenquip-backend.herokuapp.com/api/get-articles");
        if(data)
            return data.data
    } catch (error) {
        return []
    }
}