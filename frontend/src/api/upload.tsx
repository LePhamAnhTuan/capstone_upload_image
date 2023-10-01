import { https } from "./configAxios"
import { getLocal } from "../utils/localStorage"

export const upload = (file:any) =>{
    const id= getLocal("user").id
    https.post("db_image/upload-image",file,id)


}