const apple = {
  iphones: [
    {
      id: 1,
      title: "iPhone 11 Pro Max",
      memory: "64 gb",
      color: "white",
      path:
        "https://cdn2.biggeek.ru/1/212/29e7/9943-189iphone-11-pro-max-silver-select-2019.jpeg",
      price: 999,
      category: "iphones",
    },
    {
      id: 2,
      title: "iPhone SE",
      memory: "64 gb",
      color: "black",
      path:
        "https://cdn2.biggeek.ru/1/212/07f5/11340-521iphone-se-black-select-2020.png",
      price: 549,
      category: "iphones",
    },
    {
      id: 3,
      title: "iPhone XR 64 Gb",
      path: "https://cdn2.biggeek.ru/1/212/c1d0/xr-black_2.jpg",
      url: "iphone-xr-64-gb",
      price: 599,
      category: "iphones",
    },
    {
      id: 4,
      title: "iPhone XS 64 Gb",
      path: "https://cdn2.biggeek.ru/1/212/0ce7/xs-gold_1.jpg",
      url: "iphone-xs-64-gb",
      price: 899,
      category: "iphones",
    },
  ],
  ipads: [
    {
      id: 5,
      title: "iPad Air (2019) 64Gb Wi-Fi Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/0d1b/11140-550ipad-pro-11-select-cell-spacegray-202003.png",
      url: "ipad-air-2019-64gb-wi-fi-space-gray",
      price: 669,
      category: "ipads",
    },
    {
      id: 6,
      title: "iPad Pro 12.9''(2018) 64Gb Wi-Fi Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/7126/7675-760iPad%20Pro%2012%20space%20gray.png",
      url: "ipad-pro-12-9-2018-64gb-wi-fi-space-gray",
      price: 1119,
      category: "ipads",
    },
    {
      id: 7,
      title: "Apple iPad 2018 32Gb Wi-Fi Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/2d4d/ipad-wifi-select-spacegray-201803.png",
      url: "apple-ipad-2018-32gb-wi-fi-space-gray",
      price: 430,
      category: "ipads",
    },
    {
      id: 8,
      title: "Apple iPad mini (2019) 64Gb Wi-Fi Silver",
      path: "https://cdn2.biggeek.ru/1/212/cb1a/8470-917wifi_silver.png",
      url: "apple-ipad-mini-2019-64gb-wi-fi-silver",
      price: 499,
      category: "ipads",
    },
  ],
  macbooks: [
    {
      id: 9,
      title: "Apple MacBook Pro 13 Retina Touch Bar Z0Y7000TM Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/7b8c/11806-18411399-84mbp13touch-space-select-202005.jpeg",
      url: "apple-macbook-pro-13-retina-touch-bar-z0y7000tm-space-gray",
      price: 5290,
      category: "macbooks",
    },
    {
      id: 10,
      title: "Apple MacBook Air 13 (2017) MQD32 (1,8Ghz, 8Gb, 128Gb)",
      path:
        "https://cdn2.biggeek.ru/1/212/e8f9/8294-64913_3.435x435_1.435x435.jpg",
      url: "apple-macbook-air-13-2017-mqd32-1-8ghz-8gb-128gb",
      price: 1090,
      category: "macbooks",
    },
    {
      id: 11,
      title:
        "Apple MacBook Pro 16 Retina Touch Bar MVVJ2 Space Gray (2,6 GHz Core i7, 16GB, 512GB, Radeon Pro 5300M)",
      path:
        "https://cdn2.biggeek.ru/1/212/ea9a/10488-781mbp16touch-space-gallery1-201911.jpeg",
      url:
        "apple-macbook-pro-16-retina-touch-bar-mvvj2-space-gray-2-6-ghz-core-i7-16gb-512gb-radeon-pro-5300m",
      price: 2699,
      category: "macbooks",
    },
    {
      id: 12,
      title: "Apple Macbook 12 Retina MNYF2 (1.2GHz, 8GB, 256GB) Space Gray",
      path: "https://cdn2.biggeek.ru/1/212/3e4c/space_6.435x435.jpg",
      url: "apple-macbook-12-retina-mnyf2-1-2ghz-8gb-256gb-space-gray",
      price: 1299,
      category: "macbooks",
    },
  ],
};

const samsung = {
  galaxyS: [
    {
      id: 13,
      title: "Galaxy S20 Ultra 128 Gb (Cosmic Black)",
      path:
        "https://cdn2.biggeek.ru/1/212/08f0/11048-876SM-G988BZKDSER-comp.jpg",
      price: 999,
      category: "galaxyS",
    },
    {
      id: 14,
      title: "Galaxy S10 Lite 128Gb 6Gb Black",
      path: "https://cdn2.biggeek.ru/1/212/9ab2/11037-934s10bk.jpg",
      price: 549,
      category: "galaxyS",
    },
  ],
  galaxyA: [],
};

module.exports = {
  apple,
  samsung,
};