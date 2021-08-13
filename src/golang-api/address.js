// ADDRESS API
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const HEADER = { 'Content-Type': 'application/json', Accept: 'application/json' };

const PROVINCE_LIST = process.env.NEXT_PUBLIC_PROVINCE_LIST;
const PROVINCE_DETAIL = process.env.NEXT_PUBLIC_PROVINCE_DETAIL;
const CITY_LIST = process.env.NEXT_PUBLIC_CITY_LIST;
const CITY_DETAIL = process.env.NEXT_PUBLIC_CITY_DETAIL;
const DISTRICT_LIST = process.env.NEXT_PUBLIC_DISTRICT_LIST;
const DISTRICT_DETAIL = process.env.NEXT_PUBLIC_DISTRICT_DETAIL;
const SUBDISTRICT_LIST = process.env.NEXT_PUBLIC_SUBDISTRICT_LIST;
const SUBDISTRICT_DETAIL = process.env.NEXT_PUBLIC_SUBDISTRICT_DETAIL;
const REGISTER = process.env.NEXT_PUBLIC_REGISTER;
const LOGIN = process.env.NEXT_PUBLIC_LOGIN;
const UNITT = process.env.NEXT_PUBLIC_UNITT;
const UNIT_UPDATE = process.env.NEXT_PUBLIC_UNIT_UPDATE;
const UNIT_LIST = process.env.NEXT_PUBLIC_UNIT_LIST;
const PRODUCT = process.env.NEXT_PUBLIC_PRODUCT;
const SUPPLIER = process.env.NEXT_PUBLIC_SUPPLIER;
const SUPPLIER_LIST = process.env.NEXT_PUBLIC_SUPPLIER_LIST;
const CATEGORY = process.env.NEXT_PUBLIC_CATEGORY;
const CATEGORY_LIST = process.env.NEXT_PUBLIC_CATEGORY_LIST;
const WAREHOUSE = process.env.NEXT_PUBLIC_WAREHOUSE;
const WAREHOUSE_LIST = process.env.WAREHOUSE_LIST;

// province
export function getProvinceList() {
  return fetch(BASE_API_URL + PROVINCE_LIST, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
export function getProvince(id) {
  return fetch(BASE_API_URL + PROVINCE_DETAIL + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
// city
export function getCityList(id) {
  return fetch(BASE_API_URL + CITY_LIST + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
export function getCity(id) {
  return fetch(BASE_API_URL + CITY_DETAIL + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
// distict
export function getDistrictList(id) {
  return fetch(BASE_API_URL + DISTRICT_LIST + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
export function getDistrict(id) {
  return fetch(BASE_API_URL + DISTRICT_DETAIL + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
// subdistrict
export function getSubdistrictList(id) {
  return fetch(BASE_API_URL + SUBDISTRICT_LIST + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}
export function getSubdistrict(id) {
  return fetch(BASE_API_URL + SUBDISTRICT_DETAIL + id, {
    HEADER,
    // method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
}

//company
export function addCompany(company_name, rent_cost) {
  const res = fetch(BASE_API_URL + 'company', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      company_name,
      rent_cost,
    }),
  });
  return res;
}

export async function updateCompany(company_id, company_name, _rent_cost) {
  const rent_cost = parseInt(_rent_cost);
  const res = await fetch(BASE_API_URL + 'company', {
    method: 'PATCH',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      company_id,
      company_name,
      rent_cost,
    }),
    mode: 'cors',
  });
  return res;
}

export function getCompany() {
  return fetch(BASE_API_URL + 'company/list', { HEADER });
}

export function deleteCompany(company_id) {
  const res = fetch(BASE_API_URL + 'company', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      company_id,
    }),
  });
  return res;
}

//unit
export function addUnit(unit_name, convertion) {
  const res = fetch(BASE_API_URL + UNITT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      unit_name,
      convertion,
    }),
  });
  return res;
}

export async function updateUnit(unit_id, unit_name, _convertion) {
  const convertion = parseFloat(_convertion);
  const res = await fetch(BASE_API_URL + UNIT_UPDATE, {
    method: 'PATCH',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      unit_id,
      unit_name,
      convertion,
    }),
    mode: 'cors',
  });
  return res;
}

export function getUnit(id) {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';
  return fetch(BASE_API_URL + 'unit/company/list/' + id, { HEADER });
}

export function deleteUnit(unit_id) {
  const res = fetch(BASE_API_URL + UNITT, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      unit_id,
    }),
  });
  return res;
}

export function addwarehouse(warehouse_name, total_room, capacity, street, kelurahandesa_id) {
  const res = fetch(BASE_API_URL + WAREHOUSE, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      warehouse_name,
      total_room,
      capacity,
      street,
      kelurahandesa_id,
    }),
  });
  return res;
}

export function updateWarehouse(warehouse_id, warehouse_name, total_room, capacity, street, kelurahandesa_id) {
  const res = fetch(BASE_API_URL + WAREHOUSE, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: JSON.stringify({
      warehouse_id,
      warehouse_name,
      total_room,
      capacity,
      street,
      kelurahandesa_id,
    }),
    mode: 'cors',
  });
  return res;
}

export function getWarehouse(id) {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';
  return fetch(BASE_API_URL + 'warehouse/company/' + id + '/list', { HEADER });
}

export function deleteWarehouse(warehouse_id) {
  const res = fetch(BASE_API_URL + WAREHOUSE, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      warehouse_id,
    }),
  });
  return res;
}

export function addProduct(product_name, product_sku, product_description, company_id, unit_id, category_id) {
  const res = fetch(BASE_API_URL + 'product', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      product_name,
      product_sku,
      product_description,
      company_id,
      unit_id,
      category_id,
    }),
  });
  return res;
}

export async function updateProduct(
  product_id,
  product_name,
  product_sku,
  product_description,
  company_id,
  unit_id,
  category_id,
) {
  const res = fetch(BASE_API_URL + 'product', {
    method: 'PATCH',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: JSON.stringify({
      product_id,
      product_name,
      product_sku,
      product_description,
      company_id,
      unit_id,
      category_id,
    }),
    mode: 'cors',
  });
  return res;
}

export function deleteProduct(product_id) {
  const res = fetch(BASE_API_URL + 'product', {
    method: 'DELETE',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      product_id,
    }),
  });
  return res;
}

export function getProductByCompany(id) {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';
  return fetch(BASE_API_URL + 'product/company/' + id + '/list', { HEADER });
}

export function getProduct() {
  return fetch(BASE_API_URL + 'product/list', { HEADER });
}

export function addSupplier(partner_name, phone_number, street, kelurahandesa_id) {
  // const kelurahandesa_id = parseInt(_kelurahandesa_id);
  const res = fetch(BASE_API_URL + SUPPLIER, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
  });
  return res;
}

export function updateSupplier(_partner_id, partner_name, phone_number, street, kelurahandesa_id) {
  const partner_id = parseInt(_partner_id);
  const res = fetch(BASE_API_URL + SUPPLIER, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: JSON.stringify({
      partner_id,
      partner_name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
    mode: 'cors',
  });
  return res;
}

export function getSupplier(id) {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';

  const res = fetch(BASE_API_URL + 'partner/supplier/company/' + id + '/list', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    // mode: 'cors',
  });
  return res;
}

export function deleteSupplier(partner_id) {
  const res = fetch(BASE_API_URL + SUPPLIER, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
    }),
  });
  return res;
}

export function addCustomer(partner_name, phone_number, street, kelurahandesa_id) {
  const res = fetch(BASE_API_URL + 'partner/customer', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
  });
  return res;
}

export function getMitraCustomer(id) {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';
  return fetch(BASE_API_URL + 'partner/customer/company/' + id + '/list', { HEADER });
}

export function updateCustomer(_partner_id, partner_name, phone_number, street, kelurahandesa_id) {
  const partner_id = parseInt(_partner_id);
  const res = fetch(BASE_API_URL + 'partner/customer', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: JSON.stringify({
      partner_id,
      partner_name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
    mode: 'cors',
  });
  return res;
}

export function deleteCustomer(partner_id) {
  const res = fetch(BASE_API_URL + 'partner/customer', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
    }),
  });
  return res;
}

export function addPenyewa(partner_name, phone_number, street, kelurahandesa_id) {
  // const kelurahandesa_id = parseInt(_kelurahandesa_id);
  const res = fetch(BASE_API_URL + 'partner/penyewa', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
  });
  return res;
}

export function updatePenyewa(_partner_id, partner_name, phone_number, street, kelurahandesa_id) {
  const partner_id = parseInt(_partner_id);
  const res = fetch(BASE_API_URL + 'partner/penyewa', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: JSON.stringify({
      partner_id,
      partner_name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
    mode: 'cors',
  });
  return res;
}

export function getPenyewa(id) {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';
  return fetch(BASE_API_URL + 'partner/penyewa/company/' + id + '/list', { HEADER });
}

export function deletePenyewa(partner_id) {
  const res = fetch(BASE_API_URL + 'partner/penyewa', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
    }),
  });
  return res;
}

export function addCategory(category_name) {
  const res = fetch(BASE_API_URL + 'category', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      category_name,
    }),
  });
  return res;
}

export async function updateCategory(category_id, category_name) {
  const res = fetch(BASE_API_URL + 'category', {
    method: 'PATCH',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: JSON.stringify({
      category_id,
      category_name,
    }),
    mode: 'cors',
  });
  return res;
}

export function deleteCategory(category_id) {
  const res = fetch(BASE_API_URL + 'category', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      category_id,
    }),
  });
  return res;
}

export function getCategory() {
  // return 'http://34.101.109.43:8080/api/v1/unit/list';
  return fetch(BASE_API_URL + 'category/list', { HEADER });
}

export function getLabelCategory(id) {
  return fetch(BASE_API_URL + 'unit/detail/' + id, { HEADER });
}

export function addStockIn(
  partner_id,
  warehouse_id,
  transaction_number,
  transaction_date,
  transaction_status,
  tally,
  description,
  total_product_price,
  addisional_price,
  discount_price,
  total_payment,
  paymented,
  remaining_payment,
  detail,
) {
  const res = fetch(BASE_API_URL + 'inventory/stock/in', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
      warehouse_id,
      transaction_number,
      transaction_date,
      transaction_status,
      tally,
      description,
      total_product_price,
      addisional_price,
      discount_price,
      total_payment,
      paymented,
      remaining_payment,
      detail,
    }),
  });
  return res;
}

export function getListPembelianByCompany(id) {
  const res = fetch(BASE_API_URL + 'inventory/stock/in/company/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    // body: JSON.stringify({
    //   transaction_number,
    //   transaction_date,
    //   total_product_price,
    //   partner_id
    // }),
  });
  // return fetch(BASE_API_URL + 'inventory/warehouse/list/' + id, { HEADER });
  return res;
}

export function getPembelianByTransaction(id) {
  const res = fetch(BASE_API_URL + 'inventory/stock/in/detail/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function getListPenjualanByCompany(id) {
  const res = fetch(BASE_API_URL + 'inventory/stock/out/company/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    // body: JSON.stringify({
    //   transaction_number,
    //   transaction_date,
    //   total_product_price,
    //   partner_id
    // }),
  });
  // return fetch(BASE_API_URL + 'inventory/warehouse/list/' + id, { HEADER });
  return res;
}

export function addStockOut(
  partner_id,
  warehouse_id,
  transaction_number,
  transaction_date,
  transaction_status,
  tally,
  description,
  total_product_price,
  addisional_price,
  discount_price,
  total_payment,
  paymented,
  remaining_payment,
  detail,
) {
  const res = fetch(BASE_API_URL + 'inventory/stock/out', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
      warehouse_id,
      transaction_number,
      transaction_date,
      transaction_status,
      tally,
      description,
      total_product_price,
      addisional_price,
      discount_price,
      total_payment,
      paymented,
      remaining_payment,
      detail,
    }),
  });
  return res;
}

export function getPenjualanByTransaction(id) {
  const res = fetch(BASE_API_URL + 'inventory/stock/out/detail/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function getListStockOpnameByCompany(id) {
  const res = fetch(BASE_API_URL + 'inventory/opname/company/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    // body: JSON.stringify({
    //   transaction_number,
    //   transaction_date,
    //   total_product_price,
    //   partner_id
    // }),
  });
  // return fetch(BASE_API_URL + 'inventory/warehouse/list/' + id, { HEADER });
  return res;
}

export function addStockOpname(warehouse_id, stock_opname_number, stock_opname_date, tally, stock_opname_detail) {
  const res = fetch(BASE_API_URL + 'inventory/opname', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      warehouse_id,
      stock_opname_number,
      stock_opname_date,
      tally,
      stock_opname_detail,
    }),
  });
  return res;
}

export function getListStockInventoryByWarehouse(id) {
  const res = fetch(BASE_API_URL + 'inventory/warehouse/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function getListBanner() {
  const res = fetch(BASE_API_URL + 'banner', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function uploadImageBanner(data) {
  const res = fetch('http://wmsbe.fishlog.co.id/api/v1/' + 'upload/banner/' + data, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'multipart/form-data',
      token: localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://wmsbe.fishlog.co.id',
    },
    body: data,
    mode: 'cors',
  });
  console.log('file addres file2', file);
  return res;
}

export function getListAllUser() {
  return fetch(BASE_API_URL + 'user/all', {
    method: 'GET',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      // Accept: 'multipart/form-data',
      token: localStorage.getItem('token'),
    },
  });
}

export function getListRole() {
  return fetch(BASE_API_URL + 'role/list', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // token: localStorage.getItem('token'),
    },
  });
}

export function getAllPackaging(id) {
  return fetch(BASE_API_URL + 'packaging/list/company/' + id, {
    method: 'GET',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      // Accept: 'multipart/form-data',
      token: localStorage.getItem('token'),
    },
  });
}

export function addPackaging(packaging_name) {
  const res = fetch(BASE_API_URL + 'packaging', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      packaging_name,
    }),
  });
  return res;
}

export function getRentStockInByCompany(id) {
  const res = fetch(BASE_API_URL + 'rent/stock/in/company/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function addRentStockIn(
  partner_id,
  warehouse_id,
  transaction_number,
  transaction_date,
  transaction_status,
  tally,
  description,
  labour_price,
  additional_charge,
  addisional_price,
  total_payment,
  paymented,
  remaining_payment,
  detail,
) {
  const res = fetch(BASE_API_URL + 'rent/stock/in', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
      warehouse_id,
      transaction_number,
      transaction_date,
      transaction_status,
      tally,
      description,
      labour_price,
      additional_charge,
      addisional_price,
      total_payment,
      paymented,
      remaining_payment,
      detail,
    }),
  });
  return res;
}

export function getDetailRentStockIn(id) {
  const res = fetch(BASE_API_URL + 'rent/stock/in/detail/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function getRentStockOutnByCompany(id) {
  const res = fetch(BASE_API_URL + 'rent/stock/out/company/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function addRentStockOutByCompany(
  partner_id,
  warehouse_id,
  transaction_number,
  transaction_date,
  transaction_status,
  tally,
  description,
  labour_price,
  additional_charge,
  addisional_price,
  total_payment,
  paymented,
  remaining_payment,
  detail,
) {
  const res = fetch(BASE_API_URL + 'rent/stock/out', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      partner_id,
      warehouse_id,
      transaction_number,
      transaction_date,
      transaction_status,
      tally,
      description,
      labour_price,
      additional_charge,
      addisional_price,
      total_payment,
      paymented,
      remaining_payment,
      detail,
    }),
  });
  return res;
}

export function getDetailRentStockOut(id) {
  const res = fetch(BASE_API_URL + 'rent/stock/out/detail/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function getRentStockOnHandByWarehouse(id) {
  const res = fetch(BASE_API_URL + 'rent/warehouse/list/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  });
  return res;
}

export function generateBill(product_id, warehouse_id, partner_id, month, year) {
  const res = fetch(BASE_API_URL + 'bill', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      product_id,
      warehouse_id,
      partner_id,
      month,
      year,
    }),
  });
  return res;
}

export function addIncome(book_keeping_type, book_keeping_date, company_id, book_keeping_details) {
  // const company_id = 1;
  const res = fetch(BASE_API_URL + 'bookkeeping/income', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      book_keeping_type,
      book_keeping_date,
      company_id,
      book_keeping_details,
    }),
  });
  return res;
}

export function getIncome(tanggal_mulai, tanggal_selesai) {
  const res = fetch(BASE_API_URL + 'bookkeeping/income/list', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      tanggal_mulai,
      tanggal_selesai,
    }),
  });
  return res;
}
export function addOutcome(book_keeping_type, book_keeping_date, _company_id, book_keeping_details) {
  const company_id = parseInt(localStorage.getItem('company'));
  const res = fetch(BASE_API_URL + 'bookkeeping/outcome', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      book_keeping_type,
      book_keeping_date,
      company_id,
      book_keeping_details,
    }),
  });
  return res;
}

export function getOutcome(book_keeping_type, book_keeping_date, _company_id, book_keeping_details) {
  const company_id = parseInt(localStorage.getItem('company'));
  const res = fetch(BASE_API_URL + 'bookkeeping/outcome/list', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      book_keeping_type,
      book_keeping_date,
      company_id,
      book_keeping_details,
    }),
  });
  return res;
}
