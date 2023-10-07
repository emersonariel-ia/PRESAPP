import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.betania.presapp',
  appName: 'Presapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
