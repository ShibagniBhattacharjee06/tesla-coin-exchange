import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Tesla Coin Exchange",
    chainId: "galileo-4",
    createdDate: "2025-01-03T09:27:48.771Z",
    modifiedDate: "2025-01-03T09:27:48.771Z",
    id: "andromeda",
    collections: [
        {
            exchange: "andr1dy8rfg606k2hdmp3rl68s4xpyk046wewndzam5hg33sxjlqct6hsl04hje",
            cw20: "andr1c2jhnsfrvar8swadkv89tl6mwkz92ddsruc5lr5mehys2atjerzsayke5r",
            name: "Tesla Coin Exchange",
            type: ICollectionType.EXCHANGE,
            id: "exchange",
        }
    ],
};

export default CONFIG;
