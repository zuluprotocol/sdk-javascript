// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var vega_coreapi_v1_coreapi_pb = require('../../../vega/coreapi/v1/coreapi_pb.js');
var vega_assets_pb = require('../../../vega/assets_pb.js');
var vega_governance_pb = require('../../../vega/governance_pb.js');
var vega_markets_pb = require('../../../vega/markets_pb.js');
var vega_vega_pb = require('../../../vega/vega_pb.js');
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');

function serialize_vega_coreapi_v1_ListAccountsRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListAccountsRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListAccountsRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListAccountsResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListAccountsResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListAccountsResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListAssetsRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListAssetsRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListAssetsRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListAssetsResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListAssetsResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListAssetsResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListDelegationsRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListDelegationsRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListDelegationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListDelegationsRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListDelegationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListDelegationsResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListDelegationsResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListDelegationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListDelegationsResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListDelegationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListMarketsDataRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListMarketsDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListMarketsDataRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListMarketsDataResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListMarketsDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListMarketsDataResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListMarketsRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListMarketsRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListMarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListMarketsRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListMarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListMarketsResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListMarketsResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListMarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListMarketsResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListMarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListNetworkParametersRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListNetworkParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListNetworkParametersRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListNetworkParametersResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListNetworkParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListNetworkParametersResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListPartiesRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListPartiesRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListPartiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListPartiesRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListPartiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListPartiesResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListPartiesResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListPartiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListPartiesResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListPartiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListPartiesStakeRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListPartiesStakeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListPartiesStakeRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListPartiesStakeResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListPartiesStakeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListPartiesStakeResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListProposalsRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListProposalsRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListProposalsRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListProposalsResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListProposalsResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListProposalsResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListValidatorsRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListValidatorsRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListValidatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListValidatorsRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListValidatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListValidatorsResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListValidatorsResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListValidatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListValidatorsResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListVotesRequest(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListVotesRequest)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListVotesRequest(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_coreapi_v1_ListVotesResponse(arg) {
  if (!(arg instanceof vega_coreapi_v1_coreapi_pb.ListVotesResponse)) {
    throw new Error('Expected argument of type vega.coreapi.v1.ListVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_coreapi_v1_ListVotesResponse(buffer_arg) {
  return vega_coreapi_v1_coreapi_pb.ListVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoreApiServiceService = exports.CoreApiServiceService = {
  listAccounts: {
    path: '/vega.coreapi.v1.CoreApiService/ListAccounts',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListAccountsRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListAccountsResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListAccountsRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListAccountsRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListAccountsResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListAccountsResponse,
  },
  listAssets: {
    path: '/vega.coreapi.v1.CoreApiService/ListAssets',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListAssetsRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListAssetsResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListAssetsRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListAssetsRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListAssetsResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListAssetsResponse,
  },
  listNetworkParameters: {
    path: '/vega.coreapi.v1.CoreApiService/ListNetworkParameters',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListNetworkParametersRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListNetworkParametersResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListNetworkParametersRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListNetworkParametersRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListNetworkParametersResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListNetworkParametersResponse,
  },
  listParties: {
    path: '/vega.coreapi.v1.CoreApiService/ListParties',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListPartiesRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListPartiesResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListPartiesRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListPartiesRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListPartiesResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListPartiesResponse,
  },
  listValidators: {
    path: '/vega.coreapi.v1.CoreApiService/ListValidators',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListValidatorsRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListValidatorsResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListValidatorsRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListValidatorsRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListValidatorsResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListValidatorsResponse,
  },
  listMarkets: {
    path: '/vega.coreapi.v1.CoreApiService/ListMarkets',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListMarketsRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListMarketsResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListMarketsRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListMarketsRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListMarketsResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListMarketsResponse,
  },
  listProposals: {
    path: '/vega.coreapi.v1.CoreApiService/ListProposals',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListProposalsRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListProposalsResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListProposalsRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListProposalsRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListProposalsResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListProposalsResponse,
  },
  listMarketsData: {
    path: '/vega.coreapi.v1.CoreApiService/ListMarketsData',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListMarketsDataRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListMarketsDataResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListMarketsDataRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListMarketsDataRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListMarketsDataResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListMarketsDataResponse,
  },
  listVotes: {
    path: '/vega.coreapi.v1.CoreApiService/ListVotes',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListVotesRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListVotesResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListVotesRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListVotesRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListVotesResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListVotesResponse,
  },
  listPartiesStake: {
    path: '/vega.coreapi.v1.CoreApiService/ListPartiesStake',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListPartiesStakeRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListPartiesStakeResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListPartiesStakeRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListPartiesStakeRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListPartiesStakeResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListPartiesStakeResponse,
  },
  listDelegations: {
    path: '/vega.coreapi.v1.CoreApiService/ListDelegations',
    requestStream: false,
    responseStream: false,
    requestType: vega_coreapi_v1_coreapi_pb.ListDelegationsRequest,
    responseType: vega_coreapi_v1_coreapi_pb.ListDelegationsResponse,
    requestSerialize: serialize_vega_coreapi_v1_ListDelegationsRequest,
    requestDeserialize: deserialize_vega_coreapi_v1_ListDelegationsRequest,
    responseSerialize: serialize_vega_coreapi_v1_ListDelegationsResponse,
    responseDeserialize: deserialize_vega_coreapi_v1_ListDelegationsResponse,
  },
};

exports.CoreApiServiceClient = grpc.makeGenericClientConstructor(CoreApiServiceService);
