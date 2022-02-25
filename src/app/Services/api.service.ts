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

createOrder(name, email, items) {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('items', items);

    this.http.post(this.url + '/create_order', formData).subscribe(r => {
        const result = r['create_order_result'];
    });
}
}
