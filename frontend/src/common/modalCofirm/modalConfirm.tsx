import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import ConfirmIcon from "../../assets/iconConfirm/icon.png";
import create from "zustand";

export interface ModalConfirmDialogProps {}


type IConfirmModal = {
    open: boolean;
    title: string;
    text: string;
    Service: () => void;
    onToggleShowModal: (Service: () => void, title?: string, text?: string) => void;
};

const initialValues: IConfirmModal = {
    open: false,
    title: "Thông báo xác nhận",
    text: "Bạn có chắc chắn muốn thực hiện tác vụ này?",
    Service: () => {},
    onToggleShowModal: Service => {},
};

export const useConfirmModal = create<IConfirmModal>(set => ({
    ...initialValues,
    onToggleShowModal: (Service: () => void, title?: string, text?: string) => {
        return set(state => ({
            ...state,
            open: !state.open,
            title: title,
            text: text ?? "",
            Service,
        }));
    },
}));


const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    padding: "40px",
    paddingBottom: "25px",
};

const ModalConfirmDialog: React.FC<ModalConfirmDialogProps> = () => {
    const { Service, onToggleShowModal, open, text, title } = useConfirmModal();

    function onDelete() {
        Service();
        onClose();
    }

    function onClose() {
        onToggleShowModal(() => {});
    }

    let newTitle = title ? title : "Thông báo xác nhận xóa";

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper sx={style}>
                <Grid item xs={12} container direction={"column"} alignItems={"center"}>
                    <img src={ConfirmIcon} alt="excel" width="25%" height="25%" style={{ marginBottom: "10px" }} />

                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        color={"#E34343"}
                        sx={{ fontWeight: 600 }}
                    >
                        {newTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{}}>
                        {text}
                    </Typography>
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        marginTop={4}
                        gap={1}
                    >
                        <Button
                            onClick={onClose}
                            variant="contained"
                            sx={{
                                background: "#F1F1F1",
                                color: "#000",
                                paddingRight: "10px",

                                "&:hover": {
                                    backgroundColor: "#d8d8d8",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Hủy
                        </Button>
                        <Button
                            onClick={onDelete}
                            variant="contained"
                            sx={{
                                background: "#ED7272",
                                color: "#FFF",

                                "&:hover": {
                                    backgroundColor: "#ea5b5b",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Đồng Ý
                        </Button>
                    </Box>
                </Grid>
            </Paper>
        </Modal>
    );
};

export default ModalConfirmDialog;
