import {create} from "zustand";

const initialValues: ISnackBar = {
	open: false,
	message: "",
	severity: "success",
	openSnack: (severity: "error" | "warning" | "info" | "success", message: string) => {},
    closeSnack: () => {}
};

type ISnackBar = {
	open: boolean;
	message: string;
	severity: "error" | "warning" | "info" | "success";
	openSnack: (severity: "error" | "warning" | "info" | "success", message: string) => void;
    closeSnack: () => void;
};

 export const useSnackBar = create<ISnackBar>((set) => ({
	...initialValues,
	openSnack: (severity: "error" | "warning" | "info" | "success", message: string) => {
		return set((state) => ({
			...state,
			open: true,
			severity: severity,
			message: message,
		}));
	},
	closeSnack: () => {
		return set((state) => ({
			...state,
			open: false,
		}));
	},
}));


export function useOpenSnack() {
	const { openSnack, closeSnack } = useSnackBar((s) => s);

	return { openSnack, closeSnack };
}
