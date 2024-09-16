import { atom } from "recoil";
import { postsData } from "./postsData";
import { categoryData } from "./categoryData";
import { loginUserData } from "./loginUserData";

const postsKey = 'postsKey';
const categoryKey = 'categoryKey';
const loginUserKey = 'loginUserKey';

export const postsAtom = atom({
    key: postsKey,
    default: postsData,
});

export const categoryAtom = atom({
    key: categoryKey,
    default: categoryData,
});

export const loginUserAtom = atom({
    key: loginUserKey,
    default: loginUserData,
})