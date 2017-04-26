/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/admin/orderTable.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/order.repository';
import * as import9 from '../../node_modules/@angular/forms/src/directives/checkbox_value_accessor.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/forms/src/directives/checkbox_value_accessor';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
import * as import23 from '@angular/common/src/directives/ng_if';
import * as import24 from '@angular/common/src/directives/ng_for';
export var Wrapper_OrderTableComponent = (function () {
    function Wrapper_OrderTableComponent(p0) {
        this._changed = false;
        this.context = new import0.OrderTableComponent(p0);
    }
    Wrapper_OrderTableComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_OrderTableComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_OrderTableComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_OrderTableComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_OrderTableComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_OrderTableComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_OrderTableComponent;
}());
var renderType_OrderTableComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_OrderTableComponent_Host0 = (function (_super) {
    __extends(View_OrderTableComponent_Host0, _super);
    function View_OrderTableComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_OrderTableComponent_Host0, renderType_OrderTableComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_OrderTableComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_OrderTableComponent0(this.viewUtils, this, 0, this._el_0);
        this._OrderTableComponent_0_3 = new Wrapper_OrderTableComponent(this.injectorGet(import8.OrderRepository, this.parentIndex));
        this.compView_0.create(this._OrderTableComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._OrderTableComponent_0_3.context);
    };
    View_OrderTableComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.OrderTableComponent) && (0 === requestNodeIndex))) {
            return this._OrderTableComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_OrderTableComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._OrderTableComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_OrderTableComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_OrderTableComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_OrderTableComponent_Host0;
}(import1.AppView));
export var OrderTableComponentNgFactory = new import7.ComponentFactory('ng-component', View_OrderTableComponent_Host0, import0.OrderTableComponent);
var styles_OrderTableComponent = [];
var renderType_OrderTableComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_OrderTableComponent, {});
export var View_OrderTableComponent0 = (function (_super) {
    __extends(View_OrderTableComponent0, _super);
    function View_OrderTableComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_OrderTableComponent0, renderType_OrderTableComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_OrderTableComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'form-check'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'label', new import3.InlineArray2(2, 'class', 'form-check-label'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'input', new import3.InlineArray4(4, 'class', 'form-check-input', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_4_3 = new import9.Wrapper_CheckboxControlValueAccessor(this.renderer, new import15.ElementRef(this._el_4));
        this._NG_VALUE_ACCESSOR_4_4 = [this._CheckboxControlValueAccessor_4_3.context];
        this._NgModel_4_5 = new import10.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_4_4);
        this._NgControl_4_6 = this._NgModel_4_5.context;
        this._NgControlStatus_4_7 = new import11.Wrapper_NgControlStatus(this._NgControl_4_6);
        this._text_5 = this.renderer.createText(this._el_2, '        \n        Display Shipped Orders\n    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'class', 'table table-sm'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_12, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Name', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_12, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Zip', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_12, 'th', new import3.InlineArray2(2, 'colspan', '2'), null);
        this._text_18 = this.renderer.createText(this._el_17, 'Cart', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_12, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_8, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._vc_24 = new import12.ViewContainer(24, 22, this, this._anchor_24);
        this._TemplateRef_24_5 = new import16.TemplateRef_(this, 24, this._anchor_24);
        this._NgIf_24_6 = new import13.Wrapper_NgIf(this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_22, '\n        ', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._vc_26 = new import12.ViewContainer(26, 22, this, this._anchor_26);
        this._TemplateRef_26_5 = new import16.TemplateRef_(this, 26, this._anchor_26);
        this._NgFor_26_6 = new import14.Wrapper_NgFor(this._vc_26.vcRef, this._TemplateRef_26_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_27 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_8, '\n', null);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_4));
        this._NgModel_4_5.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._text_28,
            this._text_29
        ]), [disposable_0]);
        return null;
    };
    View_OrderTableComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.CheckboxControlValueAccessor) && (4 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_4_3.context;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (4 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_4_4;
        }
        if (((token === import20.NgModel) && (4 === requestNodeIndex))) {
            return this._NgModel_4_5.context;
        }
        if (((token === import21.NgControl) && (4 === requestNodeIndex))) {
            return this._NgControl_4_6;
        }
        if (((token === import22.NgControlStatus) && (4 === requestNodeIndex))) {
            return this._NgControlStatus_4_7.context;
        }
        if (((token === import16.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import23.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === import16.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import24.NgFor) && (26 === requestNodeIndex))) {
            return this._NgFor_26_6.context;
        }
        return notFoundResult;
    };
    View_OrderTableComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._CheckboxControlValueAccessor_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_4_1_0 = this.context.includeShipped;
        this._NgModel_4_5.check_model(currVal_4_1_0, throwOnChange, false);
        this._NgModel_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        this._NgControlStatus_4_7.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_24_0_0 = (this.context.getOrders().length == 0);
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        var currVal_26_0_0 = this.context.getOrders();
        this._NgFor_26_6.check_ngForOf(currVal_26_0_0, throwOnChange, false);
        this._NgFor_26_6.ngDoCheck(this, this._anchor_26, throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_4_7.checkHost(this, this, this._el_4, throwOnChange);
    };
    View_OrderTableComponent0.prototype.destroyInternal = function () {
        this._vc_24.destroyNestedViews();
        this._vc_26.destroyNestedViews();
        this._NgModel_4_5.ngOnDestroy();
    };
    View_OrderTableComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 24)) {
            return new View_OrderTableComponent1(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        if ((nodeIndex == 26)) {
            return new View_OrderTableComponent2(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        return null;
    };
    View_OrderTableComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.includeShipped = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_OrderTableComponent0;
}(import1.AppView));
var View_OrderTableComponent1 = (function (_super) {
    __extends(View_OrderTableComponent1, _super);
    function View_OrderTableComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_OrderTableComponent1, renderType_OrderTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_OrderTableComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'colspan', '5'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'There are no orders', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_OrderTableComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_OrderTableComponent1;
}(import1.AppView));
var View_OrderTableComponent2 = (function (_super) {
    __extends(View_OrderTableComponent2, _super);
    function View_OrderTableComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_OrderTableComponent2, renderType_OrderTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_28 = import6.UNINITIALIZED;
        this._expr_29 = import6.UNINITIALIZED;
    }
    View_OrderTableComponent2.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n            ', null);
        this._el_1 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_1, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'Product', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_1, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Quantity', null);
        this._text_12 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_1, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'button', new import3.InlineArray2(2, 'class', 'btn btn-warning'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                        Ship\n                    ', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_13, 'button', new import3.InlineArray2(2, 'class', 'btn btn-danger'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n                        Delete\n                    ', null);
        this._text_20 = this.renderer.createText(this._el_13, '\n                ', null);
        this._text_21 = this.renderer.createText(this._el_1, '\n            ', null);
        this._text_22 = this.renderer.createText(null, '\n            ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(null, null);
        this._vc_23 = new import12.ViewContainer(23, null, this, this._anchor_23);
        this._TemplateRef_23_5 = new import16.TemplateRef_(this, 23, this._anchor_23);
        this._NgFor_23_6 = new import14.Wrapper_NgFor(this._vc_23.vcRef, this._TemplateRef_23_5, this.parentView.parentView.injectorGet(import17.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_24 = this.renderer.createText(null, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_15));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        this.init(this._text_24, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._anchor_23,
            this._text_24
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_OrderTableComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import24.NgFor) && (23 === requestNodeIndex))) {
            return this._NgFor_23_6.context;
        }
        return notFoundResult;
    };
    View_OrderTableComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_23_0_0 = this.context.$implicit.cart.lines;
        this._NgFor_23_6.check_ngForOf(currVal_23_0_0, throwOnChange, false);
        this._NgFor_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        var currVal_28 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setText(this._text_4, currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = import3.inlineInterpolate(1, '', this.context.$implicit.zip, '');
        if (import3.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setText(this._text_6, currVal_29);
            this._expr_29 = currVal_29;
        }
    };
    View_OrderTableComponent2.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
    };
    View_OrderTableComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._text_0, ctx);
        cb(this._el_1, ctx);
        cb(this._text_22, ctx);
        cb(this._vc_23.nativeElement, ctx);
        this._vc_23.visitNestedViewRootNodes(cb, ctx);
        cb(this._text_24, ctx);
    };
    View_OrderTableComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_OrderTableComponent3(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_OrderTableComponent2.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.markShipped(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_OrderTableComponent2.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.delete(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_OrderTableComponent2;
}(import1.AppView));
var View_OrderTableComponent3 = (function (_super) {
    __extends(View_OrderTableComponent3, _super);
    function View_OrderTableComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_OrderTableComponent3, renderType_OrderTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_10 = import6.UNINITIALIZED;
        this._expr_11 = import6.UNINITIALIZED;
    }
    View_OrderTableComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'colspan', '2'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ]), null);
        return null;
    };
    View_OrderTableComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10 = import3.inlineInterpolate(1, '', this.context.$implicit.product.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_5, currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = import3.inlineInterpolate(1, '', this.context.$implicit.quantity, '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_8, currVal_11);
            this._expr_11 = currVal_11;
        }
    };
    View_OrderTableComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_OrderTableComponent3;
}(import1.AppView));
