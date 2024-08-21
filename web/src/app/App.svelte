<script lang="ts">
  import "@abgov/style";
  import { faker } from "@faker-js/faker";
  import { onMount } from "svelte";

  interface Uploader {
    upload: (url: string | ArrayBuffer) => void;
    abort: () => void;
  }
  interface Upload {
    file: File;
    uploader: Uploader;
  }

  type User = {
    id: string;
    firstName: string;
    lastName: string;
  };

  let modalOpen = false;
  let datePickerDate = new Date();
  let uploads: Upload[] = [];
  let progressList: Record<string, number> = {};
  let users: User[] = [];
  let pageUsers: User[] = [];
  let page = 1;

  onMount(() => {
    const _users: User[] = [];
    for (let i = 0; i < 100; i++) {
      _users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      });
    }
    users = [..._users];
    pageUsers = users.slice(0, 10);
  });

  function handlePageChange(e: CustomEvent) {
    page = e.detail.page;
    const offset = (page - 1) * 10;
    pageUsers = users.slice(offset, offset + 10);
  }

  class MockUploader implements Uploader {
    private processId?: any;

    public onprogress: (percent: number) => void = (_: number) => {};
    public onabort: () => void = () => {};
    public onfail: (err: string) => void = (_: string) => {};
    public oncomplete: () => void = () => {};

    upload(_url: string | ArrayBuffer) {
      let progress = 0;

      this.processId = setInterval(() => {
        progress += Math.random() * 10;
        this.onprogress(progress);
        if (progress >= 100) {
          this.oncomplete();
          clearInterval(this.processId);
        }
      }, 200);
    }

    abort() {
      // implement your logic to abort file upload
    }
  }

  function uploadFile(e: Event) {
    const reader = new FileReader();
    const file = (e as CustomEvent).detail.file;
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return;
      const url = e.target.result;
      const uploader = new MockUploader();

      uploads = [...uploads, { file, uploader }];

      uploader.onabort = () => console.log("Aborting upload");
      uploader.onfail = (err: string) => console.log("Upload failed: ", err);
      uploader.oncomplete = () => console.log("File upload complete");
      uploader.onprogress = (percent: number) => {
        console.log("progress", percent);
        // progressList[file.name] = percent;
        progressList = { ...progressList, [file.name]: percent };
      };
      if (url) {
        uploader.upload(url);
      }
    };
    reader.readAsDataURL(file);
  }

  let _step: number;
  function onStepperChange(e: Event) {
    const ce = e as CustomEvent;
    _step = ce.detail.step;
  }
</script>

<svelte:head>
  <title>GoA Component Playground</title>
</svelte:head>

<goa-one-column-layout>
  <section slot="header">
    <goa-microsite-header type="alpha"></goa-microsite-header>
    <goa-app-header
      heading="Child services"
      url="foo.com"
      maxcontentwidth="1024px"
    >
      <a href="#learnmore">Learn more</a>
      <a href="#aboutus">About Us</a>
      <goa-app-header-menu heading="Apply Now">
        <a href="#seniors">Seniors</a>
        <a href="#family">Family</a>
      </goa-app-header-menu>
      <goa-app-header-menu
        heading="Mary Smith"
        leadingicon="person-circle"
        type="secondary"
      >
        <a href="#settings">Settings</a>
        <a class="interactive" href="#signout">Sign out</a>
      </goa-app-header-menu>
    </goa-app-header>
    <goa-hero-banner heading="Heading">
      Resources are available to help Alberta entrepreneurs and small businesses
      start, grow and succeed.
      <goa-button type="start" slot="actions"> Call to action </goa-button>
    </goa-hero-banner>
    <form novalidate autocomplete="on">
      <goa-form-item label="First name">
        <goa-input name="firstName"></goa-input>
      </goa-form-item>
      <goa-form-item label="Last name">
        <goa-input name="lastName"></goa-input>
      </goa-form-item>
      <goa-form-item label="Email">
        <goa-input name="email" type="email" required></goa-input>
      </goa-form-item>
      <goa-form-item label="Password">
        <goa-input name="password" type="password" required></goa-input>
      </goa-form-item>
      <goa-form-item label="Phone number">
        <goa-input name="phone" type="tel" required></goa-input>
      </goa-form-item>
      <goa-form-item label="Date of birth">
        <goa-date-picker name="dob" required></goa-date-picker>
      </goa-form-item>
      <goa-form-item label="Business Name">
        <goa-input
          name="businessName"
        ></goa-input>
      </goa-form-item>

    </form>




  </section>

  <section style="display: flex; gap: 2rem;">
    <div style="width: 240px">
      <goa-side-menu>
        <goa-side-menu-heading> Nav section 1 </goa-side-menu-heading>
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <goa-side-menu-heading icon="home">
          Nav section 2
        </goa-side-menu-heading>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <goa-side-menu-heading> Nav with sub nav </goa-side-menu-heading>
        <goa-side-menu-group heading="Group heading">
          <a href="#foo">Foo</a>
          <a href="#bar">Bar</a>
        </goa-side-menu-group>
      </goa-side-menu>
    </div>

    <div style="flex: 1 1 calc(100vw - 240px);">
      <goa-notification type="information">
        Lorem ipsum dolor
        <a href="https://example.com">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </a>
        Lorem ipsum dolor
      </goa-notification>

      <h3>Dropdown</h3>
      <goa-form-item label="Basic dropdown">
        <goa-dropdown name="item">
          <goa-dropdown-item value="red" label="Red"></goa-dropdown-item>
          <goa-dropdown-item value="green" label="Green"></goa-dropdown-item>
          <goa-dropdown-item value="blue" label="Blue"></goa-dropdown-item>
        </goa-dropdown>
      </goa-form-item>

      <goa-form-item label="Filterable dropdown">
        <goa-dropdown name="item" filterable="true">
          <goa-dropdown-item value="red" label="Red"></goa-dropdown-item>
          <goa-dropdown-item value="green" label="Green"></goa-dropdown-item>
          <goa-dropdown-item value="blue" label="Blue"></goa-dropdown-item>
        </goa-dropdown>
      </goa-form-item>

      <goa-form-stepper testid="foo" on:_change={onStepperChange}>
        <goa-form-step text="Personal details"></goa-form-step>
        <goa-form-step text="Employment history"></goa-form-step>
        <goa-form-step text="References"></goa-form-step>
        <goa-form-step text="Review"></goa-form-step>
      </goa-form-stepper>
      <goa-pages current={_step} mb="3xl">
        <div>
          Page 1 content
        </div>
        <div>
          Page 2 content
        </div>
        <div>
          Page 3 content
        </div>
        <div>
          Page 4 content
        </div>
      </goa-pages>


      <goa-table width="100%" mb="xl">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {#each pageUsers as user}
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          {/each}
        </tbody>
      </goa-table>
      <goa-pagination
        itemcount={users.length}
        perpagecount="10"
        pagenumber={page}
        on:_change={handlePageChange}
      ></goa-pagination>

      <h3>Tooltip</h3>
      <goa-tooltip content="Tooltip">
        <goa-icon type="information-circle"></goa-icon>
      </goa-tooltip>

      <h3>Text field</h3>
      <goa-form-item label="Basic">
        <goa-input name="item"></goa-input>
      </goa-form-item>

      <h3>Text area</h3>
      <goa-form-item label="Basic">
        <goa-textarea name="item" readonly="true" value="read this"
        ></goa-textarea>
      </goa-form-item>

      <h3>Table</h3>
      <goa-table>
        <thead>
          <tr>
            <th> Status </th>
            <th> Text </th>
            <th> Number </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <goa-badge type="information" content="Badge text"></goa-badge>
            </td>
            <td> Lorem ipsum </td>
            <td> 1234567890 </td>
            <td>
              <goa-button type="tertiary"> Action </goa-button>
            </td>
          </tr>
          <tr>
            <td>
              <goa-badge type="information" content="Badge text"></goa-badge>
            </td>
            <td> Lorem ipsum </td>
            <td> 1234567890 </td>
            <td>
              <goa-button type="tertiary"> Action </goa-button>
            </td>
          </tr>
          <tr>
            <td>
              <goa-badge type="information" content="Badge text"></goa-badge>
            </td>
            <td> Lorem ipsum </td>
            <td> 1234567890 </td>
            <td>
              <goa-button type="tertiary"> Action </goa-button>
            </td>
          </tr>
          <tr>
            <td>
              <goa-badge type="information" content="Badge text"></goa-badge>
            </td>
            <td> Lorem ipsum </td>
            <td> 1234567890 </td>
            <td>
              <goa-button type="tertiary"> Action </goa-button>
            </td>
          </tr>
        </tbody>
      </goa-table>

      <h3>Spacer</h3>
      <goa-block gap="none">
        <div class="block">Item 1</div>
        <goa-spacer hspacing="3xl"></goa-spacer>
        <div class="block">Item 1</div>
        <goa-spacer hspacing="3xl"></goa-spacer>
        <div class="block">Item 1</div>
      </goa-block>

      <h3>Skeleton</h3>
      <goa-skeleton type="profile" linecount="3"></goa-skeleton>

      <h3>Radio</h3>
      <goa-form-item label="Basic">
        <goa-radio-group name="item" value="1">
          <goa-radio-item value="1" label="Label"></goa-radio-item>
          <goa-radio-item value="2" label="Label"></goa-radio-item>
          <goa-radio-item value="3" label="Label"></goa-radio-item>
        </goa-radio-group>
      </goa-form-item>

      <h3>Progress</h3>
      <goa-circular-progress
        variant="inline"
        size="large"
        message="Loading message..."
        visible="true"
      ></goa-circular-progress>

      <h3>Popover</h3>
      <goa-popover>
        <p>This is a popover</p>
        It can be used for a number of different contexts.
        <div slot="target">
          <goa-button type="secondary" size="compact">Click me</goa-button>
        </div>
      </goa-popover>

      <h3>List</h3>
      <ol class="goa-ordered-list">
        <li>
          An ordered item
          <ul>
            <li>An unordered item</li>
            <li>
              A longer item that wraps to a second line
              <ul>
                <li>An item on a 3rd level</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          An ordered item
          <ul>
            <li>
              An unordered item
              <ul>
                <li>An item on a third level</li>
                <li>
                  A second item on a 3rd level
                  <ul>
                    <li>An item on a 4th level</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h3>Icons</h3>
      <goa-icon type="accessibility"></goa-icon>

      <h3>Grid</h3>
      <goa-grid minchildwidth="100px">
        <div class="block">1</div>
        <div class="block">2</div>
        <div class="block">3</div>
        <div class="block">4</div>
        <div class="block">5</div>
      </goa-grid>

      <h3>File uploader</h3>
      <goa-form-item label="Upload a file">
        <goa-file-upload-input on:_selectFile={uploadFile} maxfilesize="100MB"
        ></goa-file-upload-input>
        {#each uploads as upload}
          <goa-file-upload-card
            type={upload.file.type}
            size={upload.file.size}
            filename={upload.file.name}
            progress={progressList[upload.file.name]}
          >
          </goa-file-upload-card>
        {/each}
      </goa-form-item>

      <goa-divider />

      <h3>Datepicker</h3>
      <goa-button on:_click={() => (datePickerDate = new Date())}
        >Today</goa-button
      >
      <goa-form-item label="Item">
        <goa-date-picker name="item" value={datePickerDate}></goa-date-picker>
      </goa-form-item>

      <h3>Container</h3>
      <goa-container>
        <h2>Detach to use</h2>
        <p>Add things inside me</p>
      </goa-container>

      <h3>Chip</h3>
      <goa-chip content="Chip text"></goa-chip>

      <h3>Checkbox</h3>
      <goa-form-item label="Basic">
        <goa-checkbox name="item" text="Item"></goa-checkbox>
      </goa-form-item>

      <h3>Callout</h3>
      <goa-callout type="information">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </goa-callout>

      <h3>Button group</h3>
      <goa-button-group alignment="start">
        <goa-button type="primary"> Button </goa-button>
        <goa-button type="secondary"> Button </goa-button>
        <goa-button type="tertiary"> Button </goa-button>
      </goa-button-group>

      <h3>Badge</h3>
      <goa-block gap="4xl" alignment="center">
        <div>Item 1</div>
        <div>
          <div>Item 2</div>
          <div>Item 2</div>
        </div>
        <div>Item 3</div>
      </goa-block>

      <h3>Badge</h3>
      <goa-badge type="information" content="Information"></goa-badge>

      <h3>Accordian</h3>
      <goa-accordion heading="Heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi
      </goa-accordion>

      <h3>Modal</h3>
      <goa-button on:_click={() => (modalOpen = true)}>Open Modal</goa-button>
      <goa-modal
        open={modalOpen}
        on:_close={() => (modalOpen = false)}
        closable
        heading="Do you agree?"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          obcaecati id molestiae, natus dicta, eaque qui iusto similique, libero
          explicabo eligendi eius laboriosam! Repellendus ducimus officia
          asperiores. Eos, eius numquam.
        </p>
        <div slot="actions">
          <goa-button-group alignment="end">
            <goa-button on:_click={() => (modalOpen = false)}
              >Primary</goa-button
            >
          </goa-button-group>
        </div>
      </goa-modal>

      <h3>Input</h3>
      <goa-input name="input">
        <div slot="leadingcontent">
          <div style="width: 50px; text-align: center">$</div>
        </div>
        <div slot="trailingContent">items</div>
      </goa-input>

      <h3>Container</h3>
      <goa-container type="info">
        <h2>Info Container</h2>
        <p>Content</p>
      </goa-container>

      <goa-tabs>
        <goa-tab heading="Profile">
          <p>
            <b>Profile</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt.
          </p>
          <goa-date-picker value={new Date()} />

          <goa-accordion heading="Heading">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </goa-accordion>

          <goa-details heading="This is the title">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
              lacinia metus, sed sodales lectus. Aliquam sed volutpat velit. Sed
              in lacus ut dui placerat accumsan malesuada quis erat. Aenean mi
              diam, rhoncus vitae justo eu, venenatis maximus nunc. In vel est
              commodo, porttitor sem vel, tincidunt ipsum. In hac habitasse
              platea dictumst. Mauris varius mollis dui. Aenean ut dui eu arcu
              rutrum auctor. Curabitur cursus velit vel libero sollicitudin
              tincidunt. Proin tincidunt, enim et ultrices rhoncus, nibh leo
              imperdiet sapien, sed porttitor ipsum nulla non massa. Nulla
              facilisi.
            </p>
          </goa-details>
        </goa-tab>

        <goa-tab>
          <div slot="heading">
            Review pending <goa-badge type="important" content="2"></goa-badge>
          </div>
          <p>
            <b>Review pending:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </goa-tab>
        <goa-tab>
          <div slot="heading">
            Completed
            <goa-badge type="midtone" content="1"></goa-badge>
          </div>
          <p>
            <b>Completed:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </goa-tab>
      </goa-tabs>
    </div>
  </section>

  <section slot="footer">
    <goa-app-footer />
  </section>
</goa-one-column-layout>

<style>
  .block {
    background-color: rgba(0, 150, 255, 0.2);
    padding: 1rem;
  }
</style>
