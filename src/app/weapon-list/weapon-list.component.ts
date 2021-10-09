import { Component, OnInit } from '@angular/core';
import {WeaponModel} from "../model/weapon.model";

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss']
})
export class WeaponListComponent implements OnInit {

  public weaponList: WeaponModel[] = [
    {
      name: 'Holdout Blaster',
      shortName: 'Holdout Blaster',
      damage: 4,
      critical: 5,
      encumbrance: 1,
      hardPoints: 1,
      price: 200,
      rarity: 4,
      specialRules: [
          'Stun setting'
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
