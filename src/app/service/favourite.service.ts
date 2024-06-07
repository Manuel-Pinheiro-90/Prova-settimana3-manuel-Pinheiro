import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iPreferiti } from '../models/i-preferiti';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {


 favouritesArr = environment.favoutitsUrl;


  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get<iPreferiti[]>(this.favouritesArr)
  }

  getById(id:number){
    return this.http.get<iPreferiti>(`${this.favouritesArr}/${id}`)
  }

  getFavouriteByUserId(userId:number){
    return this.http.get<iPreferiti[]>(`${this.favouritesArr}?userId=${userId}`)
  }

  delete(id:number){
    return this.http.delete(`${this.favouritesArr}/${id}`)
  }















}
