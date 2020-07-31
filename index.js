const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const { EnCode } = require('./src/Shared/Util');
const { SendEmail } = require('./src/Shared/SendEmail');
//#region Imports

//#region Shared Controller

const { AddManufactureAPI, UpdateManufactureAPI, DeleteManufactureAPI, GetManufacturesAPI, GetManufactureAPI, ManufactureLookUpAPI } = require('./src/Controller/Shared/ManufactureController');
const { AddAreaAPI, UpdateAreaAPI, DeleteAreaAPI, GetAreaAPI, GetAreasAPI, AreaLookUpAPI } = require('./src/Controller/Shared/AreaController');
const { AddBrandAPI, UpdateBrandAPI, DeleteBrandAPI, GetBrandsAPI, BrandLookUpAPI, GetBrandAPI } = require('./src/Controller/Shared/BrandController');
const { AddCityAPI, UpdateCityAPI, DeleteCityAPI, GetCiteisAPI, GetCityAPI, CityLookUpAPI } = require('./src/Controller/Shared/CityController');
const { AddCountryAPI, UpdateCountryAPI, DeleteCountryAPI, GetCountriesAPI, CountryLookUpAPI, GetCountryAPI } = require('./src/Controller/Shared/CountryController');
const { GetProductCategoryAPI, ProductCategoryLookUpAPI, AddProductCategoryAPI, UpdateProductCategoryAPI, DeleteProductCategoryAPI, GetProductCategoriesAPI } = require('./src/Controller/Shared/ProductCategoryController');
const { AddProductAPI, UpdateProductAPI, DeleteProductAPI, GetProductsAPI, GetProductAPI, ProductLookUpAPI } = require('./src/Controller/Shared/ProductController');
const { AddProductFamilyAPI, GetProductFamilyAPI, UpdateProductFamilyAPI, DeleteProductFamilyAPI, GetProductFamiliesAPI, ProductFamilyLookUpAPI } = require('./src/Controller/Shared/ProductFamilyController');
const { AddStateAPI, UpdateStateAPI, DeleteStateAPI, GetStateAPI, GetStatesAPI, StateLookUpAPI } = require('./src/Controller/Shared/StateController');
const { AddStoreAPI, UpdateStoreAPI, DeleteStoreAPI, GetStoresAPI, GetStoreAPI, StoreLookUpAPI } = require('./src/Controller/Shared/StoreController');
const { AddUserAPI, UpdateUserAPI, DeleteUserAPI, GetUserAPI, GetUsersAPI, ChangePasswordAPI } = require('./src/Controller/Shared/UserController');

//#endregion Shared Controller

//#region Company Controller

const { AddCompanyAPI, UpdateCompanyAPI, DeleteCompanyAPI, GetCompanyAPI, GetCompaniesAPI } = require('./src/Controller/Company/CompanyController');

//#endregion Company Controller

//#region Store Controller

const { AddDeliveryAPI, UpdateDeliveryAPI, DeleteDeliveryAPI, GetDeliveryAPI, GetDeliverysAPI } = require('./src/Controller/Store/DeliveryController');
const { AddInventoryAPI, UpdateInventoryAPI, DeleteInventoryAPI, GetInventoryAPI, GetInventorysAPI } = require('./src/Controller/Store/InventoryController');
const { AddOrderAPI, UpdateOrderAPI, DeleteOrderAPI, GetOrderAPI, GetOrdersAPI } = require('./src/Controller/Store/OrderController');
const { AddPaymentAPI, UpdatePaymentAPI, DeletePaymentAPI, GetPaymentAPI, GetPaymentsAPI } = require('./src/Controller/Store/PaymentController');
const { AddSchemeAPI, UpdateSchemeAPI, DeleteSchemeAPI, GetSchemeAPI, GetSchemesAPI } = require('./src/Controller/Store/SchemeController');

//#endregion Store Controller

//#region Consumer Controller

const { AddCartAPI, UpdateCartAPI, DeleteCartAPI, GetCartAPI, GetCartsAPI } = require('./src/Controller/Consumer/CartController');
const { AddFavoriteAPI, UpdateFavoriteAPI, DeleteFavoriteAPI, GetFavoriteAPI, GetFavoritesAPI } = require('./src/Controller/Consumer/FavoriteController');

//#endregion Consumer Controller

//#endregion Imports

//#region API's

//#region Manufacture API

app.get('/AddManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddManufactureAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateManufactureAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteManufactureAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetManufactureAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetManufactures', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetManufacturesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/ManufactureLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ManufactureLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Manufacture API

//#region Area API

app.get('/AddArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddAreaAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateAreaAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteAreaAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetAreaAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetAreas', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetAreasAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/AreaLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    AreaLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Area API

//#region Brand API

app.get('/AddBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddBrandAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateBrandAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteBrandAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetBrandAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetBrands', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetBrandsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/BrandLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    BrandLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Brand API

//#region City API

app.get('/AddCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCityAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCityAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCityAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCityAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCities', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCiteisAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/CityLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    CityLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion City API

//#region Country API

app.get('/AddCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCountryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCountryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCountryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCountryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCountries', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCountriesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/CountryLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    CountryLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Country API

//#region ProductCategory API

app.get('/AddProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductCategoryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductCategoryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductCategoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductCategoryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetProductCategories', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductCategoriesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/ProductCategoryLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ProductCategoryLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion ProductCategory API

//#region Product API

app.get('/AddProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetProducts', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/ProductLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ProductLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Product API

//#region ProductFamily API

app.get('/AddProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductFamilyAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductFamilyAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductFamilyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductFamilyAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetProductFamilies', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductFamiliesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/ProductFamilyLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ProductFamilyLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion ProductFamily API

//#region State API

app.get('/AddState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddStateAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateStateAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteStateAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStateAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetStates', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStatesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/StateLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    StateLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion State API

//#region Store API

app.get('/AddStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddStoreAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateStoreAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteStoreAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStoreAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetStores', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStoresAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/StoreLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    StoreLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Store API

//#region User API

app.get('/AddUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddUserAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateUserAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteUserAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetUserAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetUsers', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetUsersAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/ChangePassword', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.user_id != null && request.body.new_password !== undefined && request.body.old_password !== undefined) {
    ChangePasswordAPI(request.body.user_id, request.body.new_password, request.body.old_password, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion User API

//#region Company API

app.get('/AddCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCompanyAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCompanyAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCompanyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCompanyAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCompanies', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCompaniesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Company API

//#region Delivery API

app.get('/AddDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddDeliveryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateDeliveryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteDeliveryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetDeliveryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetDeliveries', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetDeliverysAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.get('/DeliveryLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     DeliveryLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Delivery API

//#region Inventory API

app.get('/AddInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddInventoryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateInventoryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteInventoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetInventoryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetInventories', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetInventorysAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//  app.get('/InventoryLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     InventoryLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Inventory API

//#region Order API

app.get('/AddOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddOrderAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateOrderAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteOrderAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetOrderAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetOrders', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetOrdersAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//  app.get('/OrderLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     OrderLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Order API

//#region Payment API

app.get('/AddPayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddPaymentAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdatePayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdatePaymentAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeletePayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeletePaymentAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetPayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetPaymentAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetPayments', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetPaymentsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.get('/PaymentLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     PaymentLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Payment API

//#region Scheme API

app.get('/AddScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddSchemeAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateSchemeAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteSchemeAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetSchemeAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetSchemes', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetSchemesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.get('/SchemeLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     SchemeLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Scheme API

//#region Cart API

app.get('/AddCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCartAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCartAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCartAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCartAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetCarts', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCartsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.get('/CartLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     CartLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Cart API

//#region Favorite API

app.get('/AddFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddFavoriteAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/UpdateFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateFavoriteAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/DeleteFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteFavoriteAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetFavoriteAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.get('/GetFavorites', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetFavoritesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.get('/FavoriteLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     FavoriteLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Favorite API

//#endregion API's

//#region Common API

app.get('/SendEmail', async (request, response) => {
  SendEmail(request.body.mailOptions, response);
});

//#endregion Common API

//#region  Private

let ResponseAPI = (response, data, err) => {
  if (data) {
    return response.send(EnCode(JSON.stringify(data)));
  } else {
    return response.send(EnCode(JSON.stringify(err)));
  }
};

//#endregion  Private

console.log('API Run at http://localhost:3000/');
app.listen(3000);