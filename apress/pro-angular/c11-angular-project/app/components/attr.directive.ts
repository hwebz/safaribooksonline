import { Directive, ElementRef, Attribute, Input, SimpleChange } from "@angular/core";

@Directive({
    selector: "[pa-attr]"
})

export class PaAttrDirective {
    /* constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {
         element.nativeElement.classList.add(bgClass || 'bg-success')
    } */
    /* constructor(element: ElementRef, @Attribute("pa-attr") bgClass: string) {
        element.nativeElement.classList.add(bgClass || 'bg-success')
    } */
    
    @Input("pa-attr")
    bgClass: string;

    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success")
    }

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        let change = changes["bgClass"]
        let classList = this.element.nativeElement.classList

        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue)
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue)
        }
    }
}