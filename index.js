const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

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
const { AddUserAPI, UpdateUserAPI, DeleteUserAPI, GetUserAPI, GetUsersAPI, IsUserVerifiedAPI, ChangePasswordAPI, UserLookUpAPI } = require('./src/Controller/Shared/UserController');

//#endregion Shared Controller

//#region Company Controller

const { AddCompanyAPI, UpdateCompanyAPI, DeleteCompanyAPI, GetCompanyAPI, GetCompaniesAPI, CompanyLookUpAPI } = require('./src/Controller/Company/CompanyController');

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

//#region Test API

app.get('/test', async (request, response) => {
  response.send('Api Works Good!');
});

//#endregion Test API

//#region Manufacture API

app.post('/AddManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddManufactureAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateManufactureAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteManufactureAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetManufacture', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetManufactureAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetManufactures', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetManufacturesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/ManufactureLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    ManufactureLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    ManufactureLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Manufacture API

//#region Area API

app.post('/AddArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddAreaAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateAreaAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteAreaAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetArea', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetAreaAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetAreas', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetAreasAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/AreaLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    AreaLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    AreaLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Area API

//#region Brand API

app.post('/AddBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddBrandAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateBrandAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteBrand', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteBrandAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetBrand', async (request, response) => {

  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetBrandAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetBrands', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetBrandsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/BrandLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    BrandLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    BrandLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Brand API

//#region City API

app.post('/AddCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCityAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCityAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCityAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCity', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetCityAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCities', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCiteisAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/CityLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    CityLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    CityLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion City API

//#region Country API

app.post('/AddCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCountryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCountryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCountryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCountry', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetCountryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCountries', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCountriesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/CountryLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    CountryLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    CountryLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Country API

//#region ProductCategory API

app.post('/AddProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductCategoryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductCategoryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductCategoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetProductCategory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetProductCategoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetProductCategories', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductCategoriesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/ProductCategoryLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    ProductCategoryLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    ProductCategoryLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion ProductCategory API

//#region Product API

app.post('/AddProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetProduct', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetProductAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetProducts', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/ProductLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    ProductLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    ProductLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Product API

//#region ProductFamily API

app.post('/AddProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductFamilyAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductFamilyAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductFamilyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetProductFamily', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetProductFamilyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetProductFamilies', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductFamiliesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/ProductFamilyLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    ProductFamilyLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    ProductFamilyLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion ProductFamily API

//#region State API

app.post('/AddState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddStateAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateStateAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteStateAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetState', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetStateAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetStates', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStatesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/StateLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    StateLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    StateLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion State API

//#region Store API

app.post('/AddStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddStoreAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateStoreAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteStoreAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetStore', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetStoreAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetStores', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStoresAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/StoreLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    StoreLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    StoreLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Store API

//#region User API

app.post('/AddUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddUserAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateUserAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteUserAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetUser', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetUserAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetUsers', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetUsersAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UserLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    UserLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    UserLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

app.post('/IsUserValid', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    IsUserVerifiedAPI(request.body.filter.user_name, request.body.filter.password, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/ChangePassword', async (request, response) => {
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

app.post('/AddCompany', async (request, response) => {  
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCompanyAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCompanyAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCompanyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCompany', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetCompanyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCompanies', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCompaniesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/CompanyLookUp', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    CompanyLookUpAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    CompanyLookUpAPI(null, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }
});

//#endregion Company API

//#region Delivery API

app.post('/AddDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddDeliveryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateDeliveryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteDeliveryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetDelivery', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetDeliveryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetDeliveries', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetDeliverysAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.post('/DeliveryLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     DeliveryLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     DeliveryLookUpAPI(null, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Delivery API

//#region Inventory API

app.post('/AddInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddInventoryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateInventoryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteInventoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetInventory', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetInventoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetInventories', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetInventorysAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//  app.post('/InventoryLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     InventoryLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     InventoryLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Inventory API

//#region Order API

app.post('/AddOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddOrderAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateOrderAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteOrderAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetOrder', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetOrderAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetOrders', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetOrdersAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//  app.post('/OrderLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     OrderLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     OrderLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Order API

//#region Payment API

app.post('/AddPayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddPaymentAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdatePayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdatePaymentAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeletePayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeletePaymentAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetPayment', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetPaymentAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetPayments', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetPaymentsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.post('/PaymentLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     PaymentLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     PaymentLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Payment API

//#region Scheme API

app.post('/AddScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddSchemeAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateSchemeAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteSchemeAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetScheme', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetSchemeAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetSchemes', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetSchemesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.post('/SchemeLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     SchemeLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     SchemeLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Scheme API

//#region Cart API

app.post('/AddCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCartAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCartAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCartAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCart', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetCartAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetCarts', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCartsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.post('/CartLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     CartLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     CartLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Cart API

//#region Favorite API

app.post('/AddFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddFavoriteAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/UpdateFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateFavoriteAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/DeleteFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteFavoriteAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetFavorite', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
    GetFavoriteAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

app.post('/GetFavorites', async (request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetFavoritesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// app.post('/FavoriteLookUp', async(request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.id != null && request.body.id !== undefined) {
//     FavoriteLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     FavoriteLookUpAPI(request.body.id, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }
// });

//#endregion Favorite API

//#endregion API's

//#region Common API

app.post('/SendEmail', async (request, response) => {
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

console.log('API Run at http://localhost:' + PORT + '/');
app.listen(PORT);