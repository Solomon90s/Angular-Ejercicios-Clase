import {Component, OnInit, ViewChild} from '@angular/core';
import {Pokemon} from "../../common/interfacePokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}
@Component({
  selector: 'app-valorant-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent implements OnInit{

  @ViewChild("chart") chart!: ChartComponent;
  // Esto lo hacemos para trabajar con graficas en angular
  public chartOptions: Partial<ChartOptions>;
  pokemon!: Pokemon;

  constructor(private ar: ActivatedRoute,
              private pokemonService: PokemonService) {
    // Nos permite acceder a las variables de la ruta
    this.chartOptions = {
      series: [
        {
          name: "Prices",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: 'Title'
      },
      xaxis: {
        categories: []
      }
    };
    this.loadPokemon();
  }

  ngOnInit(): void {
        this.loadPokemon();
    }

  private loadPokemon() {
    // Esta es la manera estática porque el id es de tipo string
    const id = this.ar.snapshot.params['id'];
    this.pokemonService.getPokemon(id).subscribe({
      next: value => {
        this.pokemon = value.data;
        // ESTO ES UNA GRÁFICA EN ANGULAR, MOSTRAR LOS DATOS EN GRAFICOS
        this.chartOptions = {
          series: [
            {
              name: 'Prices',
              data: [value.data.tcgplayer?.prices.holofoil?.low as number, value.data.tcgplayer?.prices.holofoil?.mid as number, value.data.tcgplayer?.prices.holofoil?.high as number, value.data.tcgplayer?.prices.holofoil?.directLow as number, value.data.tcgplayer?.prices.holofoil?.market as number]
            }
          ],
          chart: {
            height: 350,
            type: "radar"
          },
          title: {
            text: 'Prices'
          },
          xaxis: {
            categories: ['Low', 'Mid', 'High', 'Market', 'DirectLow']
          }
        };
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }
}
