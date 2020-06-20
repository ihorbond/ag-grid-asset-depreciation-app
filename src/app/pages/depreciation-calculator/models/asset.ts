import { AssetConventionEnum } from '../enums/asset-convention.enum';

export class Asset {
    id : number;
    assetNumber : number;
    activityCategory : string;
    assetCategoryId : number;
    description : string;
    dateInService : string;
    cost : number
    businessPercentage : number;
    listedPropertyTypeId : number;
    methodId : number;
    life : number
    priorRegDepreciation : number 
    priorBonusDepriciation : number
    priorExpSec179 : number
    propertyTypeCodeId : number;
    amortizationCodeId : number;
    conventionId : number;
    currentDepriciation : number;
    currentYearExpSec179 : number;
    bonusDepriciation :  number;
}