import {EventEmitter, Injectable} from '@angular/core';
import {product} from "../models/product";
import {match} from "minimatch";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
    private products: product[] = [];

    constructor(private fireStoreService: AngularFirestore) {

        let imagesS = ['/assets/images/product1.jpg', '/assets/images/product2.jpg',
            '/assets/images/product3.jpg', '/assets/images/product4.jpg', '/assets/images/product5.jpg',
            '/assets/images/product6.jpg', '/assets/images/product7.jpg', '/assets/images/product8.jpg',
            '/assets/images/product9.jpg', '/assets/images/product10.jpg', '/assets/images/product11.jpg',
            '/assets/images/product12.jpg', '/assets/images/product13.jpg', '/assets/images/product14.jpg',
            '/assets/images/product15.jpg', '/assets/images/product16.jpg'];
        let coversS = ['/assets/images/covers/Blue0.jpg', '/assets/images/covers/des0.jpg',
            '/assets/images/covers/for.jpg', '/assets/images/covers/images.jpeg',
            '/assets/images/covers/iPXP-4117Lch.jpg', '/assets/images/covers/index.jpeg',
            '/assets/images/covers/ist.jpg', '/assets/images/covers/mob.jpg',
            '/assets/images/covers/Queen3.jpg', '/assets/images/covers/Oppo_Realme.jpg'];
        let cablesS = ['/assets/images/cables/51dePaj8ZdL._SY355_.jpg', '/assets/images/cables/1407840319_1074899.jpg',
            '/assets/images/cables/HTC-Type-C-Cable-To-USB-Un-Packet-1.jpg', '/assets/images/cables/apple-dev.jpg',
            '/assets/images/cables/imagehus.jpeg', '/assets/images/cables/images.jpeg',
            '/assets/images/cables/indexs.jpeg', '/assets/images/cables/index.jpeg',
            '/assets/images/cables/MaxGear-Led-USB-Cable-Flash70.jpg', '/assets/images/cables/PZOZ-usb-cabl.jpg'];
        let headphonesS = ['/assets/images/headphones/2-100.jpg', '/assets/images/headphones/51de.jpg',
            '/assets/images/headphones/428p.jpg', '/assests/images/headphones/61xeIT6UHrL._SX425_.jpg',
            '/assets/images/headphones/15415238.jpg', '/assets/images/headphones/images.png',
            '/assets/images/headphones/poer.jpg', '/assets/images/headphones/MAIN-PINK.jpg'];
        let accessoriesS = ['/assets/images/accessories/arm-207.jpg', '/assets/images/accessories/images.jpeg',
            '/assets/images/accessories/weg.jpeg', '/assets/images/accessories/imagjvcs.jpeg',
            '/assets/images/accessories/O6_0x.jpg', '/assets/images/accessories/imbgfes.jpeg',
            '/assets/images/accessories/karbal.jpg']
        let catS = ["iphone", "samsung", "htc"];

        for (let i = 0; i < 20; i++) {
            this.products.push(new product('product-' + (i + 1), 'product' + (i + 1),
                imagesS[Math.floor((imagesS.length) * Math.random())],
                Math.ceil(Math.random() * 500), Math.ceil(Math.random() * 50),
                Math.ceil(Math.random() * 200), Math.random() >= 0.5,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque eveniet natus tempore? Debitis fuga fugit maxime nostrum nulla',
                catS[Math.ceil(catS.length * Math.random())], "phone"
            ));
        }

        for (let i = 0; i < 20; i++) {
            this.products.push(new product('cover-' + (i + 1), 'cover' + (i + 1),
                coversS[Math.ceil((coversS.length) * Math.random())],
                Math.floor(Math.random() * 100), Math.ceil(Math.random() * 20),
                Math.ceil(Math.random() * 200), Math.random() >= 0.5,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque eveniet natus tempore? Debitis fuga fugit maxime nostrum nulla',
                catS[Math.floor(catS.length * Math.random())], "cover"
            ));
        }


        for (let i = 0; i < 20; i++) {
            this.products.push(new product('cable-' + (i + 1), 'cable' + (i + 1),
                cablesS[Math.floor((cablesS.length) * Math.random())],
                Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 20),
                Math.ceil(Math.random() * 200), Math.random() >= 0.5,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque eveniet natus tempore? Debitis fuga fugit maxime nostrum nulla',
                catS[Math.ceil(catS.length * Math.random())], "cable"));
        }

        for (let i = 0; i < 20; i++) {
            this.products.push(new product('headphone-' + (i + 1), 'headphone' + (i + 1),
                headphonesS[Math.floor((headphonesS.length) * Math.random())],
                Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 20),
                Math.ceil(Math.random() * 200), Math.random() >= 0.5,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque eveniet natus tempore? Debitis fuga fugit maxime nostrum nulla',
                catS[Math.ceil(catS.length * Math.random())], "headphone"
            ));
        }

        for (let i = 0; i < 15; i++) {
            this.products.push(new product('acc-' + (i + 1), 'acc' + (i + 1),
                accessoriesS[Math.floor((accessoriesS.length) * Math.random())],
                Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 20),
                Math.ceil(Math.random() * 200), Math.random() >= 0.5,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque eveniet natus tempore? Debitis fuga fugit maxime nostrum nulla',
                catS[Math.ceil(catS.length * Math.random())], "acc"
            ));
        }


    }

    getAllProducts(): product[] {

        return this.products;
    }

    getNewProduct(): product[] {
        const newProducts: product[] = [];
        for (let product of this.products) {
            if (product.isNew === true) {
                // return product;
                newProducts.push(product);
            }
        }
        return newProducts;
    }


    getProductById(productId: string): product{
        for (let product of this.products) {
            if (product.id == productId) {
                return product;
            }
        }
        return null;
    }

}
