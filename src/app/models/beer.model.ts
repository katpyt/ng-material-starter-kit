
export interface BeerModel {
  readonly id: number;
  readonly name: string;
  readonly tagline: string;
  readonly firstBrewed: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly abv: number;
  readonly ibu: number;
  readonly targetFg: number;
  readonly targetOg: number;
  readonly ebc: number;
  readonly srm: number;
  readonly ph: number;
  readonly attenuationLevel: number;
  readonly volume: VolumeModel;
  readonly boilVolume: BoilVolumeModel;
  readonly method: MethodModel;
  readonly fermentation: FermentationModel;
  readonly ingredients: IngredientsModel;
  readonly food_pairing: FoodPairingModel[];
  readonly brewers_tips: string;
  readonly contributed_by: string;
}

export interface VolumeModel {
  readonly value: number;
  readonly unit: string;
}
export interface BoilVolumeModel {
  readonly value: number;
  readonly unit: string;
}
export interface MethodModel {
  readonly mash_temp: MashTempModel;
  readonly fermentation: FermentationModel;
}
export interface FermentationModel {
  
}
export interface IngredientsModel {
  
}
export interface FoodPairingModel {
  
}
export interface MashTempModel{
  readonly temp: TempModel;
}

export interface TempModel {
    readonly value: number;
    readonly unit: string;
  }
