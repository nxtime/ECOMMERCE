import create from "zustand";
import { persist } from "zustand/middleware";

export interface UserSavePointStoreType {
    lastVisitedPage: number;
    lastVisitedPagePos: number;
    lastVisitedProductPageId: number;
    setLastVisitedPage(page: number): void;
    setLastVisitedPagePos(pos: number): void;
    setLastVisitedProductPageId(id: number): void;
}

export const userSavePointStore = create(
    persist(
        (set) => ({
            lastVisitedPage: 1,
            lastVisitedPagePos: 0,
            lastVisitedProductPageId: 0,
            setLastVisitedPage: (page: number) => set(() => ({ lastVisitedPage: page })),
            setLastVisitedPagePos: (pos: number) => set(() => ({ lastVisitedPagePos: pos })),
            setLastVisitedProductPageId: (id: number) => set(() => ({ lastVisitedProductPageId: id }))
        }),
        { name: "userSavePoint" }
    )
);
