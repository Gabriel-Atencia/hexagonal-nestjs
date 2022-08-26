// src/config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('AppConfiguration', () => {
  return {
    port: process.env.PORT || 3000,
  };
});
