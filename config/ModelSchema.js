
/**
 * This file is auto-generated
 * Please don't update it manually
 * Run command `npm run schema` to re-generate this
 */

 module.exports = { BurnedFeeModel: 
   { block_number: { type: 'number', length: 11 },
     block_hash: { type: 'string', length: 300 },
     block_timestamp: { type: 'number', length: 20 },
     tx: { type: 'string', length: 300 },
     burner_address: { type: 'string', length: 300 },
     burner_contract: { type: 'string', length: 150 },
     reserve_contract: { type: 'string', length: 150 },
     reserve_wallet: { type: 'string', length: 150 },
     amount: { type: 'string', length: 765 },
     day_seq: { type: 'number', length: 11 },
     hour_seq: { type: 'number', length: 11 },
     minute_seq: { type: 'number', length: 11 } },
  KyberTradeModel: 
   { block_number: { type: 'number', length: 11 },
     block_hash: { type: 'string', length: 300 },
     block_timestamp: { type: 'number', length: 20 },
     tx: { type: 'string', length: 300 },
     maker_address: { type: 'string', length: 765 },
     maker_token_address: { type: 'string', length: 765 },
     maker_token_symbol: { type: 'string', length: 30 },
     maker_token_amount: { type: 'string', length: 300 },
     taker_address: { type: 'string', length: 765 },
     taker_token_address: { type: 'string', length: 765 },
     taker_token_symbol: { type: 'string', length: 30 },
     taker_token_amount: { type: 'string', length: 300 },
     gas_limit: { type: 'number', length: 20 },
     gas_price: { type: 'number', length: 20 },
     gas_used: { type: 'number', length: 20 },
     collected_fees: { type: 'string', length: 765 },
     commission: { type: 'string', length: 765 },
     commission_reserve_address: { type: 'string', length: 765 },
     commission_receive_address: { type: 'string', length: 765 },
     burn_fees: { type: 'string', length: 765 },
     burn_reserve_address: { type: 'string', length: 765 },
     minute_seq: { type: 'number', length: 11 },
     hour_seq: { type: 'number', length: 11 },
     day_seq: { type: 'number', length: 11 },
     maker_price_btc: { type: 'number', length: 22 },
     maker_total_btc: { type: 'number', length: 22 },
     taker_price_btc: { type: 'number', length: 22 },
     taker_total_btc: { type: 'number', length: 22 },
     maker_price_eth: { type: 'number', length: 22 },
     maker_total_eth: { type: 'number', length: 22 },
     taker_price_eth: { type: 'number', length: 22 },
     taker_total_eth: { type: 'number', length: 22 },
     maker_price_usd: { type: 'number', length: 22 },
     maker_total_usd: { type: 'number', length: 22 },
     taker_price_usd: { type: 'number', length: 22 },
     taker_total_usd: { type: 'number', length: 22 },
     volume_eth: { type: 'number', length: 22 },
     volume_usd: { type: 'number', length: 22 } },
  RateModel: 
   { block_number: { type: 'number', length: 11 },
     block_timestamp: { type: 'number', length: 20 },
     base_address: { type: 'string', length: 765 },
     base_symbol: { type: 'string', length: 150 },
     quote_address: { type: 'string', length: 765 },
     quote_symbol: { type: 'string', length: 150 },
     sell_expected: { type: 'number', length: 38 },
     buy_expected: { type: 'number', length: 38 },
     mid_expected: { type: 'number', length: 38 },
     minute_seq: { type: 'number', length: 11 },
     m5_seq: { type: 'number', length: 11 },
     m15_seq: { type: 'number', length: 11 },
     m30_seq: { type: 'number', length: 11 },
     h2_seq: { type: 'number', length: 11 },
     h4_seq: { type: 'number', length: 11 },
     h6_seq: { type: 'number', length: 11 },
     h12_seq: { type: 'number', length: 11 },
     day_seq: { type: 'number', length: 11 },
     week_seq: { type: 'number', length: 11 },
     month_seq: { type: 'number', length: 11 },
     hour_seq: { type: 'number', length: 11 } },
  UserModel: 
   { username: { type: 'string', length: 120 },
     avatar_url: { type: 'string', length: 768 },
     email: { type: 'string', length: 120 },
     password: { type: 'string', length: 384 },
     full_name: { type: 'string', length: 135 } } }