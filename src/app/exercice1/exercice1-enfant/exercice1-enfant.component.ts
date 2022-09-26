import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() compter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  add() {
    this.compteur++;
    this.compter.emit({ value: this.compteur });
  }

  minus() {
    this.compteur--;
    this.compter.emit({ value: this.compteur });
  }
}
