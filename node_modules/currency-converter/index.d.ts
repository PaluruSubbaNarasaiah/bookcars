export type CurrencyCode = 'USD' | 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'ISK' | 'JMD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KRW' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SEK' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'UYU' | 'UZS' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
type CurrencyPair = {
    expiryDate: Date;
    rate: number;
};
export declare const currencies: CurrencyCode[];
declare class CurrencyConverter {
    currencyFrom: string;
    currencyTo: string;
    currencyAmount: number;
    convertedValue: number;
    isRatesCaching: boolean;
    ratesCacheDuration: number;
    ratesCache: Record<string, CurrencyPair>;
    currencyCode: CurrencyCode[];
    currencies: Record<CurrencyCode, string>;
    constructor(params: {
        from: string;
        to: string;
        amount: number;
    });
    from(currencyFrom: string): this;
    to(currencyTo: string): this;
    amount(currencyAmount: number): this;
    replaceAll(text: string, queryString: string, replaceString: string): string;
    setupRatesCache(ratesCacheOptions: {
        isRatesCaching: boolean;
        ratesCacheDuration: number;
    }): this;
    rates(): Promise<number>;
    convert(currencyAmount?: number): Promise<number>;
    currencyName(currencyCode_: string): string;
    addRateToRatesCache(currencyPair: string, rate_: number): void;
}
export default CurrencyConverter;
