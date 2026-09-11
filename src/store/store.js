import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';



export const useCategoryStore = create(immer(
    devtools(
        (set) => {
            return {
                categories: [],
                getCategories: () => {
                    axios('https://fakestoreapi.com/products/categories')
                        .then(({ data }) => {
                            set((state) => {
                                state.categories = data
                            })
                        })
                },
            }
        }
    )
));


export const useCartStore = create(
    persist(
        immer(
            devtools(
                (set) => {
                    return {
                        cart: [],
                        addCart: (product) => {
                            set(state => {
                                const idx = state.cart.findIndex(item => item.id === product.id);
                                if (idx > -1) {
                                    state.cart[idx].count++
                                } else {
                                    state.cart = [
                                        {
                                            ...product,
                                            count: 1
                                        },
                                        ...state.cart
                                    ]
                                }
                            })
                        },
                        decrementCart: (product) => {
                            set(state => {
                                const idx = state.cart.findIndex(item => item.id === product.id);
                                if (state.cart[idx].count > 0) {
                                    state.cart[idx].count--
                                }
                            })
                        },
                        cleareCart: (product) => {
                            set(state =>{
                                state.cart = state.cart.filter(item =>{
                                    return item.id !== product.id
                                })
                            })
                        },
                    }
                }
            )
        )
    )
);