import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { appSettings } from '../appsettings';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class QuotationsService {

  public controllerName: string = "Quotation";
    public commonControllerName: string = "Common";

    constructor(
        public __http: HttpClient,
        private __appSettings: appSettings) { }


    public getData(query: any): Observable<any> {
        if (query) {
            return this.__http.post(this.__appSettings.API_Config + this.controllerName + '/getData', query);
        }
    }

    public getPartyInfo(query: any): Observable<any> {
        if (query) {
            return this.__http.post(this.__appSettings.API_Config + this.commonControllerName + '/getPartyInfo', query);
        }
    }

    public getBankInfo(query: any): Observable<any> {
        if (query) {
            return this.__http.post(this.__appSettings.API_Config + this.commonControllerName + '/getBankInfo', query);
        }
    }

    public saveQuotation(data: any): Observable<any> {
        if (data) {
            return this.__http.post(this.__appSettings.API_Config + this.controllerName + '/saveQuotation', data);
        }
    }


    public getItemInfo(query: any): Observable<any> {
        if (query) {
            return this.__http.post(this.__appSettings.API_Config + this.commonControllerName + '/getItemInfo', query);
        }
    }

    public getQuotationForEdit(query: any): Observable<any> {
        if (query) {
            return this.__http.post(this.__appSettings.API_Config + this.controllerName + '/getQuotationForEdit', query);
        }
    }

    public deleteData(item: any) {
        if (item) {
            return this.__http.delete(this.__appSettings.API_Config + this.controllerName + '/deleteData?Code=' + item.Code, item);
        }
    }

    public deleteItem(item: any) {
        if (item) {
            return this.__http.delete(this.__appSettings.API_Config + this.controllerName + '/deleteItem?Code=' + item.Code, item);
        }
    }

    public GetInvoiceReport(item: any) {
        if (item) {
            return this.__http.post(this.__appSettings.API_Config + this.controllerName + '/GetInvoiceReport', item);
        }
    }



}
