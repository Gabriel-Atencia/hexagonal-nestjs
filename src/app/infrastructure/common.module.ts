import { Global, Module } from '@nestjs/common';
import { HttpApiGatewayAdapter } from './external-services/axios.adapter';

@Global()
@Module({
  providers: [HttpApiGatewayAdapter],
  exports: [HttpApiGatewayAdapter],
})
export class CommonModule {}
