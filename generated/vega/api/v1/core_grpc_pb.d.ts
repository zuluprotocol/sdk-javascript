// package: vega.api.v1
// file: vega/api/v1/core.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as vega_api_v1_core_pb from "../../../vega/api/v1/core_pb";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_events_v1_events_pb from "../../../vega/events/v1/events_pb";
import * as vega_oracles_v1_spec_pb from "../../../vega/oracles/v1/spec_pb";
import * as vega_oracles_v1_data_pb from "../../../vega/oracles/v1/data_pb";
import * as vega_commands_v1_commands_pb from "../../../vega/commands/v1/commands_pb";
import * as vega_commands_v1_transaction_pb from "../../../vega/commands/v1/transaction_pb";
import * as vega_commands_v1_validator_commands_pb from "../../../vega/commands/v1/validator_commands_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../../github.com/mwitkow/go-proto-validators/validator_pb";

interface ICoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitTransaction: ICoreServiceService_ISubmitTransaction;
    propagateChainEvent: ICoreServiceService_IPropagateChainEvent;
    statistics: ICoreServiceService_IStatistics;
    lastBlockHeight: ICoreServiceService_ILastBlockHeight;
    getVegaTime: ICoreServiceService_IGetVegaTime;
    observeEventBus: ICoreServiceService_IObserveEventBus;
}

interface ICoreServiceService_ISubmitTransaction extends grpc.MethodDefinition<vega_api_v1_core_pb.SubmitTransactionRequest, vega_api_v1_core_pb.SubmitTransactionResponse> {
    path: "/vega.api.v1.CoreService/SubmitTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_core_pb.SubmitTransactionRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_core_pb.SubmitTransactionRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_core_pb.SubmitTransactionResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_core_pb.SubmitTransactionResponse>;
}
interface ICoreServiceService_IPropagateChainEvent extends grpc.MethodDefinition<vega_api_v1_core_pb.PropagateChainEventRequest, vega_api_v1_core_pb.PropagateChainEventResponse> {
    path: "/vega.api.v1.CoreService/PropagateChainEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_core_pb.PropagateChainEventRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_core_pb.PropagateChainEventRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_core_pb.PropagateChainEventResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_core_pb.PropagateChainEventResponse>;
}
interface ICoreServiceService_IStatistics extends grpc.MethodDefinition<vega_api_v1_core_pb.StatisticsRequest, vega_api_v1_core_pb.StatisticsResponse> {
    path: "/vega.api.v1.CoreService/Statistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_core_pb.StatisticsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_core_pb.StatisticsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_core_pb.StatisticsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_core_pb.StatisticsResponse>;
}
interface ICoreServiceService_ILastBlockHeight extends grpc.MethodDefinition<vega_api_v1_core_pb.LastBlockHeightRequest, vega_api_v1_core_pb.LastBlockHeightResponse> {
    path: "/vega.api.v1.CoreService/LastBlockHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_core_pb.LastBlockHeightRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_core_pb.LastBlockHeightRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_core_pb.LastBlockHeightResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_core_pb.LastBlockHeightResponse>;
}
interface ICoreServiceService_IGetVegaTime extends grpc.MethodDefinition<vega_api_v1_core_pb.GetVegaTimeRequest, vega_api_v1_core_pb.GetVegaTimeResponse> {
    path: "/vega.api.v1.CoreService/GetVegaTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_core_pb.GetVegaTimeRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_core_pb.GetVegaTimeRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_core_pb.GetVegaTimeResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_core_pb.GetVegaTimeResponse>;
}
interface ICoreServiceService_IObserveEventBus extends grpc.MethodDefinition<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse> {
    path: "/vega.api.v1.CoreService/ObserveEventBus";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<vega_api_v1_core_pb.ObserveEventBusRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_core_pb.ObserveEventBusRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_core_pb.ObserveEventBusResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_core_pb.ObserveEventBusResponse>;
}

export const CoreServiceService: ICoreServiceService;

export interface ICoreServiceServer extends grpc.UntypedServiceImplementation {
    submitTransaction: grpc.handleUnaryCall<vega_api_v1_core_pb.SubmitTransactionRequest, vega_api_v1_core_pb.SubmitTransactionResponse>;
    propagateChainEvent: grpc.handleUnaryCall<vega_api_v1_core_pb.PropagateChainEventRequest, vega_api_v1_core_pb.PropagateChainEventResponse>;
    statistics: grpc.handleUnaryCall<vega_api_v1_core_pb.StatisticsRequest, vega_api_v1_core_pb.StatisticsResponse>;
    lastBlockHeight: grpc.handleUnaryCall<vega_api_v1_core_pb.LastBlockHeightRequest, vega_api_v1_core_pb.LastBlockHeightResponse>;
    getVegaTime: grpc.handleUnaryCall<vega_api_v1_core_pb.GetVegaTimeRequest, vega_api_v1_core_pb.GetVegaTimeResponse>;
    observeEventBus: grpc.handleBidiStreamingCall<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse>;
}

export interface ICoreServiceClient {
    submitTransaction(request: vega_api_v1_core_pb.SubmitTransactionRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: vega_api_v1_core_pb.SubmitTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: vega_api_v1_core_pb.SubmitTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: vega_api_v1_core_pb.PropagateChainEventRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: vega_api_v1_core_pb.PropagateChainEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: vega_api_v1_core_pb.PropagateChainEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    statistics(request: vega_api_v1_core_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: vega_api_v1_core_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: vega_api_v1_core_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: vega_api_v1_core_pb.LastBlockHeightRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: vega_api_v1_core_pb.LastBlockHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: vega_api_v1_core_pb.LastBlockHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: vega_api_v1_core_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: vega_api_v1_core_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: vega_api_v1_core_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    observeEventBus(): grpc.ClientDuplexStream<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse>;
    observeEventBus(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse>;
    observeEventBus(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse>;
}

export class CoreServiceClient extends grpc.Client implements ICoreServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public submitTransaction(request: vega_api_v1_core_pb.SubmitTransactionRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: vega_api_v1_core_pb.SubmitTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: vega_api_v1_core_pb.SubmitTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: vega_api_v1_core_pb.PropagateChainEventRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: vega_api_v1_core_pb.PropagateChainEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: vega_api_v1_core_pb.PropagateChainEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: vega_api_v1_core_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: vega_api_v1_core_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: vega_api_v1_core_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: vega_api_v1_core_pb.LastBlockHeightRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: vega_api_v1_core_pb.LastBlockHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: vega_api_v1_core_pb.LastBlockHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: vega_api_v1_core_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: vega_api_v1_core_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: vega_api_v1_core_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_core_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public observeEventBus(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse>;
    public observeEventBus(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_v1_core_pb.ObserveEventBusRequest, vega_api_v1_core_pb.ObserveEventBusResponse>;
}
