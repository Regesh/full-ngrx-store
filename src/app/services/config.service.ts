import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {
    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve([
                { name: 'item1' },
                { name: 'item2' },
                { name: 'item3' },
                { name: 'item4' }
            ]);
        });
    }
}