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
  brandId?: number | undefined;
  typeId?: number | undefined;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Type {
  id: number;
  name: string;
}

export interface CreateDeviceRequest {
  name: string;
  price: number;
  rating: number;
  brandId?: number | undefined;
  typeId?: number | undefined;
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

export interface CreateBrandRequest {
  name: string;
}

export interface GetBrandByIdRequest {
  id: number;
}

export interface RemoveBrandRequest {
  id: number;
}

export interface RemoveBrandResponse {
  message: string;
}

export interface CreateTypeRequest {
  name: string;
}

export interface RemoveTypeRequest {
  id: number;
}

export interface RemoveTypeResponse {
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

export interface BrandServiceClient {
  createBrand(request: CreateBrandRequest): Observable<Brand>;

  getBrandById(request: GetBrandByIdRequest): Observable<Brand>;

  removeBrand(request: RemoveBrandRequest): Observable<RemoveBrandResponse>;
}

export interface BrandServiceController {
  createBrand(
    request: CreateBrandRequest,
  ): Promise<Brand> | Observable<Brand> | Brand;

  getBrandById(
    request: GetBrandByIdRequest,
  ): Promise<Brand> | Observable<Brand> | Brand;

  removeBrand(
    request: RemoveBrandRequest,
  ):
    | Promise<RemoveBrandResponse>
    | Observable<RemoveBrandResponse>
    | RemoveBrandResponse;
}

export function BrandServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createBrand',
      'getBrandById',
      'removeBrand',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('BrandService', method)(
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
      GrpcStreamMethod('BrandService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const BRAND_SERVICE_NAME = 'BrandService';

export interface TypeServiceClient {
  createType(request: CreateTypeRequest): Observable<Type>;

  removeType(request: RemoveTypeRequest): Observable<RemoveTypeResponse>;
}

export interface TypeServiceController {
  createType(
    request: CreateTypeRequest,
  ): Promise<Type> | Observable<Type> | Type;

  removeType(
    request: RemoveTypeRequest,
  ):
    | Promise<RemoveTypeResponse>
    | Observable<RemoveTypeResponse>
    | RemoveTypeResponse;
}

export function TypeServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createType', 'removeType'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('TypeService', method)(
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
      GrpcStreamMethod('TypeService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const TYPE_SERVICE_NAME = 'TypeService';
