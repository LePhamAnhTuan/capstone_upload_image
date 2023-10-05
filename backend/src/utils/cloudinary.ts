import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dq0eui07e',
    api_key: '844262528878368',
    api_secret: '5_WMcY1zbhDe7do3fnz9Sr-8iXc',

});

export async function uploadImage(imageUploaded: any) {
    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            imageUploaded,
            { crop: "fill", folder: "Save_url_backend" },
            (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            }
        );
    });
    return result
}
export async function uploadVideo(videoUploaded) {
    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_large(
            videoUploaded,
            { resource_type: "video", quality: 50, folder: "db_video" },
            (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            }
        );
    });
    return result
}


// export async function run(image: string) {
//     const result = await cloudinary.uploader.upload(image)
//     console.log('result: ', result);
// }
