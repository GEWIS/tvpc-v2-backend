import * as express from 'express';
import {getTrains} from "./handlers/NSHandler";
import {_settings} from "./handlers/SettingsHandler";
import {getPhoto} from "./handlers/GEWISHandler";

export const register = ( app: express.Application ) => {
  app.get( '/api', (req: express.Request, res: express.Response) => {
    res.json('Hello world!!!');
  });

  app.get( '/api/settings', async (req:express.Request, res: express.Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(_settings);
  });

  app.get( '/api/infima', (req: express.Request, res: express.Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status(501).json({501: 'Not yet implemented'});
  });

  app.get('/api/photo', async (req: express.Request, res: express.Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(await getPhoto(parseInt(req.query.id.toString())));
  });

  app.get( '/api/trains', async (req: express.Request, res: express.Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(await getTrains());
  });
}
