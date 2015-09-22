import {Component, View, Inject, NgFor} from 'angular2/angular2'
import {Http, Headers, Response, RequestOptions} from 'angular2/http';

@Component({
    selector: 'my-app',
})
@View({
    templateUrl: 'app.html',
    directives: [NgFor]
})
export class App {
    http: Http;
    posts: any;

    constructor(@Inject(Http) http: Http) {
        this.http = http;
    }
    
    doSubmit(): void{
        this.http.get("http://jsonplaceholder.typicode.com/posts").toRx().subscribe((posts: Response) => this.handlePosts(posts));
    }
    
    handlePosts(posts: Response): void{
        this.posts = posts.json();
    }
    
    getUserById(id: number){
        this.http.get("http://jsonplaceholder.typicode.com/users/"+id).toRx().subscribe((user: Response) => this.handleUser(user));
    }
    
    handleUser(user: Response): void{
        alert(user.json().name)
    }
}