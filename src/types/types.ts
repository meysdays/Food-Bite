import { ImageSourcePropType } from "react-native";

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface CardPropsType {
  id: number;
  img: ImageSourcePropType;
  imgLogo: ImageSourcePropType;
  foodName: string;
  restuarant: string;
  time: string;
  distance: string;
}
