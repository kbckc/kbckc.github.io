import { ClickAnalyticsPlugin, type IClickAnalyticsConfiguration } from '@microsoft/applicationinsights-clickanalytics-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const clickPluginInstance = new ClickAnalyticsPlugin();
const clickPluginConfig: IClickAnalyticsConfiguration = {
  autoCapture: true,
  dataTags: {
    useDefaultContentNameOrId: true,
  },
};

const CONNECTION_STRING = 'APPI_CONN_STR_HERE';
if (CONNECTION_STRING?.startsWith('APPI')) {
  console.warn('Please provide a valid Application Insights Instrumentation Key');
} else {
  const appInsights = new ApplicationInsights({
    config: {
      connectionString: CONNECTION_STRING,
      extensions: [
        clickPluginInstance,
      ],
      extensionConfig: {
        [clickPluginInstance.identifier]: clickPluginConfig,
      },
    },
  });
  appInsights.loadAppInsights();
  appInsights.trackPageView();
}


const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
  'Enter',
];
let cursor = 0;
let timeout: ReturnType<typeof setTimeout>;
document.addEventListener('keydown', e => {
  clearTimeout(timeout);
  if (e.key == KONAMI_CODE[cursor])
    cursor++;
  if (cursor == KONAMI_CODE.length) {
    const skylightLinkElement = document.getElementById('skylight-link');
    if (skylightLinkElement)
      skylightLinkElement.style.display = 'block';
    cursor = 0;
  }
  if (cursor > 0) {
    timeout = setTimeout(() => {
      cursor = 0;
    }, 5_000);
  }
});
