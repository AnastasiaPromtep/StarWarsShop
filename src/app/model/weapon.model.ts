export class WeaponModel {

    constructor(
        public name: string,
        public shortName: string,
        public damage: number,
        public critical: number,
        public encumbrance: number,
        public hardPoints: number,
        public price: number,
        public rarity: number,
        public specialRules: string[]
    ) {}
}