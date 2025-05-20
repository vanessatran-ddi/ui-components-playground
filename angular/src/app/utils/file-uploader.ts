export interface Uploader {
  upload: (url: string | ArrayBuffer) => void;
  abort: () => void;
}

export interface Upload {
  file: File;
  uploader: Uploader;
}

export class MockUploader implements Uploader {
  public onprogress: (percent: number) => void = (_: number) => { };
  public onabort: () => void = () => { };
  public onfail: (err: string) => void = (_: string) => { };
  public oncomplete: () => void = () => { };

  upload(_url: string | ArrayBuffer) {
    // implement your logic to upload files
  }

  abort() {
    // implement your logic to abort file upload
  }
}
