import {Injectable} from '@angular/core'
import {Product} from './product.model'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 1", "Product 1 (Category 1)", 100),
        new Product(3, "Product 3", "Category 1", "Product 1 (Category 1)", 100),
        new Product(4, "Product 4", "Category 1", "Product 1 (Category 1)", 100),
        new Product(5, "Product 5", "Category 1", "Product 1 (Category 1)", 100),
        new Product(6, "Product 6", "Category 2", "Product 1 (Category 2)", 100),
        new Product(7, "Product 7", "Category 2", "Product 1 (Category 2)", 100),
        new Product(8, "Product 8", "Category 2", "Product 1 (Category 2)", 100),
        new Product(9, "Product 9", "Category 2", "Product 1 (Category 2)", 100),
        new Product(10, "Product 10", "Category 2", "Product 1 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 1 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 1 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 1 (Category 3)", 100),
        new Product(14, "Product 14", "Category 3", "Product 1 (Category 3)", 100),
        new Product(15, "Product 15", "Category 3", "Product 1 (Category 3)", 100)
    ]
    private orders: Order[] = []

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products])
    }
    
    saveProduct(product: Product): Observable<Product> {
        return Observable.from([product])
    }

    updateProduct(product: Product): Observable<Product> {
        return Observable.from([product])
    }

    deleteProduct(id: number): Observable<Product> {
        return Observable.from([this.products.find(p => p.id == id)])
    }

    getOrders(): Observable<Order[]> {
        return Observable.from([this.orders])
    }

    saveOrder(order: Order):Observable<Order> {
        // console.log(JSON.stringify(order))
        return Observable.from([order])
    }

    updateOrder(order: Order): Observable<Order> {
        return Observable.from([order])
    }

    deleteOrder(id: number): Observable<Order> {
        return Observable.from([this.orders.find(o => o.id == id)])
    }
    
}