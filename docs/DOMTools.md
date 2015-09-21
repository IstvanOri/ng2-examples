Angular2 DOM Tools
==================

_For version: 2.0.0-alpha.32_

This documentation tries to approach the tools and functions of Angular2 from the view side. 

Basic
-----

These tools don't need any extra directives to import and load.

#### Events

| HTML literal | HTML Type | Example |
| ------------ | --------- | ------- |
| (click) | attribute | `<button (click)="clicked()">'clicked()' method will run when click event occures on this button</button>`
| (^click) | attribute | `<button (^click)="clicked()">'clicked()' method will run when click event occures on this button or any child of this button</button>`

#### Conditionals

| HTML literal | HTML Type | Example |
| ------------ | --------- | ------- |
| [hidden] | attribute | `<button [hidden]="condition">this element is hidden if the given 'condition' is true</button>`

#### Data binding

| HTML literal | HTML Type | Example |
| ------------ | --------- | ------- |
| {{variable}} |     -     | `<div>{{variable}}</div><!-- The content of this div is the value of 'variable' -->`
| [inner-html] | attribute | `<div [inner-html]="variable">The value of the 'variable'</div>`
| [name] | attribute | `<div [name]="variable">The name attribute of this div is the value of 'variable'</div>`
| [attr.role] | attribute | `<div [attr.role]="variable">The role attribute of this div is the value of 'variable'</div>`

Directives
----------

The tools below need extra directives to import and load. The corresponding directive is in the Angular API column, and the Angular Module column shows witch compilation unit contains the directive's module.

#### Controlls

| HTML literal | HTML Type | Angular API | Angular Module | Example |
| ------------ | --------- | ----------- | -------------- | ------- |
| *ng-if | attribute | NgIf | angular2/angular2 | `<div *ng-if="isVisible()">Shown only if 'isVisible()' returns true</div>`
| *ng-for | attribute | NgFor | angular2/angular2 | `<li *ng-for="item of items">Creates a <li> element for each 'item' in the list of 'items'></li>`

#### Data binding

| HTML literal | HTML Type | Angular API | Angular Module | Example |
| ------------ | --------- | ----------- | -------------- | ------- |
| [ng-form-model] | attribute | NgFormModel | angular2/angular2 | `<div [ng-form-model]="formModel">In this div the ControlGroup instances stored in formModel variable can be accessed</div>`
| ng-control | attribute | NgFormControl | angular2/angular2 | `<div [ng-form-model]="formModel"><input type="text" ng-control="controlName"><!--Input binds to controlName control from the formModel ControlGroup--></div>`
| [inner-html] | attribute | | | `<div [inner-html]="variable">The value of the variable</div>`

#### Routing

The routing navigates within an Angular2 app. [Read more&raquo;](https://angular.io/docs/js/latest/api/router/)

| HTML literal | HTML Type | Angular API | Angular Module | Example |
| ------------ | --------- | ----------- | -------------- | ------- |
| [router-link] | attribute | RouterLink | angular2/router | `<div [router-link]="['/target']">this element navigates to the given target when clicked</div>`
| router-outlet | element | RouterOutlet | angular2/router | `<router-outlet></router-outlet><!--The registered router-component will be generated here-->`


