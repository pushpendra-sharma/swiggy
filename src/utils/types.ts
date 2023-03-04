export interface FOOD {
  name: string;
  price: number;
  default: number;
  id: string;
  inStock: number;
  isVeg: number;
  variant_group_id: string;
  order: number;
}

export interface MENU {
  id: number;
  name: string;
  category: string;
  description: string;
  cloudinaryImageId: string;
  isVeg: number;
  displayOrder: 0;
  price: number;
  final_price: number;
  variants_new: {
    exclude_list: [];
    variant_groups: [
      {
        group_id: string;
        name: 'Quantity';
        variations: FOOD[];
      }
    ];
  };
  restId: string;
}

export interface RESTAURANT {
  type: string;
  data: {
    id: string;
    name: string;
    city: string;
    area: string;
    avgRating: number;
    avgRatingString: string;
    totalRatingsString: string;
    costForTwo: number;
    costForTwoMsg: string;
    costForTwoString: string;
    cusisines: string[];
    veg: boolean;
    cloudinaryImageId: string;
    address: string;
    locality: string;
  };
}

export interface RESTAURANT_DETAILS {
  type: string;
  data: {
    id: string;
    name: string;
    city: string;
    area: string;
    avgRating: number;
    avgRatingString: string;
    totalRatingsString: string;
    costForTwo: number;
    costForTwoMsg: string;
    costForTwoString: string;
    cusisines: string[];
    veg: boolean;
    cloudinaryImageId: string;
    address: string;
    locality: string;
    menu: { items: MENU[] };
  };
}

export interface GET_RESTAURANT_DETAILS_API_RESPONSE {
  statusCode: number;
  data: RESTAURANT_DETAILS;
}

export interface GET_RESTAURANT_LIST_API_RESPONSE {
  statusCode: number;
  data: {
    cards: [
      Object,
      Object,
      {
        cardType: string;
        data: {
          type: string;
          data: {
            totalOpenRestaurants: number;
            cards: RESTAURANT[];
          };
        };
      }
    ];
  };
}
