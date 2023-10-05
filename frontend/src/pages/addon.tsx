import React from 'react';
import { Form } from 'react-router-dom';
import { https } from '../api/configAxios';
import { upload } from '../api/upload';
import { useConfirmModal } from '../common/modalCofirm/modalConfirm';
import { useOpenSnack } from '../common/snackBar/openSnack';
type Props = {}

function Addon({ }: Props) {
    const [files, setFiles] = React.useState<any>()
    const { openSnack } = useOpenSnack()
    const { onToggleShowModal } = useConfirmModal();

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        for (const file of files) {
            console.log(file)
            try {
                const res = await https.post(`upload-image/1`, file)
                console.log('res: ', res);
                if (res) {
                    openSnack("success", "Thành Công")
                }
                return res
            } catch (error) {
                console.log(error)
            }
        }

    }
    const handleCallApi = async (e: any) => {
        e.preventDefault()
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <p>Upload image</p>
                <input type='file' multiple accept='*' onChange={async (e: any) => {
                    const files = e.target.files
                    for (const file of files) {
                        console.log(file)
                        try {
                            const res = await https.post(`upload-image/1`, file)
                            console.log('res: ', res);
                            if ( res) {
                                openSnack("success", "Thành Công")
                            }
                            return res
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }}></input>

                <p>Upload video</p>
                <input type='file' multiple accept='video/*' onChange={(e) => { setFiles(e.target.files) }}></input>
                <button type="submit" >click me</button>
            </Form>
        </div>
    )
}

export default Addon