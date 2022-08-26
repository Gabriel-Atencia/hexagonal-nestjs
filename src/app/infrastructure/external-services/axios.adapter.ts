import { Inject, Injectable } from '@nestjs/common';
import config from '../../infrastructure/config/config';
import { ConfigType } from '@nestjs/config';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class HttpApiGatewayAdapter {
  private instanceAxios: AxiosInstance;
  private dataBearerToken: string;
  private access_token: string;
  private expire: number;

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    this.instanceAxios = axios.create({
      httpsAgent: new https.Agent({}),
    });
    this.initDataForBearerToken();
  }

  initDataForBearerToken() {
    const body = {
      grant_type: 'client_credentials',
    };
    this.dataBearerToken = new URLSearchParams(body).toString();
  }
}
