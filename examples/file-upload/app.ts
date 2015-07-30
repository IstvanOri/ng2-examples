import {Component, ControlGroup, FormBuilder, Injectable, NgFormModel, View} from 'angular2/angular2';
import {formDirectives, bootstrap} from 'angular2/angular2';
import {FileModel} from 'directive';
@Component({
    selector: 'my-app',
})
@View({
    templateUrl: 'app.html',
    directives: {FileModel, NgFormModel, formDirectives}
})
class App {
    builder: FormBuilder = new FormBuilder();
    model: ControlGroup;

    constructor() {
        this.model = this.builder.group({
            file: [""]
        });
    }
    
    getFormModel(): ControlGroup{
        return this.model;    
    }
    
    doSubmit(): void{
        /*
        This part uses XMLHttpRequest directly. I could not make work with Angular2's Http because I could not
        add form data to the request's body.
        */
        var formData = new FormData();
        formData.append('file', this.model.value["file"][0], this.model.value["file"][0].name);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'yourUploadURL', true);
        xhr.send(formData);
    }
}

bootstrap(App);