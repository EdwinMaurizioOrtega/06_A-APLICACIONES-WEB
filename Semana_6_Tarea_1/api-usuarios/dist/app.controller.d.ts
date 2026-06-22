import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getStatus(): {
        status: string;
        app: string;
        version: string;
        endpoints: {
            login: string;
            registro: string;
            perfil: string;
        };
    };
}
