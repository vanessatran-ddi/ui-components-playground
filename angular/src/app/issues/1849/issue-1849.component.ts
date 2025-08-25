import { Component } from "@angular/core";
import { MockUploader, Upload } from "../../utils/file-uploader";
import { GoabFileUploadCard, GoabFileUploadInput, GoabFormItem } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-1849",
  standalone: true,
  imports: [GoabFormItem, GoabFileUploadInput, GoabFileUploadCard],
  templateUrl: "./issue-1849.component.html",
})
export class Issue1849Component {
  uploads: Upload[] = [];
  progressList: Record<string, number> = {};

  uploadFile(e: any) {
    const { file } = e;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (!ev.target || !ev.target.result) {
        return;
      }

      const url = ev.target.result;
      const uploader = new MockUploader();

      this.uploads = [...this.uploads, { file, uploader }];

      uploader.oncomplete = () => console.log("File upload complete");
      uploader.onprogress = (percent: number) => (this.progressList[file.name] = percent);
      uploader.onabort = () => console.log("Aborting upload");
      uploader.onfail = (err: string) => console.log("Upload failed: ", err);

      if (url) {
        uploader.upload(url);
      }
    };
    reader.readAsDataURL(file);
  }

  deleteFile(upload: Upload) {
    upload.uploader.abort();
    this.uploads = [...this.uploads].filter((u) => u.file.name !== upload.file.name);
  }
}
