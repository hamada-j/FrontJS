import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./model/product";
import { Customer } from "./model/customer";
import { Category } from "./model/category";
import { Supplier } from "./model/supplier";
import { Order } from "./model/order";
import { Departament } from "./model/departament";
import { Region } from "./model/region";
import { Territories } from "./model/territories";
import { Employee } from "./model/employee";

@Injectable({
  providedIn: "root"
})
export class RestApiService {
  // Url declaration base
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    // Initialitation Url
    this.baseUrl = "http://localhost:3000/api/";
  }

  registro(formValues) {
    return this.httpClient
      .post(`${this.baseUrl}users/register`, formValues)
      .toPromise();
  }

  login(formValues) {
    return this.httpClient
      .post(`${this.baseUrl}users/login`, formValues)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ////////////////// PRODUCT ////////////////////////////////
  ///////////////////////////////////////////////////////////
  // Metodos
  getAll(): Promise<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}product`).toPromise();
  }

  ////////////// Metodos con parametros
  getById(pProductId): Promise<Product> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}products/${pProductId}`)
      .toPromise();
  }

  editProduct(formValues): Promise<Product> {
    return this.httpClient.patch<Product>(this.baseUrl, formValues).toPromise();
  }

  ///////////////////////////////////////////////////////////
  //////////////////// EMPLOYEE /////////////////////////////
  ///////////////////////////////////////////////////////////

  ////////////// Login From Mongo /////////

  // login(values): Promise<any> {
  //   return this.httpClient
  //     .post(`${this.baseUrl}client/login`, values)
  //     .toPromise();
  // }
  getAllEmployee(): Promise<Employee[]> {
    return this.httpClient
      .get<Employee[]>(`${this.baseUrl}employee`)
      .toPromise();
  }

  getEmployeeById(pClientId): Promise<Employee> {
    return this.httpClient
      .get<Employee>(`${this.baseUrl}employee/${pClientId}`)
      .toPromise();
  }
  editEmployeeById(pClientId): Promise<Employee> {
    return this.httpClient
      .patch<Employee>(`${this.baseUrl}employee/${pClientId}`, {})
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// CLIENT //////////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllClients(): Promise<Customer[]> {
    return this.httpClient
      .get<Customer[]>(`${this.baseUrl}customer`)
      .toPromise();
  }

  getClientById(pClientId): Promise<Customer> {
    return this.httpClient
      .get<Customer>(`${this.baseUrl}customer/${pClientId}`)
      .toPromise();
  }

  newClientById(pClientId): Promise<Customer> {
    return this.httpClient
      .post<Customer>(`${this.baseUrl}customer/${pClientId}`, {})
      .toPromise();
  }

  editClientById(pClientId): Promise<Customer> {
    return this.httpClient
      .patch<Customer>(`${this.baseUrl}customer/${pClientId}`, {})
      .toPromise();
  }

  deleteClient(clientId): Promise<Customer> {
    console.log(clientId);
    return this.httpClient
      .delete<Customer>(`${this.baseUrl}customer/${clientId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// Supplier ////////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllSupplier(): Promise<Supplier[]> {
    return this.httpClient
      .get<Supplier[]>(`${this.baseUrl}supplier`)
      .toPromise();
  }

  getSupplierById(pSupplierId): Promise<Supplier> {
    return this.httpClient
      .get<Supplier>(`${this.baseUrl}supplier/${pSupplierId}`)
      .toPromise();
  }

  newSupplierById(pSupplierId): Promise<Supplier> {
    return this.httpClient
      .post<Supplier>(`${this.baseUrl}supplier/${pSupplierId}`, {})
      .toPromise();
  }

  editSupplierById(pSupplierId): Promise<Supplier> {
    return this.httpClient
      .patch<Supplier>(`${this.baseUrl}supplier/${pSupplierId}`, {})
      .toPromise();
  }

  deleteSupplierId(supplierId): Promise<Supplier> {
    return this.httpClient
      .delete<Supplier>(`${this.baseUrl}supplier/${supplierId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// ORDER ///////////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllOrder(): Promise<Order[]> {
    return this.httpClient.get<Order[]>(`${this.baseUrl}order`).toPromise();
  }

  getOrderById(pClientId): Promise<Order> {
    return this.httpClient
      .get<Order>(`${this.baseUrl}order/${pClientId}`)
      .toPromise();
  }

  newOrderById(pClientId): Promise<Order> {
    return this.httpClient
      .post<Order>(`${this.baseUrl}order/${pClientId}`, {})
      .toPromise();
  }

  editOrderById(pClientId): Promise<Order> {
    return this.httpClient
      .patch<Order>(`${this.baseUrl}order/${pClientId}`, {})
      .toPromise();
  }

  deleteOrderId(clientId): Promise<Order> {
    return this.httpClient
      .delete<Order>(`${this.baseUrl}order/${clientId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// ORDER - PRODUCT  ////////////////////////
  ///////////////////////////////////////////////////////////

  getAllOrderProduct(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}order_ord_prod`).toPromise();
  }

  getOrderProductById(pOrderProductId): Promise<any> {
    return this.httpClient
      .get(`${this.baseUrl}order_ord_prod/${pOrderProductId}`)
      .toPromise();
  }

  newOrderProductById(pOrderProductId): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}order_ord_prod/${pOrderProductId}`, {})
      .toPromise();
  }

  editOrderProductById(pOrderProductId): Promise<any> {
    return this.httpClient
      .patch(`${this.baseUrl}order_ord_prod/${pOrderProductId}`, {})
      .toPromise();
  }

  deleteOrderProductId(OrderProductId): Promise<any> {
    return this.httpClient
      .delete(`${this.baseUrl}order_ord_prod/${OrderProductId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// CATEGORY ////////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllCategory(): Promise<Category[]> {
    return this.httpClient
      .get<Category[]>(`${this.baseUrl}category`)
      .toPromise();
  }

  getCategoryById(pCategoryId): Promise<Category> {
    return this.httpClient
      .get<Category>(`${this.baseUrl}category/${pCategoryId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// DEPARTAMENT ////////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllDepartament(): Promise<Departament[]> {
    return this.httpClient
      .get<Departament[]>(`${this.baseUrl}departament`)
      .toPromise();
  }

  getDepartamentById(pDepartamentId): Promise<Departament> {
    return this.httpClient
      .get<Departament>(`${this.baseUrl}departament/${pDepartamentId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// REGION //////////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllRegions(): Promise<Region[]> {
    return this.httpClient.get<Region[]>(`${this.baseUrl}region`).toPromise();
  }

  getRegionById(pRegionId): Promise<Region> {
    return this.httpClient
      .get<Region>(`${this.baseUrl}region/${pRegionId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  ///////////////// TERRITORIES /////////////////////////////
  ///////////////////////////////////////////////////////////

  getAllTerritories(): Promise<Territories[]> {
    return this.httpClient
      .get<Territories[]>(`${this.baseUrl}territorie`)
      .toPromise();
  }

  getTerritoriesById(pTerritoriesId): Promise<Territories> {
    return this.httpClient
      .get<Territories>(`${this.baseUrl}territorie/${pTerritoriesId}`)
      .toPromise();
  }

  ///////////////////////////////////////////////////////////
  //////////////////// ORDERS From Mongo  ///////////////////
  ///////////////////////////////////////////////////////////

  //////////////// Metodos
  getAllOrders(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .get(`${this.baseUrl}orders`, httpOptions)
      .toPromise();
  }

  getOrder(orderId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .get(`${this.baseUrl}ordres/${orderId}`, httpOptions)
      .toPromise();
  }
  deleteOrder(orderId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      })
    };

    return this.httpClient
      .delete(`${this.baseUrl}ordres/${orderId}`, httpOptions)
      .toPromise();
  }

  makeOrder(productId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .post(`${this.baseUrl}ordres`, productId, httpOptions)
      .toPromise();
  }
}
