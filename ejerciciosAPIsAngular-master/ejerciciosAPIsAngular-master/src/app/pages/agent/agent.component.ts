import { Component, OnInit } from '@angular/core';
import {agent} from 'src/app/interfaces/agentsAPIs';
import { AgentsServiceService } from 'src/app/services/agents-service.service';
import {ActivatedRoute} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit{

  agentInfo !: agent;

  constructor(
    private activatedRoute :ActivatedRoute,
    private agentService : AgentsServiceService
  ){}


  ngOnInit(): void {
    this.loadAgent();
  }
  private loadAgent() {
    const uuid = this.activatedRoute.snapshot.params['uuid'];
    this.agentService.getOneAgent(uuid).subscribe({
      next: value => {
        this.agentInfo = value.data
      },
      error : err => console.log(err),
      complete:() => console.log("complete")
    })
  }
;


}
