import { Component } from "@angular/core";
import {
  GoabAccordion,
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabCallout,
  GoabCheckbox,
  GoabContainer,
  GoabDatePicker,
  GoabDetails,
  GoabDivider,
  GoabDropdown,
  GoabDropdownItem,
  GoabFileUploadCard,
  GoabFileUploadInput,
  GoabFileUploadInputOnSelectFileDetail,
  GoabFilterChip,
  GoabFormItem,
  GoabGrid,
  GoabIcon,
  GoabIconButton,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem,
  GoabSkeleton,
  GoabSpacer,
  GoabTab,
  GoabTable,
  GoabTableOnSortDetail,
  GoabTableSortHeader,
  GoabTabs,
  GoabTabsOnChangeDetail, GoabText, GoabTextArea, GoabTooltip,
} from "@abgov/angular-components";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { MockUploader, Upload } from "../../utils/file-uploader";
interface User {
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: "abgov-issue-1216",
  templateUrl: "./issue-1216.component.html",
  standalone: true,
  imports: [
    GoabCheckbox,
    GoabAccordion,
    ReactiveFormsModule,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabBadge,
    GoabBlock,
    GoabButton,
    GoabButtonGroup,
    GoabCallout,
    GoabContainer,
    GoabDatePicker,
    GoabDetails,
    GoabDivider,
    GoabDropdown,
    GoabDropdownItem,
    GoabFileUploadInput,
    GoabFileUploadCard,
    NgForOf,
    GoabFilterChip,
    GoabInput,
    GoabGrid,
    GoabIcon,
    GoabIconButton,
    GoabSkeleton,
    GoabSpacer,
    GoabTable,
    GoabTableSortHeader,
    GoabTabs,
    GoabTab,
    GoabText,
    GoabTextArea,
    GoabTooltip,
  ],
})
export class Issue1216Component {
  form!: FormGroup;
  users: User[] = [];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [null],
      radio: [null],
      itemChild: [null],
      datePicker: [new Date()],
      color: [""],
      input: [""],
      radioChild: [null],
      textarea: [""],
    });
    this.form.get("item")?.valueChanges.subscribe((value) => {
      console.log("item changed:", value);
    });
    this.form.get("radio")?.valueChanges.subscribe((value) => {
      console.log("radio changed:", value);
    });
    this.users = [
      {
        firstName: "Christian",
        lastName: "Batz",
        age: 18,
      },
      {
        firstName: "Brain",
        lastName: "Wisozk",
        age: 19,
      },
      {
        firstName: "Neha",
        lastName: "Jones",
        age: 23,
      },
      {
        firstName: "Tristin",
        lastName: "Buckridge",
        age: 31,
      },
    ];
  }
  buttonClick() {
    console.log("Click a button");
  }

  uploads: Upload[] = [];
  progressList: Record<string, number> = {};

  uploadFile(e: GoabFileUploadInputOnSelectFileDetail) {
    const reader = new FileReader();
    const file = e.file;
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return;
      const url = e.target.result;
      const uploader = new MockUploader();

      this.uploads.push({ file, uploader });

      uploader.onabort = () => console.log("Aborting upload");
      uploader.onfail = (err) => console.log("Upload failed: ", err);
      uploader.oncomplete = () => console.log("File upload complete");
      uploader.onprogress = (percent) => {
        this.progressList[file.name] = percent;
      };
      if (url) {
        uploader.upload(url);
      }
    };
    reader.readAsDataURL(file);
  }

  deleteFile(upload: Upload) {
    upload.uploader.abort();
    this.uploads = this.uploads.filter((u) => u.file.name !== upload.file.name);
  }
  iconButtonClick() {
    console.log("Click an icon button");
  }
  handleSort(event: GoabTableOnSortDetail) {
    const { sortBy, sortDir } = event;
    this.users.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir);
  }
  tabsOnChange(event: GoabTabsOnChangeDetail) {
    const tabIndex = event.tab;
    console.log("Tab changed to ", tabIndex);
  }
}
