const { 
    //IsHasValue, 
    GetNewKey,
    //GetFileExtn, EnCode, DeCode, AddDetaultValues, GetDate 
= require('./Shared/Util');
const { PreFix, 
    //UserType, StoreType,   ActiveStatus
= require('./Shared/Constant/Enum');
//const { AddManufactureAPI = require('./Controller/Shared/ManufactureController');
const { AddBrandAPI, DeleteBrandAPI = require('./Controller/Shared/BrandController');
//const { AddProductCategoryAPI = require('./Controller/Shared/ProductCategoryController');
//const { AddProductFamilyAPI = require('./Controller/Shared/ProductFamilyController');
//const { ProductLookUpAPI,     AddProductAPI,     GetProductAPI = require('./Controller/Shared/ProductController');
//const { IsUserValidAPI, AddUserAPI = require('./Controller/Shared/UserController');
//const { AddStoreAPI,     UpdateStoreAPI, DeleteStoreAPI, GetStoresAPI,     GetStoreAPI, StoreLookUpAPI = require('./Controller/Shared/StoreController');
//const {     UploadFile,     DeleteFile = require('./Shared/FileUpload');

const company_id = GetNewKey(PreFix.Company);
const manufacture_id = GetNewKey(PreFix.Manufacture);
const brand_id = GetNewKey(PreFix.Brand);
//const product_category_id = GetNewKey(PreFix.ProductCategory);
//const product_family_id = GetNewKey(PreFix.product_family);
const store_id = GetNewKey(PreFix.Store);
// const product_id = GetNewKey(PreFix.Product);
// const created_by = GetNewKey(PreFix.User);
// const country_id = GetNewKey(PreFix.Country);
// const state_id = GetNewKey(PreFix.State);
// const city_id = GetNewKey(PreFix.City);
// const area_id = GetNewKey(PreFix.Area);


// let AddManufacture = () => {
//     const manufacture = {
//         manufacture_id: manufacture_id,
//         manufacture_name: 'ITC',
//         company_id: 'company_xyz',
//         store_id: 'store_xyz',
//         profile_image_url: 'image.png'
//     }

//     AddManufactureAPI(manufacture, (data, err) => {
//     });
// }

let AddBrand = () => {
    const Brand = {
        brand_id: brand_id,
        brand_name: 'SunFest',
        manufacture_id: manufacture_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddBrandAPI(Brand, (data, err) => {
    });
}

let DeleteBrand = (brand_id) => {
    DeleteBrandAPI(brand_id, (data, err) => {
    });
}

// let AddProductCategory = () => {
//     const ProductCategory = {
//         product_category_id: product_category_id,
//         product_category_name: 'Food',
//         manufacture_id: manufacture_id,
//         brand_id: brand_id,
//         company_id: company_id,
//         store_id: store_id,
//         profile_image_url: 'image.png'
//     }

//     AddProductCategoryAPI(ProductCategory, (data, err) => {
//     });
// }

// let AddProductFamily = () => {
//     const product_family = {
//         product_family_id: product_family_id,
//         product_family_name: 'Biscuit',
//         manufacture_id: manufacture_id,
//         brand_id: brand_id,
//         product_category_id: product_category_id,
//         company_id: company_id,
//         store_id: store_id,
//         profile_image_url: 'image.png'
//     }

//     AddProductFamilyAPI(product_family, (data, err) => {
//     });
// }

// let AddProduct = () => {
//     const Product = {
//         product_id: product_id,
//         product_name: 'NAVYCUT FT' ,
//         description: String,
//         product_family_id: product_family_id,
//         manufacture_id: manufacture_id,
//         brand_id: brand_id,
//         product_category_id: product_category_id,
//         company_id: company_id,
//         store_id: store_id,
//         profile_image_url: 'image.png'
//     }

//     AddProductAPI(Product, (data, err) => {
//     });
// }

// let GetProduct = (product_id) => {    
//     GetProductAPI(product_id, (data, err) => {
//         console.log(data);
//         console.log(err);
//     });
// }

// let ProductLookUp = (product_id) => {    
//     ProductLookUpAPI(product_id, (data, err) => {
//         console.log(data);
//         console.log(err);
//     });
// }

// let AddStore = () => {
//     const Store = {
//         store_id: store_id,
//         store_name: 'store_name',
//         store_type: StoreType.Wholesale,
//         billing_address: 'Address 1',
//         shipping_address: 'Address 2',
//         area_id: area_id,
//         area_name: 'Mettupatty',
//         city_id: city_id,
//         city_name: 'Salem',
//         state_id: state_id,
//         state_name: 'TamilNadu',
//         country_id: country_id,
//         country_name: 'India',
//         pincode : '636111',
//         latitude: '0000000',
//         longitude: '00000001',
//         email: 'mail@mail.com',
//         mobilenumber: '1234567890',
//         contactperson: 'Human',
//         tin: 'TIN123456789',
//         gst: 'GST1245679',
//         logo: 'image.png',
//         banner : 'image1.png',
//         business_days_hours : '[mon:{10:00-18:00}]',
//         delivery_days_hours : '[Mon,Tue,Wed,Thu,Fri]',
//         company_id: company_id
//     }

//     AddStoreAPI(Store, (data, err) => {

//     });
// }

// let StoreLookUp = () => {    
//     StoreLookUpAPI(product_id, (data, err) => {
//         console.log(data);
//         console.log(err);
//     });
// }

// let GetStore = (store_id) => {    
//     GetStoreAPI(store_id, (data, err) => {
//         console.log(data);
//         console.log(err);
//     });
// }

// let SaveUser = () => {
//     const User = {
//         user_id: created_by,
//         email_id: 'demo@example.com',
//         user_name: 'demo@example.com',
//         password: 'demo#123',
//         first_name: 'Demo',
//         last_name: 'Example',
//         user_type: UserType.SUPER_ADMIN,
//         company_id: company_id,
//         store_id: store_id,
//         profile_image_url: 'image.png'
//     }

//     AddUserAPI(User, (data, err) => {
//         console.log(data);
//         console.log(err);
//     });
// }

// let SignIn = () => {
//     IsUserValidAPI('demo@example.com', 'demo#123', (data, err) => {
//         console.log(data);
//         console.log(err);
//     })
// }

// let DeleteFileFromS3 = (filename) => {
//     DeleteFile(filename, PreFix.Product, (res) => {
//         console.log(res);        
//       });
// }

let RunUnitTest = () => {
    // AddManufacture();
    AddBrand();
    let _brand_id= 'BR-N2JhNzU0MzMtODBkNC00ZTlmLTlkOWMtMTAyNWI2ZWNlZDVh');
    DeleteBrand(_brand_id);
    // AddProductCategory();
    // AddProductFamily();
    // AddProduct();
    //let _product_id= 'PR#MGMwZDFkOWEtZGMxZC00NGUzLTg0M2UtNTZlODkyYmE5Mzdl');
    //GetProduct(_product_id);
    //ProductLookUp(null);    
    //ProductLookUp(_product_id);
    
    //let _store_id= 'ST#YzQwMWYzZGQtZTQ2OS00NjQ2LTg1ZDItZjhlZDA0YjQ4MDBm');
    //AddStore();
    //GetStore(_store_id);
    //StoreLookUp(null);    
    //StoreLookUp(_store_id);
    //SaveUser();
    //SignIn();
    //let _fileName = 'PR-NGExNjgyZTItN2RjNS00ZGUzLWFjNWQtOGFjMGJkM2MwNDg1.png');
    //DeleteFileFromS3(_fileName);

};

module.exports = { RunUnitTest };
