// package: api.v1
// file: vega/api/trading.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as vega_api_trading_pb from "../../vega/api/trading_pb";
import * as vega_vega_pb from "../../vega/vega_pb";
import * as vega_markets_pb from "../../vega/markets_pb";
import * as vega_governance_pb from "../../vega/governance_pb";
import * as vega_assets_pb from "../../vega/assets_pb";
import * as vega_events_v1_events_pb from "../../vega/events/v1/events_pb";
import * as vega_oracles_v1_spec_pb from "../../vega/oracles/v1/spec_pb";
import * as vega_oracles_v1_data_pb from "../../vega/oracles/v1/data_pb";
import * as vega_commands_v1_commands_pb from "../../vega/commands/v1/commands_pb";
import * as vega_commands_v1_transaction_pb from "../../vega/commands/v1/transaction_pb";
import * as vega_commands_v1_validator_commands_pb from "../../vega/commands/v1/validator_commands_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";

interface ITradingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitTransaction: ITradingServiceService_ISubmitTransaction;
    propagateChainEvent: ITradingServiceService_IPropagateChainEvent;
    statistics: ITradingServiceService_IStatistics;
    lastBlockHeight: ITradingServiceService_ILastBlockHeight;
    getVegaTime: ITradingServiceService_IGetVegaTime;
    observeEventBus: ITradingServiceService_IObserveEventBus;
}

interface ITradingServiceService_ISubmitTransaction extends grpc.MethodDefinition<vega_api_trading_pb.SubmitTransactionRequest, vega_api_trading_pb.SubmitTransactionResponse> {
    path: "/api.v1.TradingService/SubmitTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_trading_pb.SubmitTransactionRequest>;
    requestDeserialize: grpc.deserialize<vega_api_trading_pb.SubmitTransactionRequest>;
    responseSerialize: grpc.serialize<vega_api_trading_pb.SubmitTransactionResponse>;
    responseDeserialize: grpc.deserialize<vega_api_trading_pb.SubmitTransactionResponse>;
}
interface ITradingServiceService_IPropagateChainEvent extends grpc.MethodDefinition<vega_api_trading_pb.PropagateChainEventRequest, vega_api_trading_pb.PropagateChainEventResponse> {
    path: "/api.v1.TradingService/PropagateChainEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_trading_pb.PropagateChainEventRequest>;
    requestDeserialize: grpc.deserialize<vega_api_trading_pb.PropagateChainEventRequest>;
    responseSerialize: grpc.serialize<vega_api_trading_pb.PropagateChainEventResponse>;
    responseDeserialize: grpc.deserialize<vega_api_trading_pb.PropagateChainEventResponse>;
}
interface ITradingServiceService_IStatistics extends grpc.MethodDefinition<vega_api_trading_pb.StatisticsRequest, vega_api_trading_pb.StatisticsResponse> {
    path: "/api.v1.TradingService/Statistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_trading_pb.StatisticsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_trading_pb.StatisticsRequest>;
    responseSerialize: grpc.serialize<vega_api_trading_pb.StatisticsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_trading_pb.StatisticsResponse>;
}
interface ITradingServiceService_ILastBlockHeight extends grpc.MethodDefinition<vega_api_trading_pb.LastBlockHeightRequest, vega_api_trading_pb.LastBlockHeightResponse> {
    path: "/api.v1.TradingService/LastBlockHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_trading_pb.LastBlockHeightRequest>;
    requestDeserialize: grpc.deserialize<vega_api_trading_pb.LastBlockHeightRequest>;
    responseSerialize: grpc.serialize<vega_api_trading_pb.LastBlockHeightResponse>;
    responseDeserialize: grpc.deserialize<vega_api_trading_pb.LastBlockHeightResponse>;
}
interface ITradingServiceService_IGetVegaTime extends grpc.MethodDefinition<vega_api_trading_pb.GetVegaTimeRequest, vega_api_trading_pb.GetVegaTimeResponse> {
    path: "/api.v1.TradingService/GetVegaTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_trading_pb.GetVegaTimeRequest>;
    requestDeserialize: grpc.deserialize<vega_api_trading_pb.GetVegaTimeRequest>;
    responseSerialize: grpc.serialize<vega_api_trading_pb.GetVegaTimeResponse>;
    responseDeserialize: grpc.deserialize<vega_api_trading_pb.GetVegaTimeResponse>;
}
interface ITradingServiceService_IObserveEventBus extends grpc.MethodDefinition<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse> {
    path: "/api.v1.TradingService/ObserveEventBus";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<vega_api_trading_pb.ObserveEventBusRequest>;
    requestDeserialize: grpc.deserialize<vega_api_trading_pb.ObserveEventBusRequest>;
    responseSerialize: grpc.serialize<vega_api_trading_pb.ObserveEventBusResponse>;
    responseDeserialize: grpc.deserialize<vega_api_trading_pb.ObserveEventBusResponse>;
}

export const TradingServiceService: ITradingServiceService;

export interface ITradingServiceServer extends grpc.UntypedServiceImplementation {
    submitTransaction: grpc.handleUnaryCall<vega_api_trading_pb.SubmitTransactionRequest, vega_api_trading_pb.SubmitTransactionResponse>;
    propagateChainEvent: grpc.handleUnaryCall<vega_api_trading_pb.PropagateChainEventRequest, vega_api_trading_pb.PropagateChainEventResponse>;
    statistics: grpc.handleUnaryCall<vega_api_trading_pb.StatisticsRequest, vega_api_trading_pb.StatisticsResponse>;
    lastBlockHeight: grpc.handleUnaryCall<vega_api_trading_pb.LastBlockHeightRequest, vega_api_trading_pb.LastBlockHeightResponse>;
    getVegaTime: grpc.handleUnaryCall<vega_api_trading_pb.GetVegaTimeRequest, vega_api_trading_pb.GetVegaTimeResponse>;
    observeEventBus: grpc.handleBidiStreamingCall<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse>;
}

export interface ITradingServiceClient {
    submitTransaction(request: vega_api_trading_pb.SubmitTransactionRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: vega_api_trading_pb.SubmitTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: vega_api_trading_pb.SubmitTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: vega_api_trading_pb.PropagateChainEventRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: vega_api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: vega_api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    statistics(request: vega_api_trading_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: vega_api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: vega_api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: vega_api_trading_pb.LastBlockHeightRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: vega_api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: vega_api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: vega_api_trading_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: vega_api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: vega_api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    observeEventBus(): grpc.ClientDuplexStream<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse>;
    observeEventBus(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse>;
    observeEventBus(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse>;
}

export class TradingServiceClient extends grpc.Client implements ITradingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public submitTransaction(request: vega_api_trading_pb.SubmitTransactionRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: vega_api_trading_pb.SubmitTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: vega_api_trading_pb.SubmitTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: vega_api_trading_pb.PropagateChainEventRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: vega_api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: vega_api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: vega_api_trading_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: vega_api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: vega_api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: vega_api_trading_pb.LastBlockHeightRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: vega_api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: vega_api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: vega_api_trading_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: vega_api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: vega_api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public observeEventBus(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse>;
    public observeEventBus(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<vega_api_trading_pb.ObserveEventBusRequest, vega_api_trading_pb.ObserveEventBusResponse>;
}
