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
      damage: 5,
      critical: 4,
      encumbrance: 1,
      hardPoints: 1,
      price: 200,
      rarity: 4,
      specialRules: [
          'Stun setting'
      ]
    },
    {
      name: 'Light Blaster Pistol',
      shortName: 'Light Blaster Pistol',
      damage: 5,
      critical: 4,
      encumbrance: 1,
      hardPoints: 2,
      price: 300,
      rarity: 4,
      specialRules: [
          'Stun settings'
      ]
    },
    {
      name: 'Blaster Pistol',
      shortName: 'Blaster Pistol',
      damage: 6,
      critical: 3,
      encumbrance: 1,
      hardPoints: 3,
      price: 400,
      rarity: 4,
      specialRules: [
        'Stun settings'
      ]
    }
  ];

  public weaponProperties: string[] = [
    'Name',
    'Damage',
    'Critical',
    'Encumbrance',
    'Hard Points',
    'Price',
    'Rarity',
    'Special'
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
