Angular2 DOM Tools
==================

_For version: 2.0.0-alpha.32_

Directives
----------

#### Controlls

| HTML literal | HTML Type | Angular API | Angular Module | Example |
| ------------ | --------- | ----------- | -------------- | ------- |
| *ng-if | attribute | NgIf | angular2/angular2 | `<div *ng-if="isVisible()">Shown only if isVisible() returns true</div>`
| *ng-for | attribute | NgFor | angular2/angular2 | `<li *ng-for="item of items">Creates a <li element for each item in the list of items></li>`

#### Data binding

| HTML literal | HTML Type | Angular API | Angular Module | Example |
| ------------ | --------- | ----------- | -------------- | ------- |
| [ng-form-model] | attribute | NgFormModel | angular2/angular2 | `<div [ng-form-model]="formModel">In this div the ControlGroup instances stored in formModel variable can be accessed</div>`
| ng-control | attribute | NgFormControl | angular2/angular2 | `<div [ng-form-model]="formModel"><input type="text" ng-control="controlName"><!--Input binds to controlName control from the formModel ControlGroup--></div>`

#### Events

| HTML literal | HTML Type | Example |
| ------------ | --------- | ------- |
| (click) | attribute | `<button (click)="clicked()">clicked() method will run on clicking</button>`
