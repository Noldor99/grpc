/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'device';

export interface Device {
  name: string;
  price: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDeviceRequest {
  name: string;
  price: number;
  rating: number;
}

export interface CreateDeviceResponse {
  message: string;
}

export interface RemoveDeviceRequest {
  id: number;
}

export interface RemoveDeviceResponse {
  message: string;
}

export const DEVICE_PACKAGE_NAME = 'device';

export interface DeviceServiceClient {
  createDevice(request: CreateDeviceRequest): Observable<Device>;

  removeDevice(request: RemoveDeviceRequest): Observable<RemoveDeviceResponse>;
}

export interface DeviceServiceController {
  createDevice(
    request: CreateDeviceRequest,
  ): Promise<Device> | Observable<Device> | Device;

  removeDevice(
    request: RemoveDeviceRequest,
  ):
    | Promise<RemoveDeviceResponse>
    | Observable<RemoveDeviceResponse>
    | RemoveDeviceResponse;
}

export function DeviceServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createDevice', 'removeDevice'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('DeviceService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('DeviceService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const DEVICE_SERVICE_NAME = 'DeviceService';
