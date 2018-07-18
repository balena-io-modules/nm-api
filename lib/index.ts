/*
 * Copyright 2018 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as _ from 'lodash';

import {NetworkManager} from './nm';
import wifiApi from './routes/wifi';

interface Route {
	method: string;
	handler: (nm: NetworkManager) => (req: any, res: any) => void;
}

async function createHttpServer() {
	const app = express();
	app.use(bodyParser.json());
	const nm = new NetworkManager();

	try {
		await nm.init();
		exposeAPIs(app, nm, '/wifi', wifiApi);
		return app;
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
	createHttpServer,
	NetworkManager
};
