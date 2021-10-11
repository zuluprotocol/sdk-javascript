// package: datanode.api.v1
// file: data-node/api/v1/trading_data.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as data_node_api_v1_trading_data_pb from "../../../data-node/api/v1/trading_data_pb";
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

interface ITradingDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    marketAccounts: ITradingDataServiceService_IMarketAccounts;
    partyAccounts: ITradingDataServiceService_IPartyAccounts;
    feeInfrastructureAccounts: ITradingDataServiceService_IFeeInfrastructureAccounts;
    globalRewardPoolAccounts: ITradingDataServiceService_IGlobalRewardPoolAccounts;
    candles: ITradingDataServiceService_ICandles;
    marketDataByID: ITradingDataServiceService_IMarketDataByID;
    marketsData: ITradingDataServiceService_IMarketsData;
    marketByID: ITradingDataServiceService_IMarketByID;
    marketDepth: ITradingDataServiceService_IMarketDepth;
    markets: ITradingDataServiceService_IMarkets;
    orderByMarketAndID: ITradingDataServiceService_IOrderByMarketAndID;
    orderByReference: ITradingDataServiceService_IOrderByReference;
    ordersByMarket: ITradingDataServiceService_IOrdersByMarket;
    ordersByParty: ITradingDataServiceService_IOrdersByParty;
    orderByID: ITradingDataServiceService_IOrderByID;
    orderVersionsByID: ITradingDataServiceService_IOrderVersionsByID;
    marginLevels: ITradingDataServiceService_IMarginLevels;
    parties: ITradingDataServiceService_IParties;
    partyByID: ITradingDataServiceService_IPartyByID;
    positionsByParty: ITradingDataServiceService_IPositionsByParty;
    lastTrade: ITradingDataServiceService_ILastTrade;
    tradesByMarket: ITradingDataServiceService_ITradesByMarket;
    tradesByOrder: ITradingDataServiceService_ITradesByOrder;
    tradesByParty: ITradingDataServiceService_ITradesByParty;
    getProposals: ITradingDataServiceService_IGetProposals;
    getProposalsByParty: ITradingDataServiceService_IGetProposalsByParty;
    getVotesByParty: ITradingDataServiceService_IGetVotesByParty;
    getNewMarketProposals: ITradingDataServiceService_IGetNewMarketProposals;
    getUpdateMarketProposals: ITradingDataServiceService_IGetUpdateMarketProposals;
    getNetworkParametersProposals: ITradingDataServiceService_IGetNetworkParametersProposals;
    getNewAssetProposals: ITradingDataServiceService_IGetNewAssetProposals;
    getProposalByID: ITradingDataServiceService_IGetProposalByID;
    getProposalByReference: ITradingDataServiceService_IGetProposalByReference;
    observeGovernance: ITradingDataServiceService_IObserveGovernance;
    observePartyProposals: ITradingDataServiceService_IObservePartyProposals;
    observePartyVotes: ITradingDataServiceService_IObservePartyVotes;
    observeProposalVotes: ITradingDataServiceService_IObserveProposalVotes;
    observeEventBus: ITradingDataServiceService_IObserveEventBus;
    getNodeData: ITradingDataServiceService_IGetNodeData;
    getNodes: ITradingDataServiceService_IGetNodes;
    getNodeByID: ITradingDataServiceService_IGetNodeByID;
    getEpoch: ITradingDataServiceService_IGetEpoch;
    getVegaTime: ITradingDataServiceService_IGetVegaTime;
    accountsSubscribe: ITradingDataServiceService_IAccountsSubscribe;
    candlesSubscribe: ITradingDataServiceService_ICandlesSubscribe;
    marginLevelsSubscribe: ITradingDataServiceService_IMarginLevelsSubscribe;
    marketDepthSubscribe: ITradingDataServiceService_IMarketDepthSubscribe;
    marketDepthUpdatesSubscribe: ITradingDataServiceService_IMarketDepthUpdatesSubscribe;
    marketsDataSubscribe: ITradingDataServiceService_IMarketsDataSubscribe;
    ordersSubscribe: ITradingDataServiceService_IOrdersSubscribe;
    positionsSubscribe: ITradingDataServiceService_IPositionsSubscribe;
    tradesSubscribe: ITradingDataServiceService_ITradesSubscribe;
    transferResponsesSubscribe: ITradingDataServiceService_ITransferResponsesSubscribe;
    getNodeSignaturesAggregate: ITradingDataServiceService_IGetNodeSignaturesAggregate;
    assetByID: ITradingDataServiceService_IAssetByID;
    assets: ITradingDataServiceService_IAssets;
    estimateFee: ITradingDataServiceService_IEstimateFee;
    estimateMargin: ITradingDataServiceService_IEstimateMargin;
    eRC20WithdrawalApproval: ITradingDataServiceService_IERC20WithdrawalApproval;
    withdrawal: ITradingDataServiceService_IWithdrawal;
    withdrawals: ITradingDataServiceService_IWithdrawals;
    deposit: ITradingDataServiceService_IDeposit;
    deposits: ITradingDataServiceService_IDeposits;
    networkParameters: ITradingDataServiceService_INetworkParameters;
    liquidityProvisions: ITradingDataServiceService_ILiquidityProvisions;
    oracleSpec: ITradingDataServiceService_IOracleSpec;
    oracleSpecs: ITradingDataServiceService_IOracleSpecs;
    oracleDataBySpec: ITradingDataServiceService_IOracleDataBySpec;
    getRewardDetails: ITradingDataServiceService_IGetRewardDetails;
    checkpoints: ITradingDataServiceService_ICheckpoints;
    delegations: ITradingDataServiceService_IDelegations;
    partyStake: ITradingDataServiceService_IPartyStake;
}

interface ITradingDataServiceService_IMarketAccounts extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketAccountsRequest, data_node_api_v1_trading_data_pb.MarketAccountsResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketAccountsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketAccountsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketAccountsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketAccountsResponse>;
}
interface ITradingDataServiceService_IPartyAccounts extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.PartyAccountsRequest, data_node_api_v1_trading_data_pb.PartyAccountsResponse> {
    path: "/datanode.api.v1.TradingDataService/PartyAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartyAccountsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartyAccountsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartyAccountsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartyAccountsResponse>;
}
interface ITradingDataServiceService_IFeeInfrastructureAccounts extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse> {
    path: "/datanode.api.v1.TradingDataService/FeeInfrastructureAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse>;
}
interface ITradingDataServiceService_IGlobalRewardPoolAccounts extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse> {
    path: "/datanode.api.v1.TradingDataService/GlobalRewardPoolAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse>;
}
interface ITradingDataServiceService_ICandles extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.CandlesRequest, data_node_api_v1_trading_data_pb.CandlesResponse> {
    path: "/datanode.api.v1.TradingDataService/Candles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.CandlesRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.CandlesRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.CandlesResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.CandlesResponse>;
}
interface ITradingDataServiceService_IMarketDataByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketDataByIDRequest, data_node_api_v1_trading_data_pb.MarketDataByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketDataByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDataByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDataByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDataByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDataByIDResponse>;
}
interface ITradingDataServiceService_IMarketsData extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketsDataRequest, data_node_api_v1_trading_data_pb.MarketsDataResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketsData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketsDataRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketsDataRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketsDataResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketsDataResponse>;
}
interface ITradingDataServiceService_IMarketByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketByIDRequest, data_node_api_v1_trading_data_pb.MarketByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketByIDResponse>;
}
interface ITradingDataServiceService_IMarketDepth extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketDepthRequest, data_node_api_v1_trading_data_pb.MarketDepthResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketDepth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDepthRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDepthRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDepthResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDepthResponse>;
}
interface ITradingDataServiceService_IMarkets extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketsRequest, data_node_api_v1_trading_data_pb.MarketsResponse> {
    path: "/datanode.api.v1.TradingDataService/Markets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketsResponse>;
}
interface ITradingDataServiceService_IOrderByMarketAndID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse> {
    path: "/datanode.api.v1.TradingDataService/OrderByMarketAndID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse>;
}
interface ITradingDataServiceService_IOrderByReference extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrderByReferenceRequest, data_node_api_v1_trading_data_pb.OrderByReferenceResponse> {
    path: "/datanode.api.v1.TradingDataService/OrderByReference";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderByReferenceRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderByReferenceRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderByReferenceResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderByReferenceResponse>;
}
interface ITradingDataServiceService_IOrdersByMarket extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrdersByMarketRequest, data_node_api_v1_trading_data_pb.OrdersByMarketResponse> {
    path: "/datanode.api.v1.TradingDataService/OrdersByMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrdersByMarketRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrdersByMarketRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrdersByMarketResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrdersByMarketResponse>;
}
interface ITradingDataServiceService_IOrdersByParty extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrdersByPartyRequest, data_node_api_v1_trading_data_pb.OrdersByPartyResponse> {
    path: "/datanode.api.v1.TradingDataService/OrdersByParty";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrdersByPartyRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrdersByPartyRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrdersByPartyResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrdersByPartyResponse>;
}
interface ITradingDataServiceService_IOrderByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrderByIDRequest, data_node_api_v1_trading_data_pb.OrderByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/OrderByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderByIDResponse>;
}
interface ITradingDataServiceService_IOrderVersionsByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/OrderVersionsByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse>;
}
interface ITradingDataServiceService_IMarginLevels extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarginLevelsRequest, data_node_api_v1_trading_data_pb.MarginLevelsResponse> {
    path: "/datanode.api.v1.TradingDataService/MarginLevels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarginLevelsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarginLevelsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarginLevelsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarginLevelsResponse>;
}
interface ITradingDataServiceService_IParties extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.PartiesRequest, data_node_api_v1_trading_data_pb.PartiesResponse> {
    path: "/datanode.api.v1.TradingDataService/Parties";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartiesRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartiesRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartiesResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartiesResponse>;
}
interface ITradingDataServiceService_IPartyByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.PartyByIDRequest, data_node_api_v1_trading_data_pb.PartyByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/PartyByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartyByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartyByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartyByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartyByIDResponse>;
}
interface ITradingDataServiceService_IPositionsByParty extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.PositionsByPartyRequest, data_node_api_v1_trading_data_pb.PositionsByPartyResponse> {
    path: "/datanode.api.v1.TradingDataService/PositionsByParty";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PositionsByPartyRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PositionsByPartyRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PositionsByPartyResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PositionsByPartyResponse>;
}
interface ITradingDataServiceService_ILastTrade extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.LastTradeRequest, data_node_api_v1_trading_data_pb.LastTradeResponse> {
    path: "/datanode.api.v1.TradingDataService/LastTrade";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.LastTradeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.LastTradeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.LastTradeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.LastTradeResponse>;
}
interface ITradingDataServiceService_ITradesByMarket extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.TradesByMarketRequest, data_node_api_v1_trading_data_pb.TradesByMarketResponse> {
    path: "/datanode.api.v1.TradingDataService/TradesByMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesByMarketRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesByMarketRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesByMarketResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesByMarketResponse>;
}
interface ITradingDataServiceService_ITradesByOrder extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.TradesByOrderRequest, data_node_api_v1_trading_data_pb.TradesByOrderResponse> {
    path: "/datanode.api.v1.TradingDataService/TradesByOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesByOrderRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesByOrderRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesByOrderResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesByOrderResponse>;
}
interface ITradingDataServiceService_ITradesByParty extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.TradesByPartyRequest, data_node_api_v1_trading_data_pb.TradesByPartyResponse> {
    path: "/datanode.api.v1.TradingDataService/TradesByParty";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesByPartyRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesByPartyRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesByPartyResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesByPartyResponse>;
}
interface ITradingDataServiceService_IGetProposals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetProposalsRequest, data_node_api_v1_trading_data_pb.GetProposalsResponse> {
    path: "/datanode.api.v1.TradingDataService/GetProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalsResponse>;
}
interface ITradingDataServiceService_IGetProposalsByParty extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse> {
    path: "/datanode.api.v1.TradingDataService/GetProposalsByParty";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse>;
}
interface ITradingDataServiceService_IGetVotesByParty extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, data_node_api_v1_trading_data_pb.GetVotesByPartyResponse> {
    path: "/datanode.api.v1.TradingDataService/GetVotesByParty";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetVotesByPartyRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetVotesByPartyRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetVotesByPartyResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetVotesByPartyResponse>;
}
interface ITradingDataServiceService_IGetNewMarketProposals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNewMarketProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse>;
}
interface ITradingDataServiceService_IGetUpdateMarketProposals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse> {
    path: "/datanode.api.v1.TradingDataService/GetUpdateMarketProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse>;
}
interface ITradingDataServiceService_IGetNetworkParametersProposals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNetworkParametersProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse>;
}
interface ITradingDataServiceService_IGetNewAssetProposals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNewAssetProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse>;
}
interface ITradingDataServiceService_IGetProposalByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetProposalByIDRequest, data_node_api_v1_trading_data_pb.GetProposalByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/GetProposalByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalByIDResponse>;
}
interface ITradingDataServiceService_IGetProposalByReference extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse> {
    path: "/datanode.api.v1.TradingDataService/GetProposalByReference";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse>;
}
interface ITradingDataServiceService_IObserveGovernance extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.ObserveGovernanceRequest, data_node_api_v1_trading_data_pb.ObserveGovernanceResponse> {
    path: "/datanode.api.v1.TradingDataService/ObserveGovernance";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObserveGovernanceRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObserveGovernanceRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
}
interface ITradingDataServiceService_IObservePartyProposals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest, data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse> {
    path: "/datanode.api.v1.TradingDataService/ObservePartyProposals";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
}
interface ITradingDataServiceService_IObservePartyVotes extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.ObservePartyVotesRequest, data_node_api_v1_trading_data_pb.ObservePartyVotesResponse> {
    path: "/datanode.api.v1.TradingDataService/ObservePartyVotes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObservePartyVotesRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObservePartyVotesRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
}
interface ITradingDataServiceService_IObserveProposalVotes extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest, data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse> {
    path: "/datanode.api.v1.TradingDataService/ObserveProposalVotes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
}
interface ITradingDataServiceService_IObserveEventBus extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse> {
    path: "/datanode.api.v1.TradingDataService/ObserveEventBus";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObserveEventBusRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObserveEventBusRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
}
interface ITradingDataServiceService_IGetNodeData extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNodeDataRequest, data_node_api_v1_trading_data_pb.GetNodeDataResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNodeData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodeDataRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodeDataRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodeDataResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodeDataResponse>;
}
interface ITradingDataServiceService_IGetNodes extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNodesRequest, data_node_api_v1_trading_data_pb.GetNodesResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodesRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodesRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodesResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodesResponse>;
}
interface ITradingDataServiceService_IGetNodeByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNodeByIDRequest, data_node_api_v1_trading_data_pb.GetNodeByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNodeByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodeByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodeByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodeByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodeByIDResponse>;
}
interface ITradingDataServiceService_IGetEpoch extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetEpochRequest, data_node_api_v1_trading_data_pb.GetEpochResponse> {
    path: "/datanode.api.v1.TradingDataService/GetEpoch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetEpochRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetEpochRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetEpochResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetEpochResponse>;
}
interface ITradingDataServiceService_IGetVegaTime extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetVegaTimeRequest, data_node_api_v1_trading_data_pb.GetVegaTimeResponse> {
    path: "/datanode.api.v1.TradingDataService/GetVegaTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetVegaTimeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetVegaTimeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetVegaTimeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetVegaTimeResponse>;
}
interface ITradingDataServiceService_IAccountsSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.AccountsSubscribeRequest, data_node_api_v1_trading_data_pb.AccountsSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/AccountsSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.AccountsSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.AccountsSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
}
interface ITradingDataServiceService_ICandlesSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.CandlesSubscribeRequest, data_node_api_v1_trading_data_pb.CandlesSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/CandlesSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.CandlesSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.CandlesSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
}
interface ITradingDataServiceService_IMarginLevelsSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest, data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/MarginLevelsSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
}
interface ITradingDataServiceService_IMarketDepthSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest, data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketDepthSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
}
interface ITradingDataServiceService_IMarketDepthUpdatesSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest, data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketDepthUpdatesSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
}
interface ITradingDataServiceService_IMarketsDataSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest, data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/MarketsDataSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
}
interface ITradingDataServiceService_IOrdersSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OrdersSubscribeRequest, data_node_api_v1_trading_data_pb.OrdersSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/OrdersSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrdersSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrdersSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
}
interface ITradingDataServiceService_IPositionsSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.PositionsSubscribeRequest, data_node_api_v1_trading_data_pb.PositionsSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/PositionsSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PositionsSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PositionsSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
}
interface ITradingDataServiceService_ITradesSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.TradesSubscribeRequest, data_node_api_v1_trading_data_pb.TradesSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/TradesSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
}
interface ITradingDataServiceService_ITransferResponsesSubscribe extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest, data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse> {
    path: "/datanode.api.v1.TradingDataService/TransferResponsesSubscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
}
interface ITradingDataServiceService_IGetNodeSignaturesAggregate extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse> {
    path: "/datanode.api.v1.TradingDataService/GetNodeSignaturesAggregate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse>;
}
interface ITradingDataServiceService_IAssetByID extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.AssetByIDRequest, data_node_api_v1_trading_data_pb.AssetByIDResponse> {
    path: "/datanode.api.v1.TradingDataService/AssetByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.AssetByIDRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.AssetByIDRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.AssetByIDResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.AssetByIDResponse>;
}
interface ITradingDataServiceService_IAssets extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.AssetsRequest, data_node_api_v1_trading_data_pb.AssetsResponse> {
    path: "/datanode.api.v1.TradingDataService/Assets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.AssetsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.AssetsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.AssetsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.AssetsResponse>;
}
interface ITradingDataServiceService_IEstimateFee extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.EstimateFeeRequest, data_node_api_v1_trading_data_pb.EstimateFeeResponse> {
    path: "/datanode.api.v1.TradingDataService/EstimateFee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.EstimateFeeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.EstimateFeeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.EstimateFeeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.EstimateFeeResponse>;
}
interface ITradingDataServiceService_IEstimateMargin extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.EstimateMarginRequest, data_node_api_v1_trading_data_pb.EstimateMarginResponse> {
    path: "/datanode.api.v1.TradingDataService/EstimateMargin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.EstimateMarginRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.EstimateMarginRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.EstimateMarginResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.EstimateMarginResponse>;
}
interface ITradingDataServiceService_IERC20WithdrawalApproval extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse> {
    path: "/datanode.api.v1.TradingDataService/ERC20WithdrawalApproval";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse>;
}
interface ITradingDataServiceService_IWithdrawal extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.WithdrawalRequest, data_node_api_v1_trading_data_pb.WithdrawalResponse> {
    path: "/datanode.api.v1.TradingDataService/Withdrawal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.WithdrawalRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.WithdrawalRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.WithdrawalResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.WithdrawalResponse>;
}
interface ITradingDataServiceService_IWithdrawals extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.WithdrawalsRequest, data_node_api_v1_trading_data_pb.WithdrawalsResponse> {
    path: "/datanode.api.v1.TradingDataService/Withdrawals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.WithdrawalsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.WithdrawalsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.WithdrawalsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.WithdrawalsResponse>;
}
interface ITradingDataServiceService_IDeposit extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.DepositRequest, data_node_api_v1_trading_data_pb.DepositResponse> {
    path: "/datanode.api.v1.TradingDataService/Deposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.DepositRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.DepositRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.DepositResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.DepositResponse>;
}
interface ITradingDataServiceService_IDeposits extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.DepositsRequest, data_node_api_v1_trading_data_pb.DepositsResponse> {
    path: "/datanode.api.v1.TradingDataService/Deposits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.DepositsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.DepositsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.DepositsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.DepositsResponse>;
}
interface ITradingDataServiceService_INetworkParameters extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.NetworkParametersRequest, data_node_api_v1_trading_data_pb.NetworkParametersResponse> {
    path: "/datanode.api.v1.TradingDataService/NetworkParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.NetworkParametersRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.NetworkParametersRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.NetworkParametersResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.NetworkParametersResponse>;
}
interface ITradingDataServiceService_ILiquidityProvisions extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse> {
    path: "/datanode.api.v1.TradingDataService/LiquidityProvisions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse>;
}
interface ITradingDataServiceService_IOracleSpec extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OracleSpecRequest, data_node_api_v1_trading_data_pb.OracleSpecResponse> {
    path: "/datanode.api.v1.TradingDataService/OracleSpec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OracleSpecRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OracleSpecRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OracleSpecResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OracleSpecResponse>;
}
interface ITradingDataServiceService_IOracleSpecs extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OracleSpecsRequest, data_node_api_v1_trading_data_pb.OracleSpecsResponse> {
    path: "/datanode.api.v1.TradingDataService/OracleSpecs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OracleSpecsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OracleSpecsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OracleSpecsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OracleSpecsResponse>;
}
interface ITradingDataServiceService_IOracleDataBySpec extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, data_node_api_v1_trading_data_pb.OracleDataBySpecResponse> {
    path: "/datanode.api.v1.TradingDataService/OracleDataBySpec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OracleDataBySpecRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OracleDataBySpecRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.OracleDataBySpecResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.OracleDataBySpecResponse>;
}
interface ITradingDataServiceService_IGetRewardDetails extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, data_node_api_v1_trading_data_pb.GetRewardDetailsResponse> {
    path: "/datanode.api.v1.TradingDataService/GetRewardDetails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetRewardDetailsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetRewardDetailsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.GetRewardDetailsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.GetRewardDetailsResponse>;
}
interface ITradingDataServiceService_ICheckpoints extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.CheckpointsRequest, data_node_api_v1_trading_data_pb.CheckpointsResponse> {
    path: "/datanode.api.v1.TradingDataService/Checkpoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.CheckpointsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.CheckpointsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.CheckpointsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.CheckpointsResponse>;
}
interface ITradingDataServiceService_IDelegations extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.DelegationsRequest, data_node_api_v1_trading_data_pb.DelegationsResponse> {
    path: "/datanode.api.v1.TradingDataService/Delegations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.DelegationsRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.DelegationsRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.DelegationsResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.DelegationsResponse>;
}
interface ITradingDataServiceService_IPartyStake extends grpc.MethodDefinition<data_node_api_v1_trading_data_pb.PartyStakeRequest, data_node_api_v1_trading_data_pb.PartyStakeResponse> {
    path: "/datanode.api.v1.TradingDataService/PartyStake";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartyStakeRequest>;
    requestDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartyStakeRequest>;
    responseSerialize: grpc.serialize<data_node_api_v1_trading_data_pb.PartyStakeResponse>;
    responseDeserialize: grpc.deserialize<data_node_api_v1_trading_data_pb.PartyStakeResponse>;
}

export const TradingDataServiceService: ITradingDataServiceService;

export interface ITradingDataServiceServer extends grpc.UntypedServiceImplementation {
    marketAccounts: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarketAccountsRequest, data_node_api_v1_trading_data_pb.MarketAccountsResponse>;
    partyAccounts: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.PartyAccountsRequest, data_node_api_v1_trading_data_pb.PartyAccountsResponse>;
    feeInfrastructureAccounts: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse>;
    globalRewardPoolAccounts: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse>;
    candles: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.CandlesRequest, data_node_api_v1_trading_data_pb.CandlesResponse>;
    marketDataByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarketDataByIDRequest, data_node_api_v1_trading_data_pb.MarketDataByIDResponse>;
    marketsData: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarketsDataRequest, data_node_api_v1_trading_data_pb.MarketsDataResponse>;
    marketByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarketByIDRequest, data_node_api_v1_trading_data_pb.MarketByIDResponse>;
    marketDepth: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarketDepthRequest, data_node_api_v1_trading_data_pb.MarketDepthResponse>;
    markets: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarketsRequest, data_node_api_v1_trading_data_pb.MarketsResponse>;
    orderByMarketAndID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse>;
    orderByReference: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OrderByReferenceRequest, data_node_api_v1_trading_data_pb.OrderByReferenceResponse>;
    ordersByMarket: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OrdersByMarketRequest, data_node_api_v1_trading_data_pb.OrdersByMarketResponse>;
    ordersByParty: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OrdersByPartyRequest, data_node_api_v1_trading_data_pb.OrdersByPartyResponse>;
    orderByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OrderByIDRequest, data_node_api_v1_trading_data_pb.OrderByIDResponse>;
    orderVersionsByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse>;
    marginLevels: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.MarginLevelsRequest, data_node_api_v1_trading_data_pb.MarginLevelsResponse>;
    parties: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.PartiesRequest, data_node_api_v1_trading_data_pb.PartiesResponse>;
    partyByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.PartyByIDRequest, data_node_api_v1_trading_data_pb.PartyByIDResponse>;
    positionsByParty: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.PositionsByPartyRequest, data_node_api_v1_trading_data_pb.PositionsByPartyResponse>;
    lastTrade: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.LastTradeRequest, data_node_api_v1_trading_data_pb.LastTradeResponse>;
    tradesByMarket: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.TradesByMarketRequest, data_node_api_v1_trading_data_pb.TradesByMarketResponse>;
    tradesByOrder: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.TradesByOrderRequest, data_node_api_v1_trading_data_pb.TradesByOrderResponse>;
    tradesByParty: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.TradesByPartyRequest, data_node_api_v1_trading_data_pb.TradesByPartyResponse>;
    getProposals: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetProposalsRequest, data_node_api_v1_trading_data_pb.GetProposalsResponse>;
    getProposalsByParty: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse>;
    getVotesByParty: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, data_node_api_v1_trading_data_pb.GetVotesByPartyResponse>;
    getNewMarketProposals: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse>;
    getUpdateMarketProposals: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse>;
    getNetworkParametersProposals: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse>;
    getNewAssetProposals: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse>;
    getProposalByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetProposalByIDRequest, data_node_api_v1_trading_data_pb.GetProposalByIDResponse>;
    getProposalByReference: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse>;
    observeGovernance: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.ObserveGovernanceRequest, data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
    observePartyProposals: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest, data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
    observePartyVotes: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.ObservePartyVotesRequest, data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
    observeProposalVotes: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest, data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
    observeEventBus: grpc.handleBidiStreamingCall<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    getNodeData: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNodeDataRequest, data_node_api_v1_trading_data_pb.GetNodeDataResponse>;
    getNodes: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNodesRequest, data_node_api_v1_trading_data_pb.GetNodesResponse>;
    getNodeByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNodeByIDRequest, data_node_api_v1_trading_data_pb.GetNodeByIDResponse>;
    getEpoch: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetEpochRequest, data_node_api_v1_trading_data_pb.GetEpochResponse>;
    getVegaTime: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetVegaTimeRequest, data_node_api_v1_trading_data_pb.GetVegaTimeResponse>;
    accountsSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.AccountsSubscribeRequest, data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
    candlesSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.CandlesSubscribeRequest, data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
    marginLevelsSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest, data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
    marketDepthSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest, data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
    marketDepthUpdatesSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest, data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
    marketsDataSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest, data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
    ordersSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.OrdersSubscribeRequest, data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
    positionsSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.PositionsSubscribeRequest, data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
    tradesSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.TradesSubscribeRequest, data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
    transferResponsesSubscribe: grpc.handleServerStreamingCall<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest, data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
    getNodeSignaturesAggregate: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse>;
    assetByID: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.AssetByIDRequest, data_node_api_v1_trading_data_pb.AssetByIDResponse>;
    assets: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.AssetsRequest, data_node_api_v1_trading_data_pb.AssetsResponse>;
    estimateFee: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.EstimateFeeRequest, data_node_api_v1_trading_data_pb.EstimateFeeResponse>;
    estimateMargin: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.EstimateMarginRequest, data_node_api_v1_trading_data_pb.EstimateMarginResponse>;
    eRC20WithdrawalApproval: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse>;
    withdrawal: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.WithdrawalRequest, data_node_api_v1_trading_data_pb.WithdrawalResponse>;
    withdrawals: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.WithdrawalsRequest, data_node_api_v1_trading_data_pb.WithdrawalsResponse>;
    deposit: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.DepositRequest, data_node_api_v1_trading_data_pb.DepositResponse>;
    deposits: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.DepositsRequest, data_node_api_v1_trading_data_pb.DepositsResponse>;
    networkParameters: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.NetworkParametersRequest, data_node_api_v1_trading_data_pb.NetworkParametersResponse>;
    liquidityProvisions: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse>;
    oracleSpec: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OracleSpecRequest, data_node_api_v1_trading_data_pb.OracleSpecResponse>;
    oracleSpecs: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OracleSpecsRequest, data_node_api_v1_trading_data_pb.OracleSpecsResponse>;
    oracleDataBySpec: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, data_node_api_v1_trading_data_pb.OracleDataBySpecResponse>;
    getRewardDetails: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, data_node_api_v1_trading_data_pb.GetRewardDetailsResponse>;
    checkpoints: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.CheckpointsRequest, data_node_api_v1_trading_data_pb.CheckpointsResponse>;
    delegations: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.DelegationsRequest, data_node_api_v1_trading_data_pb.DelegationsResponse>;
    partyStake: grpc.handleUnaryCall<data_node_api_v1_trading_data_pb.PartyStakeRequest, data_node_api_v1_trading_data_pb.PartyStakeResponse>;
}

export interface ITradingDataServiceClient {
    marketAccounts(request: data_node_api_v1_trading_data_pb.MarketAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketAccountsResponse) => void): grpc.ClientUnaryCall;
    marketAccounts(request: data_node_api_v1_trading_data_pb.MarketAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketAccountsResponse) => void): grpc.ClientUnaryCall;
    marketAccounts(request: data_node_api_v1_trading_data_pb.MarketAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketAccountsResponse) => void): grpc.ClientUnaryCall;
    partyAccounts(request: data_node_api_v1_trading_data_pb.PartyAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyAccountsResponse) => void): grpc.ClientUnaryCall;
    partyAccounts(request: data_node_api_v1_trading_data_pb.PartyAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyAccountsResponse) => void): grpc.ClientUnaryCall;
    partyAccounts(request: data_node_api_v1_trading_data_pb.PartyAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyAccountsResponse) => void): grpc.ClientUnaryCall;
    feeInfrastructureAccounts(request: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse) => void): grpc.ClientUnaryCall;
    feeInfrastructureAccounts(request: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse) => void): grpc.ClientUnaryCall;
    feeInfrastructureAccounts(request: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse) => void): grpc.ClientUnaryCall;
    globalRewardPoolAccounts(request: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse) => void): grpc.ClientUnaryCall;
    globalRewardPoolAccounts(request: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse) => void): grpc.ClientUnaryCall;
    globalRewardPoolAccounts(request: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse) => void): grpc.ClientUnaryCall;
    candles(request: data_node_api_v1_trading_data_pb.CandlesRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CandlesResponse) => void): grpc.ClientUnaryCall;
    candles(request: data_node_api_v1_trading_data_pb.CandlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CandlesResponse) => void): grpc.ClientUnaryCall;
    candles(request: data_node_api_v1_trading_data_pb.CandlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CandlesResponse) => void): grpc.ClientUnaryCall;
    marketDataByID(request: data_node_api_v1_trading_data_pb.MarketDataByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDataByIDResponse) => void): grpc.ClientUnaryCall;
    marketDataByID(request: data_node_api_v1_trading_data_pb.MarketDataByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDataByIDResponse) => void): grpc.ClientUnaryCall;
    marketDataByID(request: data_node_api_v1_trading_data_pb.MarketDataByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDataByIDResponse) => void): grpc.ClientUnaryCall;
    marketsData(request: data_node_api_v1_trading_data_pb.MarketsDataRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsDataResponse) => void): grpc.ClientUnaryCall;
    marketsData(request: data_node_api_v1_trading_data_pb.MarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsDataResponse) => void): grpc.ClientUnaryCall;
    marketsData(request: data_node_api_v1_trading_data_pb.MarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsDataResponse) => void): grpc.ClientUnaryCall;
    marketByID(request: data_node_api_v1_trading_data_pb.MarketByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketByIDResponse) => void): grpc.ClientUnaryCall;
    marketByID(request: data_node_api_v1_trading_data_pb.MarketByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketByIDResponse) => void): grpc.ClientUnaryCall;
    marketByID(request: data_node_api_v1_trading_data_pb.MarketByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketByIDResponse) => void): grpc.ClientUnaryCall;
    marketDepth(request: data_node_api_v1_trading_data_pb.MarketDepthRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDepthResponse) => void): grpc.ClientUnaryCall;
    marketDepth(request: data_node_api_v1_trading_data_pb.MarketDepthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDepthResponse) => void): grpc.ClientUnaryCall;
    marketDepth(request: data_node_api_v1_trading_data_pb.MarketDepthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDepthResponse) => void): grpc.ClientUnaryCall;
    markets(request: data_node_api_v1_trading_data_pb.MarketsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsResponse) => void): grpc.ClientUnaryCall;
    markets(request: data_node_api_v1_trading_data_pb.MarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsResponse) => void): grpc.ClientUnaryCall;
    markets(request: data_node_api_v1_trading_data_pb.MarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsResponse) => void): grpc.ClientUnaryCall;
    orderByMarketAndID(request: data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse) => void): grpc.ClientUnaryCall;
    orderByMarketAndID(request: data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse) => void): grpc.ClientUnaryCall;
    orderByMarketAndID(request: data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse) => void): grpc.ClientUnaryCall;
    orderByReference(request: data_node_api_v1_trading_data_pb.OrderByReferenceRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByReferenceResponse) => void): grpc.ClientUnaryCall;
    orderByReference(request: data_node_api_v1_trading_data_pb.OrderByReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByReferenceResponse) => void): grpc.ClientUnaryCall;
    orderByReference(request: data_node_api_v1_trading_data_pb.OrderByReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByReferenceResponse) => void): grpc.ClientUnaryCall;
    ordersByMarket(request: data_node_api_v1_trading_data_pb.OrdersByMarketRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByMarketResponse) => void): grpc.ClientUnaryCall;
    ordersByMarket(request: data_node_api_v1_trading_data_pb.OrdersByMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByMarketResponse) => void): grpc.ClientUnaryCall;
    ordersByMarket(request: data_node_api_v1_trading_data_pb.OrdersByMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByMarketResponse) => void): grpc.ClientUnaryCall;
    ordersByParty(request: data_node_api_v1_trading_data_pb.OrdersByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByPartyResponse) => void): grpc.ClientUnaryCall;
    ordersByParty(request: data_node_api_v1_trading_data_pb.OrdersByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByPartyResponse) => void): grpc.ClientUnaryCall;
    ordersByParty(request: data_node_api_v1_trading_data_pb.OrdersByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByPartyResponse) => void): grpc.ClientUnaryCall;
    orderByID(request: data_node_api_v1_trading_data_pb.OrderByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByIDResponse) => void): grpc.ClientUnaryCall;
    orderByID(request: data_node_api_v1_trading_data_pb.OrderByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByIDResponse) => void): grpc.ClientUnaryCall;
    orderByID(request: data_node_api_v1_trading_data_pb.OrderByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByIDResponse) => void): grpc.ClientUnaryCall;
    orderVersionsByID(request: data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse) => void): grpc.ClientUnaryCall;
    orderVersionsByID(request: data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse) => void): grpc.ClientUnaryCall;
    orderVersionsByID(request: data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse) => void): grpc.ClientUnaryCall;
    marginLevels(request: data_node_api_v1_trading_data_pb.MarginLevelsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarginLevelsResponse) => void): grpc.ClientUnaryCall;
    marginLevels(request: data_node_api_v1_trading_data_pb.MarginLevelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarginLevelsResponse) => void): grpc.ClientUnaryCall;
    marginLevels(request: data_node_api_v1_trading_data_pb.MarginLevelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarginLevelsResponse) => void): grpc.ClientUnaryCall;
    parties(request: data_node_api_v1_trading_data_pb.PartiesRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartiesResponse) => void): grpc.ClientUnaryCall;
    parties(request: data_node_api_v1_trading_data_pb.PartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartiesResponse) => void): grpc.ClientUnaryCall;
    parties(request: data_node_api_v1_trading_data_pb.PartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartiesResponse) => void): grpc.ClientUnaryCall;
    partyByID(request: data_node_api_v1_trading_data_pb.PartyByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyByIDResponse) => void): grpc.ClientUnaryCall;
    partyByID(request: data_node_api_v1_trading_data_pb.PartyByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyByIDResponse) => void): grpc.ClientUnaryCall;
    partyByID(request: data_node_api_v1_trading_data_pb.PartyByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyByIDResponse) => void): grpc.ClientUnaryCall;
    positionsByParty(request: data_node_api_v1_trading_data_pb.PositionsByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PositionsByPartyResponse) => void): grpc.ClientUnaryCall;
    positionsByParty(request: data_node_api_v1_trading_data_pb.PositionsByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PositionsByPartyResponse) => void): grpc.ClientUnaryCall;
    positionsByParty(request: data_node_api_v1_trading_data_pb.PositionsByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PositionsByPartyResponse) => void): grpc.ClientUnaryCall;
    lastTrade(request: data_node_api_v1_trading_data_pb.LastTradeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LastTradeResponse) => void): grpc.ClientUnaryCall;
    lastTrade(request: data_node_api_v1_trading_data_pb.LastTradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LastTradeResponse) => void): grpc.ClientUnaryCall;
    lastTrade(request: data_node_api_v1_trading_data_pb.LastTradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LastTradeResponse) => void): grpc.ClientUnaryCall;
    tradesByMarket(request: data_node_api_v1_trading_data_pb.TradesByMarketRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByMarketResponse) => void): grpc.ClientUnaryCall;
    tradesByMarket(request: data_node_api_v1_trading_data_pb.TradesByMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByMarketResponse) => void): grpc.ClientUnaryCall;
    tradesByMarket(request: data_node_api_v1_trading_data_pb.TradesByMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByMarketResponse) => void): grpc.ClientUnaryCall;
    tradesByOrder(request: data_node_api_v1_trading_data_pb.TradesByOrderRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByOrderResponse) => void): grpc.ClientUnaryCall;
    tradesByOrder(request: data_node_api_v1_trading_data_pb.TradesByOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByOrderResponse) => void): grpc.ClientUnaryCall;
    tradesByOrder(request: data_node_api_v1_trading_data_pb.TradesByOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByOrderResponse) => void): grpc.ClientUnaryCall;
    tradesByParty(request: data_node_api_v1_trading_data_pb.TradesByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByPartyResponse) => void): grpc.ClientUnaryCall;
    tradesByParty(request: data_node_api_v1_trading_data_pb.TradesByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByPartyResponse) => void): grpc.ClientUnaryCall;
    tradesByParty(request: data_node_api_v1_trading_data_pb.TradesByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByPartyResponse) => void): grpc.ClientUnaryCall;
    getProposals(request: data_node_api_v1_trading_data_pb.GetProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsResponse) => void): grpc.ClientUnaryCall;
    getProposals(request: data_node_api_v1_trading_data_pb.GetProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsResponse) => void): grpc.ClientUnaryCall;
    getProposals(request: data_node_api_v1_trading_data_pb.GetProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsResponse) => void): grpc.ClientUnaryCall;
    getProposalsByParty(request: data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse) => void): grpc.ClientUnaryCall;
    getProposalsByParty(request: data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse) => void): grpc.ClientUnaryCall;
    getProposalsByParty(request: data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse) => void): grpc.ClientUnaryCall;
    getVotesByParty(request: data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVotesByPartyResponse) => void): grpc.ClientUnaryCall;
    getVotesByParty(request: data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVotesByPartyResponse) => void): grpc.ClientUnaryCall;
    getVotesByParty(request: data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVotesByPartyResponse) => void): grpc.ClientUnaryCall;
    getNewMarketProposals(request: data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    getNewMarketProposals(request: data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    getNewMarketProposals(request: data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    getUpdateMarketProposals(request: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    getUpdateMarketProposals(request: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    getUpdateMarketProposals(request: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    getNetworkParametersProposals(request: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse) => void): grpc.ClientUnaryCall;
    getNetworkParametersProposals(request: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse) => void): grpc.ClientUnaryCall;
    getNetworkParametersProposals(request: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse) => void): grpc.ClientUnaryCall;
    getNewAssetProposals(request: data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse) => void): grpc.ClientUnaryCall;
    getNewAssetProposals(request: data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse) => void): grpc.ClientUnaryCall;
    getNewAssetProposals(request: data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse) => void): grpc.ClientUnaryCall;
    getProposalByID(request: data_node_api_v1_trading_data_pb.GetProposalByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByIDResponse) => void): grpc.ClientUnaryCall;
    getProposalByID(request: data_node_api_v1_trading_data_pb.GetProposalByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByIDResponse) => void): grpc.ClientUnaryCall;
    getProposalByID(request: data_node_api_v1_trading_data_pb.GetProposalByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByIDResponse) => void): grpc.ClientUnaryCall;
    getProposalByReference(request: data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse) => void): grpc.ClientUnaryCall;
    getProposalByReference(request: data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse) => void): grpc.ClientUnaryCall;
    getProposalByReference(request: data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse) => void): grpc.ClientUnaryCall;
    observeGovernance(request: data_node_api_v1_trading_data_pb.ObserveGovernanceRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
    observeGovernance(request: data_node_api_v1_trading_data_pb.ObserveGovernanceRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
    observePartyProposals(request: data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
    observePartyProposals(request: data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
    observePartyVotes(request: data_node_api_v1_trading_data_pb.ObservePartyVotesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
    observePartyVotes(request: data_node_api_v1_trading_data_pb.ObservePartyVotesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
    observeProposalVotes(request: data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
    observeProposalVotes(request: data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
    observeEventBus(): grpc.ClientDuplexStream<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    observeEventBus(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    observeEventBus(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    getNodeData(request: data_node_api_v1_trading_data_pb.GetNodeDataRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeDataResponse) => void): grpc.ClientUnaryCall;
    getNodeData(request: data_node_api_v1_trading_data_pb.GetNodeDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeDataResponse) => void): grpc.ClientUnaryCall;
    getNodeData(request: data_node_api_v1_trading_data_pb.GetNodeDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeDataResponse) => void): grpc.ClientUnaryCall;
    getNodes(request: data_node_api_v1_trading_data_pb.GetNodesRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    getNodes(request: data_node_api_v1_trading_data_pb.GetNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    getNodes(request: data_node_api_v1_trading_data_pb.GetNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    getNodeByID(request: data_node_api_v1_trading_data_pb.GetNodeByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeByIDResponse) => void): grpc.ClientUnaryCall;
    getNodeByID(request: data_node_api_v1_trading_data_pb.GetNodeByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeByIDResponse) => void): grpc.ClientUnaryCall;
    getNodeByID(request: data_node_api_v1_trading_data_pb.GetNodeByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeByIDResponse) => void): grpc.ClientUnaryCall;
    getEpoch(request: data_node_api_v1_trading_data_pb.GetEpochRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetEpochResponse) => void): grpc.ClientUnaryCall;
    getEpoch(request: data_node_api_v1_trading_data_pb.GetEpochRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetEpochResponse) => void): grpc.ClientUnaryCall;
    getEpoch(request: data_node_api_v1_trading_data_pb.GetEpochRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetEpochResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: data_node_api_v1_trading_data_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: data_node_api_v1_trading_data_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: data_node_api_v1_trading_data_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    accountsSubscribe(request: data_node_api_v1_trading_data_pb.AccountsSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
    accountsSubscribe(request: data_node_api_v1_trading_data_pb.AccountsSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
    candlesSubscribe(request: data_node_api_v1_trading_data_pb.CandlesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
    candlesSubscribe(request: data_node_api_v1_trading_data_pb.CandlesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
    marginLevelsSubscribe(request: data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
    marginLevelsSubscribe(request: data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
    marketDepthSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
    marketDepthSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
    marketDepthUpdatesSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
    marketDepthUpdatesSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
    marketsDataSubscribe(request: data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
    marketsDataSubscribe(request: data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
    ordersSubscribe(request: data_node_api_v1_trading_data_pb.OrdersSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
    ordersSubscribe(request: data_node_api_v1_trading_data_pb.OrdersSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
    positionsSubscribe(request: data_node_api_v1_trading_data_pb.PositionsSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
    positionsSubscribe(request: data_node_api_v1_trading_data_pb.PositionsSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
    tradesSubscribe(request: data_node_api_v1_trading_data_pb.TradesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
    tradesSubscribe(request: data_node_api_v1_trading_data_pb.TradesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
    transferResponsesSubscribe(request: data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
    transferResponsesSubscribe(request: data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
    getNodeSignaturesAggregate(request: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse) => void): grpc.ClientUnaryCall;
    getNodeSignaturesAggregate(request: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse) => void): grpc.ClientUnaryCall;
    getNodeSignaturesAggregate(request: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse) => void): grpc.ClientUnaryCall;
    assetByID(request: data_node_api_v1_trading_data_pb.AssetByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetByIDResponse) => void): grpc.ClientUnaryCall;
    assetByID(request: data_node_api_v1_trading_data_pb.AssetByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetByIDResponse) => void): grpc.ClientUnaryCall;
    assetByID(request: data_node_api_v1_trading_data_pb.AssetByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetByIDResponse) => void): grpc.ClientUnaryCall;
    assets(request: data_node_api_v1_trading_data_pb.AssetsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    assets(request: data_node_api_v1_trading_data_pb.AssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    assets(request: data_node_api_v1_trading_data_pb.AssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: data_node_api_v1_trading_data_pb.EstimateFeeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: data_node_api_v1_trading_data_pb.EstimateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: data_node_api_v1_trading_data_pb.EstimateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateMargin(request: data_node_api_v1_trading_data_pb.EstimateMarginRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateMarginResponse) => void): grpc.ClientUnaryCall;
    estimateMargin(request: data_node_api_v1_trading_data_pb.EstimateMarginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateMarginResponse) => void): grpc.ClientUnaryCall;
    estimateMargin(request: data_node_api_v1_trading_data_pb.EstimateMarginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateMarginResponse) => void): grpc.ClientUnaryCall;
    eRC20WithdrawalApproval(request: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse) => void): grpc.ClientUnaryCall;
    eRC20WithdrawalApproval(request: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse) => void): grpc.ClientUnaryCall;
    eRC20WithdrawalApproval(request: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse) => void): grpc.ClientUnaryCall;
    withdrawal(request: data_node_api_v1_trading_data_pb.WithdrawalRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalResponse) => void): grpc.ClientUnaryCall;
    withdrawal(request: data_node_api_v1_trading_data_pb.WithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalResponse) => void): grpc.ClientUnaryCall;
    withdrawal(request: data_node_api_v1_trading_data_pb.WithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalResponse) => void): grpc.ClientUnaryCall;
    withdrawals(request: data_node_api_v1_trading_data_pb.WithdrawalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalsResponse) => void): grpc.ClientUnaryCall;
    withdrawals(request: data_node_api_v1_trading_data_pb.WithdrawalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalsResponse) => void): grpc.ClientUnaryCall;
    withdrawals(request: data_node_api_v1_trading_data_pb.WithdrawalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalsResponse) => void): grpc.ClientUnaryCall;
    deposit(request: data_node_api_v1_trading_data_pb.DepositRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: data_node_api_v1_trading_data_pb.DepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: data_node_api_v1_trading_data_pb.DepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    deposits(request: data_node_api_v1_trading_data_pb.DepositsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositsResponse) => void): grpc.ClientUnaryCall;
    deposits(request: data_node_api_v1_trading_data_pb.DepositsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositsResponse) => void): grpc.ClientUnaryCall;
    deposits(request: data_node_api_v1_trading_data_pb.DepositsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositsResponse) => void): grpc.ClientUnaryCall;
    networkParameters(request: data_node_api_v1_trading_data_pb.NetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.NetworkParametersResponse) => void): grpc.ClientUnaryCall;
    networkParameters(request: data_node_api_v1_trading_data_pb.NetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.NetworkParametersResponse) => void): grpc.ClientUnaryCall;
    networkParameters(request: data_node_api_v1_trading_data_pb.NetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.NetworkParametersResponse) => void): grpc.ClientUnaryCall;
    liquidityProvisions(request: data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse) => void): grpc.ClientUnaryCall;
    liquidityProvisions(request: data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse) => void): grpc.ClientUnaryCall;
    liquidityProvisions(request: data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse) => void): grpc.ClientUnaryCall;
    oracleSpec(request: data_node_api_v1_trading_data_pb.OracleSpecRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecResponse) => void): grpc.ClientUnaryCall;
    oracleSpec(request: data_node_api_v1_trading_data_pb.OracleSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecResponse) => void): grpc.ClientUnaryCall;
    oracleSpec(request: data_node_api_v1_trading_data_pb.OracleSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecResponse) => void): grpc.ClientUnaryCall;
    oracleSpecs(request: data_node_api_v1_trading_data_pb.OracleSpecsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecsResponse) => void): grpc.ClientUnaryCall;
    oracleSpecs(request: data_node_api_v1_trading_data_pb.OracleSpecsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecsResponse) => void): grpc.ClientUnaryCall;
    oracleSpecs(request: data_node_api_v1_trading_data_pb.OracleSpecsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecsResponse) => void): grpc.ClientUnaryCall;
    oracleDataBySpec(request: data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleDataBySpecResponse) => void): grpc.ClientUnaryCall;
    oracleDataBySpec(request: data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleDataBySpecResponse) => void): grpc.ClientUnaryCall;
    oracleDataBySpec(request: data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleDataBySpecResponse) => void): grpc.ClientUnaryCall;
    getRewardDetails(request: data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetRewardDetailsResponse) => void): grpc.ClientUnaryCall;
    getRewardDetails(request: data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetRewardDetailsResponse) => void): grpc.ClientUnaryCall;
    getRewardDetails(request: data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetRewardDetailsResponse) => void): grpc.ClientUnaryCall;
    checkpoints(request: data_node_api_v1_trading_data_pb.CheckpointsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CheckpointsResponse) => void): grpc.ClientUnaryCall;
    checkpoints(request: data_node_api_v1_trading_data_pb.CheckpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CheckpointsResponse) => void): grpc.ClientUnaryCall;
    checkpoints(request: data_node_api_v1_trading_data_pb.CheckpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CheckpointsResponse) => void): grpc.ClientUnaryCall;
    delegations(request: data_node_api_v1_trading_data_pb.DelegationsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DelegationsResponse) => void): grpc.ClientUnaryCall;
    delegations(request: data_node_api_v1_trading_data_pb.DelegationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DelegationsResponse) => void): grpc.ClientUnaryCall;
    delegations(request: data_node_api_v1_trading_data_pb.DelegationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DelegationsResponse) => void): grpc.ClientUnaryCall;
    partyStake(request: data_node_api_v1_trading_data_pb.PartyStakeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyStakeResponse) => void): grpc.ClientUnaryCall;
    partyStake(request: data_node_api_v1_trading_data_pb.PartyStakeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyStakeResponse) => void): grpc.ClientUnaryCall;
    partyStake(request: data_node_api_v1_trading_data_pb.PartyStakeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyStakeResponse) => void): grpc.ClientUnaryCall;
}

export class TradingDataServiceClient extends grpc.Client implements ITradingDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public marketAccounts(request: data_node_api_v1_trading_data_pb.MarketAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketAccountsResponse) => void): grpc.ClientUnaryCall;
    public marketAccounts(request: data_node_api_v1_trading_data_pb.MarketAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketAccountsResponse) => void): grpc.ClientUnaryCall;
    public marketAccounts(request: data_node_api_v1_trading_data_pb.MarketAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketAccountsResponse) => void): grpc.ClientUnaryCall;
    public partyAccounts(request: data_node_api_v1_trading_data_pb.PartyAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyAccountsResponse) => void): grpc.ClientUnaryCall;
    public partyAccounts(request: data_node_api_v1_trading_data_pb.PartyAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyAccountsResponse) => void): grpc.ClientUnaryCall;
    public partyAccounts(request: data_node_api_v1_trading_data_pb.PartyAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyAccountsResponse) => void): grpc.ClientUnaryCall;
    public feeInfrastructureAccounts(request: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse) => void): grpc.ClientUnaryCall;
    public feeInfrastructureAccounts(request: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse) => void): grpc.ClientUnaryCall;
    public feeInfrastructureAccounts(request: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.FeeInfrastructureAccountsResponse) => void): grpc.ClientUnaryCall;
    public globalRewardPoolAccounts(request: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse) => void): grpc.ClientUnaryCall;
    public globalRewardPoolAccounts(request: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse) => void): grpc.ClientUnaryCall;
    public globalRewardPoolAccounts(request: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GlobalRewardPoolAccountsResponse) => void): grpc.ClientUnaryCall;
    public candles(request: data_node_api_v1_trading_data_pb.CandlesRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CandlesResponse) => void): grpc.ClientUnaryCall;
    public candles(request: data_node_api_v1_trading_data_pb.CandlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CandlesResponse) => void): grpc.ClientUnaryCall;
    public candles(request: data_node_api_v1_trading_data_pb.CandlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CandlesResponse) => void): grpc.ClientUnaryCall;
    public marketDataByID(request: data_node_api_v1_trading_data_pb.MarketDataByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDataByIDResponse) => void): grpc.ClientUnaryCall;
    public marketDataByID(request: data_node_api_v1_trading_data_pb.MarketDataByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDataByIDResponse) => void): grpc.ClientUnaryCall;
    public marketDataByID(request: data_node_api_v1_trading_data_pb.MarketDataByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDataByIDResponse) => void): grpc.ClientUnaryCall;
    public marketsData(request: data_node_api_v1_trading_data_pb.MarketsDataRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsDataResponse) => void): grpc.ClientUnaryCall;
    public marketsData(request: data_node_api_v1_trading_data_pb.MarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsDataResponse) => void): grpc.ClientUnaryCall;
    public marketsData(request: data_node_api_v1_trading_data_pb.MarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsDataResponse) => void): grpc.ClientUnaryCall;
    public marketByID(request: data_node_api_v1_trading_data_pb.MarketByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketByIDResponse) => void): grpc.ClientUnaryCall;
    public marketByID(request: data_node_api_v1_trading_data_pb.MarketByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketByIDResponse) => void): grpc.ClientUnaryCall;
    public marketByID(request: data_node_api_v1_trading_data_pb.MarketByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketByIDResponse) => void): grpc.ClientUnaryCall;
    public marketDepth(request: data_node_api_v1_trading_data_pb.MarketDepthRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDepthResponse) => void): grpc.ClientUnaryCall;
    public marketDepth(request: data_node_api_v1_trading_data_pb.MarketDepthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDepthResponse) => void): grpc.ClientUnaryCall;
    public marketDepth(request: data_node_api_v1_trading_data_pb.MarketDepthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketDepthResponse) => void): grpc.ClientUnaryCall;
    public markets(request: data_node_api_v1_trading_data_pb.MarketsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsResponse) => void): grpc.ClientUnaryCall;
    public markets(request: data_node_api_v1_trading_data_pb.MarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsResponse) => void): grpc.ClientUnaryCall;
    public markets(request: data_node_api_v1_trading_data_pb.MarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarketsResponse) => void): grpc.ClientUnaryCall;
    public orderByMarketAndID(request: data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse) => void): grpc.ClientUnaryCall;
    public orderByMarketAndID(request: data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse) => void): grpc.ClientUnaryCall;
    public orderByMarketAndID(request: data_node_api_v1_trading_data_pb.OrderByMarketAndIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByMarketAndIDResponse) => void): grpc.ClientUnaryCall;
    public orderByReference(request: data_node_api_v1_trading_data_pb.OrderByReferenceRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByReferenceResponse) => void): grpc.ClientUnaryCall;
    public orderByReference(request: data_node_api_v1_trading_data_pb.OrderByReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByReferenceResponse) => void): grpc.ClientUnaryCall;
    public orderByReference(request: data_node_api_v1_trading_data_pb.OrderByReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByReferenceResponse) => void): grpc.ClientUnaryCall;
    public ordersByMarket(request: data_node_api_v1_trading_data_pb.OrdersByMarketRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByMarketResponse) => void): grpc.ClientUnaryCall;
    public ordersByMarket(request: data_node_api_v1_trading_data_pb.OrdersByMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByMarketResponse) => void): grpc.ClientUnaryCall;
    public ordersByMarket(request: data_node_api_v1_trading_data_pb.OrdersByMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByMarketResponse) => void): grpc.ClientUnaryCall;
    public ordersByParty(request: data_node_api_v1_trading_data_pb.OrdersByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByPartyResponse) => void): grpc.ClientUnaryCall;
    public ordersByParty(request: data_node_api_v1_trading_data_pb.OrdersByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByPartyResponse) => void): grpc.ClientUnaryCall;
    public ordersByParty(request: data_node_api_v1_trading_data_pb.OrdersByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrdersByPartyResponse) => void): grpc.ClientUnaryCall;
    public orderByID(request: data_node_api_v1_trading_data_pb.OrderByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByIDResponse) => void): grpc.ClientUnaryCall;
    public orderByID(request: data_node_api_v1_trading_data_pb.OrderByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByIDResponse) => void): grpc.ClientUnaryCall;
    public orderByID(request: data_node_api_v1_trading_data_pb.OrderByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderByIDResponse) => void): grpc.ClientUnaryCall;
    public orderVersionsByID(request: data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse) => void): grpc.ClientUnaryCall;
    public orderVersionsByID(request: data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse) => void): grpc.ClientUnaryCall;
    public orderVersionsByID(request: data_node_api_v1_trading_data_pb.OrderVersionsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OrderVersionsByIDResponse) => void): grpc.ClientUnaryCall;
    public marginLevels(request: data_node_api_v1_trading_data_pb.MarginLevelsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarginLevelsResponse) => void): grpc.ClientUnaryCall;
    public marginLevels(request: data_node_api_v1_trading_data_pb.MarginLevelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarginLevelsResponse) => void): grpc.ClientUnaryCall;
    public marginLevels(request: data_node_api_v1_trading_data_pb.MarginLevelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.MarginLevelsResponse) => void): grpc.ClientUnaryCall;
    public parties(request: data_node_api_v1_trading_data_pb.PartiesRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartiesResponse) => void): grpc.ClientUnaryCall;
    public parties(request: data_node_api_v1_trading_data_pb.PartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartiesResponse) => void): grpc.ClientUnaryCall;
    public parties(request: data_node_api_v1_trading_data_pb.PartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartiesResponse) => void): grpc.ClientUnaryCall;
    public partyByID(request: data_node_api_v1_trading_data_pb.PartyByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyByIDResponse) => void): grpc.ClientUnaryCall;
    public partyByID(request: data_node_api_v1_trading_data_pb.PartyByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyByIDResponse) => void): grpc.ClientUnaryCall;
    public partyByID(request: data_node_api_v1_trading_data_pb.PartyByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyByIDResponse) => void): grpc.ClientUnaryCall;
    public positionsByParty(request: data_node_api_v1_trading_data_pb.PositionsByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PositionsByPartyResponse) => void): grpc.ClientUnaryCall;
    public positionsByParty(request: data_node_api_v1_trading_data_pb.PositionsByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PositionsByPartyResponse) => void): grpc.ClientUnaryCall;
    public positionsByParty(request: data_node_api_v1_trading_data_pb.PositionsByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PositionsByPartyResponse) => void): grpc.ClientUnaryCall;
    public lastTrade(request: data_node_api_v1_trading_data_pb.LastTradeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LastTradeResponse) => void): grpc.ClientUnaryCall;
    public lastTrade(request: data_node_api_v1_trading_data_pb.LastTradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LastTradeResponse) => void): grpc.ClientUnaryCall;
    public lastTrade(request: data_node_api_v1_trading_data_pb.LastTradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LastTradeResponse) => void): grpc.ClientUnaryCall;
    public tradesByMarket(request: data_node_api_v1_trading_data_pb.TradesByMarketRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByMarketResponse) => void): grpc.ClientUnaryCall;
    public tradesByMarket(request: data_node_api_v1_trading_data_pb.TradesByMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByMarketResponse) => void): grpc.ClientUnaryCall;
    public tradesByMarket(request: data_node_api_v1_trading_data_pb.TradesByMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByMarketResponse) => void): grpc.ClientUnaryCall;
    public tradesByOrder(request: data_node_api_v1_trading_data_pb.TradesByOrderRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByOrderResponse) => void): grpc.ClientUnaryCall;
    public tradesByOrder(request: data_node_api_v1_trading_data_pb.TradesByOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByOrderResponse) => void): grpc.ClientUnaryCall;
    public tradesByOrder(request: data_node_api_v1_trading_data_pb.TradesByOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByOrderResponse) => void): grpc.ClientUnaryCall;
    public tradesByParty(request: data_node_api_v1_trading_data_pb.TradesByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByPartyResponse) => void): grpc.ClientUnaryCall;
    public tradesByParty(request: data_node_api_v1_trading_data_pb.TradesByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByPartyResponse) => void): grpc.ClientUnaryCall;
    public tradesByParty(request: data_node_api_v1_trading_data_pb.TradesByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.TradesByPartyResponse) => void): grpc.ClientUnaryCall;
    public getProposals(request: data_node_api_v1_trading_data_pb.GetProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsResponse) => void): grpc.ClientUnaryCall;
    public getProposals(request: data_node_api_v1_trading_data_pb.GetProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsResponse) => void): grpc.ClientUnaryCall;
    public getProposals(request: data_node_api_v1_trading_data_pb.GetProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsResponse) => void): grpc.ClientUnaryCall;
    public getProposalsByParty(request: data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse) => void): grpc.ClientUnaryCall;
    public getProposalsByParty(request: data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse) => void): grpc.ClientUnaryCall;
    public getProposalsByParty(request: data_node_api_v1_trading_data_pb.GetProposalsByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalsByPartyResponse) => void): grpc.ClientUnaryCall;
    public getVotesByParty(request: data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVotesByPartyResponse) => void): grpc.ClientUnaryCall;
    public getVotesByParty(request: data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVotesByPartyResponse) => void): grpc.ClientUnaryCall;
    public getVotesByParty(request: data_node_api_v1_trading_data_pb.GetVotesByPartyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVotesByPartyResponse) => void): grpc.ClientUnaryCall;
    public getNewMarketProposals(request: data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNewMarketProposals(request: data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNewMarketProposals(request: data_node_api_v1_trading_data_pb.GetNewMarketProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    public getUpdateMarketProposals(request: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    public getUpdateMarketProposals(request: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    public getUpdateMarketProposals(request: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetUpdateMarketProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNetworkParametersProposals(request: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNetworkParametersProposals(request: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNetworkParametersProposals(request: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNetworkParametersProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNewAssetProposals(request: data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNewAssetProposals(request: data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse) => void): grpc.ClientUnaryCall;
    public getNewAssetProposals(request: data_node_api_v1_trading_data_pb.GetNewAssetProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNewAssetProposalsResponse) => void): grpc.ClientUnaryCall;
    public getProposalByID(request: data_node_api_v1_trading_data_pb.GetProposalByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByIDResponse) => void): grpc.ClientUnaryCall;
    public getProposalByID(request: data_node_api_v1_trading_data_pb.GetProposalByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByIDResponse) => void): grpc.ClientUnaryCall;
    public getProposalByID(request: data_node_api_v1_trading_data_pb.GetProposalByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByIDResponse) => void): grpc.ClientUnaryCall;
    public getProposalByReference(request: data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse) => void): grpc.ClientUnaryCall;
    public getProposalByReference(request: data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse) => void): grpc.ClientUnaryCall;
    public getProposalByReference(request: data_node_api_v1_trading_data_pb.GetProposalByReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetProposalByReferenceResponse) => void): grpc.ClientUnaryCall;
    public observeGovernance(request: data_node_api_v1_trading_data_pb.ObserveGovernanceRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
    public observeGovernance(request: data_node_api_v1_trading_data_pb.ObserveGovernanceRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveGovernanceResponse>;
    public observePartyProposals(request: data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
    public observePartyProposals(request: data_node_api_v1_trading_data_pb.ObservePartyProposalsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyProposalsResponse>;
    public observePartyVotes(request: data_node_api_v1_trading_data_pb.ObservePartyVotesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
    public observePartyVotes(request: data_node_api_v1_trading_data_pb.ObservePartyVotesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObservePartyVotesResponse>;
    public observeProposalVotes(request: data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
    public observeProposalVotes(request: data_node_api_v1_trading_data_pb.ObserveProposalVotesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.ObserveProposalVotesResponse>;
    public observeEventBus(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    public observeEventBus(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<data_node_api_v1_trading_data_pb.ObserveEventBusRequest, data_node_api_v1_trading_data_pb.ObserveEventBusResponse>;
    public getNodeData(request: data_node_api_v1_trading_data_pb.GetNodeDataRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeDataResponse) => void): grpc.ClientUnaryCall;
    public getNodeData(request: data_node_api_v1_trading_data_pb.GetNodeDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeDataResponse) => void): grpc.ClientUnaryCall;
    public getNodeData(request: data_node_api_v1_trading_data_pb.GetNodeDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeDataResponse) => void): grpc.ClientUnaryCall;
    public getNodes(request: data_node_api_v1_trading_data_pb.GetNodesRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    public getNodes(request: data_node_api_v1_trading_data_pb.GetNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    public getNodes(request: data_node_api_v1_trading_data_pb.GetNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    public getNodeByID(request: data_node_api_v1_trading_data_pb.GetNodeByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeByIDResponse) => void): grpc.ClientUnaryCall;
    public getNodeByID(request: data_node_api_v1_trading_data_pb.GetNodeByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeByIDResponse) => void): grpc.ClientUnaryCall;
    public getNodeByID(request: data_node_api_v1_trading_data_pb.GetNodeByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeByIDResponse) => void): grpc.ClientUnaryCall;
    public getEpoch(request: data_node_api_v1_trading_data_pb.GetEpochRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetEpochResponse) => void): grpc.ClientUnaryCall;
    public getEpoch(request: data_node_api_v1_trading_data_pb.GetEpochRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetEpochResponse) => void): grpc.ClientUnaryCall;
    public getEpoch(request: data_node_api_v1_trading_data_pb.GetEpochRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetEpochResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: data_node_api_v1_trading_data_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: data_node_api_v1_trading_data_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: data_node_api_v1_trading_data_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public accountsSubscribe(request: data_node_api_v1_trading_data_pb.AccountsSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
    public accountsSubscribe(request: data_node_api_v1_trading_data_pb.AccountsSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.AccountsSubscribeResponse>;
    public candlesSubscribe(request: data_node_api_v1_trading_data_pb.CandlesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
    public candlesSubscribe(request: data_node_api_v1_trading_data_pb.CandlesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.CandlesSubscribeResponse>;
    public marginLevelsSubscribe(request: data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
    public marginLevelsSubscribe(request: data_node_api_v1_trading_data_pb.MarginLevelsSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarginLevelsSubscribeResponse>;
    public marketDepthSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
    public marketDepthSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthSubscribeResponse>;
    public marketDepthUpdatesSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
    public marketDepthUpdatesSubscribe(request: data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketDepthUpdatesSubscribeResponse>;
    public marketsDataSubscribe(request: data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
    public marketsDataSubscribe(request: data_node_api_v1_trading_data_pb.MarketsDataSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.MarketsDataSubscribeResponse>;
    public ordersSubscribe(request: data_node_api_v1_trading_data_pb.OrdersSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
    public ordersSubscribe(request: data_node_api_v1_trading_data_pb.OrdersSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.OrdersSubscribeResponse>;
    public positionsSubscribe(request: data_node_api_v1_trading_data_pb.PositionsSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
    public positionsSubscribe(request: data_node_api_v1_trading_data_pb.PositionsSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.PositionsSubscribeResponse>;
    public tradesSubscribe(request: data_node_api_v1_trading_data_pb.TradesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
    public tradesSubscribe(request: data_node_api_v1_trading_data_pb.TradesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TradesSubscribeResponse>;
    public transferResponsesSubscribe(request: data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
    public transferResponsesSubscribe(request: data_node_api_v1_trading_data_pb.TransferResponsesSubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<data_node_api_v1_trading_data_pb.TransferResponsesSubscribeResponse>;
    public getNodeSignaturesAggregate(request: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse) => void): grpc.ClientUnaryCall;
    public getNodeSignaturesAggregate(request: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse) => void): grpc.ClientUnaryCall;
    public getNodeSignaturesAggregate(request: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetNodeSignaturesAggregateResponse) => void): grpc.ClientUnaryCall;
    public assetByID(request: data_node_api_v1_trading_data_pb.AssetByIDRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetByIDResponse) => void): grpc.ClientUnaryCall;
    public assetByID(request: data_node_api_v1_trading_data_pb.AssetByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetByIDResponse) => void): grpc.ClientUnaryCall;
    public assetByID(request: data_node_api_v1_trading_data_pb.AssetByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetByIDResponse) => void): grpc.ClientUnaryCall;
    public assets(request: data_node_api_v1_trading_data_pb.AssetsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    public assets(request: data_node_api_v1_trading_data_pb.AssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    public assets(request: data_node_api_v1_trading_data_pb.AssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: data_node_api_v1_trading_data_pb.EstimateFeeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: data_node_api_v1_trading_data_pb.EstimateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: data_node_api_v1_trading_data_pb.EstimateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateMargin(request: data_node_api_v1_trading_data_pb.EstimateMarginRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateMarginResponse) => void): grpc.ClientUnaryCall;
    public estimateMargin(request: data_node_api_v1_trading_data_pb.EstimateMarginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateMarginResponse) => void): grpc.ClientUnaryCall;
    public estimateMargin(request: data_node_api_v1_trading_data_pb.EstimateMarginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.EstimateMarginResponse) => void): grpc.ClientUnaryCall;
    public eRC20WithdrawalApproval(request: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse) => void): grpc.ClientUnaryCall;
    public eRC20WithdrawalApproval(request: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse) => void): grpc.ClientUnaryCall;
    public eRC20WithdrawalApproval(request: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.ERC20WithdrawalApprovalResponse) => void): grpc.ClientUnaryCall;
    public withdrawal(request: data_node_api_v1_trading_data_pb.WithdrawalRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalResponse) => void): grpc.ClientUnaryCall;
    public withdrawal(request: data_node_api_v1_trading_data_pb.WithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalResponse) => void): grpc.ClientUnaryCall;
    public withdrawal(request: data_node_api_v1_trading_data_pb.WithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalResponse) => void): grpc.ClientUnaryCall;
    public withdrawals(request: data_node_api_v1_trading_data_pb.WithdrawalsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalsResponse) => void): grpc.ClientUnaryCall;
    public withdrawals(request: data_node_api_v1_trading_data_pb.WithdrawalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalsResponse) => void): grpc.ClientUnaryCall;
    public withdrawals(request: data_node_api_v1_trading_data_pb.WithdrawalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.WithdrawalsResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: data_node_api_v1_trading_data_pb.DepositRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: data_node_api_v1_trading_data_pb.DepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: data_node_api_v1_trading_data_pb.DepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public deposits(request: data_node_api_v1_trading_data_pb.DepositsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositsResponse) => void): grpc.ClientUnaryCall;
    public deposits(request: data_node_api_v1_trading_data_pb.DepositsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositsResponse) => void): grpc.ClientUnaryCall;
    public deposits(request: data_node_api_v1_trading_data_pb.DepositsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DepositsResponse) => void): grpc.ClientUnaryCall;
    public networkParameters(request: data_node_api_v1_trading_data_pb.NetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.NetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public networkParameters(request: data_node_api_v1_trading_data_pb.NetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.NetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public networkParameters(request: data_node_api_v1_trading_data_pb.NetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.NetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public liquidityProvisions(request: data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse) => void): grpc.ClientUnaryCall;
    public liquidityProvisions(request: data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse) => void): grpc.ClientUnaryCall;
    public liquidityProvisions(request: data_node_api_v1_trading_data_pb.LiquidityProvisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.LiquidityProvisionsResponse) => void): grpc.ClientUnaryCall;
    public oracleSpec(request: data_node_api_v1_trading_data_pb.OracleSpecRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecResponse) => void): grpc.ClientUnaryCall;
    public oracleSpec(request: data_node_api_v1_trading_data_pb.OracleSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecResponse) => void): grpc.ClientUnaryCall;
    public oracleSpec(request: data_node_api_v1_trading_data_pb.OracleSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecResponse) => void): grpc.ClientUnaryCall;
    public oracleSpecs(request: data_node_api_v1_trading_data_pb.OracleSpecsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecsResponse) => void): grpc.ClientUnaryCall;
    public oracleSpecs(request: data_node_api_v1_trading_data_pb.OracleSpecsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecsResponse) => void): grpc.ClientUnaryCall;
    public oracleSpecs(request: data_node_api_v1_trading_data_pb.OracleSpecsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleSpecsResponse) => void): grpc.ClientUnaryCall;
    public oracleDataBySpec(request: data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleDataBySpecResponse) => void): grpc.ClientUnaryCall;
    public oracleDataBySpec(request: data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleDataBySpecResponse) => void): grpc.ClientUnaryCall;
    public oracleDataBySpec(request: data_node_api_v1_trading_data_pb.OracleDataBySpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.OracleDataBySpecResponse) => void): grpc.ClientUnaryCall;
    public getRewardDetails(request: data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetRewardDetailsResponse) => void): grpc.ClientUnaryCall;
    public getRewardDetails(request: data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetRewardDetailsResponse) => void): grpc.ClientUnaryCall;
    public getRewardDetails(request: data_node_api_v1_trading_data_pb.GetRewardDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.GetRewardDetailsResponse) => void): grpc.ClientUnaryCall;
    public checkpoints(request: data_node_api_v1_trading_data_pb.CheckpointsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CheckpointsResponse) => void): grpc.ClientUnaryCall;
    public checkpoints(request: data_node_api_v1_trading_data_pb.CheckpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CheckpointsResponse) => void): grpc.ClientUnaryCall;
    public checkpoints(request: data_node_api_v1_trading_data_pb.CheckpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.CheckpointsResponse) => void): grpc.ClientUnaryCall;
    public delegations(request: data_node_api_v1_trading_data_pb.DelegationsRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DelegationsResponse) => void): grpc.ClientUnaryCall;
    public delegations(request: data_node_api_v1_trading_data_pb.DelegationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DelegationsResponse) => void): grpc.ClientUnaryCall;
    public delegations(request: data_node_api_v1_trading_data_pb.DelegationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.DelegationsResponse) => void): grpc.ClientUnaryCall;
    public partyStake(request: data_node_api_v1_trading_data_pb.PartyStakeRequest, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyStakeResponse) => void): grpc.ClientUnaryCall;
    public partyStake(request: data_node_api_v1_trading_data_pb.PartyStakeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyStakeResponse) => void): grpc.ClientUnaryCall;
    public partyStake(request: data_node_api_v1_trading_data_pb.PartyStakeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: data_node_api_v1_trading_data_pb.PartyStakeResponse) => void): grpc.ClientUnaryCall;
}
