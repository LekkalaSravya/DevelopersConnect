import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
const movies=[
  {
    name:'Application'
  },
  {
    name:'Advertisement'
  },
  {
    name:'Book Cover'
  },
  {
    name:'Banners'
  },{
    name:'Brochures'
  },{
    name:'Bussiness Card'
  },{
    name:'Character'
  },{
    name:'Catalogue'
  },{
    name:'Digital ads'
  },{
    name:'Design Systems'
  },{
    name:'eBook Covers'
  } 
]
const movies1=[
  {
    name:'Ecommerce Graphics'
  },
  {
    name:' Email Signatures'
  },
  {
    name:' Flyers'
  },
  {
    name:' Greeting Cards'
  },{
    name:'Icons'
  },{
    name:'Invitation Design'
  },{
    name:'Illustrations'
  },{
    name:'Logos'
  },{
    name:'Magzine'
  },{
    name:'Newslwtters'
  },{
    name:'NFT Designs'
  } 
]
const movies2=[
  {name:'Product Mock-ups'},
  {name:'Postcard'},
  {name:'Packaging'},
  {name:'Poster '},
  {name:'Print Ads'},
  {name:'Presentation Decks'},
  {name:'Packaging'},
  {name:'Restaurant Menus'},
  {name:'Social media graphics'},
  {name:'Resume'}
   

]
const movies3=[
  {name:'Story board'},
  {name:'Stationary Sets'},
  {name:'T-shirt'},
  {name:'Tattoo'},
  {name:'UI Designs'},
  {name:'Vectors'},
  {name:'Website'},
  {name:'Wireframes'},
  {name:'D Designs'}
   
]
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
 movies=movies;
 movies1=movies1;
 movies2=movies2;
 movies3=movies3;
}
