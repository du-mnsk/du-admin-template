export interface PartnerSelection {
    PGroup: string
    PCode: string
    PName: string
  }
  
  export interface CategorySelection {
    CategoryNumber: number
    CategoryName: string
  }
  export interface BrandSelection extends CategorySelection {
    BrandNumber: number
    BrandName: string
  }
  