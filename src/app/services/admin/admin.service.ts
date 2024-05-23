import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private token!: string;
  private isAdmin = false;
  private adminId!: string;
  private adminRole!: string;
  private adminPermissions!: any[];
  private adminStatusListener = new Subject<boolean>();
  // Hold The Count Time..
  private tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
  ) {
  }



  getAdminToken() {
    return this.token;
  }

  getAdminId() {
    return this.adminId;
  }

  getAdminRole() {
    return this.adminRole;
  }

  getAdminPermissions() {
    return this.adminPermissions;
  }

  getAdminStatusListener() {
    return this.adminStatusListener.asObservable();
  }

  }
