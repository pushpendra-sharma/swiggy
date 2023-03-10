// import menu from '../mocks/menu.json';
// export type MENU1 = typeof menu;

export interface MENU_ITEM {
  id: string;
  name: string;
  category: string;
  description: string;
  cloudinaryImageId: string;
  isVeg: number;
  displayOrder: 0;
  price: number;
  final_price: number;
  restId: string;
}

export interface RESTAURANT {
  id: string;
  name: string;
  city: string;
  area: string;
  avgRating: string;
  avgRatingString: string;
  totalRatings: string;
  totalRatingsString: string;
  costForTwo: number;
  costForTwoMsg: string;
  costForTwoString: string;
  cuisines: string[];
  veg: boolean;
  cloudinaryImageId: string;
  address: string;
  locality: string;
  deliveryTime: number;
  slaString: string;
  lastMileTravel: number;
  lastMileTravelString: string;
  aggregatedDiscountInfo: {
    shortDescriptionList: { meta: string; discountType: string }[];
  };
  areaSlug: string;
  promoted: boolean;
}

export interface BANNER_DETAILS extends RESTAURANT {
  sla: {
    slaString: string;
    lastMileDistanceString: string;
    deliveryTime: number;
  };
  offerMeta: {
    header: string;
    offer_tag: string;
    coupon_code: string;
    description: string;
  }[];
  aggregatedDiscountInfo: {
    header: string;
    shortDescriptionList: {
      meta: string;
      discountType: string;
      operationType: string;
    }[];
  };
}

export interface RESTAURANT_DETAILS extends BANNER_DETAILS {
  menu: {
    items: {};
    widgets: {
      name: string;
      subTitle: string;
      type: string;
      entities: {
        id: number;
        type: string;
        showImg: boolean;
        showRibbon: boolean;
      }[];
    }[];
  };
}

export interface GET_RESTAURANT_DETAILS_API_RESPONSE {
  statusCode: number;
  data: RESTAURANT_DETAILS;
}
export interface CARD {
  type: string;
  data: RESTAURANT;
}
export interface GET_RESTAURANT_LIST_API_RESPONSE {
  statusCode: number;
  data: {
    cards: {
      cardType: string;
      data: {
        type: string;
        data: {
          totalOpenRestaurants: number;
          cards: CARD[];
        };
      };
    }[];
  };
}

export interface GET_SEARCH_QUERY_API_RESPONSE {
  data: {
    query: string;
    suggestions: SUGGESTION[];
  };
}

export interface SUGGESTION {
  text: string;
  highlightedText: string;
  type: string;
  tagToDisplay: string;
  cloudinaryId: string;
  tagToDisplayColor: string;
  cta: {
    text: string;
    type: string;
    link: string;
  };
  metadata: string;
  category: string;
  categoryColor: string;
  subCategory: string;
  subCategoryColor: string;
}
