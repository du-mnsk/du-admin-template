declare global {
    interface Window {
      onSubmitCallback: () => void
    }
  }
  

  export interface ImageUploadResponse {
    ImageURL: string
  }
  