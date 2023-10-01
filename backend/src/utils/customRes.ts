const successCode = (content) => {
    return {
        code: 200,
        message: "Thành công!!!",
        content
    }
}
const errorCode = (content) => {
    return {
        code: 500,
        message: "Lỗi BE",
        content
    }
}

export { successCode, errorCode }  