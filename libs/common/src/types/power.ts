/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "your_package_name";

export interface Power {
  id: number;
  power: string;
}

export interface CreatePowerdto {
  power: string;
}

export interface RemovePowerdto {
  id: number;
}

export interface RemovePowerResponse {
  message: string;
}

export const YOUR_PACKAGE_NAME_PACKAGE_NAME = "your_package_name";

export interface PowerServiceClient {
  createPower(request: CreatePowerdto): Observable<Power>;

  removePower(request: RemovePowerdto): Observable<RemovePowerResponse>;
}

export interface PowerServiceController {
  createPower(request: CreatePowerdto): Promise<Power> | Observable<Power> | Power;

  removePower(
    request: RemovePowerdto,
  ): Promise<RemovePowerResponse> | Observable<RemovePowerResponse> | RemovePowerResponse;
}

export function PowerServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createPower", "removePower"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PowerService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PowerService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const POWER_SERVICE_NAME = "PowerService";
