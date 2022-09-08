import { IconName } from "delta_kit/dist/typings/iconNames";
import { routes } from "../services/common";


export interface MenuLink {
    link: (typeof routes)[number];
    name: string;
    icon?: IconName
}


