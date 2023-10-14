import { getLocal } from "../utils/localStorage"
import { https } from "./configAxios"
import jwt_decode from "jwt-decode";


const token = getLocal("user").Token
var decoded: any = jwt_decode(token);

export const uploadImages = async (files: any) => {
    return await https.post(`upload-image/${decoded.data.user_id}`, files,{
        onUploadProgress: (progressEvent) => {
            console.log('progressEvent: ', progressEvent.progress);
                
            }})
}
export const uploadVideos = async (files: any) => {
    return await https.post(`upload-video/${decoded.data.user_id}`, files)
}