import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = "NOVA SÉRIE ANUNCIADA"
  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
