import Pizza from "./src/assests/images/pizza.png";
import Burger from "./src/assests/images/burger.png";
import Sushi from "./src/assests/images/salmon.png";
import Dessert from "./src/assests/images/cake.png";
import {
  PizzaImg,
  ResOneImg,
  HamImg,
  ResTwoImg,
  SushiImg,
  ResThreeImg,
  TestImg,
  TestImg2,
  TestImg3
} from "./src/assests/images";
import {
  BreakfastBagIcon,
  BreakfastIcon,
  CardIcon,
  DesertBagIcon,
  DesertIcon,
  DrinkBagIcon,
  DrinkIcon,
  HealthBagIcon,
  HealthIcon,
  LocationIcon2,
  LogoutIcon,
  NotificationIcon,
  PizBagIcon,
  PizIcon,
  ProfileIcon,
  SupportIcon,
  SusBagIcon,
  SusIcon,
} from "./src/assests/icons";
export const CategoryData = [
  {
    name: "Pizza",
    img: Pizza,
  },
  {
    name: "Burgers",
    img: Burger,
  },
  {
    name: "Sushi",
    img: Sushi,
  },
  {
    name: "Dessert",
    img: Dessert,
  },
];

export const TopRestuarants = [
  {
    img: PizzaImg,
    imgLogo: ResOneImg,
    foodName: "Bella Napoli Pizza",
    restuarant: "Italian • Pizza • $$",
    time: "15 - 25 min",
    distanc: "2.4 miles",
  },
  {
    img: HamImg,
    imgLogo: ResTwoImg,
    foodName: "The Burger Shack",
    restuarant: "American • Burgers • $",
    time: "20 - 30 min",
    distanc: "1.1 miles",
  },
  {
    img: SushiImg,
    imgLogo: ResThreeImg,
    foodName: "Zen Sushi Bar",
    restuarant: "Japanese • Sushi • $$$",
    time: "30 - 45 min",
    distanc: "3.8 miles",
  },
];

export const AccountData = [
  {
    Icon: ProfileIcon,
    title: "Account Information",
  },
  {
    Icon: LocationIcon2,
    title: "Saved Addresses",
  },
  {
    Icon: CardIcon,
    title: "Payment Methods",
  },
  {
    Icon: NotificationIcon,
    title: "Notifications",
  },
  {
    Icon: SupportIcon,
    title: "Help & Support",
  },
  {
    Icon: LogoutIcon,
    title: "Log Out",
  },
];

export const SearchData = [
  {
    name: "Pizza",
    img: PizIcon,
    imgbag: PizBagIcon,
    color: "#FFF3E0",
  },
  {
    name: "Healthy",
    img: HealthIcon,
    imgbag: HealthBagIcon,
    color: "#E0F2F1",
  },
  {
    name: "Sushi",
    img: SusIcon,
    imgbag: SusBagIcon,
    color: "#E3F2FD",
  },
  {
    name: "Breakfast",
    img: BreakfastIcon,
    imgbag: BreakfastBagIcon,
    color: "#F3E5F5",
  },
  {
    name: "Desert",
    img: DesertIcon,
    imgbag: DesertBagIcon,
    color: "#FCE4EC",
  },
  {
    name: "Drinks",
    img: DrinkIcon,
    imgbag: DrinkBagIcon,
    color: "#F1F8E9",
  },
];

export const ActiveOrders = [
  {
    image: TestImg,
    resName: "Burger House",
    time: "Today, 12:45 PM",
    status: "In Progress",
    foodDesc: "1x Wagyu Burger, 1x Large Fries, 1x Coke Zero",
    amount: "$32.50",
    button: "Track Order"
  },
];
export const PastOrders = [
  {
    image: TestImg2,
    resName: "Sushi Zen",
    time: "Mar 12, 2024 • 7:20 PM",
    status: "Delivered",
    foodDesc: "2x Salmon Nigiri, 1x Miso Soup",
    amount: "$24.00",
    button: "Reorder"
  },
  {
    image: TestImg3,
    resName: "Luigi's Pizza",
    time: "Mar 08, 2024 • 8:15 PM",
    status: "Delivered",
    foodDesc: "1x Pepperoni XL, 1x Garlic Bread",
    amount: "$19.50",
    button: "Reorder"
  },
];
