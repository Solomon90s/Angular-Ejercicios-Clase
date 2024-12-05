import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {agentsAPIs, agent, agentAPI} from '../interfaces/agentsAPIs';


@Injectable({
  providedIn: 'root'
})
export class AgentsServiceService {

  constructor(private http: HttpClient) {}

URLBASE = 'https://valorant-api.com/v1/agents';


  getAgents():Observable<agentsAPIs>{
    return this.http.get<agentsAPIs>(this.URLBASE);
  }

  getOneAgent(uuid : string ):Observable<agentAPI>{
    return this.http.get<agentAPI>(this.URLBASE+'/' +uuid)
  }
}
