import { NetworkManager } from "..";

export interface Route {
	method: string;
	handler: (nm: NetworkManager) => (req: any, res: any) => void;
}
