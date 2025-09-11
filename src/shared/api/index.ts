import { createToken, Module, provide } from '@tramvai/core';
import { ENV_MANAGER_TOKEN, ENV_USED_TOKEN } from '@tramvai/module-common';

import {
  HTTP_CLIENT_FACTORY,
  type HttpClient,
} from '@tramvai/module-http-client';
import { ASSETS_PREFIX_TOKEN } from '@tramvai/tokens-render';

export const API_CLIENT = createToken<HttpClient>('api_client');

export const apiClientDependency = {
  apiClient: API_CLIENT,
};

const API_BASE_URL_KEY = 'API_BASE_URL_KEY';

const API_BASE_URL = 'https://api.spacexdata.com/v4/';

@Module({
  providers: [
    provide({
      provide: API_CLIENT,
      useFactory: ({ factory, envManager }) =>
        factory({
          name: 'api_client',
          baseUrl: envManager.get(API_BASE_URL_KEY),
        }),
      deps: {
        factory: HTTP_CLIENT_FACTORY,
        envManager: ENV_MANAGER_TOKEN,
      },
    }),
    provide({
      provide: ENV_USED_TOKEN,
      multi: true,
      useValue: [
        {
          key: API_BASE_URL_KEY,
          optional: true,
          value: API_BASE_URL,
        },
      ],
    }),
    provide({
      provide: ASSETS_PREFIX_TOKEN,
      useValue: () => process.env.ASSETS_PREFIX ?? '',
    }),
  ],
})
export class ApiClientModule {}
