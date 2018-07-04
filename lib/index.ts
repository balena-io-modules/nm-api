import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as _ from 'lodash';

import {NetworkManager} from './nm';
import wifiApi from './routes/wifi';

interface Route {
	method: string;
	handler: (nm: NetworkManager) => (req: any, res: any) => void;
}

async function HttpServer(port: number = 1337) {
	const app = express();
	app.use(bodyParser.json());
	const nm = new NetworkManager();

	try {
		await nm.init();
		exposeAPIs(app, nm, '/wifi', wifiApi);
		app.listen(port);
	} catch (err) {
		throw err;
	}
}

function exposeAPIs(app, nm: any, rootApi: string = '/', APIs: any) {
	const root: string = (rootApi === '/') ? '' : rootApi;
	_.each(APIs, (route: Route, path: string) => {
		return app[route.method.toLowerCase()](`${root}/${path}`, _.partial(route.handler, nm));
	});
}

export {
	HttpServer,
	NetworkManager
};
