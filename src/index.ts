import { createApp, provide } from '@tramvai/core';
import { CommonModule } from '@tramvai/module-common';
import { SpaRouterModule } from '@tramvai/module-router';
import { RenderModule } from '@tramvai/module-render';
import { ServerModule } from '@tramvai/module-server';
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor';
import { SeoModule } from '@tramvai/module-seo';
import {
  RENDER_SLOTS,
  ResourceType,
  ResourceSlot,
  ASSETS_PREFIX_TOKEN,
} from '@tramvai/tokens-render';
import { HeaderModule } from '~shared/ui';
import { HttpClientModule } from '@tramvai/module-http-client';
import { ApiClientModule } from '~shared/api';
import '~shared/styles/global.css';

createApp({
  name: 'spacex',
  modules: [
    CommonModule,
    SpaRouterModule,
    RenderModule.forRoot({ useStrictMode: true }),
    SeoModule,
    ServerModule,
    ErrorInterceptorModule,
    HeaderModule,
    HttpClientModule,
    ApiClientModule,
  ],
  providers: [
    {
      provide: RENDER_SLOTS,
      multi: true,
      useValue: {
        type: ResourceType.asIs,
        slot: ResourceSlot.HEAD_META,
        payload:
          '<meta name="viewport" content="width=device-width, initial-scale=1">',
      },
    },
    provide({
      provide: ASSETS_PREFIX_TOKEN,
      useValue: () => process.env.ASSETS_PREFIX ?? '',
    }),
  ],
});
