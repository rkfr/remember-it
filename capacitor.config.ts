import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'remember-it',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
