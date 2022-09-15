import { faker } from "@faker-js/faker";

const MOCK_PRODUCTS: any = [];

const randomNumber = () => Math.floor(Math.random() * 3) === 1;

for (let i = 1; i <= 2000; i += 1) {
    MOCK_PRODUCTS.push({
        id: i.toString(),
        name: faker.commerce.product(),
        price: parseFloat(faker.commerce.price(10, 200, 2)),
        description: faker.lorem.lines(4),
        image: "/images/home_page_banner.png"
    });
    if (randomNumber()) {
        MOCK_PRODUCTS[i - 1].prevPrice = MOCK_PRODUCTS[i - 1].price + MOCK_PRODUCTS[i - 1].price * 0.1;
    }
}

const PRODUCTS_PAGES: any[] = [];

let PRODUCT_PAGE: any[] = [];

let PAGE_NUM = 1;

const NUMBER_OF_PRODUCTS_PER_PAGE = 12;

for (let i = 0; i <= MOCK_PRODUCTS.length + 1; i += 1) {
    // eslint-disable-next-line no-continue
    // if (i === 0) continue;
    if ((i % NUMBER_OF_PRODUCTS_PER_PAGE === 0 && i !== 0) || i + 1 === MOCK_PRODUCTS.length + 1) {
        PRODUCTS_PAGES.push({
            page: PAGE_NUM,
            products: PRODUCT_PAGE
        });
        PRODUCT_PAGE = [];
        PAGE_NUM += 1;
    }

    PRODUCT_PAGE.push(MOCK_PRODUCTS[i]);
}

const NUMBER_OF_PAGES = PRODUCTS_PAGES.length;

export const getAllProductsPages = (NUMBER_OF_PRODUCTS?: number) => {
    const NEW_PRODUCTS_LIST = [...PRODUCTS_PAGES];
    if (NUMBER_OF_PRODUCTS !== undefined) NEW_PRODUCTS_LIST.splice(NUMBER_OF_PRODUCTS! / NUMBER_OF_PRODUCTS_PER_PAGE, NEW_PRODUCTS_LIST.length - 1);
    return NUMBER_OF_PRODUCTS !== undefined ? NEW_PRODUCTS_LIST : PRODUCTS_PAGES;
};

export const getPrefetchProductsPages = (currentPage: number, numberOfProducts?: number) => {
    let NEW_PRODUCTS_LIST = PRODUCTS_PAGES;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    numberOfProducts !== undefined && NEW_PRODUCTS_LIST.splice(numberOfProducts!, NUMBER_OF_PAGES - 1);

    NEW_PRODUCTS_LIST = NEW_PRODUCTS_LIST.filter((p) => p.page - 1 === currentPage || p.page === currentPage || p.page + 1 === currentPage);

    return {
        pages: numberOfProducts === undefined ? NUMBER_OF_PAGES : NEW_PRODUCTS_LIST.length,
        productsItems: NEW_PRODUCTS_LIST
    };
};

export const getProductByID = (id: any) => {
    const product = MOCK_PRODUCTS.filter((p: any) => p.id === id)[0];
    return product;
};
