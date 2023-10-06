export const saveLocal = (ten: string, data: any) => {
    const newData = JSON.stringify(data);
    localStorage.setItem(ten, newData);
};
export const getLocal = (ten: string) => {
    const value: any = localStorage.getItem(ten);
    if (value != null || value != undefined) {
        return JSON.parse(value) ? JSON.parse(value) : null;
    };
    return null
}

export const deleteLocal = (ten: string) => {
    localStorage.removeItem(ten);
};