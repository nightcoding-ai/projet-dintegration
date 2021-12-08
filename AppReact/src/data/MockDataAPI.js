import { partners, products } from './dataArrays';

export function getPartnersById(partners_Id) {
    let partnersData;
    partners.map(data => {
        if (data.id == partners_Id) {
            partnersData = data;
        }
    });
    return partnersData;
}

export function getPartnersName(partners_Id) {
    let name;
    partners.map(data => {
        if(data.id == partners_Id) {
            name = data.name;
        }
    });
    return name;
}

export function getProducts(partners_Id) {
    const productArray = [];
    products.map(data => {
        if (data.partners_Id == partners_Id) {
            productArray.push(data);
        };
    });
    return productArray;
}

export function getNumberProducts(partners_Id) {
    let count = 0;
    products.map(data => {
        if (data.partners_Id == partners_Id) {
            count ++;
        };
    });
    return count;
}

// Function for search

export function getProductsByProductName(productName) {
    const upperName = productName.toUpperCase();
    const productArray = [];
    products.map(data=> {
        if (data.productTitle.toUpperCase().includes(upperName)) {
            productArray.push(data);
        }
    });
    return productArray;
}

export function getProductsByPartnersName(partners_Id){
    const upperName = partners_Id.toUpperCase();
  const productsArray = [];
  partners.map(data => {
    if (data.name.toUpperCase().includes(upperName)) {
      const products = getProducts(data.id); // return a vector of products
      products.map(item => {
        productsArray.push(item);
      });
    }
  });
  return productsArray;
}