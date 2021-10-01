// package: vega.coreapi.v1
// file: vega/coreapi/v1/coreapi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as vega_coreapi_v1_coreapi_pb from "../../../vega/coreapi/v1/coreapi_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_events_v1_events_pb from "../../../vega/events/v1/events_pb";

interface ICoreApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAccounts: ICoreApiServiceService_IListAccounts;
    listAssets: ICoreApiServiceService_IListAssets;
    listNetworkParameters: ICoreApiServiceService_IListNetworkParameters;
    listParties: ICoreApiServiceService_IListParties;
    listValidators: ICoreApiServiceService_IListValidators;
    listMarkets: ICoreApiServiceService_IListMarkets;
    listProposals: ICoreApiServiceService_IListProposals;
    listMarketsData: ICoreApiServiceService_IListMarketsData;
    listVotes: ICoreApiServiceService_IListVotes;
    listPartiesStake: ICoreApiServiceService_IListPartiesStake;
    listDelegations: ICoreApiServiceService_IListDelegations;
}

interface ICoreApiServiceService_IListAccounts extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListAccountsRequest, vega_coreapi_v1_coreapi_pb.ListAccountsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListAccountsRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListAccountsRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListAccountsResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListAccountsResponse>;
}
interface ICoreApiServiceService_IListAssets extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListAssetsRequest, vega_coreapi_v1_coreapi_pb.ListAssetsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListAssetsRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListAssetsRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListAssetsResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListAssetsResponse>;
}
interface ICoreApiServiceService_IListNetworkParameters extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListNetworkParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
}
interface ICoreApiServiceService_IListParties extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListPartiesRequest, vega_coreapi_v1_coreapi_pb.ListPartiesResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListParties";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListPartiesRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListPartiesRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListPartiesResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListPartiesResponse>;
}
interface ICoreApiServiceService_IListValidators extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, vega_coreapi_v1_coreapi_pb.ListValidatorsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListValidators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListValidatorsRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListValidatorsRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListValidatorsResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListValidatorsResponse>;
}
interface ICoreApiServiceService_IListMarkets extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListMarketsRequest, vega_coreapi_v1_coreapi_pb.ListMarketsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListMarkets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListMarketsRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListMarketsRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListMarketsResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListMarketsResponse>;
}
interface ICoreApiServiceService_IListProposals extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListProposalsRequest, vega_coreapi_v1_coreapi_pb.ListProposalsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListProposalsRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListProposalsRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListProposalsResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListProposalsResponse>;
}
interface ICoreApiServiceService_IListMarketsData extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListMarketsData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse>;
}
interface ICoreApiServiceService_IListVotes extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListVotesRequest, vega_coreapi_v1_coreapi_pb.ListVotesResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListVotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListVotesRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListVotesRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListVotesResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListVotesResponse>;
}
interface ICoreApiServiceService_IListPartiesStake extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListPartiesStake";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse>;
}
interface ICoreApiServiceService_IListDelegations extends grpc.MethodDefinition<vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, vega_coreapi_v1_coreapi_pb.ListDelegationsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListDelegations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListDelegationsRequest>;
    requestDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListDelegationsRequest>;
    responseSerialize: grpc.serialize<vega_coreapi_v1_coreapi_pb.ListDelegationsResponse>;
    responseDeserialize: grpc.deserialize<vega_coreapi_v1_coreapi_pb.ListDelegationsResponse>;
}

export const CoreApiServiceService: ICoreApiServiceService;

export interface ICoreApiServiceServer extends grpc.UntypedServiceImplementation {
    listAccounts: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListAccountsRequest, vega_coreapi_v1_coreapi_pb.ListAccountsResponse>;
    listAssets: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListAssetsRequest, vega_coreapi_v1_coreapi_pb.ListAssetsResponse>;
    listNetworkParameters: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
    listParties: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListPartiesRequest, vega_coreapi_v1_coreapi_pb.ListPartiesResponse>;
    listValidators: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, vega_coreapi_v1_coreapi_pb.ListValidatorsResponse>;
    listMarkets: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListMarketsRequest, vega_coreapi_v1_coreapi_pb.ListMarketsResponse>;
    listProposals: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListProposalsRequest, vega_coreapi_v1_coreapi_pb.ListProposalsResponse>;
    listMarketsData: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse>;
    listVotes: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListVotesRequest, vega_coreapi_v1_coreapi_pb.ListVotesResponse>;
    listPartiesStake: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse>;
    listDelegations: grpc.handleUnaryCall<vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, vega_coreapi_v1_coreapi_pb.ListDelegationsResponse>;
}

export interface ICoreApiServiceClient {
    listAccounts(request: vega_coreapi_v1_coreapi_pb.ListAccountsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAccounts(request: vega_coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAccounts(request: vega_coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: vega_coreapi_v1_coreapi_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: vega_coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: vega_coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listParties(request: vega_coreapi_v1_coreapi_pb.ListPartiesRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listParties(request: vega_coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listParties(request: vega_coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: vega_coreapi_v1_coreapi_pb.ListMarketsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: vega_coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: vega_coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: vega_coreapi_v1_coreapi_pb.ListProposalsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: vega_coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: vega_coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: vega_coreapi_v1_coreapi_pb.ListVotesRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: vega_coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: vega_coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listPartiesStake(request: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    listPartiesStake(request: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    listPartiesStake(request: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    listDelegations(request: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    listDelegations(request: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    listDelegations(request: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
}

export class CoreApiServiceClient extends grpc.Client implements ICoreApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listAccounts(request: vega_coreapi_v1_coreapi_pb.ListAccountsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAccounts(request: vega_coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAccounts(request: vega_coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: vega_coreapi_v1_coreapi_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: vega_coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: vega_coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: vega_coreapi_v1_coreapi_pb.ListPartiesRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: vega_coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: vega_coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: vega_coreapi_v1_coreapi_pb.ListMarketsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: vega_coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: vega_coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: vega_coreapi_v1_coreapi_pb.ListProposalsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: vega_coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: vega_coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: vega_coreapi_v1_coreapi_pb.ListVotesRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: vega_coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: vega_coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listPartiesStake(request: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    public listPartiesStake(request: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    public listPartiesStake(request: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    public listDelegations(request: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    public listDelegations(request: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    public listDelegations(request: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
}
