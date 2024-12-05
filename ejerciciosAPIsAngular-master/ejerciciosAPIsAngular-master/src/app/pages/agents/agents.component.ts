import { Component, OnInit } from '@angular/core';
import { agentsAPIs } from 'src/app/interfaces/agentsAPIs';
import { AgentsServiceService } from 'src/app/services/agents-service.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

infoAPI!: agentsAPIs;

constructor(private agentService:AgentsServiceService){}


  ngOnInit(): void {
    this.cargarAgents();
  }
  private cargarAgents() {
    this.agentService.getAgents().subscribe({
      next:(data :agentsAPIs) => {
      this.infoAPI = data;
    },
    error:err => console.log(err),
    complete:() => console.log('complete')
    });
  }
  

}
