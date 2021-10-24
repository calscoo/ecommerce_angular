import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';

// import {Shape} from '../enums/shape';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public url = '';

    constructor(private http: HttpClient) {
        this.http.get('./assets/config.json').subscribe(r => {
            this.url = r['local_flask_url'];
        });
    }

    createPrintVariant(size, price, shape, material) {
        const formData = new FormData();

        formData.append('size', size);
        formData.append('price', price);
        formData.append('shape', shape);
        formData.append('material', material);

        this.http.post(this.url + '/create_print_variant', formData).subscribe(r => {
            const result = r['create_print_variant_result'];
        });
    }

    updatePrintVariant(id, size, price, shape, material) {
        const formData = new FormData();

        formData.append('id', id);
        formData.append('size', size);
        formData.append('price', price);
        formData.append('shape', shape);
        formData.append('material', material);

        this.http.post(this.url + '/update_print_variant', formData).subscribe(r => {
            const result = r['update_print_variant_result'];
        });
    }

    deletePrintVariant(id) {
        const formData = new FormData();

        formData.append('id', id);
        this.http.post(this.url + '/delete_print_variant', formData).subscribe(r => {
            const result = r['delete_print_variant_result'];
        });
    }


    getAllPrintVariants() {
        this.http.get(this.url + '/get_all_print_variants').subscribe(r => {
            const result = r['get_all_print_variants_result'];
        });
    }

    createPrint(name, description, shape, image) {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('shape', shape);
        formData.append('image', image);

        this.http.post(this.url + '/create_print', formData).subscribe(r => {
            const result = r['create_print_result'];
        });
    }

    updatePrint(id, name, description, shape, fullres_location, optres_location) {
        const formData = new FormData();

        formData.append('id', id);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('shape', shape);
        formData.append('fullres_location', fullres_location);
        formData.append('optres_location', optres_location);

        this.http.post(this.url + '/update_print', formData).subscribe(r => {
            const result = r['update_print_result'];
        });
    }

    deletePrint(id) {
        const formData = new FormData();

        formData.append('id', id);
        this.http.post(this.url + '/delete_print', formData).subscribe(r => {
            const result = r['delete_print_result'];
        });
    }

    // clearSelected() {
    //   Prints.forEach( print => {
    //     print.styles.forEach( style => {
    //       style.variant.forEach( variant => {
    //         variant.selected = false;
    //       });
    //     });
    //   });
    // }

    // getAllPrints() {
    //   const subject = new Subject<object>();
    //   this.http.get(this.url + '/get_all_prints').subscribe(r => {
    //     const pre_prints = r['get_all_prints_result'];
    //     let post_prints = [];
    //     pre_prints.forEach( pre_print => {
    //       let post_print = pre_print;
    //       const shape_num = pre_print['shape'];
    //       switch (shape_num) {
    //         case 0: {
    //           console.log(post_print['shape']);
    //           post_print['shape'] = Shape.Standard;
    //           console.log(post_print['shape']);
    //           //TODO: Shape enum is still numbers???
    //           break;
    //         }
    //         case 1: {
    //           post_print['shape'] = Shape.Wide;
    //           break;
    //         }
    //         case 2: {
    //           post_print['shape'] = Shape.Square;
    //           break;
    //         }
    //         default: {
    //           post_print['shape'] = Shape.Standard;
    //           break;
    //         }
    //       }
    //       // post_print
    //       post_prints.push(post_print);
    //     });
    //     subject.next(post_prints);
    //   });
    //   return subject.asObservable();
    // }

    createOrder(name, email, items) {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('items', items);

        this.http.post(this.url + '/create_order', formData).subscribe(r => {
            const result = r['create_order_result'];
        });
    }

    updateOrder(id, name, email, status, total, datetime, items) {
        const formData = new FormData();

        formData.append('id', id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('status', status);
        formData.append('total', total);
        formData.append('datetime', datetime);
        formData.append('items', items);

        this.http.post(this.url + '/update_order', formData).subscribe(r => {
            const result = r['update_order_result'];
        });
    }

    deleteOrder(id) {
        const formData = new FormData();

        formData.append('id', id);
        this.http.post(this.url + '/delete_order', formData).subscribe(r => {
            const result = r['delete_order_result'];
        });
    }

    getAllOrders() {
        this.http.get(this.url + '/get_all_orders').subscribe(r => {
            const result = r['get_all_orders_result'];
        });
    }
}
