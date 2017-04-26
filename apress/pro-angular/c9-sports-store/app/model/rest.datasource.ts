import { Injectable } from '@angular/core'
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Product } from './product.model'
import { Cart } from './cart.model'
import { Order } from './order.model'
import 'rxjs/add/operator/map'
const PROTOCOL = 'http'
const PORT = 3500

@Injectable()
export class RestDataSource {
    baseUrl: string
    auth_token: string

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
        this.auth_token = 'INIT'
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json()
            this.auth_token = r.success ? r.token : null
            console.log(this)
            return r.success
        })
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products")
    }

    saveProduct(product: Product): Observable<Product> {
        
        return this.sendRequest(RequestMethod.Post, "products", product, true)
    }

    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Put, `products/${product.id}`, product, true)
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest(RequestMethod.Delete, `products/${id}`, null, true)
    }

    getOrders(): Observable<Order[]> {
        return this.sendRequest(RequestMethod.Get, "orders", null, true)
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, "orders", order)
    }

    updateOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, `orders/${order.id}`, order, true)
    }

    deleteOrder(id: number): Observable<Order> {
        return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null, true)
    }
    
    private sendRequest(verb: RequestMethod, url: string, 
            body?: Product | Order, 
            auth: boolean = false): Observable<Product | Product[] | Order | Order[]> {
        let headers = new Headers();
        headers.append("authorization", `Bearer<${this.auth_token}>`)
        let options = undefined

        if (auth && this.auth_token != null) {
            options = new RequestOptions({ headers: headers })
        }

        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body,
            headers
        })
        return this.http.request(request).map(response => response.json())
    }
}