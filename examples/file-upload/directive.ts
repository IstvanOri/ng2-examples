import {Directive, ElementRef, NgFormModel, Inject} from 'angular2/angular2';

@Directive({
    selector: '[file-control]',
    properties: [
        'control: file-control'
    ],
    host: {
        '(change)': 'onChange($event)'
    }
})
export class FileModel {
    control: string;
    model: NgFormModel;
    elementRef: ElementRef;
    
    constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(NgFormModel) model: NgFormModel) {
        this.model = model;
        this.elementRef = elementRef;
    }

    onChange(event: Event) {
        if(this.elementRef.nativeElement.files.length > 0){
            this.model.control.controls[this.control].updateValue(this.elementRef.nativeElement.files);
        }
    }
    
}