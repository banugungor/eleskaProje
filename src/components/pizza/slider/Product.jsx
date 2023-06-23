import Card from "./Card";

const Products = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/spicy-pide-with-meat-red-pepper_140725-1231.jpg?w=740&t=st=1687429372~exp=1687429972~hmac=8918c99c21fa6bd512dc2cbadc288c5bf0a6067ae16d8395f5019a68d5713835",
      title: "Kıymalı Pide",
    },
    {
      image:
        "https://img.freepik.com/free-photo/side-view-french-fries-with-seasoning_141793-4899.jpg?w=996&t=st=1687532082~exp=1687532682~hmac=a884ddabc0e528f78ef7670c2e1586f31821d142f95d81dee81fc8b04e87cbb5",
      title: "Çıtır Patates",
    },
    {
      image:
        "https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?w=996&t=st=1687532203~exp=1687532803~hmac=8e9dd97c05e2e488c42381a9cd8bc41a4d6184e59daf7583b28b2d7b5d9a5bef",
      title: "Et Dürüm",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/pour-soft-drink-glass-with-ice-splash-dark-background_79161-3.jpg?w=996",
      title: "Coca Cola",
    },
    {
      image:
        "https://www.dominos.de/ManagedAssets/DE/product/PPON/DE_PPON_all_hero_11872.png?v1872079273",
      title: "This is title 5",
    },
    {
      image:
        "https://www.dominos.de/ManagedAssets/DE/product/PMEA/DE_PMEA_all_hero_11910.jpg?v1167088276",
      title: "This is title 6",
    },
    {
      image:
        "https://www.dominos.de/ManagedAssets/DE/product/PCON/DE_PCON_all_hero_11734.png?v1493403577",
      title: "This is title 7",
    },
    {
      image:
        "https://www.dominos.de/ManagedAssets/DE/product/EPCUR/DE_EPCUR_all_hero_9880.jpg?v752410959",
      title: "This is title 8",
    },
    {
      image:
        "https://www.dominos.de/ManagedAssets/DE/product/EPVEG/DE_EPVEG_all_hero_11910.jpg?v789189983",
      title: "This is title 9",
    },
    {
      image:
        "https://www.dominos.de/ManagedAssets/DE/product/EPORL/DE_EPORL_all_hero_9880.jpg?v916554548",
      title: "This is title 10",
    },
  ];
  return (
    <div className="abcd ">
      <Card slides={slides} />
    </div>
  );
};

export default Products;
