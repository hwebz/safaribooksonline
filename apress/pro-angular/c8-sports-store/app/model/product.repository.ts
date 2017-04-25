import {Injectable} from '@angular/core'
import {Product} from './product.model'
import {StaticDataSource} from './static.datasource'

@Injectable()
export class ProductRepository {
    private products: Product[] = []
    private categories: string[] = []

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((value, index, array) => array.indexOf(value) == index).sort();
                // Cause indexOf(value) just return first element of result array
                // so that will distinct all the duplicated values
                // E.g: a = 'abcdeabcde'; a.indexOf('a') = 0
                // => a.indexOf('a') == 0 && a.indexOf('a') != 5
        })
    }

    getProducts(category: string = null):Product[] {
        return this.products.filter(p => category == null || category == p.category)
    }

    getProduct(id: number):Product {
        return this.products.find(p => p.id == id)
    }

    getCategories():string[] {
        return this.categories;
    }
}