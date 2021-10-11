// package: vega.api.v1
// file: vega/api/v1/corestate.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as vega_api_v1_corestate_pb from "../../../vega/api/v1/corestate_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_events_v1_events_pb from "../../../vega/events/v1/events_pb";

interface ICoreStateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAccounts: ICoreStateServiceService_IListAccounts;
    listAssets: ICoreStateServiceService_IListAssets;
    listNetworkParameters: ICoreStateServiceService_IListNetworkParameters;
    listParties: ICoreStateServiceService_IListParties;
    listValidators: ICoreStateServiceService_IListValidators;
    listMarkets: ICoreStateServiceService_IListMarkets;
    listProposals: ICoreStateServiceService_IListProposals;
    listMarketsData: ICoreStateServiceService_IListMarketsData;
    listVotes: ICoreStateServiceService_IListVotes;
    listPartiesStake: ICoreStateServiceService_IListPartiesStake;
    listDelegations: ICoreStateServiceService_IListDelegations;
}

interface ICoreStateServiceService_IListAccounts extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListAccountsRequest, vega_api_v1_corestate_pb.ListAccountsResponse> {
    path: "/vega.api.v1.CoreStateService/ListAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListAccountsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListAccountsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListAccountsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListAccountsResponse>;
}
interface ICoreStateServiceService_IListAssets extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListAssetsRequest, vega_api_v1_corestate_pb.ListAssetsResponse> {
    path: "/vega.api.v1.CoreStateService/ListAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListAssetsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListAssetsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListAssetsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListAssetsResponse>;
}
interface ICoreStateServiceService_IListNetworkParameters extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListNetworkParametersRequest, vega_api_v1_corestate_pb.ListNetworkParametersResponse> {
    path: "/vega.api.v1.CoreStateService/ListNetworkParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListNetworkParametersRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListNetworkParametersRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListNetworkParametersResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListNetworkParametersResponse>;
}
interface ICoreStateServiceService_IListParties extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListPartiesRequest, vega_api_v1_corestate_pb.ListPartiesResponse> {
    path: "/vega.api.v1.CoreStateService/ListParties";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListPartiesRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListPartiesRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListPartiesResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListPartiesResponse>;
}
interface ICoreStateServiceService_IListValidators extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListValidatorsRequest, vega_api_v1_corestate_pb.ListValidatorsResponse> {
    path: "/vega.api.v1.CoreStateService/ListValidators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListValidatorsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListValidatorsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListValidatorsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListValidatorsResponse>;
}
interface ICoreStateServiceService_IListMarkets extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListMarketsRequest, vega_api_v1_corestate_pb.ListMarketsResponse> {
    path: "/vega.api.v1.CoreStateService/ListMarkets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListMarketsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListMarketsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListMarketsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListMarketsResponse>;
}
interface ICoreStateServiceService_IListProposals extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListProposalsRequest, vega_api_v1_corestate_pb.ListProposalsResponse> {
    path: "/vega.api.v1.CoreStateService/ListProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListProposalsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListProposalsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListProposalsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListProposalsResponse>;
}
interface ICoreStateServiceService_IListMarketsData extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListMarketsDataRequest, vega_api_v1_corestate_pb.ListMarketsDataResponse> {
    path: "/vega.api.v1.CoreStateService/ListMarketsData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListMarketsDataRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListMarketsDataRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListMarketsDataResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListMarketsDataResponse>;
}
interface ICoreStateServiceService_IListVotes extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListVotesRequest, vega_api_v1_corestate_pb.ListVotesResponse> {
    path: "/vega.api.v1.CoreStateService/ListVotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListVotesRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListVotesRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListVotesResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListVotesResponse>;
}
interface ICoreStateServiceService_IListPartiesStake extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListPartiesStakeRequest, vega_api_v1_corestate_pb.ListPartiesStakeResponse> {
    path: "/vega.api.v1.CoreStateService/ListPartiesStake";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListPartiesStakeRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListPartiesStakeRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListPartiesStakeResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListPartiesStakeResponse>;
}
interface ICoreStateServiceService_IListDelegations extends grpc.MethodDefinition<vega_api_v1_corestate_pb.ListDelegationsRequest, vega_api_v1_corestate_pb.ListDelegationsResponse> {
    path: "/vega.api.v1.CoreStateService/ListDelegations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListDelegationsRequest>;
    requestDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListDelegationsRequest>;
    responseSerialize: grpc.serialize<vega_api_v1_corestate_pb.ListDelegationsResponse>;
    responseDeserialize: grpc.deserialize<vega_api_v1_corestate_pb.ListDelegationsResponse>;
}

export const CoreStateServiceService: ICoreStateServiceService;

export interface ICoreStateServiceServer extends grpc.UntypedServiceImplementation {
    listAccounts: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListAccountsRequest, vega_api_v1_corestate_pb.ListAccountsResponse>;
    listAssets: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListAssetsRequest, vega_api_v1_corestate_pb.ListAssetsResponse>;
    listNetworkParameters: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListNetworkParametersRequest, vega_api_v1_corestate_pb.ListNetworkParametersResponse>;
    listParties: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListPartiesRequest, vega_api_v1_corestate_pb.ListPartiesResponse>;
    listValidators: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListValidatorsRequest, vega_api_v1_corestate_pb.ListValidatorsResponse>;
    listMarkets: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListMarketsRequest, vega_api_v1_corestate_pb.ListMarketsResponse>;
    listProposals: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListProposalsRequest, vega_api_v1_corestate_pb.ListProposalsResponse>;
    listMarketsData: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListMarketsDataRequest, vega_api_v1_corestate_pb.ListMarketsDataResponse>;
    listVotes: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListVotesRequest, vega_api_v1_corestate_pb.ListVotesResponse>;
    listPartiesStake: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListPartiesStakeRequest, vega_api_v1_corestate_pb.ListPartiesStakeResponse>;
    listDelegations: grpc.handleUnaryCall<vega_api_v1_corestate_pb.ListDelegationsRequest, vega_api_v1_corestate_pb.ListDelegationsResponse>;
}

export interface ICoreStateServiceClient {
    listAccounts(request: vega_api_v1_corestate_pb.ListAccountsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAccounts(request: vega_api_v1_corestate_pb.ListAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAccounts(request: vega_api_v1_corestate_pb.ListAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: vega_api_v1_corestate_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: vega_api_v1_corestate_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: vega_api_v1_corestate_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: vega_api_v1_corestate_pb.ListNetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: vega_api_v1_corestate_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: vega_api_v1_corestate_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listParties(request: vega_api_v1_corestate_pb.ListPartiesRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listParties(request: vega_api_v1_corestate_pb.ListPartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listParties(request: vega_api_v1_corestate_pb.ListPartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: vega_api_v1_corestate_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: vega_api_v1_corestate_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: vega_api_v1_corestate_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: vega_api_v1_corestate_pb.ListMarketsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: vega_api_v1_corestate_pb.ListMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: vega_api_v1_corestate_pb.ListMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: vega_api_v1_corestate_pb.ListProposalsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: vega_api_v1_corestate_pb.ListProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: vega_api_v1_corestate_pb.ListProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: vega_api_v1_corestate_pb.ListMarketsDataRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: vega_api_v1_corestate_pb.ListMarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: vega_api_v1_corestate_pb.ListMarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: vega_api_v1_corestate_pb.ListVotesRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: vega_api_v1_corestate_pb.ListVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: vega_api_v1_corestate_pb.ListVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listPartiesStake(request: vega_api_v1_corestate_pb.ListPartiesStakeRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    listPartiesStake(request: vega_api_v1_corestate_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    listPartiesStake(request: vega_api_v1_corestate_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    listDelegations(request: vega_api_v1_corestate_pb.ListDelegationsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    listDelegations(request: vega_api_v1_corestate_pb.ListDelegationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    listDelegations(request: vega_api_v1_corestate_pb.ListDelegationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
}

export class CoreStateServiceClient extends grpc.Client implements ICoreStateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listAccounts(request: vega_api_v1_corestate_pb.ListAccountsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAccounts(request: vega_api_v1_corestate_pb.ListAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAccounts(request: vega_api_v1_corestate_pb.ListAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: vega_api_v1_corestate_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: vega_api_v1_corestate_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: vega_api_v1_corestate_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: vega_api_v1_corestate_pb.ListNetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: vega_api_v1_corestate_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: vega_api_v1_corestate_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: vega_api_v1_corestate_pb.ListPartiesRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: vega_api_v1_corestate_pb.ListPartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: vega_api_v1_corestate_pb.ListPartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: vega_api_v1_corestate_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: vega_api_v1_corestate_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: vega_api_v1_corestate_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: vega_api_v1_corestate_pb.ListMarketsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: vega_api_v1_corestate_pb.ListMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: vega_api_v1_corestate_pb.ListMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: vega_api_v1_corestate_pb.ListProposalsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: vega_api_v1_corestate_pb.ListProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: vega_api_v1_corestate_pb.ListProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: vega_api_v1_corestate_pb.ListMarketsDataRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: vega_api_v1_corestate_pb.ListMarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: vega_api_v1_corestate_pb.ListMarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: vega_api_v1_corestate_pb.ListVotesRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: vega_api_v1_corestate_pb.ListVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: vega_api_v1_corestate_pb.ListVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listPartiesStake(request: vega_api_v1_corestate_pb.ListPartiesStakeRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    public listPartiesStake(request: vega_api_v1_corestate_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    public listPartiesStake(request: vega_api_v1_corestate_pb.ListPartiesStakeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListPartiesStakeResponse) => void): grpc.ClientUnaryCall;
    public listDelegations(request: vega_api_v1_corestate_pb.ListDelegationsRequest, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    public listDelegations(request: vega_api_v1_corestate_pb.ListDelegationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
    public listDelegations(request: vega_api_v1_corestate_pb.ListDelegationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vega_api_v1_corestate_pb.ListDelegationsResponse) => void): grpc.ClientUnaryCall;
}
