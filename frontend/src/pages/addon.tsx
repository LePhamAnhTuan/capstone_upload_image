import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import jwt_decode from "jwt-decode";
import React, { useState } from 'react';
import { https } from '../api/configAxios';
import { useConfirmModal } from '../common/modalCofirm/modalConfirm';
import { useOpenSnack } from '../common/snackBar/openSnack';
import { getLocal } from '../utils/localStorage';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
type Props = {}

function Addon() {
    const [files, setFiles] = React.useState<any>()
    const [loading, setLoading] = React.useState(false);
    const { openSnack } = useOpenSnack()
    const { onToggleShowModal } = useConfirmModal();

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
console.log(files.getBase64())

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true);
        const token = getLocal("user").Token
        var decoded: any = jwt_decode(token);

        if (!files) {
            
            openSnack("error", "Không tìm thấy files")
            return
        }
        try {
            for (const file of files) {
                const fomrdata = new FormData()
                fomrdata.append("file", file)
                const res = await https.post(`upload-image/${decoded.data.user_id}`, fomrdata)
                if (res) {

                    openSnack("success", `Tải thành công`)
                    setLoading(false);
                }
            }
        } catch (error: any) {
            setLoading(false);
            openSnack("error", "Thất bại")
            console.log(error)
        }


    }

    return (
        <div>
            <Box 
            style={{ width: "300px", padding: "10px", border: "2px dashed grey", borderRadius: "10px", }}
            sx={{":hover":{background: "#cccc",border:"2px dashed black",borderRadius:"10px",transition:"all 0.5s"}}}
            >

                <Box style={{ textAlign: "center",marginBottom:"10px" }}>
                    <Typography style={{ fontWeight: "700" }} >Upload Image...</Typography>
                </Box>

                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>   <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput type="file" multiple onChange={(e) => {
                        const file = e.target.files
                        setFiles(file)
                     }} />
                </Button>
                    <LoadingButton
                        size="medium"
                        onClick={handleSubmit}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        <span>Send</span>
                    </LoadingButton>
                </Box>
                <Box>
                   { files && <><img src={files?.url}></img></> }
                </Box>

            </Box>
        </div>
    )






}
export default Addon