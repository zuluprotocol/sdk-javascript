// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var data$node_api_v1_trading_data_pb = require('../../../data-node/api/v1/trading_data_pb.js');
var vega_vega_pb = require('../../../vega/vega_pb.js');
var vega_markets_pb = require('../../../vega/markets_pb.js');
var vega_governance_pb = require('../../../vega/governance_pb.js');
var vega_assets_pb = require('../../../vega/assets_pb.js');
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');
var vega_oracles_v1_spec_pb = require('../../../vega/oracles/v1/spec_pb.js');
var vega_oracles_v1_data_pb = require('../../../vega/oracles/v1/data_pb.js');
var vega_commands_v1_commands_pb = require('../../../vega/commands/v1/commands_pb.js');
var vega_commands_v1_transaction_pb = require('../../../vega/commands/v1/transaction_pb.js');
var vega_commands_v1_validator_commands_pb = require('../../../vega/commands/v1/validator_commands_pb.js');
var github_com_mwitkow_go$proto$validators_validator_pb = require('../../../github.com/mwitkow/go-proto-validators/validator_pb.js');

function serialize_datanode_api_v1_AccountsSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.AccountsSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.AccountsSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_AccountsSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.AccountsSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_AccountsSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.AccountsSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.AccountsSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_AccountsSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.AccountsSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_AssetByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.AssetByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.AssetByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_AssetByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.AssetByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_AssetByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.AssetByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.AssetByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_AssetByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.AssetByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_AssetsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.AssetsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.AssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_AssetsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.AssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_AssetsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.AssetsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.AssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_AssetsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.AssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_CandlesRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.CandlesRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.CandlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_CandlesRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.CandlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_CandlesResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.CandlesResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.CandlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_CandlesResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.CandlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_CandlesSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.CandlesSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.CandlesSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_CandlesSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.CandlesSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_CandlesSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.CandlesSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.CandlesSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_CandlesSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.CandlesSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_CheckpointsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.CheckpointsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.CheckpointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_CheckpointsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.CheckpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_CheckpointsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.CheckpointsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.CheckpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_CheckpointsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.CheckpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_DelegationsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.DelegationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.DelegationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_DelegationsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.DelegationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_DelegationsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.DelegationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.DelegationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_DelegationsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.DelegationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_DepositRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.DepositRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.DepositRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_DepositRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.DepositRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_DepositResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.DepositResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.DepositResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_DepositResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.DepositResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_DepositsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.DepositsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.DepositsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_DepositsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.DepositsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_DepositsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.DepositsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.DepositsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_DepositsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.DepositsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ERC20WithdrawalApprovalRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ERC20WithdrawalApprovalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ERC20WithdrawalApprovalRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ERC20WithdrawalApprovalResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ERC20WithdrawalApprovalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ERC20WithdrawalApprovalResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_EstimateFeeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.EstimateFeeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.EstimateFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_EstimateFeeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.EstimateFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_EstimateFeeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.EstimateFeeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.EstimateFeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_EstimateFeeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.EstimateFeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_EstimateMarginRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.EstimateMarginRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.EstimateMarginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_EstimateMarginRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.EstimateMarginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_EstimateMarginResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.EstimateMarginResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.EstimateMarginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_EstimateMarginResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.EstimateMarginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_FeeInfrastructureAccountsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.FeeInfrastructureAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_FeeInfrastructureAccountsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_FeeInfrastructureAccountsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.FeeInfrastructureAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_FeeInfrastructureAccountsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetEpochRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetEpochRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetEpochRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetEpochRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetEpochRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetEpochResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetEpochResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetEpochResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetEpochResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetEpochResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetKeyRotationsByNodeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetKeyRotationsByNodeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetKeyRotationsByNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetKeyRotationsByNodeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetKeyRotationsByNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetKeyRotationsByNodeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetKeyRotationsByNodeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetKeyRotationsByNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetKeyRotationsByNodeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetKeyRotationsByNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetKeyRotationsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetKeyRotationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetKeyRotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetKeyRotationsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetKeyRotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetKeyRotationsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetKeyRotationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetKeyRotationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetKeyRotationsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetKeyRotationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNetworkParametersProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNetworkParametersProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNetworkParametersProposalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNetworkParametersProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNetworkParametersProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNetworkParametersProposalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNewAssetProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNewAssetProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNewAssetProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNewAssetProposalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNewAssetProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNewAssetProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNewAssetProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNewAssetProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNewAssetProposalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNewAssetProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNewMarketProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNewMarketProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNewMarketProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNewMarketProposalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNewMarketProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNewMarketProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNewMarketProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNewMarketProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNewMarketProposalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNewMarketProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodeByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodeByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodeByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodeByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodeByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodeByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodeByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodeByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodeByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodeByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodeDataRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodeDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodeDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodeDataRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodeDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodeDataResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodeDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodeDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodeDataResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodeDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodeSignaturesAggregateRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodeSignaturesAggregateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodeSignaturesAggregateRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodeSignaturesAggregateResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodeSignaturesAggregateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodeSignaturesAggregateResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodesRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodesRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodesRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetNodesResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetNodesResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetNodesResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalByReferenceRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalByReferenceRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalByReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalByReferenceRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalByReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalByReferenceResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalByReferenceResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalByReferenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalByReferenceResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalByReferenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalsByPartyRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalsByPartyRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalsByPartyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalsByPartyRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalsByPartyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalsByPartyResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalsByPartyResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalsByPartyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalsByPartyResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalsByPartyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetProposalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetRewardDetailsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetRewardDetailsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetRewardDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetRewardDetailsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetRewardDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetRewardDetailsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetRewardDetailsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetRewardDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetRewardDetailsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetRewardDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetUpdateMarketProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetUpdateMarketProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetUpdateMarketProposalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetUpdateMarketProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetUpdateMarketProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetUpdateMarketProposalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetVegaTimeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetVegaTimeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetVegaTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetVegaTimeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetVegaTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetVegaTimeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetVegaTimeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetVegaTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetVegaTimeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetVegaTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetVotesByPartyRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetVotesByPartyRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GetVotesByPartyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetVotesByPartyRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetVotesByPartyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GetVotesByPartyResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GetVotesByPartyResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GetVotesByPartyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GetVotesByPartyResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GetVotesByPartyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GlobalRewardPoolAccountsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.GlobalRewardPoolAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GlobalRewardPoolAccountsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_GlobalRewardPoolAccountsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.GlobalRewardPoolAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_GlobalRewardPoolAccountsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_LastTradeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.LastTradeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.LastTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_LastTradeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.LastTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_LastTradeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.LastTradeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.LastTradeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_LastTradeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.LastTradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_LiquidityProvisionsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.LiquidityProvisionsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.LiquidityProvisionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_LiquidityProvisionsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.LiquidityProvisionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_LiquidityProvisionsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.LiquidityProvisionsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.LiquidityProvisionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_LiquidityProvisionsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.LiquidityProvisionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarginLevelsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarginLevelsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarginLevelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarginLevelsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarginLevelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarginLevelsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarginLevelsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarginLevelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarginLevelsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarginLevelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarginLevelsSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarginLevelsSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarginLevelsSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarginLevelsSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarginLevelsSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarginLevelsSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketAccountsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketAccountsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketAccountsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketAccountsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketAccountsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketAccountsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDataByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDataByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDataByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDataByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDataByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDataByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDataByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDataByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDataByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDataByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDepthRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDepthRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDepthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDepthRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDepthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDepthResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDepthResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDepthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDepthResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDepthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDepthSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDepthSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDepthSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDepthSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDepthSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDepthSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDepthSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDepthSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDepthSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDepthSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDepthUpdatesSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDepthUpdatesSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDepthUpdatesSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketDepthUpdatesSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketDepthUpdatesSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketDepthUpdatesSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketsDataRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketsDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketsDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketsDataRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketsDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketsDataResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketsDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketsDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketsDataResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketsDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketsDataSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketsDataSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketsDataSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketsDataSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketsDataSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketsDataSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketsDataSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketsDataSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketsDataSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketsDataSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_MarketsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.MarketsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.MarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_MarketsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.MarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_NetworkParametersRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.NetworkParametersRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.NetworkParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_NetworkParametersRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.NetworkParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_NetworkParametersResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.NetworkParametersResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.NetworkParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_NetworkParametersResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.NetworkParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveDelegationsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveDelegationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveDelegationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveDelegationsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveDelegationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveDelegationsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveDelegationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveDelegationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveDelegationsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveDelegationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveEventBusRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveEventBusRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveEventBusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveEventBusRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveEventBusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveEventBusResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveEventBusResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveEventBusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveEventBusResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveEventBusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveGovernanceRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveGovernanceRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveGovernanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveGovernanceRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveGovernanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveGovernanceResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveGovernanceResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveGovernanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveGovernanceResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveGovernanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObservePartyProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObservePartyProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObservePartyProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObservePartyProposalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObservePartyProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObservePartyProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObservePartyProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObservePartyProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObservePartyProposalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObservePartyProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObservePartyVotesRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObservePartyVotesRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObservePartyVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObservePartyVotesRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObservePartyVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObservePartyVotesResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObservePartyVotesResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObservePartyVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObservePartyVotesResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObservePartyVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveProposalVotesRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveProposalVotesRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveProposalVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveProposalVotesRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveProposalVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveProposalVotesResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveProposalVotesResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveProposalVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveProposalVotesResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveProposalVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveRewardDetailsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveRewardDetailsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveRewardDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveRewardDetailsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveRewardDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_ObserveRewardDetailsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.ObserveRewardDetailsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.ObserveRewardDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_ObserveRewardDetailsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.ObserveRewardDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OracleDataBySpecRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OracleDataBySpecRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OracleDataBySpecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OracleDataBySpecRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OracleDataBySpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OracleDataBySpecResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OracleDataBySpecResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OracleDataBySpecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OracleDataBySpecResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OracleDataBySpecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OracleSpecRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OracleSpecRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OracleSpecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OracleSpecRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OracleSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OracleSpecResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OracleSpecResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OracleSpecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OracleSpecResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OracleSpecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OracleSpecsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OracleSpecsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OracleSpecsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OracleSpecsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OracleSpecsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OracleSpecsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OracleSpecsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OracleSpecsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OracleSpecsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OracleSpecsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderByMarketAndIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderByMarketAndIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderByMarketAndIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderByMarketAndIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderByMarketAndIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderByMarketAndIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderByMarketAndIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderByMarketAndIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderByMarketAndIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderByMarketAndIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderByReferenceRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderByReferenceRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderByReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderByReferenceRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderByReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderByReferenceResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderByReferenceResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderByReferenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderByReferenceResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderByReferenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderVersionsByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderVersionsByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderVersionsByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderVersionsByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderVersionsByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrderVersionsByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrderVersionsByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrderVersionsByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrderVersionsByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrderVersionsByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrdersByMarketRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrdersByMarketRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrdersByMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrdersByMarketRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrdersByMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrdersByMarketResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrdersByMarketResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrdersByMarketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrdersByMarketResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrdersByMarketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrdersByPartyRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrdersByPartyRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrdersByPartyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrdersByPartyRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrdersByPartyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrdersByPartyResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrdersByPartyResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrdersByPartyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrdersByPartyResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrdersByPartyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrdersSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrdersSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.OrdersSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrdersSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrdersSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_OrdersSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.OrdersSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.OrdersSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_OrdersSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.OrdersSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartiesRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartiesRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.PartiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartiesRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartiesResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartiesResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.PartiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartiesResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartyAccountsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartyAccountsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.PartyAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartyAccountsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartyAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartyAccountsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartyAccountsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.PartyAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartyAccountsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartyAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartyByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartyByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.PartyByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartyByIDRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartyByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartyByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartyByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.PartyByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartyByIDResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartyByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartyStakeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartyStakeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.PartyStakeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartyStakeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartyStakeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PartyStakeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PartyStakeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.PartyStakeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PartyStakeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PartyStakeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PositionsByPartyRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PositionsByPartyRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.PositionsByPartyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PositionsByPartyRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PositionsByPartyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PositionsByPartyResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PositionsByPartyResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.PositionsByPartyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PositionsByPartyResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PositionsByPartyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PositionsSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PositionsSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.PositionsSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PositionsSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PositionsSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_PositionsSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.PositionsSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.PositionsSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_PositionsSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.PositionsSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesByMarketRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesByMarketRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesByMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesByMarketRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesByMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesByMarketResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesByMarketResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesByMarketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesByMarketResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesByMarketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesByOrderRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesByOrderRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesByOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesByOrderRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesByOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesByOrderResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesByOrderResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesByOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesByOrderResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesByOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesByPartyRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesByPartyRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesByPartyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesByPartyRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesByPartyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesByPartyResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesByPartyResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesByPartyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesByPartyResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesByPartyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TradesSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TradesSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.TradesSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TradesSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TradesSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TransferResponsesSubscribeRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.TransferResponsesSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TransferResponsesSubscribeRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_TransferResponsesSubscribeResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.TransferResponsesSubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_TransferResponsesSubscribeResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_WithdrawalRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.WithdrawalRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.WithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_WithdrawalRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.WithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_WithdrawalResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.WithdrawalResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.WithdrawalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_WithdrawalResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.WithdrawalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_WithdrawalsRequest(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.WithdrawalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v1.WithdrawalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_WithdrawalsRequest(buffer_arg) {
  return data$node_api_v1_trading_data_pb.WithdrawalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v1_WithdrawalsResponse(arg) {
  if (!(arg instanceof data$node_api_v1_trading_data_pb.WithdrawalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v1.WithdrawalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v1_WithdrawalsResponse(buffer_arg) {
  return data$node_api_v1_trading_data_pb.WithdrawalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradingDataServiceService = exports.TradingDataServiceService = {
  // -- Accounts --
//
// Get a list of Accounts by Market
marketAccounts: {
    path: '/datanode.api.v1.TradingDataService/MarketAccounts',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarketAccountsRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketAccountsResponse,
    requestSerialize: serialize_datanode_api_v1_MarketAccountsRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketAccountsRequest,
    responseSerialize: serialize_datanode_api_v1_MarketAccountsResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketAccountsResponse,
  },
  // Get a list of Accounts by Party
partyAccounts: {
    path: '/datanode.api.v1.TradingDataService/PartyAccounts',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.PartyAccountsRequest,
    responseType: data$node_api_v1_trading_data_pb.PartyAccountsResponse,
    requestSerialize: serialize_datanode_api_v1_PartyAccountsRequest,
    requestDeserialize: deserialize_datanode_api_v1_PartyAccountsRequest,
    responseSerialize: serialize_datanode_api_v1_PartyAccountsResponse,
    responseDeserialize: deserialize_datanode_api_v1_PartyAccountsResponse,
  },
  // Get a list of accounts holding infrastructure fees.
// Can be filtered by asset, there will be 1 infrastructure fee account per
// asset in the network.
feeInfrastructureAccounts: {
    path: '/datanode.api.v1.TradingDataService/FeeInfrastructureAccounts',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest,
    responseType: data$node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse,
    requestSerialize: serialize_datanode_api_v1_FeeInfrastructureAccountsRequest,
    requestDeserialize: deserialize_datanode_api_v1_FeeInfrastructureAccountsRequest,
    responseSerialize: serialize_datanode_api_v1_FeeInfrastructureAccountsResponse,
    responseDeserialize: deserialize_datanode_api_v1_FeeInfrastructureAccountsResponse,
  },
  // Get a list of accounts holding reward pools
// Can be filtered by asset, there will be 1 reward pool account per
// asset in the network.
globalRewardPoolAccounts: {
    path: '/datanode.api.v1.TradingDataService/GlobalRewardPoolAccounts',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest,
    responseType: data$node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse,
    requestSerialize: serialize_datanode_api_v1_GlobalRewardPoolAccountsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GlobalRewardPoolAccountsRequest,
    responseSerialize: serialize_datanode_api_v1_GlobalRewardPoolAccountsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GlobalRewardPoolAccountsResponse,
  },
  // -- Candles --
//
// Get a list of Candles by Market
candles: {
    path: '/datanode.api.v1.TradingDataService/Candles',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.CandlesRequest,
    responseType: data$node_api_v1_trading_data_pb.CandlesResponse,
    requestSerialize: serialize_datanode_api_v1_CandlesRequest,
    requestDeserialize: deserialize_datanode_api_v1_CandlesRequest,
    responseSerialize: serialize_datanode_api_v1_CandlesResponse,
    responseDeserialize: deserialize_datanode_api_v1_CandlesResponse,
  },
  // -- Market Data --
//
// Get Market Data by Market ID
marketDataByID: {
    path: '/datanode.api.v1.TradingDataService/MarketDataByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarketDataByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketDataByIDResponse,
    requestSerialize: serialize_datanode_api_v1_MarketDataByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketDataByIDRequest,
    responseSerialize: serialize_datanode_api_v1_MarketDataByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketDataByIDResponse,
  },
  // Get a list of Market Data
marketsData: {
    path: '/datanode.api.v1.TradingDataService/MarketsData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarketsDataRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketsDataResponse,
    requestSerialize: serialize_datanode_api_v1_MarketsDataRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketsDataRequest,
    responseSerialize: serialize_datanode_api_v1_MarketsDataResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketsDataResponse,
  },
  // -- Markets --
//
// Get a Market by ID
marketByID: {
    path: '/datanode.api.v1.TradingDataService/MarketByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarketByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketByIDResponse,
    requestSerialize: serialize_datanode_api_v1_MarketByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketByIDRequest,
    responseSerialize: serialize_datanode_api_v1_MarketByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketByIDResponse,
  },
  // Get Market Depth
marketDepth: {
    path: '/datanode.api.v1.TradingDataService/MarketDepth',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarketDepthRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketDepthResponse,
    requestSerialize: serialize_datanode_api_v1_MarketDepthRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketDepthRequest,
    responseSerialize: serialize_datanode_api_v1_MarketDepthResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketDepthResponse,
  },
  // Get a list of Markets
markets: {
    path: '/datanode.api.v1.TradingDataService/Markets',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarketsRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketsResponse,
    requestSerialize: serialize_datanode_api_v1_MarketsRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketsRequest,
    responseSerialize: serialize_datanode_api_v1_MarketsResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketsResponse,
  },
  // -- Orders --
//
// Get an Order by Market and Order ID
orderByMarketAndID: {
    path: '/datanode.api.v1.TradingDataService/OrderByMarketAndID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OrderByMarketAndIDRequest,
    responseType: data$node_api_v1_trading_data_pb.OrderByMarketAndIDResponse,
    requestSerialize: serialize_datanode_api_v1_OrderByMarketAndIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrderByMarketAndIDRequest,
    responseSerialize: serialize_datanode_api_v1_OrderByMarketAndIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrderByMarketAndIDResponse,
  },
  // Get an Order by Pending Order reference (UUID)
orderByReference: {
    path: '/datanode.api.v1.TradingDataService/OrderByReference',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OrderByReferenceRequest,
    responseType: data$node_api_v1_trading_data_pb.OrderByReferenceResponse,
    requestSerialize: serialize_datanode_api_v1_OrderByReferenceRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrderByReferenceRequest,
    responseSerialize: serialize_datanode_api_v1_OrderByReferenceResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrderByReferenceResponse,
  },
  // Get a list of Orders by Market
ordersByMarket: {
    path: '/datanode.api.v1.TradingDataService/OrdersByMarket',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OrdersByMarketRequest,
    responseType: data$node_api_v1_trading_data_pb.OrdersByMarketResponse,
    requestSerialize: serialize_datanode_api_v1_OrdersByMarketRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrdersByMarketRequest,
    responseSerialize: serialize_datanode_api_v1_OrdersByMarketResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrdersByMarketResponse,
  },
  // Get a list of Orders by Party
ordersByParty: {
    path: '/datanode.api.v1.TradingDataService/OrdersByParty',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OrdersByPartyRequest,
    responseType: data$node_api_v1_trading_data_pb.OrdersByPartyResponse,
    requestSerialize: serialize_datanode_api_v1_OrdersByPartyRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrdersByPartyRequest,
    responseSerialize: serialize_datanode_api_v1_OrdersByPartyResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrdersByPartyResponse,
  },
  // Get a specific order by order ID
orderByID: {
    path: '/datanode.api.v1.TradingDataService/OrderByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OrderByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.OrderByIDResponse,
    requestSerialize: serialize_datanode_api_v1_OrderByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrderByIDRequest,
    responseSerialize: serialize_datanode_api_v1_OrderByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrderByIDResponse,
  },
  // Get all versions of the order by its orderID
orderVersionsByID: {
    path: '/datanode.api.v1.TradingDataService/OrderVersionsByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OrderVersionsByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.OrderVersionsByIDResponse,
    requestSerialize: serialize_datanode_api_v1_OrderVersionsByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrderVersionsByIDRequest,
    responseSerialize: serialize_datanode_api_v1_OrderVersionsByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrderVersionsByIDResponse,
  },
  // -- Parties --
//
// Get Margin Levels by Party ID
marginLevels: {
    path: '/datanode.api.v1.TradingDataService/MarginLevels',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.MarginLevelsRequest,
    responseType: data$node_api_v1_trading_data_pb.MarginLevelsResponse,
    requestSerialize: serialize_datanode_api_v1_MarginLevelsRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarginLevelsRequest,
    responseSerialize: serialize_datanode_api_v1_MarginLevelsResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarginLevelsResponse,
  },
  // Get a list of Parties
parties: {
    path: '/datanode.api.v1.TradingDataService/Parties',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.PartiesRequest,
    responseType: data$node_api_v1_trading_data_pb.PartiesResponse,
    requestSerialize: serialize_datanode_api_v1_PartiesRequest,
    requestDeserialize: deserialize_datanode_api_v1_PartiesRequest,
    responseSerialize: serialize_datanode_api_v1_PartiesResponse,
    responseDeserialize: deserialize_datanode_api_v1_PartiesResponse,
  },
  // Get a Party by ID
partyByID: {
    path: '/datanode.api.v1.TradingDataService/PartyByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.PartyByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.PartyByIDResponse,
    requestSerialize: serialize_datanode_api_v1_PartyByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_PartyByIDRequest,
    responseSerialize: serialize_datanode_api_v1_PartyByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_PartyByIDResponse,
  },
  // -- Positions --
//
// Get a list of Positions by Party
positionsByParty: {
    path: '/datanode.api.v1.TradingDataService/PositionsByParty',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.PositionsByPartyRequest,
    responseType: data$node_api_v1_trading_data_pb.PositionsByPartyResponse,
    requestSerialize: serialize_datanode_api_v1_PositionsByPartyRequest,
    requestDeserialize: deserialize_datanode_api_v1_PositionsByPartyRequest,
    responseSerialize: serialize_datanode_api_v1_PositionsByPartyResponse,
    responseDeserialize: deserialize_datanode_api_v1_PositionsByPartyResponse,
  },
  // -- Trades --
//
// Get latest Trade
lastTrade: {
    path: '/datanode.api.v1.TradingDataService/LastTrade',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.LastTradeRequest,
    responseType: data$node_api_v1_trading_data_pb.LastTradeResponse,
    requestSerialize: serialize_datanode_api_v1_LastTradeRequest,
    requestDeserialize: deserialize_datanode_api_v1_LastTradeRequest,
    responseSerialize: serialize_datanode_api_v1_LastTradeResponse,
    responseDeserialize: deserialize_datanode_api_v1_LastTradeResponse,
  },
  // Get a list of Trades by Market
tradesByMarket: {
    path: '/datanode.api.v1.TradingDataService/TradesByMarket',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.TradesByMarketRequest,
    responseType: data$node_api_v1_trading_data_pb.TradesByMarketResponse,
    requestSerialize: serialize_datanode_api_v1_TradesByMarketRequest,
    requestDeserialize: deserialize_datanode_api_v1_TradesByMarketRequest,
    responseSerialize: serialize_datanode_api_v1_TradesByMarketResponse,
    responseDeserialize: deserialize_datanode_api_v1_TradesByMarketResponse,
  },
  // Get a list of Trades by Order
tradesByOrder: {
    path: '/datanode.api.v1.TradingDataService/TradesByOrder',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.TradesByOrderRequest,
    responseType: data$node_api_v1_trading_data_pb.TradesByOrderResponse,
    requestSerialize: serialize_datanode_api_v1_TradesByOrderRequest,
    requestDeserialize: deserialize_datanode_api_v1_TradesByOrderRequest,
    responseSerialize: serialize_datanode_api_v1_TradesByOrderResponse,
    responseDeserialize: deserialize_datanode_api_v1_TradesByOrderResponse,
  },
  // Get a list of Trades by Party
tradesByParty: {
    path: '/datanode.api.v1.TradingDataService/TradesByParty',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.TradesByPartyRequest,
    responseType: data$node_api_v1_trading_data_pb.TradesByPartyResponse,
    requestSerialize: serialize_datanode_api_v1_TradesByPartyRequest,
    requestDeserialize: deserialize_datanode_api_v1_TradesByPartyRequest,
    responseSerialize: serialize_datanode_api_v1_TradesByPartyResponse,
    responseDeserialize: deserialize_datanode_api_v1_TradesByPartyResponse,
  },
  // -- Governance --
//
// Get governance data (proposals and votes) for all proposals
getProposals: {
    path: '/datanode.api.v1.TradingDataService/GetProposals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetProposalsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetProposalsResponse,
    requestSerialize: serialize_datanode_api_v1_GetProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetProposalsRequest,
    responseSerialize: serialize_datanode_api_v1_GetProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetProposalsResponse,
  },
  // Get governance data (proposals and votes) for proposals by party authoring them
getProposalsByParty: {
    path: '/datanode.api.v1.TradingDataService/GetProposalsByParty',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetProposalsByPartyRequest,
    responseType: data$node_api_v1_trading_data_pb.GetProposalsByPartyResponse,
    requestSerialize: serialize_datanode_api_v1_GetProposalsByPartyRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetProposalsByPartyRequest,
    responseSerialize: serialize_datanode_api_v1_GetProposalsByPartyResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetProposalsByPartyResponse,
  },
  // Get votes by party casting them
getVotesByParty: {
    path: '/datanode.api.v1.TradingDataService/GetVotesByParty',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetVotesByPartyRequest,
    responseType: data$node_api_v1_trading_data_pb.GetVotesByPartyResponse,
    requestSerialize: serialize_datanode_api_v1_GetVotesByPartyRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetVotesByPartyRequest,
    responseSerialize: serialize_datanode_api_v1_GetVotesByPartyResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetVotesByPartyResponse,
  },
  // Get governance data (proposals and votes) for proposals that aim creating new markets
getNewMarketProposals: {
    path: '/datanode.api.v1.TradingDataService/GetNewMarketProposals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNewMarketProposalsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNewMarketProposalsResponse,
    requestSerialize: serialize_datanode_api_v1_GetNewMarketProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNewMarketProposalsRequest,
    responseSerialize: serialize_datanode_api_v1_GetNewMarketProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNewMarketProposalsResponse,
  },
  // Get governance data (proposals and votes) for proposals that aim updating markets
getUpdateMarketProposals: {
    path: '/datanode.api.v1.TradingDataService/GetUpdateMarketProposals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse,
    requestSerialize: serialize_datanode_api_v1_GetUpdateMarketProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetUpdateMarketProposalsRequest,
    responseSerialize: serialize_datanode_api_v1_GetUpdateMarketProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetUpdateMarketProposalsResponse,
  },
  // Get governance data (proposals and votes) for proposals that aim updating Vega network parameters
getNetworkParametersProposals: {
    path: '/datanode.api.v1.TradingDataService/GetNetworkParametersProposals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse,
    requestSerialize: serialize_datanode_api_v1_GetNetworkParametersProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNetworkParametersProposalsRequest,
    responseSerialize: serialize_datanode_api_v1_GetNetworkParametersProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNetworkParametersProposalsResponse,
  },
  // Get governance data (proposals and votes) for proposals aiming to create new assets
getNewAssetProposals: {
    path: '/datanode.api.v1.TradingDataService/GetNewAssetProposals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNewAssetProposalsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNewAssetProposalsResponse,
    requestSerialize: serialize_datanode_api_v1_GetNewAssetProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNewAssetProposalsRequest,
    responseSerialize: serialize_datanode_api_v1_GetNewAssetProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNewAssetProposalsResponse,
  },
  // Get governance data (proposals and votes) for a proposal located by ID
getProposalByID: {
    path: '/datanode.api.v1.TradingDataService/GetProposalByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetProposalByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.GetProposalByIDResponse,
    requestSerialize: serialize_datanode_api_v1_GetProposalByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetProposalByIDRequest,
    responseSerialize: serialize_datanode_api_v1_GetProposalByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetProposalByIDResponse,
  },
  // Get governance data (proposals and votes) for a proposal located by reference
getProposalByReference: {
    path: '/datanode.api.v1.TradingDataService/GetProposalByReference',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetProposalByReferenceRequest,
    responseType: data$node_api_v1_trading_data_pb.GetProposalByReferenceResponse,
    requestSerialize: serialize_datanode_api_v1_GetProposalByReferenceRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetProposalByReferenceRequest,
    responseSerialize: serialize_datanode_api_v1_GetProposalByReferenceResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetProposalByReferenceResponse,
  },
  // Subscribe to a stream of all governance updates
observeGovernance: {
    path: '/datanode.api.v1.TradingDataService/ObserveGovernance',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObserveGovernanceRequest,
    responseType: data$node_api_v1_trading_data_pb.ObserveGovernanceResponse,
    requestSerialize: serialize_datanode_api_v1_ObserveGovernanceRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObserveGovernanceRequest,
    responseSerialize: serialize_datanode_api_v1_ObserveGovernanceResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObserveGovernanceResponse,
  },
  // Subscribe to a stream of proposal updates
observePartyProposals: {
    path: '/datanode.api.v1.TradingDataService/ObservePartyProposals',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObservePartyProposalsRequest,
    responseType: data$node_api_v1_trading_data_pb.ObservePartyProposalsResponse,
    requestSerialize: serialize_datanode_api_v1_ObservePartyProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObservePartyProposalsRequest,
    responseSerialize: serialize_datanode_api_v1_ObservePartyProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObservePartyProposalsResponse,
  },
  // Subscribe to a stream of votes cast by a specific party
observePartyVotes: {
    path: '/datanode.api.v1.TradingDataService/ObservePartyVotes',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObservePartyVotesRequest,
    responseType: data$node_api_v1_trading_data_pb.ObservePartyVotesResponse,
    requestSerialize: serialize_datanode_api_v1_ObservePartyVotesRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObservePartyVotesRequest,
    responseSerialize: serialize_datanode_api_v1_ObservePartyVotesResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObservePartyVotesResponse,
  },
  // Subscribe to a stream of proposal votes
observeProposalVotes: {
    path: '/datanode.api.v1.TradingDataService/ObserveProposalVotes',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObserveProposalVotesRequest,
    responseType: data$node_api_v1_trading_data_pb.ObserveProposalVotesResponse,
    requestSerialize: serialize_datanode_api_v1_ObserveProposalVotesRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObserveProposalVotesRequest,
    responseSerialize: serialize_datanode_api_v1_ObserveProposalVotesResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObserveProposalVotesResponse,
  },
  // Subscribe to a stream of events from the core
observeEventBus: {
    path: '/datanode.api.v1.TradingDataService/ObserveEventBus',
    requestStream: true,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObserveEventBusRequest,
    responseType: data$node_api_v1_trading_data_pb.ObserveEventBusResponse,
    requestSerialize: serialize_datanode_api_v1_ObserveEventBusRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObserveEventBusRequest,
    responseSerialize: serialize_datanode_api_v1_ObserveEventBusResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObserveEventBusResponse,
  },
  // -- Validators --
//
// Get data of current node
getNodeData: {
    path: '/datanode.api.v1.TradingDataService/GetNodeData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNodeDataRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNodeDataResponse,
    requestSerialize: serialize_datanode_api_v1_GetNodeDataRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNodeDataRequest,
    responseSerialize: serialize_datanode_api_v1_GetNodeDataResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNodeDataResponse,
  },
  // List all known network nodes
getNodes: {
    path: '/datanode.api.v1.TradingDataService/GetNodes',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNodesRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNodesResponse,
    requestSerialize: serialize_datanode_api_v1_GetNodesRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNodesRequest,
    responseSerialize: serialize_datanode_api_v1_GetNodesResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNodesResponse,
  },
  // Get a specific node by ID
getNodeByID: {
    path: '/datanode.api.v1.TradingDataService/GetNodeByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNodeByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNodeByIDResponse,
    requestSerialize: serialize_datanode_api_v1_GetNodeByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNodeByIDRequest,
    responseSerialize: serialize_datanode_api_v1_GetNodeByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNodeByIDResponse,
  },
  // Get all key rotations
getKeyRotations: {
    path: '/datanode.api.v1.TradingDataService/GetKeyRotations',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetKeyRotationsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetKeyRotationsResponse,
    requestSerialize: serialize_datanode_api_v1_GetKeyRotationsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetKeyRotationsRequest,
    responseSerialize: serialize_datanode_api_v1_GetKeyRotationsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetKeyRotationsResponse,
  },
  // Get all key rotations by node
getKeyRotationsByNode: {
    path: '/datanode.api.v1.TradingDataService/GetKeyRotationsByNode',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetKeyRotationsByNodeRequest,
    responseType: data$node_api_v1_trading_data_pb.GetKeyRotationsByNodeResponse,
    requestSerialize: serialize_datanode_api_v1_GetKeyRotationsByNodeRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetKeyRotationsByNodeRequest,
    responseSerialize: serialize_datanode_api_v1_GetKeyRotationsByNodeResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetKeyRotationsByNodeResponse,
  },
  // Get data for a specific epoch, if id omitted it gets the current epoch
getEpoch: {
    path: '/datanode.api.v1.TradingDataService/GetEpoch',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetEpochRequest,
    responseType: data$node_api_v1_trading_data_pb.GetEpochResponse,
    requestSerialize: serialize_datanode_api_v1_GetEpochRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetEpochRequest,
    responseSerialize: serialize_datanode_api_v1_GetEpochResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetEpochResponse,
  },
  // -- Misc --
//
// Get Time
getVegaTime: {
    path: '/datanode.api.v1.TradingDataService/GetVegaTime',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetVegaTimeRequest,
    responseType: data$node_api_v1_trading_data_pb.GetVegaTimeResponse,
    requestSerialize: serialize_datanode_api_v1_GetVegaTimeRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetVegaTimeRequest,
    responseSerialize: serialize_datanode_api_v1_GetVegaTimeResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetVegaTimeResponse,
  },
  // Subscribe to a stream of Accounts
accountsSubscribe: {
    path: '/datanode.api.v1.TradingDataService/AccountsSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.AccountsSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.AccountsSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_AccountsSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_AccountsSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_AccountsSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_AccountsSubscribeResponse,
  },
  // Subscribe to a stream of Candles
candlesSubscribe: {
    path: '/datanode.api.v1.TradingDataService/CandlesSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.CandlesSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.CandlesSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_CandlesSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_CandlesSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_CandlesSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_CandlesSubscribeResponse,
  },
  // Subscribe to a stream of Margin Levels
marginLevelsSubscribe: {
    path: '/datanode.api.v1.TradingDataService/MarginLevelsSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_MarginLevelsSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarginLevelsSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_MarginLevelsSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarginLevelsSubscribeResponse,
  },
  // Subscribe to a stream of Market Depth
marketDepthSubscribe: {
    path: '/datanode.api.v1.TradingDataService/MarketDepthSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.MarketDepthSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketDepthSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_MarketDepthSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketDepthSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_MarketDepthSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketDepthSubscribeResponse,
  },
  // Subscribe to a stream of Market Depth Price Level Updates
marketDepthUpdatesSubscribe: {
    path: '/datanode.api.v1.TradingDataService/MarketDepthUpdatesSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_MarketDepthUpdatesSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketDepthUpdatesSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_MarketDepthUpdatesSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketDepthUpdatesSubscribeResponse,
  },
  // Subscribe to a stream of Markets Data
marketsDataSubscribe: {
    path: '/datanode.api.v1.TradingDataService/MarketsDataSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.MarketsDataSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.MarketsDataSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_MarketsDataSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_MarketsDataSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_MarketsDataSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_MarketsDataSubscribeResponse,
  },
  // Subscribe to a stream of Orders
ordersSubscribe: {
    path: '/datanode.api.v1.TradingDataService/OrdersSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.OrdersSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.OrdersSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_OrdersSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_OrdersSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_OrdersSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_OrdersSubscribeResponse,
  },
  // Subscribe to a stream of Positions
positionsSubscribe: {
    path: '/datanode.api.v1.TradingDataService/PositionsSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.PositionsSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.PositionsSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_PositionsSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_PositionsSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_PositionsSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_PositionsSubscribeResponse,
  },
  // Subscribe to a stream of Trades
tradesSubscribe: {
    path: '/datanode.api.v1.TradingDataService/TradesSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.TradesSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.TradesSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_TradesSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_TradesSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_TradesSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_TradesSubscribeResponse,
  },
  // Subscribe to a stream of Transfer Responses
transferResponsesSubscribe: {
    path: '/datanode.api.v1.TradingDataService/TransferResponsesSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest,
    responseType: data$node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse,
    requestSerialize: serialize_datanode_api_v1_TransferResponsesSubscribeRequest,
    requestDeserialize: deserialize_datanode_api_v1_TransferResponsesSubscribeRequest,
    responseSerialize: serialize_datanode_api_v1_TransferResponsesSubscribeResponse,
    responseDeserialize: deserialize_datanode_api_v1_TransferResponsesSubscribeResponse,
  },
  // Get an aggregate of signatures from all the nodes of the network
getNodeSignaturesAggregate: {
    path: '/datanode.api.v1.TradingDataService/GetNodeSignaturesAggregate',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest,
    responseType: data$node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse,
    requestSerialize: serialize_datanode_api_v1_GetNodeSignaturesAggregateRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetNodeSignaturesAggregateRequest,
    responseSerialize: serialize_datanode_api_v1_GetNodeSignaturesAggregateResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetNodeSignaturesAggregateResponse,
  },
  // Get an asset by its identifier
assetByID: {
    path: '/datanode.api.v1.TradingDataService/AssetByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.AssetByIDRequest,
    responseType: data$node_api_v1_trading_data_pb.AssetByIDResponse,
    requestSerialize: serialize_datanode_api_v1_AssetByIDRequest,
    requestDeserialize: deserialize_datanode_api_v1_AssetByIDRequest,
    responseSerialize: serialize_datanode_api_v1_AssetByIDResponse,
    responseDeserialize: deserialize_datanode_api_v1_AssetByIDResponse,
  },
  // Get a list of all assets on Vega
assets: {
    path: '/datanode.api.v1.TradingDataService/Assets',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.AssetsRequest,
    responseType: data$node_api_v1_trading_data_pb.AssetsResponse,
    requestSerialize: serialize_datanode_api_v1_AssetsRequest,
    requestDeserialize: deserialize_datanode_api_v1_AssetsRequest,
    responseSerialize: serialize_datanode_api_v1_AssetsResponse,
    responseDeserialize: deserialize_datanode_api_v1_AssetsResponse,
  },
  // Get an estimate for the fee to be paid for a given order
estimateFee: {
    path: '/datanode.api.v1.TradingDataService/EstimateFee',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.EstimateFeeRequest,
    responseType: data$node_api_v1_trading_data_pb.EstimateFeeResponse,
    requestSerialize: serialize_datanode_api_v1_EstimateFeeRequest,
    requestDeserialize: deserialize_datanode_api_v1_EstimateFeeRequest,
    responseSerialize: serialize_datanode_api_v1_EstimateFeeResponse,
    responseDeserialize: deserialize_datanode_api_v1_EstimateFeeResponse,
  },
  // Get an estimate for the margin required for a new order
estimateMargin: {
    path: '/datanode.api.v1.TradingDataService/EstimateMargin',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.EstimateMarginRequest,
    responseType: data$node_api_v1_trading_data_pb.EstimateMarginResponse,
    requestSerialize: serialize_datanode_api_v1_EstimateMarginRequest,
    requestDeserialize: deserialize_datanode_api_v1_EstimateMarginRequest,
    responseSerialize: serialize_datanode_api_v1_EstimateMarginResponse,
    responseDeserialize: deserialize_datanode_api_v1_EstimateMarginResponse,
  },
  // Get the bundle approval for an ERC20 withdrawal,
// these data are being used to bundle the call to the smart contract on the ethereum bridge
eRC20WithdrawalApproval: {
    path: '/datanode.api.v1.TradingDataService/ERC20WithdrawalApproval',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest,
    responseType: data$node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse,
    requestSerialize: serialize_datanode_api_v1_ERC20WithdrawalApprovalRequest,
    requestDeserialize: deserialize_datanode_api_v1_ERC20WithdrawalApprovalRequest,
    responseSerialize: serialize_datanode_api_v1_ERC20WithdrawalApprovalResponse,
    responseDeserialize: deserialize_datanode_api_v1_ERC20WithdrawalApprovalResponse,
  },
  // Get a withdrawal by its identifier
withdrawal: {
    path: '/datanode.api.v1.TradingDataService/Withdrawal',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.WithdrawalRequest,
    responseType: data$node_api_v1_trading_data_pb.WithdrawalResponse,
    requestSerialize: serialize_datanode_api_v1_WithdrawalRequest,
    requestDeserialize: deserialize_datanode_api_v1_WithdrawalRequest,
    responseSerialize: serialize_datanode_api_v1_WithdrawalResponse,
    responseDeserialize: deserialize_datanode_api_v1_WithdrawalResponse,
  },
  // Get withdrawals for a party
withdrawals: {
    path: '/datanode.api.v1.TradingDataService/Withdrawals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.WithdrawalsRequest,
    responseType: data$node_api_v1_trading_data_pb.WithdrawalsResponse,
    requestSerialize: serialize_datanode_api_v1_WithdrawalsRequest,
    requestDeserialize: deserialize_datanode_api_v1_WithdrawalsRequest,
    responseSerialize: serialize_datanode_api_v1_WithdrawalsResponse,
    responseDeserialize: deserialize_datanode_api_v1_WithdrawalsResponse,
  },
  // Get a deposit by its identifier
deposit: {
    path: '/datanode.api.v1.TradingDataService/Deposit',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.DepositRequest,
    responseType: data$node_api_v1_trading_data_pb.DepositResponse,
    requestSerialize: serialize_datanode_api_v1_DepositRequest,
    requestDeserialize: deserialize_datanode_api_v1_DepositRequest,
    responseSerialize: serialize_datanode_api_v1_DepositResponse,
    responseDeserialize: deserialize_datanode_api_v1_DepositResponse,
  },
  // Get deposits for a party
deposits: {
    path: '/datanode.api.v1.TradingDataService/Deposits',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.DepositsRequest,
    responseType: data$node_api_v1_trading_data_pb.DepositsResponse,
    requestSerialize: serialize_datanode_api_v1_DepositsRequest,
    requestDeserialize: deserialize_datanode_api_v1_DepositsRequest,
    responseSerialize: serialize_datanode_api_v1_DepositsResponse,
    responseDeserialize: deserialize_datanode_api_v1_DepositsResponse,
  },
  // Get the network parameters
networkParameters: {
    path: '/datanode.api.v1.TradingDataService/NetworkParameters',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.NetworkParametersRequest,
    responseType: data$node_api_v1_trading_data_pb.NetworkParametersResponse,
    requestSerialize: serialize_datanode_api_v1_NetworkParametersRequest,
    requestDeserialize: deserialize_datanode_api_v1_NetworkParametersRequest,
    responseSerialize: serialize_datanode_api_v1_NetworkParametersResponse,
    responseDeserialize: deserialize_datanode_api_v1_NetworkParametersResponse,
  },
  // Get the liquidity provision orders
liquidityProvisions: {
    path: '/datanode.api.v1.TradingDataService/LiquidityProvisions',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.LiquidityProvisionsRequest,
    responseType: data$node_api_v1_trading_data_pb.LiquidityProvisionsResponse,
    requestSerialize: serialize_datanode_api_v1_LiquidityProvisionsRequest,
    requestDeserialize: deserialize_datanode_api_v1_LiquidityProvisionsRequest,
    responseSerialize: serialize_datanode_api_v1_LiquidityProvisionsResponse,
    responseDeserialize: deserialize_datanode_api_v1_LiquidityProvisionsResponse,
  },
  // Get an oracle spec by ID
oracleSpec: {
    path: '/datanode.api.v1.TradingDataService/OracleSpec',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OracleSpecRequest,
    responseType: data$node_api_v1_trading_data_pb.OracleSpecResponse,
    requestSerialize: serialize_datanode_api_v1_OracleSpecRequest,
    requestDeserialize: deserialize_datanode_api_v1_OracleSpecRequest,
    responseSerialize: serialize_datanode_api_v1_OracleSpecResponse,
    responseDeserialize: deserialize_datanode_api_v1_OracleSpecResponse,
  },
  // Get the oracle specs
oracleSpecs: {
    path: '/datanode.api.v1.TradingDataService/OracleSpecs',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OracleSpecsRequest,
    responseType: data$node_api_v1_trading_data_pb.OracleSpecsResponse,
    requestSerialize: serialize_datanode_api_v1_OracleSpecsRequest,
    requestDeserialize: deserialize_datanode_api_v1_OracleSpecsRequest,
    responseSerialize: serialize_datanode_api_v1_OracleSpecsResponse,
    responseDeserialize: deserialize_datanode_api_v1_OracleSpecsResponse,
  },
  // Get all oracle data
oracleDataBySpec: {
    path: '/datanode.api.v1.TradingDataService/OracleDataBySpec',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.OracleDataBySpecRequest,
    responseType: data$node_api_v1_trading_data_pb.OracleDataBySpecResponse,
    requestSerialize: serialize_datanode_api_v1_OracleDataBySpecRequest,
    requestDeserialize: deserialize_datanode_api_v1_OracleDataBySpecRequest,
    responseSerialize: serialize_datanode_api_v1_OracleDataBySpecResponse,
    responseDeserialize: deserialize_datanode_api_v1_OracleDataBySpecResponse,
  },
  // subscribe to reward details
observeRewardDetails: {
    path: '/datanode.api.v1.TradingDataService/ObserveRewardDetails',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObserveRewardDetailsRequest,
    responseType: data$node_api_v1_trading_data_pb.ObserveRewardDetailsResponse,
    requestSerialize: serialize_datanode_api_v1_ObserveRewardDetailsRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObserveRewardDetailsRequest,
    responseSerialize: serialize_datanode_api_v1_ObserveRewardDetailsResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObserveRewardDetailsResponse,
  },
  // Get Reward data
getRewardDetails: {
    path: '/datanode.api.v1.TradingDataService/GetRewardDetails',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.GetRewardDetailsRequest,
    responseType: data$node_api_v1_trading_data_pb.GetRewardDetailsResponse,
    requestSerialize: serialize_datanode_api_v1_GetRewardDetailsRequest,
    requestDeserialize: deserialize_datanode_api_v1_GetRewardDetailsRequest,
    responseSerialize: serialize_datanode_api_v1_GetRewardDetailsResponse,
    responseDeserialize: deserialize_datanode_api_v1_GetRewardDetailsResponse,
  },
  checkpoints: {
    path: '/datanode.api.v1.TradingDataService/Checkpoints',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.CheckpointsRequest,
    responseType: data$node_api_v1_trading_data_pb.CheckpointsResponse,
    requestSerialize: serialize_datanode_api_v1_CheckpointsRequest,
    requestDeserialize: deserialize_datanode_api_v1_CheckpointsRequest,
    responseSerialize: serialize_datanode_api_v1_CheckpointsResponse,
    responseDeserialize: deserialize_datanode_api_v1_CheckpointsResponse,
  },
  // Get delegation data
delegations: {
    path: '/datanode.api.v1.TradingDataService/Delegations',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.DelegationsRequest,
    responseType: data$node_api_v1_trading_data_pb.DelegationsResponse,
    requestSerialize: serialize_datanode_api_v1_DelegationsRequest,
    requestDeserialize: deserialize_datanode_api_v1_DelegationsRequest,
    responseSerialize: serialize_datanode_api_v1_DelegationsResponse,
    responseDeserialize: deserialize_datanode_api_v1_DelegationsResponse,
  },
  // subscribe to delegation events
observeDelegations: {
    path: '/datanode.api.v1.TradingDataService/ObserveDelegations',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v1_trading_data_pb.ObserveDelegationsRequest,
    responseType: data$node_api_v1_trading_data_pb.ObserveDelegationsResponse,
    requestSerialize: serialize_datanode_api_v1_ObserveDelegationsRequest,
    requestDeserialize: deserialize_datanode_api_v1_ObserveDelegationsRequest,
    responseSerialize: serialize_datanode_api_v1_ObserveDelegationsResponse,
    responseDeserialize: deserialize_datanode_api_v1_ObserveDelegationsResponse,
  },
  partyStake: {
    path: '/datanode.api.v1.TradingDataService/PartyStake',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v1_trading_data_pb.PartyStakeRequest,
    responseType: data$node_api_v1_trading_data_pb.PartyStakeResponse,
    requestSerialize: serialize_datanode_api_v1_PartyStakeRequest,
    requestDeserialize: deserialize_datanode_api_v1_PartyStakeRequest,
    responseSerialize: serialize_datanode_api_v1_PartyStakeResponse,
    responseDeserialize: deserialize_datanode_api_v1_PartyStakeResponse,
  },
};

exports.TradingDataServiceClient = grpc.makeGenericClientConstructor(TradingDataServiceService);
