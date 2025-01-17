import { createSlice,configureStore } from "@reduxjs/toolkit";




let myslice=createSlice({
  name:"dataslicer",
  initialState:{
    login:false,
    arrays:[],
    objects:{},
    mobiledata:[
      {
        "brand": "Apple",
        "model": "iPhone 14 Pro",
        "processor": "A16 Bionic chip",
        "ram": "6 GB",
        "storage": "128 GB",
        "screenSize": "6.1 inches",
        "batteryCapacity": "3200 mAh",
        "camera": {
          "rear": "48 MP",
          "front": "12 MP"
        },
        "price": "999 USD",
        "os": "iOS 16",
        "releaseDate": "2022-09-16"
      },
      {
        "brand": "Apple",
        "model": "iPhone 13",
        "processor": "A15 Bionic chip",
        "ram": "4 GB",
        "storage": "128 GB",
        "screenSize": "6.1 inches",
        "batteryCapacity": "3240 mAh",
        "camera": {
          "rear": "12 MP",
          "front": "12 MP"
        },
        "price": "799 USD",
        "os": "iOS 15",
        "releaseDate": "2021-09-24"
      },
      {
        "brand": "Samsung",
        "model": "Galaxy S23 Ultra",
        "processor": "Snapdragon 8 Gen 2",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.8 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "200 MP",
          "front": "12 MP"
        },
        "price": "1199 USD",
        "os": "Android 13",
        "releaseDate": "2023-02-17"
      },
      {
        "brand": "Samsung",
        "model": "Galaxy Z Flip 5",
        "processor": "Snapdragon 8 Gen 2",
        "ram": "8 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "3700 mAh",
        "camera": {
          "rear": "12 MP",
          "front": "10 MP"
        },
        "price": "999 USD",
        "os": "Android 13",
        "releaseDate": "2023-07-26"
      },
      {
        "brand": "Google",
        "model": "Pixel 8 Pro",
        "processor": "Google Tensor G3",
        "ram": "12 GB",
        "storage": "128 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "10.5 MP"
        },
        "price": "899 USD",
        "os": "Android 14",
        "releaseDate": "2023-10-04"
      },
      {
        "brand": "Google",
        "model": "Pixel 7",
        "processor": "Google Tensor G2",
        "ram": "8 GB",
        "storage": "128 GB",
        "screenSize": "6.3 inches",
        "batteryCapacity": "4355 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "10.8 MP"
        },
        "price": "599 USD",
        "os": "Android 13",
        "releaseDate": "2022-10-06"
      },
      {
        "brand": "OnePlus",
        "model": "OnePlus 11",
        "processor": "Snapdragon 8 Gen 2",
        "ram": "16 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "16 MP"
        },
        "price": "749 USD",
        "os": "Android 13",
        "releaseDate": "2023-02-07"
      },
      {
        "brand": "OnePlus",
        "model": "OnePlus 10 Pro",
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "48 MP",
          "front": "32 MP"
        },
        "price": "899 USD",
        "os": "Android 12",
        "releaseDate": "2022-03-24"
      },
      {
        "brand": "Xiaomi",
        "model": "Xiaomi 13 Pro",
        "processor": "Snapdragon 8 Gen 2",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.73 inches",
        "batteryCapacity": "4820 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "32 MP"
        },
        "price": "1099 USD",
        "os": "MIUI 14",
        "releaseDate": "2023-02-26"
      },
      {
        "brand": "Xiaomi",
        "model": "Redmi Note 12 Pro",
        "processor": "Dimensity 1080",
        "ram": "6 GB",
        "storage": "128 GB",
        "screenSize": "6.67 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "16 MP"
        },
        "price": "229 USD",
        "os": "MIUI 14",
        "releaseDate": "2023-01-05"
      },
      {
        "brand": "Oppo",
        "model": "Oppo Find X5 Pro",
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "32 MP"
        },
        "price": "1199 USD",
        "os": "ColorOS 12",
        "releaseDate": "2022-03-24"
      },
      {
        "brand": "Oppo",
        "model": "Oppo Reno 8 Pro",
        "processor": "Dimensity 1300",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "4500 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "32 MP"
        },
        "price": "499 USD",
        "os": "ColorOS 12",
        "releaseDate": "2022-07-18"
      },
      {
        "brand": "Realme",
        "model": "Realme GT 2 Pro",
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "32 MP"
        },
        "price": "749 USD",
        "os": "Realme UI 3.0",
        "releaseDate": "2022-01-04"
      },
      {
        "brand": "Realme",
        "model": "Realme 9 Pro+",
        "processor": "Dimensity 920",
        "ram": "6 GB",
        "storage": "128 GB",
        "screenSize": "6.4 inches",
        "batteryCapacity": "4500 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "16 MP"
        },
        "price": "299 USD",
        "os": "Realme UI 3.0",
        "releaseDate": "2022-02-15"
      },
      {
        "brand": "Vivo",
        "model": "Vivo X90 Pro",
        "processor": "Dimensity 9200",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.78 inches",
        "batteryCapacity": "4870 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "32 MP"
        },
        "price": "1199 USD",
        "os": "Funtouch OS 13",
        "releaseDate": "2022-11-22"
      },
      {
        "brand": "Vivo",
        "model": "Vivo V25 Pro",
        "processor": "Dimensity 1300",
        "ram": "8 GB",
        "storage": "128 GB",
        "screenSize": "6.56 inches",
        "batteryCapacity": "4830 mAh",
        "camera": {
          "rear": "64 MP",
          "front": "32 MP"
        },
        "price": "389 USD",
        "os": "Funtouch OS 12",
        "releaseDate": "2022-08-17"
      },
      {
        "brand": "Asus",
        "model": "Asus ROG Phone 6 Pro",
        "processor": "Snapdragon 8+ Gen 1",
        "ram": "18 GB",
        "storage": "512 GB",
        "screenSize": "6.78 inches",
        "batteryCapacity": "6000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "12 MP"
        },
        "price": "1299 USD",
        "os": "Android 12",
        "releaseDate": "2022-07-05"
      },
      {
        "brand": "Asus",
        "model": "Asus ZenFone 9",
        "processor": "Snapdragon 8+ Gen 1",
        "ram": "16 GB",
        "storage": "256 GB",
        "screenSize": "5.9 inches",
        "batteryCapacity": "4300 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "12 MP"
        },
        "price": "699 USD",
        "os": "Android 12",
        "releaseDate": "2022-07-28"
      },
      {
        "brand": "Sony",
        "model": "Sony Xperia 1 IV",
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.5 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "12 MP",
          "front": "8 MP"
        },
        "price": "1399 USD",
        "os": "Android 12",
        "releaseDate": "2022-06-11"
      },
      {
        "brand": "Sony",
        "model": "Sony Xperia 10 IV",
        "processor": "Snapdragon 695",
        "ram": "6 GB",
        "storage": "128 GB",
        "screenSize": "6.0 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "48 MP",
          "front": "8 MP"
        },
        "price": "499 USD",
        "os": "Android 12",
        "releaseDate": "2022-05-11"
      },
      {
        "brand": "Motorola",
        "model": "Moto X40",
        "processor": "Snapdragon 8 Gen 2",
        "ram": "12 GB",
        "storage": "256 GB",
        "screenSize": "6.7 inches",
        "batteryCapacity": "4600 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "60 MP"
        },
        "price": "699 USD",
        "os": "Android 13",
        "releaseDate": "2023-01-04"
      },
      {
        "brand": "Motorola",
        "model": "Moto G Power (2023)",
        "processor": "Snapdragon 680",
        "ram": "4 GB",
        "storage": "64 GB",
        "screenSize": "6.5 inches",
        "batteryCapacity": "5000 mAh",
        "camera": {
          "rear": "50 MP",
          "front": "8 MP"
        },
        "price": "179 USD",
        "os": "Android 12",
        "releaseDate": "2023-01-09"
      }
    ]
    
  },
  reducers:{
    mylogin(store,action){
      store.login=true
    },
    myarrays(store,action){
      store.arrays=["jghj","knni"]
    },
    filtermobiledata(store,action){
console.log(action);
let newdata=action.payload
console.log(newdata);
store.mobiledata=newdata


    }
  }
})



export let myreduser=myslice.actions


let Store=configureStore(myslice)


export default Store