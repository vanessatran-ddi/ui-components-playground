import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  GoabAppFooter,
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabOneColumnLayout,
  GoabSideMenu,
  GoabSideMenuGroup,
  GoabPageBlock,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
  GoabButton,
  GoabSpacer,
  GoabDropdown,
  GoabDropdownItem,
  GoabInput,
  GoabBlock,
  GoabDatePicker,
  GoabTooltip,
  GoabIcon,
  GoabBadge,
  GoabText,
  GoabModal,
  GoabButtonGroup,
  GoabTextarea,
  GoabTabs,
  GoabTab,
  GoabDivider,
  GoabIconButton,
  GoabCircularProgress,
  GoabContainer,
  GoabDetails,
  GoabHeroBanner,
  GoabHeroBannerActions,
  GoabNotification,
  GoabAppFooterMetaSection,
  GoabAppFooterNavSection,
  GoabFileUploadInput,
  GoabFileUploadCard,
  GoabSideMenuHeading,
  GoabAccordion,
  GoabSkeleton,
  GoabCheckbox,
  GoabFormStep,
  GoabFormStepper,
  GoabPages,
  GoabCallout,
  GoabPopover,
  GoabAppHeaderMenu,
  GoabTable,
  GoabTableSortHeader,
  GoabGrid,
  GoabLink,
} from '@abgov/react-components';
import '@abgov/style';

function onChange(tabIndex: number): void {
  console.log('Tab changed to ', tabIndex);
}

export function App() {
  // hooks
  const [destructiveModalOpen, setDestructiveModalOpen] = useState<boolean>();
  const [basicModalOpen, setBasicModalOpen] = useState<boolean>();
  const [basicModal2Open, setBasicModal2Open] = useState<boolean>();
  const [basicModal3Open, setBasicModal3Open] = useState<boolean>();
  const [contentModalOpen, setContentModalOpen] = useState<boolean>();
  const [contentModalScrollOpen, setContentModalScrollOpen] = useState<boolean>();
  const [contentModal2Open, setContentModal2Open] = useState<boolean>();
  const [NoHeaderModalOpen, setNoHeaderModalOpen] = useState<boolean>();
  const [step, setStep] = useState<number>(-1);
  const [step2, setStep2] = useState<number>(-1);
  function radio1(name: string, value: string) {
    console.log('onChange', name, value);
  }
  function radio2(name: string, value: string) {
    console.log('onChange', name, value);
  }
  function radio3(name: string, value: string) {
    console.log('onChange', name, value);
  }
  const popovertarget = (
    <GoabButton type="secondary" size="compact">
      Click me
    </GoabButton>
  );
  const [value, setValue] = useState<string>('');
  function onChangeDropdown(name: string, values: string|string[]) {
    setValue(value as string);
  }
  function onChangeTextArea(name: string, value: string) {
    console.log(value);
  }
  interface User {
    firstName: string;
    lastName: string;
    age: number;
  }
  const [users, setUsers] = useState<User[]>([]);

  const _users: User[] = [
    {
      firstName: 'Christian',
      lastName: 'Batz',
      age: 18,
    },
    {
      firstName: 'Brain',
      lastName: 'Wisozk',
      age: 19,
    },
    {
      firstName: 'Neha',
      lastName: 'Jones',
      age: 23,
    },
    {
      firstName: 'Tristin',
      lastName: 'Buckridge',
      age: 31,
    },
  ];
  React.useEffect(() => {
    setUsers(_users);
  }, []);

  function sortData(sortBy: string, sortDir: number) {
    const _users = [...users];
    _users.sort((a: any, b: any) => {
      return (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir;
    });
    setUsers(_users);
  }

  const containeractions = (
    <GoabBlock alignment="center">
      <GoabBadge type="important" content="Badge text" icon={true}></GoabBadge>
      <GoabButton type="tertiary" size="compact" leadingIcon="pencil">
        Edit
      </GoabButton>
    </GoabBlock>
  );

  const containeractionsinverse = (
    <GoabBlock alignment="center">
      <GoabBadge type="important" content="Badge text" icon={true}></GoabBadge>
      {/*TODO: do we have variant=inverse?*/}
      <GoabButton type="tertiary" size="compact" leadingIcon="pencil" variant="destructive">
        Edit
      </GoabButton>
    </GoabBlock>
  );

  return (
    <GoabOneColumnLayout>
      <section slot="header">
        <GoabMicrositeHeader type="alpha" version="PLAYGROUND" />

        <GoabAppHeader url="/" heading="Tom's playground">
        </GoabAppHeader>

        <GoabSpacer vSpacing="3xl"></GoabSpacer>

        <GoabAppHeader url="" heading="Service name">
          <a href="#">Support</a>
          <GoabAppHeaderMenu heading="More">
            <a href="#">Cases</a>
            <a href="#">Payments</a>
            <a href="#">Outstanding</a>
            <a href="#">Another</a>
            <a href="#">Another</a>
          </GoabAppHeaderMenu>
          <a href="#">Another</a>
          <a href="#">Another</a>
          <a href="#">Another</a>
          <a href="#">Another</a>
          <a href="#" className="interactive">
            Sign in
          </a>
        </GoabAppHeader>

        <GoabAppHeader
          url=""
          heading="A header name that spans so far that it goes farther and farther until it hits it's max width or one of the menu items"
        >
          <a href="#">Menu item</a>
          <a href="#">Menu item</a>
          <a href="#">Menu item</a>
          <GoabAppHeaderMenu heading="Edna Mode" leadingIcon="person-circle">
            <a href="#">My profile</a>
            <a href="#">Settings</a>
            <a href="#" className="interactive">
              Sign out
            </a>
          </GoabAppHeaderMenu>
        </GoabAppHeader>

        <GoabAppHeader
          url="#"
          heading="Find housing"
        >
          <a href="#">Support</a>
          <GoabAppHeaderMenu heading="Menu items" leadingIcon="notifications">
            <a href="#">Menu item</a>
            <a href="#">Payments</a>
            <a href="#">Outstanding</a>
            <a href="#">Another</a>
            <a href="#">Another</a>
          </GoabAppHeaderMenu>
          <a href="#">Another</a>

          <a href="#" className="interactive">
            Sign in
          </a>
        </GoabAppHeader>

        <GoabAppHeader
          url="#"
          heading="Pay your traffic ticket"
        >
          <GoabAppHeaderMenu heading="Tickets" leadingIcon="ticket">
            <a href="#">Cases</a>
            <a href="#">Payments</a>
            <a href="#">Outstanding</a>
            <a href="#">Another</a>
            <a href="#">Another</a>
          </GoabAppHeaderMenu>

          <a href="#" className="interactive">
            Sign in
          </a>
        </GoabAppHeader>

        <GoabAppHeader url="#" heading="Service name">
          <a href="#" className="interactive">
            Sign in
          </a>
        </GoabAppHeader>

        <GoabAppHeader url="" heading="Service name">
          <a href="#">Support</a>
          <a href="#">Another</a>
          <a href="#">Another</a>
          <a href="#" className="interactive">
            Sign in
          </a>
        </GoabAppHeader>

        <GoabAppHeader url="" maxContentWidth="100%"></GoabAppHeader>

      </section>

      {/* Main page content here */}
      <section>
        <Outlet />
        <GoabPageBlock width="full">
          <GoabSpacer vSpacing="2xl"></GoabSpacer>
          <GoabTabs onChange={onChange}>

            <GoabTab heading="All components">
              <GoabBlock gap="2xl" direction="column" mt="3xl">

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="none" mb="xl">
                  Badge
                </GoabText>

                <GoabBlock>
                  <GoabBadge type="information" content="Information" icon={true}></GoabBadge>
                  <GoabBadge type="important" content="Important" icon={true}></GoabBadge>
                  <GoabBadge type="emergency" content="Emergency" icon={true}></GoabBadge>
                  <GoabBadge type="success" content="Success" icon={true}></GoabBadge>
                </GoabBlock>

                <GoabBlock>
                  <GoabBadge type="dark" content="Dark" icon={true}></GoabBadge>
                  <GoabBadge type="midtone" content="Midtone" icon={true}></GoabBadge>
                  <GoabBadge type="light" content="Light" icon={true}></GoabBadge>
                </GoabBlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Button
                </GoabText>

                <GoabButtonGroup alignment="start">
                  <GoabButton>Primary</GoabButton>
                  <GoabButton type="secondary">Secondary</GoabButton>
                  <GoabButton type="tertiary">Tertiary</GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoabButton leadingIcon="add">Primary</GoabButton>
                  <GoabButton type="secondary" leadingIcon="add">
                    Secondary
                  </GoabButton>
                  <GoabButton type="tertiary" leadingIcon="add">
                    Tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoabButton trailingIcon="add">Primary</GoabButton>
                  <GoabButton type="secondary" trailingIcon="add">
                    Secondary
                  </GoabButton>
                  <GoabButton type="tertiary" trailingIcon="add">
                    Tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoabButton size="compact">Compact primary</GoabButton>
                  <GoabButton type="secondary" size="compact">
                    Compact secondary
                  </GoabButton>
                  <GoabButton type="tertiary" size="compact">
                    Compact tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoabButton size="compact" leadingIcon="add">
                    Compact primary
                  </GoabButton>
                  <GoabButton type="secondary" size="compact" leadingIcon="add">
                    Compact secondary
                  </GoabButton>
                  <GoabButton type="tertiary" size="compact" leadingIcon="add">
                    Compact tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoabButton size="compact" trailingIcon="add">
                    Compact primary
                  </GoabButton>
                  <GoabButton type="secondary" size="compact" trailingIcon="add">
                    Compact secondary
                  </GoabButton>
                  <GoabButton type="tertiary" size="compact" trailingIcon="add">
                    Compact tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoabButton variant="destructive">Destructive primary</GoabButton>
                  <GoabButton type="secondary" variant="destructive">
                    Destructive secondary
                  </GoabButton>
                  <GoabButton type="tertiary" variant="destructive">
                    Destructive tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoabButton variant="destructive" leadingIcon="add">
                    Destructive primary
                  </GoabButton>
                  <GoabButton type="secondary" variant="destructive" leadingIcon="add">
                    Destructive secondary
                  </GoabButton>
                  <GoabButton type="tertiary" variant="destructive" leadingIcon="add">
                    Destructive tertiary
                  </GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoAButton variant="destructive" trailingIcon="add">
                    Destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" variant="destructive" trailingIcon="add">
                    Destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" variant="destructive" trailingIcon="add">
                    Destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" variant="destructive">
                    Compact destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" variant="destructive">
                    Compact destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" variant="destructive">
                    Compact destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" variant="destructive" leadingIcon="add">
                    Compact destructive primary
                  </GoAButton>
                  <GoAButton
                    type="secondary"
                    size="compact"
                    variant="destructive"
                    leadingIcon="add"
                  >
                    Compact destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" variant="destructive" leadingIcon="add">
                    Compact destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" variant="destructive" trailingIcon="add">
                    Compact destructive primary
                  </GoAButton>
                  <GoAButton
                    type="secondary"
                    size="compact"
                    variant="destructive"
                    trailingIcon="add"
                  >
                    Compact destructive secondary
                  </GoAButton>
                  <GoAButton
                    type="tertiary"
                    size="compact"
                    variant="destructive"
                    trailingIcon="add"
                  >
                    Compact destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>
                <GoabButtonGroup alignment="start">
                  <GoAButton type="start">Start</GoAButton>
                </GoabButtonGroup>

                <GoabText size="heading-s" mt="l" mb="none">
                  Inverse (experimental)
                </GoabText>

                <GoabButtonGroup alignment="start" >
                  <GoAButton  >
                    Regular primary
                  </GoAButton>
                  <GoAButton type="secondary"  >
                    Regular secondary
                  </GoAButton>
                  <GoAButton type="tertiary">
                    Regular tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <div style={{ backgroundColor: 'grey', padding: '12px' }}>
                  <GoabButtonGroup alignment="start" >
                    {/*TODO: Do we have variant=inverse?*/}
                    <GoabButton variant="destructive"  >
                      Inverse primary
                    </GoabButton>
                    <GoabButton type="secondary" variant="destructive" >
                      Inverse secondary
                    </GoabButton>
                    <GoabButton type="tertiary" variant="destructive" >
                      Inverse tertiary
                    </GoabButton>
                  </GoabButtonGroup>
                </div>

                <GoabText size="heading-s" mt="l" mb="none">
                  Disabled
                </GoabText>

                <GoabButtonGroup alignment="start">
                  <GoAButton disabled={true}>Primary</GoAButton>
                  <GoAButton type="secondary" disabled={true}>
                    Secondary
                  </GoAButton>
                  <GoAButton type="tertiary" disabled={true}>
                    Tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoAButton leadingIcon="add" disabled={true}>
                    Primary
                  </GoAButton>
                  <GoAButton type="secondary" leadingIcon="add" disabled={true}>
                    Secondary
                  </GoAButton>
                  <GoAButton type="tertiary" leadingIcon="add" disabled={true}>
                    Tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoAButton trailingIcon="add" disabled={true}>
                    Primary
                  </GoAButton>
                  <GoAButton type="secondary" trailingIcon="add" disabled={true}>
                    Secondary
                  </GoAButton>
                  <GoAButton type="tertiary" trailingIcon="add" disabled={true}>
                    Tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" disabled={true}>
                    Cmpact primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" disabled={true}>
                    Compact secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" disabled={true}>
                    Compact tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" leadingIcon="add" disabled={true}>
                    Compact primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" leadingIcon="add" disabled={true}>
                    Compact secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" leadingIcon="add" disabled={true}>
                    Compact tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" trailingIcon="add" disabled={true}>
                    Compact primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" trailingIcon="add" disabled={true}>
                    Compact secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" trailingIcon="add" disabled={true}>
                    Compact tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoAButton variant="destructive" disabled={true}>
                    Destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" variant="destructive" disabled={true}>
                    Destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" variant="destructive" disabled={true}>
                    Destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoAButton variant="destructive" leadingIcon="add" disabled={true}>
                    Destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" variant="destructive" leadingIcon="add" disabled={true}>
                    Destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" variant="destructive" leadingIcon="add" disabled={true}>
                    Destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start">
                  <GoAButton variant="destructive" trailingIcon="add" disabled={true}>
                    Destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" variant="destructive" trailingIcon="add" disabled={true}>
                    Destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" variant="destructive" trailingIcon="add" disabled={true}>
                    Destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" variant="destructive" disabled={true}>
                    Compact destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" variant="destructive" disabled={true}>
                    Compact destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" variant="destructive" disabled={true}>
                    Compact destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" variant="destructive" leadingIcon="add" disabled={true}>
                    Compact destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" variant="destructive" leadingIcon="add" disabled={true}>
                    Compact destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" variant="destructive" leadingIcon="add" disabled={true}>
                    Compact destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact" variant="destructive" trailingIcon="add" disabled={true}>
                    Compact destructive primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact" variant="destructive" trailingIcon="add" disabled={true}>
                    Compact destructive secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact" variant="destructive" trailingIcon="add" disabled={true}>
                    Compact destructive tertiary
                  </GoAButton>
                </GoabButtonGroup>


                <GoabButtonGroup alignment="start">
                  <GoabButton type="start" disabled={true}>
                    Disabled start
                  </GoabButton>
                </GoabButtonGroup>


                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Button group
                </GoabText>

                <GoabButtonGroup alignment="start">
                  <GoabButton>Default</GoabButton>
                  <GoabButton type="secondary">Button</GoabButton>
                  <GoabButton type="tertiary">Group</GoabButton>
                </GoabButtonGroup>

                <GoabButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact">Compact</GoAButton>
                  <GoAButton type="secondary" size="compact">
                    Button
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact">
                    Group
                  </GoAButton>
                </GoabButtonGroup>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="s">
                  Checkbox
                </GoabText>

                <GoabBlock gap="xl" mb="none" direction="column">
                  <GoACheckbox name="item 1" text="Single checkbox option - I consent to..." value=""></GoACheckbox>

                  <GoAFormItem label="Basic checkbox list">
                    <GoACheckbox
                      name="item 1"
                      text="Option 1"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 2"
                      text="Option 2"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 3"
                      text="Option 3"
                      value=""
                    ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem label="Basic checkbox list with helper text" helpText="Helper text to help answer the question">
                    <GoACheckbox
                      name="item 1"
                      text="Option 1"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 2"
                      text="Option 2"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 3"
                      text="Option 3"
                      value=""
                    ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem label="Checkbox list with descriptions">
                    <GoACheckbox
                      name="item 1"
                      text="Option 1"
                      value=""
                      description="here is a description"
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 2"
                      text="Option 2"
                      value=""
                      description="here is a description"
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 3"
                      text="Option 3"
                      value=""
                      description="here is a description"
                      disabled={true}
                    ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem label="Checkbox list with some disabled">
                    <GoACheckbox name="item 1" text="Option 1" value=""></GoACheckbox>
                    <GoACheckbox name="item 2" text="Option 2" value=""></GoACheckbox>
                    <GoACheckbox name="item 3" text="Option 3" value="" disabled={true}></GoACheckbox>
                    <GoACheckbox
                      name="item 4"
                      text="Option 4"
                      value=""
                      disabled={true}
                      checked={true}
                    ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem label="Basic">
                    <GoACheckbox
                      name="Option 1"
                      text="An option that wraps a long time until it goes to the next line that wraps a long time until it goes to the next line"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox name="Option 2" text="Option 2" value=""></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem label="Checkbox list with error" error="Error message.">
                    <GoACheckbox name="item 1" text="Option 1" value="" error={true}></GoACheckbox>
                    <GoACheckbox name="item 2" text="Option 2" value="" error={true}></GoACheckbox>
                    <GoACheckbox
                      name="item 3"
                      text="Option 3"
                      value=""
                      error={true}
                      disabled={true}
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 4"
                      text="Option 4"
                      value=""
                      error={true}
                      disabled={true}
                      checked={true}
                    ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem
                    label="Checkbox list with error and helper text"
                    error="Error message."
                    helpText="Helper text"
                  >
                    <GoACheckbox name="item 1" text="Option 1" value="" error={true}></GoACheckbox>
                    <GoACheckbox name="item 2" text="Option 2" value="" error={true}></GoACheckbox>
                    <GoACheckbox name="item 3" text="Option 3" value="" error={true} mb="none"></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem
                    label="Checkbox list with helper text by default"
                    helpText="Helper text"
                  >
                    <GoACheckbox name="item 1" text="Option 1" value="" ></GoACheckbox>
                    <GoACheckbox name="item 2" text="Option 2" value="" ></GoACheckbox>
                    <GoACheckbox name="item 3" text="Option 3" value="" ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem
                    label="Checkbox list with helper text and margin-bottom=none set on last checkbox item"
                    helpText="Helper text"
                  >
                    <GoACheckbox name="item 1" text="Option 1" value="" ></GoACheckbox>
                    <GoACheckbox name="item 2" text="Option 2" value="" ></GoACheckbox>
                    <GoACheckbox name="item 3" text="Option 3" value="" mb="none"></GoACheckbox>
                  </GoAFormItem>

                </GoabBlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Container
                </GoabText>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Non-interactive with text"
                    type="non-interactive"
                    actions={containeractions}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="non-interactive">
                    <GoAText size="heading-l" mb="l">
                      Non-interactive with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="non-interactive">
                    <GoAText size="heading-l" mb="l">
                      Non-interactive with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="non-interactive" accent="filled">
                    <GoAText size="heading-l" mb="l">
                      Non-interactive filled
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Interactive with text"
                    type="interactive"
                    actions={containeractionsinverse}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="interactive">
                    <GoAText size="heading-l" mb="l">
                      Interactive with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="interactive">
                    <GoAText size="heading-l" mb="l">
                      Interactive with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="interactive" accent="filled">
                    <GoAText size="heading-l" mb="l">
                      Interactive filled
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Info with text"
                    type="info"
                    actions={containeractionsinverse}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="info">
                    <GoAText size="heading-l" mb="l">
                      Info with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="info">
                    <GoAText size="heading-l" mb="l">
                      Info with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="info" accent="filled">
                    <GoAText size="heading-l" mb="l">
                      Info filled
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Error with text"
                    type="error"
                    actions={containeractionsinverse}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="error">
                    <GoAText size="heading-l" mb="l">
                      Error with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="error">
                    <GoAText size="heading-l" mb="l">
                      Error with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="error" accent="filled">
                    <GoAText size="heading-l" mb="l">
                      Error filled
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Success with text"
                    type="success"
                    actions={containeractionsinverse}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="success">
                    <GoAText size="heading-l" mb="l">
                      Success with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="success">
                    <GoAText size="heading-l" mb="l">
                      Success with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="success" accent="filled">
                    <GoAText size="heading-l" mb="l">
                      Success filled
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Important with text"
                    type="important"
                    actions={containeractions}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="important">
                    <GoAText size="heading-l" mb="l">
                      Important with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="important">
                    <GoAText size="heading-l" mb="l">
                      Important with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="important" accent="filled">
                    <GoAText size="heading-l" mb="l">
                      Important filled
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                <GoabGrid gap="xl" minChildWidth="400px">
                  <GoAContainer
                    accent="thick"
                    heading="Non-interactive, compact with text"
                    type="non-interactive"
                    padding="compact"
                    actions={containeractions}
                  >
                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thick" type="non-interactive" padding="compact">
                    <GoAText size="heading-l" mb="l">
                      Non-interactive, compact with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer accent="thin" type="non-interactive" padding="compact">
                    <GoAText size="heading-l" mb="l">
                      Non-interactive, compact with accent
                    </GoAText>

                    <GoABadge type="success" content="Badge text" icon={true}></GoABadge>

                    <GoAText size="body-m" mt="m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>

                  <GoAContainer type="non-interactive" accent="filled" padding="compact">
                    <GoAText size="heading-l" mb="l">
                      Non-interactive, compact
                    </GoAText>
                    <GoAText size="body-m" mb="2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at risus et magna
                      interdum vestibulum in at ligula.
                    </GoAText>

                    <GoAFormItem label="Test" helpText="This is some help text." mb="2xl">
                      <GoAInput
                        name="name1"
                        type="text"
                        value=""
                        trailingContent="@gov.ab.ca"
                        width="20ch"
                      ></GoAInput>
                    </GoAFormItem>

                    <GoAButton>Button</GoAButton>
                  </GoAContainer>
                </GoabGrid>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Date picker
                </GoabText>

                <GoabBlock gap="2xl" mb="xl" direction="column">
                  <GoAFormItem label="Select a date">
                    <GoADatePicker
                      name="item"
                      value={new Date(2024, 11, 4)}
                    ></GoADatePicker>
                  </GoAFormItem>
                </GoabBlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Detail
                </GoabText>

                <GoabBlock gap="xl" mb="xl" direction="column">
                  <GoADetails heading="Detail Heading that goes for a long time that is longer and maybe wraps as well because it is so long">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacinia metus,
                    sed sodales lectus. Aliquam sed volutpat velit.
                  </GoADetails>

                  <GoADetails heading="Detail Heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacinia metus,
                    sed sodales lectus. Aliquam sed volutpat velit.
                  </GoADetails>
                </GoabBlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Divider
                </GoabText>
                <GoabDivider></GoabDivider>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoabText size="heading-m" mt="3xl" mb="xl">
                  Dropdown
                </GoabText>

                <GoabBlock gap="2xl" mb="xl" direction="column">
                  <GoabFormItem label="Basic dropdown">
                    <GoADropdown placeholder="—Select—" name="item" value="" >
                      <GoADropdownItem value="red" label="Red"></GoADropdownItem>
                      <GoADropdownItem value="green" label="Green"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Basic dropdown width 100%">
                    <GoADropdown placeholder="—Select—" name="item" value="" width="100%">
                      <GoADropdownItem value="red" label="Red"></GoADropdownItem>
                      <GoADropdownItem value="green" label="Green"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Dropdown with longest option 100ch" >
                    <GoADropdown
                      name="item"
                      value=""
                    >
                      <GoADropdownItem value="red" label="100ch: ipsum dolor sit amet, consectetur porttitor. Ipsum dolor sit amet, consectetur porttitor."></GoADropdownItem>
                      <GoADropdownItem value="green" label="abc"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="MMM"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Dropdown with longest option 3ch">
                    <GoADropdown
                      name="item"
                      value=""
                    >
                      <GoADropdownItem value="red" label="000"></GoADropdownItem>
                      <GoADropdownItem value="green" label="000"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="000"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Dropdown with longest option 20ch and leading icon">
                    <GoADropdown name="item" value="" leadingIcon="mail" >
                      <GoADropdownItem value="red" label="20ch-000000000000000"></GoADropdownItem>
                      <GoADropdownItem value="green" label="acd"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="cde"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Filterable dropdown">
                    <GoADropdown name="item" value="" filterable={true} >
                      <GoADropdownItem value="red" label="20ch-000000000000000"></GoADropdownItem>
                      <GoADropdownItem value="green" label="acd"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="cde"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Dropdown with error" error="Error message.">
                    <GoADropdown name="item" value="" error={true} >
                      <GoADropdownItem value="red" label="Red"></GoADropdownItem>
                      <GoADropdownItem value="green" label="Green"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Disabled dropdown" helpText="Helper text">
                    <GoADropdown name="item" value="" disabled={true} >
                      <GoADropdownItem value="red" label="Red"></GoADropdownItem>
                      <GoADropdownItem value="green" label="Green"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
                    </GoADropdown>
                  </GoabFormItem>

                  <GoabFormItem label="Native dropdown" helpText="Helper text">
                    <GoabDropdown name="item" value="" native={true} onChange={onChangeDropdown}>
                      <GoabDropdownItem value="red" label="Red"></GoabDropdownItem>
                      <GoabDropdownItem value="green" label="Green"></GoabDropdownItem>
                      <GoabDropdownItem value="blue" label="Blue"></GoabDropdownItem>
                    </GoabDropdown>
                  </GoabFormItem>
                </GoabBlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoAText size="heading-m" mt="3xl" mb="xl">
                  File upload
                </GoAText>

                <GoABlock gap="xl" mb="xl" direction="column">
                  <GoAFormItem label="Upload a file ">
                    <GoAFileUploadInput maxFileSize="100MB" variant="button" onSelectFile={() => {/* do nothing */}} />
                  </GoAFormItem>

                  <GoAFormItem label="Upload a file">
                    <GoAFileUploadInput maxFileSize="100MB" onSelectFile={() => {/** do nothing **/}} />
                  </GoAFormItem>
                </GoABlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoAText size="heading-m" mt="3xl" mb="xl">
                  Form item
                </GoAText>

                <GoABlock gap="xl" mb="xl" direction="column">
                  <GoAFormItem
                    label="Optional input with error and helper text"
                    helpText="This is some help text"
                    error="There is an error."
                    requirement="optional"
                  >
                    <GoAInput name="name1" type="text" value="" width="20ch" error={true}></GoAInput>
                  </GoAFormItem>

                  <GoAFormItem
                    label="Required input with helper text"
                    helpText="This is some help text"
                    requirement="required"
                  >
                    <GoAInput name="name1" type="text" value="" width="20ch"></GoAInput>
                  </GoAFormItem>

                  <GoAFormItem label="Input with helper text" helpText="This is some help text">
                    <GoAInput name="name1" type="text" value="" width="20ch"></GoAInput>
                  </GoAFormItem>

                  <GoAFormItem label="Radio with helper text" helpText="This is some help text">
                    <GoARadioGroup name="item" value="1" onChange={onChangeTextArea}>
                      <GoARadioItem value="1" label="Option 1"></GoARadioItem>
                      <GoARadioItem value="2" label="Option 2"></GoARadioItem>
                      <GoARadioItem value="3" label="Option 3"></GoARadioItem>
                    </GoARadioGroup>
                  </GoAFormItem>

                  <GoAFormItem label="Basic checkbox list">
                    <GoACheckbox
                      name="item 1"
                      text="Option 1"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 2"
                      text="Option 2"
                      value=""
                    ></GoACheckbox>
                    <GoACheckbox
                      name="item 3"
                      text="Option 3"
                      value=""
                    ></GoACheckbox>
                  </GoAFormItem>

                  <GoAFormItem label="Dropdown with helper text" helpText="This is some help text">
                    <GoADropdown name="item" value="" onChange={onChangeDropdown}>
                      <GoADropdownItem value="red" label="Red"></GoADropdownItem>
                      <GoADropdownItem value="green" label="Green"></GoADropdownItem>
                      <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
                    </GoADropdown>
                  </GoAFormItem>

                  <GoAFormItem
                    label="Input with large label"
                    labelSize="large"
                  >
                    <GoAInput name="name1" type="text" value="" width="20ch"></GoAInput>
                  </GoAFormItem>

                  <GoAFormItem
                    label="Optional input with a large label size"
                    helpText="This is some help text"
                    labelSize="large"
                    requirement="optional"
                  >
                    <GoARadioGroup name="item" value="1" onChange={onChangeTextArea}>
                      <GoARadioItem value="1" label="Option 1"></GoARadioItem>
                      <GoARadioItem value="2" label="Option 2"></GoARadioItem>
                      <GoARadioItem value="3" label="Option 3"></GoARadioItem>
                    </GoARadioGroup>
                  </GoAFormItem>

                  <GoAFormItem label="File uploader">
                    <GoAFileUploadInput maxFileSize="100MB" variant="button" onSelectFile={() => {/** do nothing **/}} />
                  </GoAFormItem>



                </GoABlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoAText size="heading-m" mt="3xl" mb="xl">
                  Form stepper
                </GoAText>

                <GoABlock gap="xl" mb="xl" direction="column">
                  <GoAFormStepper testId="foo" onChange={setStep}>
                    <GoAFormStep text="Personal details" status="complete"></GoAFormStep>
                    <GoAFormStep text="Employment history" status="incomplete"></GoAFormStep>
                    <GoAFormStep text="References"></GoAFormStep>
                    <GoAFormStep text="Review"></GoAFormStep>
                  </GoAFormStepper>
                  <GoAPages current={step} mb="3xl">
                    <div>Page 1 content</div>
                    <div>Page 2 content</div>
                    <div>Page 3 content</div>
                    <div>Page 4 content</div>
                  </GoAPages>

                  <GoAFormStepper testId="foo" onChange={setStep2}>
                    <GoAFormStep text="Personal details" status="complete"></GoAFormStep>
                    <GoAFormStep text="Employment history" status="incomplete"></GoAFormStep>
                    <GoAFormStep text="References"></GoAFormStep>
                    <GoAFormStep text="Another"></GoAFormStep>
                    <GoAFormStep text="Review"></GoAFormStep>
                  </GoAFormStepper>
                  <GoAPages current={step2} mb="3xl">
                    <div>Page 1 content</div>
                    <div>Page 2 content</div>
                    <div>Page 3 content</div>
                    <div>Page 4 content</div>
                    <div>Page 5 content</div>
                  </GoAPages>
                </GoABlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoAText size="heading-m" mt="3xl" mb="xl">
                  Hero Banner
                </GoAText>

                <GoABlock gap="xl" mb="xl" direction="column">
                  <GoAHeroBanner heading="This is a heading that wraps to a second line because it's long">
                    Resources are available to help Alberta entrepreneurs and small businesses start,
                    grow and succeed.
                    <GoAHeroBannerActions>
                      <GoAButton type="start">Call to action</GoAButton>
                    </GoAHeroBannerActions>
                  </GoAHeroBanner>

                  <GoAHeroBanner heading="This is a short heading">
                    Resources are available to help Alberta entrepreneurs and small businesses start,
                    grow and succeed.
                    <GoAHeroBannerActions>
                      <GoAButton type="start">Call to action</GoAButton>
                    </GoAHeroBannerActions>
                  </GoAHeroBanner>

                  <GoAHeroBanner
                    heading="This is a heading that wraps to a second line because it's long"
                    backgroundUrl="#"
                  >
                    Resources are available to help Alberta entrepreneurs and small businesses start,
                    grow and succeed.
                    <GoAHeroBannerActions>
                      <GoAButton type="start">Call to action</GoAButton>
                    </GoAHeroBannerActions>
                  </GoAHeroBanner>

                  <GoAHeroBanner heading="This is a short heading" backgroundUrl="#">
                    Resources are available to help Alberta entrepreneurs and small businesses start,
                    grow and succeed.
                    <GoAHeroBannerActions>
                      <GoAButton type="start">Call to action</GoAButton>
                    </GoAHeroBannerActions>
                  </GoAHeroBanner>
                </GoABlock>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoAText size="heading-m" mt="3xl" mb="xl">
                  Icon
                </GoAText>

                <GoAText size="heading-s" mt="3xl" mb="none">
                  Tshirt sizing
                </GoAText>
                <GoABlock>
                  <GoATooltip content="2xsmall">
                    <GoAIcon type="triangle" size="medium" theme="outline" opacity={1}></GoAIcon>
                  </GoATooltip>
                  <GoATooltip content="xsmall">
                    <GoAIcon type="triangle" size="small" theme="outline" opacity={1}/>
                  </GoATooltip>
                  <GoATooltip content="small">
                    <GoAIcon type="triangle" size="small" theme="outline" opacity={1} />
                  </GoATooltip>
                  <GoATooltip content="medium">
                    <GoAIcon type="triangle" size="medium" theme="outline" opacity={1} />
                  </GoATooltip>
                  <GoATooltip content="large">
                    <GoAIcon type="triangle" size="large" theme="outline" opacity={1} />
                  </GoATooltip>
                  <GoATooltip content="xlarge">
                    <GoAIcon type="triangle" size="xlarge" theme="outline" opacity={1} />
                  </GoATooltip>
                </GoABlock>

                <GoAText size="heading-s" mt="l" mb="none">
                  Number sizing
                </GoAText>
                <GoABlock>
                  {/*TODO: size can be medium, small, large, xlarge (not number)*/}
                  <GoAIcon type="triangle" size="small" theme="outline" opacity={1}></GoAIcon>
                  <GoAIcon type="triangle" size="medium" theme="outline" opacity={1}></GoAIcon>
                  <GoAIcon type="triangle" size="medium" theme="outline" opacity={1}></GoAIcon>
                  <GoAIcon type="triangle" size="medium" theme="outline" opacity={1}></GoAIcon>
                  <GoAIcon type="triangle" size="large" theme="outline" opacity={1}></GoAIcon>
                  <GoAIcon type="triangle" size="xlarge" theme="outline" opacity={1}></GoAIcon>
                </GoABlock>

                <GoAText size="heading-s" mt="l" mb="none">
                  Inverted
                </GoAText>
                <div style={{ backgroundColor: '#2F2F2F' }}>
                  <GoABlock>
                    <GoAIcon
                      type="triangle"
                      // size="1" // TODO: must be true/false instead of a string, rebase with alpha to use it
                      size="small"
                      theme="outline"
                      opacity={1}
                      inverted="true" // TODO: must be true/false instead of a string, rebase with alpha to use it
                    ></GoAIcon>
                    <GoAIcon
                      type="triangle"
                      // size="2" TODO: not sure why it is 2, but it must be medium, small..
                      size="medium"
                      theme="outline"
                      opacity={1}
                      inverted="true" // TODO: must be true/false instead of a string, rebase with alpha to use it
                    ></GoAIcon>
                    <GoAIcon
                      type="triangle"
                      // size="3" TODO: not sure why it is 3, but it must be medium, small..
                      size="medium"
                      theme="outline"
                      opacity={1}
                      inverted="true" // TODO: must be true/false instead of a string, rebase with alpha to use it
                    ></GoAIcon>
                    <GoAIcon
                      type="triangle"
                      // size={4} TODO: not sure why it is 4, but it must be medium, small..
                      size="medium"
                      theme="outline"
                      opacity={1}
                      inverted="true" // TODO: must be true/false instead of a string, rebase with alpha to use it
                    ></GoAIcon>
                    <GoAIcon
                      type="triangle"
                      // size={5} TODO: not sure why it is 5, but it must be medium, small..
                      size="medium"
                      theme="outline"
                      opacity={1}
                      inverted="true" // TODO: must be true/false instead of a string, rebase with alpha to use it
                    ></GoAIcon>
                    <GoAIcon
                      type="triangle"
                      // size={6} TODO: not sure why it is 6, but it must be medium, small..
                      size="medium"
                      theme="outline"
                      opacity={1}
                      inverted="true" // TODO: must be true/false instead of a string, rebase with alpha to use it
                    ></GoAIcon>
                  </GoABlock>
                </div>

                {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <GoAText size="heading-m" mt="4xl" mb="xl">
                  Icon button
                </GoAText>

                <GoABlock>
                  <GoAIconButton
                    variant="color"
                    size="medium"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="color"
                    size="large"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="color"
                    size="xlarge"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="color"
                    size="xlarge"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                    disabled={true}
                  ></GoAIconButton>
                </GoABlock>
                <div style={{ backgroundColor: '#2F2F2F', padding: '8px' }}>
                  <GoABlock>
                    <GoAIconButton
                      variant="light"
                      size="medium"
                      icon="refresh"
                      ariaLabel="Refresh icon"
                    ></GoAIconButton>
                    <GoAIconButton
                      variant="light"
                      size="large"
                      icon="refresh"
                      ariaLabel="Refresh icon"
                    ></GoAIconButton>
                    <GoAIconButton
                      variant="light"
                      size="xlarge"
                      icon="refresh"
                      ariaLabel="Refresh icon"
                    ></GoAIconButton>
                    <GoAIconButton
                      variant="light"
                      size="xlarge"
                      icon="refresh"
                      ariaLabel="Refresh icon"
                      disabled={true}
                    ></GoAIconButton>
                  </GoABlock>
                </div>
                <GoABlock>
                  <GoAIconButton
                    variant="dark"
                    size="medium"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="dark"
                    size="large"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="dark"
                    size="xlarge"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="dark"
                    size="xlarge"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                    disabled={true}
                  ></GoAIconButton>
                </GoABlock>
                <GoABlock>
                  <GoAIconButton
                    variant="destructive"
                    size="medium"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="destructive"
                    size="large"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="destructive"
                    size="xlarge"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                  ></GoAIconButton>
                  <GoAIconButton
                    variant="destructive"
                    size="xlarge"
                    icon="refresh"
                    ariaLabel="Refresh icon"
                    disabled={true}
                  ></GoAIconButton>
                </GoABlock>
              </GoabBlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="xl">
                Input
              </GoAText>

              <GoABlock gap="2xl" mb="xl" direction="column">

                <GoAFormItem label="Basic text input">
                  <GoAInput name="name1" type="text" value="" width="20ch"></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Optional text input" requirement="optional">
                  <GoAInput name="name1" type="text" value="" width="20ch"></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input that is 100% width">
                  <GoAInput
                    name="name3"
                    type="text"
                    value=""
                    width="100%"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input that is 50% width">
                  <GoAInput
                    name="name3"
                    type="text"
                    value=""
                    width="50%"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input that has no width defined">
                  <GoAInput
                    name="name3"
                    type="text"
                    value=""
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Width is 180ch">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="180ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with leading content">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    leadingContent="dasd"
                    width="20ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with trailing content and 100% width">
                  <GoAInput
                    name="name2"
                    type="text"
                    value=""
                    width="100%"
                    trailingContent="@gov.ab.ca"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with 2ch width">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="2ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with 2ch width and leading icon">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="2ch"
                    leadingIcon="bag"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with 2ch width and trailing icon">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="2ch"
                    trailingIcon="bag"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with 2ch width and leading and trailing content">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="2ch"
                    leadingContent="content"
                    trailingContent="content"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with 80ch width and leading and trailing content">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="80ch"
                    leadingContent="content"
                    trailingContent="content"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with 100% width and leading and trailing content">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="100%"
                    leadingContent="content"
                    trailingContent="content"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with helper text" helpText="This is some help text." requirement="optional">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="30ch"

                  ></GoAInput>
                </GoAFormItem>

                <GoABlock gap="xs" mb="xl" direction="row">

                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="30ch"
                    leadingIcon="search"
                  ></GoAInput>

                  <GoAButton> Search </GoAButton>
                </GoABlock>

                <GoAFormItem label="Text input with 60ch width" helpText="This is some help text.">
                  <GoAInput name="name1" type="text" value="" width="60ch"></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text input with error"
                  helpText="This is some help text."
                  error="There is an error"
                >
                  <GoAInput name="name1" type="text" value="" width="20ch" error={true}></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with leading and trailing content" error="There is an error">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="20ch"
                    leadingContent="dad"
                    trailingContent="dasd"
                    error={true}
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text input with leading content" error="There is an error">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="20ch"
                    leadingContent="dasd"
                    error={true}
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text input with trailing content"
                  helpText="This is some help text."
                  error="There is an error"
                >
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="20ch"
                    trailingContent="dasd"
                    error={true}
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text input with leading icon"
                >
                  <GoAInput
                    leadingIcon="mail"
                    name="name1"
                    value=""
                    width="40ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text input with trailing icon"
                >
                  <GoAInput
                    trailingIcon="mail"
                    name="name1"
                    value=""
                    width="40ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text input that's disabled"
                  helpText="Here is some helper text"
                >
                  <GoAInput
                    disabled={true}
                    name="name1"
                    value=""
                    width="20ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text input that's disabled with leading icon"
                >
                  <GoAInput
                    leadingIcon="accessibility"
                    disabled={true}
                    name="name1"
                    value=""
                    width="20ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem
                  label="Text field with placeholder text"
                >
                  <GoAInput
                    name="name1"
                    placeholder="Placeholder text"
                    value=""
                    width="20ch"
                  ></GoAInput>
                </GoAFormItem>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="4xl" mb="2xl">
                Link
              </GoAText>

              <GoABlock gap="2xl" mb="xl" direction="column">
                <GoALink leadingIcon='add'>
                  Link with a leading icon
                </GoALink>

                <GoALink trailingIcon='open'>
                  Link with a trailing icon
                </GoALink>

              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="xl">
                Microsite header
              </GoAText>

              <GoABlock gap="3xs" mb="xl" direction="column">
                <GoAMicrositeHeader type="alpha" headerUrlTarget="blank"></GoAMicrositeHeader>

                <GoAMicrositeHeader type="beta" headerUrlTarget="blank"></GoAMicrositeHeader>

                <GoAMicrositeHeader type="live" headerUrlTarget="blank"></GoAMicrositeHeader>

                <GoAText size="heading-s" mt="l" mb="s">
                  Feedback link
                </GoAText>

                <GoAMicrositeHeader
                  type="alpha"
                  feedbackUrl="www"
                  feedbackUrlTarget="blank"
                  headerUrlTarget="blank"
                ></GoAMicrositeHeader>

                <GoAMicrositeHeader
                  type="beta"
                  feedbackUrl="www"
                  feedbackUrlTarget="blank"
                  headerUrlTarget="blank"
                ></GoAMicrositeHeader>

                <GoAMicrositeHeader
                  type="live"
                  feedbackUrl="www"
                  feedbackUrlTarget="blank"
                  headerUrlTarget="blank"
                ></GoAMicrositeHeader>

                <GoAText size="heading-s" mt="l" mb="s">
                  Version number
                </GoAText>

                <GoAMicrositeHeader
                  type="alpha"
                  headerUrlTarget="blank"
                  version="1.2.3"
                ></GoAMicrositeHeader>

                <GoAMicrositeHeader
                  type="beta"
                  headerUrlTarget="blank"
                  version="1.2.3"
                ></GoAMicrositeHeader>

                <GoAMicrositeHeader
                  type="live"
                  headerUrlTarget="blank"
                  version="1.2.3"
                ></GoAMicrositeHeader>

                <GoAText size="heading-s" mt="l" mb="s">
                  Feedback link and Version number
                </GoAText>

                <GoAMicrositeHeader
                  type="alpha"
                  feedbackUrl="www"
                  feedbackUrlTarget="blank"
                  headerUrlTarget="blank"
                  version="1.2.3"
                ></GoAMicrositeHeader>

                <GoAMicrositeHeader
                  type="beta"
                  feedbackUrl="www"
                  feedbackUrlTarget="blank"
                  headerUrlTarget="blank"
                  version="1.2.3"
                ></GoAMicrositeHeader>

                <GoAMicrositeHeader
                  type="live"
                  feedbackUrl="www"
                  feedbackUrlTarget="blank"
                  headerUrlTarget="blank"
                  version="1.2.3"
                ></GoAMicrositeHeader>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="xl">
                Modal
              </GoAText>

              <GoABlock gap="xl" mb="xl" direction="column">
                <GoAButton
                  type="tertiary"
                  leadingIcon="trash"
                  onClick={() => setDestructiveModalOpen(true)}
                >
                  Delete my application
                </GoAButton>

                <GoAModal
                  heading="Are you sure you want to delete this application?"
                  open={destructiveModalOpen}
                  role="alertdialog"
                  calloutVariant="emergency"
                  actions={
                    <GoAButtonGroup alignment="end">
                      <GoAButton type="tertiary" onClick={() => setDestructiveModalOpen(false)}>
                        Cancel
                      </GoAButton>
                      <GoAButton
                        type="primary"
                        variant="destructive"
                        onClick={() => {
                          setDestructiveModalOpen(false);
                        }}
                      >
                        Delete application
                      </GoAButton>
                    </GoAButtonGroup>
                  }
                >
                  <p>This action cannot be undone. </p>
                </GoAModal>

                <GoAButton type="tertiary" onClick={() => setBasicModalOpen(true)}>
                  Open basic modal with close
                </GoAButton>

                <GoAModal
                  heading="This is a modal with a close button"
                  open={basicModalOpen}
                  role="alertdialog"
                  onClose={() => setBasicModalOpen(false)}
                >
                  <p>
                    This is meant to be dismissed, the user can click outside of the modal or click
                    the close button in the top right corner.
                  </p>
                </GoAModal>

                <GoAButton type="tertiary" onClick={() => setBasicModal2Open(true)}>
                  Open basic modal with actions
                </GoAButton>

                <GoAModal
                  heading="This is a modal with actions"
                  open={basicModal2Open}
                  role="alertdialog"
                  actions={
                    <GoAButtonGroup alignment="end">
                      <GoAButton type="tertiary" onClick={() => setBasicModal2Open(false)}>
                        Cancel
                      </GoAButton>
                      <GoAButton
                        type="primary"
                        onClick={() => {
                          setBasicModal2Open(false);
                        }}
                      >
                        Continue
                      </GoAButton>
                    </GoAButtonGroup>
                  }
                >
                  <p>This is meant to make the user choose an option in order to continue.</p>
                </GoAModal>

                <GoAButton type="tertiary" onClick={() => setContentModalOpen(true)}>
                  Open modal with lots of content and actions
                </GoAButton>

                <GoAModal
                  heading="This is a modal with lots of content"
                  open={contentModalOpen}
                  maxWidth="1200px"
                  role="alertdialog"
                  actions={
                    <GoAButtonGroup alignment="end">
                      <GoAButton type="tertiary" onClick={() => setContentModalOpen(false)}>
                        Cancel
                      </GoAButton>
                      <GoAButton
                        type="primary"
                        onClick={() => {
                          setContentModalOpen(false);
                        }}
                      >
                        Continue
                      </GoAButton>
                    </GoAButtonGroup>
                  }
                >
                  <p>
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                  </p>
                </GoAModal>

                <GoAButton type="tertiary" onClick={() => setContentModal2Open(true)}>
                  Open modal with lots of content and close button
                </GoAButton>

                <GoAModal
                  heading="This is a modal with lots of content"
                  open={contentModal2Open}
                  role="alertdialog"
                  onClose={() => setContentModal2Open(false)}
                >
                  <p>
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                  </p>
                </GoAModal>

                <GoAButton type="tertiary" onClick={() => setBasicModal3Open(true)}>
                  Open basic modal with actions and close button
                </GoAButton>

                <GoAModal
                  heading="This is a modal with actions and a close button"
                  open={basicModal3Open}
                  role="alertdialog"
                  onClose={() => setBasicModal3Open(false)}
                  actions={
                    <GoAButtonGroup alignment="end">
                      <GoAButton type="tertiary" onClick={() => setBasicModal3Open(false)}>
                        Cancel
                      </GoAButton>
                      <GoAButton
                        type="primary"
                        onClick={() => {
                          setBasicModal3Open(false);
                        }}
                      >
                        Continue
                      </GoAButton>
                    </GoAButtonGroup>
                  }
                >
                  <p>The use can dismiss the modal by clicking outside of the modal, clicking the close button, or choose an option to continue. </p>
                </GoAModal>

                <GoAButton type="tertiary" onClick={() => setNoHeaderModalOpen(true)}>
                  Open modal with no header
                </GoAButton>

                <GoAModal
                  heading=""
                  open={NoHeaderModalOpen}
                  role="alertdialog"
                  /* onClose={() => setNoHeaderModalOpen(false)} */
                  actions={
                    <GoAButtonGroup alignment="end">
                      <GoAButton type="tertiary" onClick={() => setNoHeaderModalOpen(false)}>
                        Cancel
                      </GoAButton>
                      <GoAButton
                        type="primary"
                        onClick={() => {
                          setNoHeaderModalOpen(false);
                        }}
                      >
                        Continue
                      </GoAButton>
                    </GoAButtonGroup>
                  }
                >
                  <p>This is a modal with no header. Choose an option to continue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis quam ac massa commodo fringilla. Sed gravida elit urna, vel rhoncus velit ullamcorper vitae. Phasellus ullamcorper enim et leo dignissim, sed dignissim mi varius.</p>
                </GoAModal>

              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="2xl">
                Notification banner
              </GoAText>

              <GoABlock gap="xl" mb="4xl" direction="column">
                <GoANotification type="information">Notification banner message</GoANotification>

                <GoANotification type="information">
                  Notification banner message that is really long and eventually it wraps around the
                  screen because it's so long that it needs to wrap around the screen
                </GoANotification>

                <GoANotification type="important">Notification banner message</GoANotification>

                <GoANotification type="emergency">Notification banner message</GoANotification>

                <GoANotification type="event">Notification banner message</GoANotification>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="2xl">
                Pagination
              </GoAText>

              <GoABlock gap="xl" mb="4xl" direction="column">


              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="xl">
                Popover
              </GoAText>

              <GoABlock gap="xl" mb="4xl" direction="column">
                <GoAPopover target={popovertarget}>
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                </GoAPopover>
              </GoABlock>


              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="4xl" mb="xl">
                Progress indicator
              </GoAText>

              <GoABlock>
                <GoACircularProgress
                  variant="inline"
                  size="small"
                  message="Loading message..."
                  visible={true}
                ></GoACircularProgress>
                <GoACircularProgress
                  variant="inline"
                  size="large"
                  message="Loading message..."
                  visible={true}
                ></GoACircularProgress>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="2xl">
                Radio
              </GoAText>

              <GoABlock gap="xl" mb="xl" direction="column">
                <GoAFormItem label="Basic radio">
                  <GoARadioGroup name="item" value="1" onChange={radio1}>
                    <GoARadioItem value="1" label="Label 1"></GoARadioItem>
                    <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                    <GoARadioItem value="3" label="Label 3"></GoARadioItem>
                    <GoARadioItem value="4" label="Label 4"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem label="Radio with helper text" helpText="Helper text here">
                  <GoARadioGroup name="item" value="1" onChange={radio2}>
                    <GoARadioItem value="1" label="Label 1"></GoARadioItem>
                    <GoARadioItem
                      value="2"
                      label="Label 2 that wraps to a long wide thing later Label 2 that wraps to a long wide thing later"
                    ></GoARadioItem>
                    <GoARadioItem value="3" label="Label 3"></GoARadioItem>
                    <GoARadioItem value="4" label="Label 4"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem label="Radio with helper text" helpText="Helper text here">
                  <GoARadioGroup disabled={true} name="item" value="1" onChange={radio2}>
                    <GoARadioItem value="1" label="Label 1"></GoARadioItem>
                    <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                    <GoARadioItem value="3" label="Label 3"></GoARadioItem>
                    <GoARadioItem value="4" label="Label 4"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem label="Radio items with descriptions">
                  <GoARadioGroup name="selectOne" value="1" onChange={radio3}>
                    <GoARadioItem
                      value="1"
                      label="Option one"
                      description={
                        <span>
                          Help text with a <a href="#">link</a>.
                        </span>
                      }
                    />
                    <GoARadioItem value="2" label="Option two" description="description text" />
                    <GoARadioItem
                      value="3"
                      label="Option three"
                      description="another description text"
                    />
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem
                  label="Radio with descriptions and helper text"
                  helpText="Helper text here"
                >
                  <GoARadioGroup name="selectOne" value="1" onChange={radio3}>
                    <GoARadioItem
                      value="1"
                      label="Option one"
                      description={
                        <span>
                          Help text with a <a href="#">link</a>.
                        </span>
                      }
                    />
                    <GoARadioItem value="2" label="Option two" description="description text" />
                    <GoARadioItem
                      value="3"
                      label="Option three"
                      description="another description text"
                    />
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem
                  label="Radio with error"
                  helpText="Helper text here"
                  error="Error message."
                >
                  <GoARadioGroup error={true} name="item" value="1" onChange={radio2}>
                    <GoARadioItem value="1" label="Label 1"></GoARadioItem>
                    <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                    <GoARadioItem value="3" label="Label 3"></GoARadioItem>
                    <GoARadioItem value="4" label="Label 4"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem label="Horizontal inputs" helpText="Helper text here">
                  <GoARadioGroup orientation="horizontal" name="item" value="1" onChange={radio2}>
                    <GoARadioItem value="1" label="Label 1"></GoARadioItem>
                    <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem
                  label="Disabled radio with item descriptions"
                  helpText="Helper text here"
                >
                  <GoARadioGroup disabled={true} name="item" value="1" onChange={radio2}>
                    <GoARadioItem
                      value="1"
                      label="Label 1"
                      description="description text"
                    ></GoARadioItem>
                    <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                    <GoARadioItem
                      value="3"
                      label="Label 3"
                      description="description text"
                    ></GoARadioItem>
                    <GoARadioItem value="4" label="Label 4"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem label="Disabled radio with error" helpText="Helper text here">
                  <GoARadioGroup
                    disabled={true}
                    error={true}
                    name="item"
                    value="1"
                    onChange={radio2}
                  >
                    <GoARadioItem
                      value="1"
                      label="Label 1"
                      description="description text"
                    ></GoARadioItem>
                    <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                    <GoARadioItem
                      value="3"
                      label="Label 3"
                      description="description text"
                    ></GoARadioItem>
                    <GoARadioItem value="4" label="Label 4"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="4xl" mb="xl">
                Scroll bar
              </GoAText>

              <GoABlock gap="xl" mb="3xl" direction="column">
                <GoAButton type="tertiary" onClick={() => setContentModalScrollOpen(true)}>
                  Open modal with lots of content to see scroll bar
                </GoAButton>

                <GoAModal
                  heading="This is a modal with lots of content"
                  open={contentModalScrollOpen}
                  maxWidth="400px"
                  role="alertdialog"
                  actions={
                    <GoAButtonGroup alignment="end">
                      <GoAButton type="tertiary" onClick={() => setContentModalScrollOpen(false)}>
                        Cancel
                      </GoAButton>
                      <GoAButton
                        type="primary"
                        onClick={() => {
                          setContentModalScrollOpen(false);
                        }}
                      >
                        Continue
                      </GoAButton>
                    </GoAButtonGroup>
                  }
                >
                  <p>
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                    This is a lot of content that make the modal scroll. This is a lot of content
                    that make the modal scroll. This is a lot of content that make the modal scroll.
                  </p>
                </GoAModal>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="xl">
                Side menu
              </GoAText>

              <GoABlock gap="3xl" mb="xl" direction="column">

                <div style={{ maxWidth: '256px' }}>
                  <GoASideMenu>
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    {/*<GoASideMenuGroup heading="Group heading" icon="person"> TODO: rebase with alpha to be able to use this*/}
                    <GoASideMenuGroup heading="Group heading">
                      <a href="#">Foo</a>
                      <a href="#">Bar ndjkasndnsa dsadsajd saj djsad jkas dka djk jks adjksa djkas dkjas djk askjd asjkd sajkd akjsd asd ksa djkas dja ds </a>
                    </GoASideMenuGroup>
                  </GoASideMenu>
                </div>

                <GoABlock gap="xl" direction="row">
                  <div style={{ maxWidth: '256px' }}>
                    <GoASideMenu>
                      <GoASideMenuHeading>This is a side menu heading</GoASideMenuHeading>
                      <a href="#">This is a side menu item</a>
                      <a href="#">This is another side menu item</a>
                      <goa-spacer vspacing="m"></goa-spacer>
                      <GoASideMenuHeading>This is another side menu heading</GoASideMenuHeading>
                      <a href="#">Side menu item</a>
                      <a href="#">Side menu item</a>
                      <goa-spacer vspacing="m"></goa-spacer>
                      <GoASideMenuHeading>Side menu heading</GoASideMenuHeading>
                      <GoASideMenuGroup heading="This is a side menu group">
                        <a href="#">Foo</a>
                        <a href="#">Bar</a>
                      </GoASideMenuGroup>
                      <GoASideMenuGroup heading="This is a side menu group">
                        <a href="#">Foo</a>
                        <a href="#">Bar</a>
                        <GoASideMenuGroup heading="This is a side menu group">
                          <a href="#">Foo</a>
                          <a href="#">Bar</a>
                          <GoASideMenuGroup heading="This is a side menu group">
                            <a href="#">Foo</a>
                            <a href="#">Bar</a>
                          </GoASideMenuGroup>
                        </GoASideMenuGroup>
                      </GoASideMenuGroup>
                    </GoASideMenu>
                  </div>

                  <div style={{ maxWidth: '256px' }}>
                    <GoASideMenu>
                      <GoASideMenuHeading icon="home">Nav section 1</GoASideMenuHeading>
                      <a href="#">Home</a>
                      <a href="#">Profile</a>
                      <goa-spacer vspacing="m"></goa-spacer>
                      <GoASideMenuHeading icon="pencil">Nav section 2</GoASideMenuHeading>
                      <a href="#">About</a>
                      <a href="#">Contact</a>
                      <goa-spacer vspacing="m"></goa-spacer>
                      <GoASideMenuHeading>Nav with sub nav</GoASideMenuHeading>
                      {/*<GoASideMenuGroup heading="Group heading" icon="person"> TODO: rebase with alpha to be able to use this*/}
                      <GoASideMenuGroup heading="Group heading">
                      <a href="#">Foo</a>
                        <a href="#">Bar ndjkasndnsa dsadsajd saj djsad jkas dka djk jks adjksa djkas dkjas djk askjd asjkd sajkd akjsd asd ksa djkas dja ds</a>
                      </GoASideMenuGroup>
                    </GoASideMenu>
                  </div>
                </GoABlock>
              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="xl">
                Table
              </GoAText>

              <GoABlock gap="2xl" mb="xl" direction="column">
                <GoATable width="100%">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Text</th>
                      <th className="goa-table-number-header">Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                  </tbody>
                </GoATable>

                <GoATable width="100%" variant="relaxed">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Text</th>
                      <th className="goa-table-number-header">Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                  </tbody>
                </GoATable>

                <GoATable onSort={sortData}>
                  <thead>
                    <tr>
                      <th>
                        <GoATableSortHeader name="firstName">First name</GoATableSortHeader>
                      </th>
                      <th>
                        <GoATableSortHeader name="lastName">Last name</GoATableSortHeader>
                      </th>
                      <th>
                        <GoATableSortHeader name="age" direction="asc">
                          Age
                        </GoATableSortHeader>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.firstName}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </GoATable>

              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="3xl" mb="2xl">
                Tabs
              </GoAText>

              <GoABlock gap="xl" mb="xl" direction="column">
                <GoATabs>
                  <GoATab heading="Tab 1">
                    Tab 1 content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoATab>
                  <GoATab heading="Tab 2 that has a longer name that wraps all thw ay to asdksnadnasda sad sadkasnd asd asd">
                    Tab 2 content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoATab>
                  <GoATab heading="Tab 3">
                    Tab 3 content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoATab>
                </GoATabs>

                <GoATabs>
                  <GoATab heading="Tab with a tooltip">
                    <GoATooltip content="Tooltip">
                      <GoAIcon type="information-circle"></GoAIcon>
                    </GoATooltip>
                  </GoATab>
                  <GoATab heading="Tab">No content</GoATab>
                </GoATabs>

              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="4xl" mb="2xl">
                Text area
              </GoAText>

              <GoABlock gap="2xl" mb="xl" direction="column">

                <GoAFormItem label="Basic text area" labelSize="regular">
                  <GoATextarea
                    countBy="character"
                    width="60ch"
                    name="item"
                    value={value}
                    onChange={onChangeTextArea}
                  ></GoATextarea>
                </GoAFormItem>

                <GoAFormItem label="Text area 100% width" labelSize="regular">
                  <GoATextarea
                    placeholder='placeholder content'
                    countBy="character"
                    width="100%"
                    name="item"
                    value={value}
                    onChange={onChangeTextArea}
                  ></GoATextarea>
                </GoAFormItem>

                <GoAFormItem label="Text area with a character counter" labelSize="regular">
                  <GoATextarea
                    countBy="character"
                    maxCount={30}
                    width="60ch"
                    name="item"
                    value={value}
                    onChange={onChangeTextArea}
                  ></GoATextarea>
                </GoAFormItem>

                <GoAFormItem label="Text area with a word counter" labelSize="regular">
                  <GoATextarea
                    countBy="word"
                    maxCount={30}
                    width="60ch"
                    name="item"
                    value={value}
                    onChange={onChangeTextArea}
                  ></GoATextarea>
                </GoAFormItem>

                <GoAFormItem
                  label="Text area with an error"
                  requirement="optional"
                  helpText="Here is some helper text"
                  error="Error message."
                >
                  <GoATextarea
                    error={true}
                    rows={3}
                    name="item"
                    countBy="word"
                    maxCount={100}
                    value={value}
                    onChange={onChangeTextArea}
                    width="80ch"
                  ></GoATextarea>
                </GoAFormItem>

                <GoAFormItem
                  label="Text area that's disabled"
                  requirement="optional"
                  helpText="Here is some helper text"
                >
                  <GoATextarea
                    disabled={true}
                    rows={3}
                    name="item"
                    countBy="character"
                    maxCount={100}
                    value={value}
                    onChange={onChangeTextArea}
                  ></GoATextarea>
                </GoAFormItem>

                <GoAContainer>
                  <GoAFormItem
                    label="Text area in a container"
                    requirement="optional"
                    helpText="Here is some helper text"
                  >
                    <GoATextarea
                      rows={6}
                      name="item"
                      value={value}
                      onChange={onChangeTextArea}
                      width="80ch"
                    ></GoATextarea>
                  </GoAFormItem>
                </GoAContainer>

              </GoABlock>

              {/* Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

              <GoAText size="heading-m" mt="4xl" mb="xl">
                Tooltip
              </GoAText>

              <GoABlock gap="xl" mb="3xl" direction="column">
                <GoATooltip content="Tooltip">
                  <GoAIcon type="information-circle"></GoAIcon>
                </GoATooltip>

                <GoATooltip content="Tooltip that has more content that wraps to a new line">
                  <GoAIcon type="information-circle"></GoAIcon>
                </GoATooltip>

                <GoATooltip content="Tooltip with bottom position" position="bottom">
                  <GoAIcon type="arrow-down"></GoAIcon>
                </GoATooltip>

                <GoATooltip content="Tooltip with right position" position="left">
                  <GoAIcon type="arrow-forward"></GoAIcon>
                </GoATooltip>

                <GoATooltip content="Tooltip on an icon button">
                  <GoAIconButton
                    variant="color"
                    size="medium"
                    icon="help-circle"
                    ariaLabel="Tooltip"
                  ></GoAIconButton>
                </GoATooltip>

              </GoABlock>

              <GoASpacer vSpacing="4xl"></GoASpacer>
            </GoabTab>

            {/* TAB ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <GoATab heading="Inputs">

              <GoABlock gap="2xl" direction="column" mt="none" mb="4xl">

                <GoAFormItem label="Text" helpText="Give information that is a small amount of text or numbers.">
                  <GoAInput
                    name="name1"
                    type="text"
                    value=""
                    width="20ch"
                  ></GoAInput>
                </GoAFormItem>

                <GoAFormItem label="Text area" helpText="Give information that is a large amount of text.">
                  <GoATextarea name="text area" rows={5} width="600px" countBy="character" maxCount={300}></GoATextarea>
                </GoAFormItem>

                <GoAFormItem label="Upload" helpText="Give one or more files.">
                  {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
                  <GoAFileUploadInput maxFileSize="100MB" variant="dragdrop" onSelectFile={() => {}} />
                </GoAFormItem>

                <GoAFormItem label="Radio" helpText="Choose one option from a small number of choices.">
                  <GoARadioGroup name="school" ariaLabel="are you currently in school?">
                    <GoARadioItem value="yes" label="Yes"></GoARadioItem>
                    <GoARadioItem value="no" label="No"></GoARadioItem>
                  </GoARadioGroup>
                </GoAFormItem>

                <GoAFormItem label="Dropdown" helpText="Choose one option from a longer list of choices." >
                  <GoADropdown
                    name="item"
                    value=""
                    placeholder="—Select an option—"

                  >
                    <GoADropdownItem value="red" label="20ch 000000000000000"></GoADropdownItem>
                    <GoADropdownItem value="green" label="abc"></GoADropdownItem>
                    <GoADropdownItem value="blue" label="MMM"></GoADropdownItem>
                  </GoADropdown>
                </GoAFormItem>

                <GoAFormItem label="Filterable dropdown" helpText="Choose one option from a very long list of choices.">
                  <GoADropdown name="item" value="" filterable={true}>
                    <GoADropdownItem value="red" label="bcdefghijklmnopqrstuvwxyz"></GoADropdownItem>
                    <GoADropdownItem value="green" label="abcd"></GoADropdownItem>
                    <GoADropdownItem value="blue" label="abcde"></GoADropdownItem>
                  </GoADropdown>
                </GoAFormItem>

                <GoAFormItem label="Checkbox list" helpText="Choose one or more options from a small number of choices.">
                  <GoACheckbox
                    name="item 1"
                    text="Option 1"
                    value=""
                  ></GoACheckbox>
                  <GoACheckbox
                    name="item 2"
                    text="Option 2"
                    value=""
                  ></GoACheckbox>
                  <GoACheckbox
                    name="item 3"
                    text="Option 3"
                    value=""
                    mb="none"
                  ></GoACheckbox>
                </GoAFormItem>

                <GoAFormItem label="Checkbox" helpText="Give consent or agree to something.">
                  <GoACheckbox
                    name="item 1"
                    text="I agree to allow the corporation to use my likeness in perpetuity..."
                    value=""
                    mb="none"

                  ></GoACheckbox>
                </GoAFormItem>

                <GoAFormItem label="Date" helpText="Choose a date from a calendar.">
                  <GoADatePicker name="item" value={new Date(2024, 8, 27)}></GoADatePicker>
                </GoAFormItem>

              </GoABlock>

            </GoATab>

            {/* TAB ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <GoATab heading="Tables">

              <GoABlock gap="xl" mb="xl" direction="column">


                <GoATable width="100%">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Text</th>
                      <th className="goa-table-number-header">Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Text that runs really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long	</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                  </tbody>
                </GoATable>

                <GoATable width="100%" variant="relaxed">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Text</th>
                      <th className="goa-table-number-header">Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Text that runs really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GoABadge type="information" content="Badge text" mt="2xs"></GoABadge>
                      </td>
                      <td>Lorem ipsum</td>
                      <td className="goa-table-number-column">1234567890</td>
                      <td>
                        <GoAButton type="tertiary" size="compact">Action</GoAButton>
                      </td>
                    </tr>
                  </tbody>
                </GoATable>

                <GoATable onSort={sortData}>
                  <thead>
                    <tr>
                      <th>
                        First name
                      </th>
                      <th>
                        <GoATableSortHeader name="lastName">Last name</GoATableSortHeader>
                      </th>
                      <th>
                        <GoATableSortHeader name="age" direction="asc">
                          Age
                        </GoATableSortHeader>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.firstName}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </GoATable>



              </GoABlock>

            </GoATab>

            {/* TAB ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <GoATab heading="Text">
              <a href="#" className="back-link">
                Back link
              </a>

              {/* Apply max width to input, not form item for fixed width inputs. */}


              <GoAText as="h1" size="heading-xl" mt="2xl" mb="none">
                Heading extra large as page h1
              </GoAText>
              <GoAText size="heading-l" mt="2xl" mb="none">
                Heading large
              </GoAText>
              <GoAText size="heading-m" mt="2xl" mb="none">
                Heading medium
              </GoAText>
              <GoAText size="heading-s" mt="2xl" mb="none">
                Heading small
              </GoAText>
              <GoAText size="heading-xs" mt="2xl" mb="none">
                Heading extra small
              </GoAText>

              <GoAText size="body-l" mt="xl" mb="none">
                Body large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dignissim erat
                quis iaculis.
              </GoAText>

              <GoAText size="body-m" mt="l" mb="xl">
                Body medium text, lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dignissim erat
                quis iaculis.
              </GoAText>
              <GoAText size="body-s" mt="l" mb="xl">
                Body small text, lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dignissim erat
                quis iaculis.
              </GoAText>
              <GoAText size="body-xs" mt="l" mb="xl">
                Body extra small text, lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dignissim erat
                quis iaculis.
              </GoAText>

              <GoAText as="h3" size="heading-l" mt="3xl" mb="4xl">
                Text component with margin top and bottom
              </GoAText>
              <GoAText as="h3" size="heading-l" mt="4xl">
                Text component with margin top
              </GoAText>
              <GoAText as="h3" size="heading-l" mb="4xl">
                Text component with margin bottom
              </GoAText>

            </GoATab>

            {/* TAB ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <GoATab heading="Skeleton loading">

              <GoABlock gap="xl" mb="xl" direction="column">
                <GoAText size="heading-s" mt="none" mb="m">
                  Image
                </GoAText>
                <GoASkeleton type="image" size={1}></GoASkeleton>
                <GoASkeleton type="image" size={2}></GoASkeleton>
                <GoASkeleton type="image" size={3}></GoASkeleton>
                <GoASkeleton type="image" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Text
                </GoAText>
                <GoASkeleton type="text" size={1}></GoASkeleton>
                <GoASkeleton type="text" size={2}></GoASkeleton>
                <GoASkeleton type="text" size={3}></GoASkeleton>
                <GoASkeleton type="text" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Title
                </GoAText>
                <GoASkeleton type="title" size={1}></GoASkeleton>
                <GoASkeleton type="title" size={2}></GoASkeleton>
                <GoASkeleton type="title" size={3}></GoASkeleton>
                <GoASkeleton type="title" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Text-small
                </GoAText>
                <GoASkeleton type="text-small" size={1}></GoASkeleton>
                <GoASkeleton type="text-small" size={2}></GoASkeleton>
                <GoASkeleton type="text-small" size={3}></GoASkeleton>
                <GoASkeleton type="text-small" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Avatar
                </GoAText>
                <GoASkeleton type="avatar" size={1}></GoASkeleton>
                <GoASkeleton type="avatar" size={2}></GoASkeleton>
                <GoASkeleton type="avatar" size={3}></GoASkeleton>
                <GoASkeleton type="avatar" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Header
                </GoAText>
                <GoASkeleton type="header" size={1}></GoASkeleton>
                <GoASkeleton type="header" size={2}></GoASkeleton>
                <GoASkeleton type="header" size={3}></GoASkeleton>
                <GoASkeleton type="header" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Paragraph
                </GoAText>
                <GoASkeleton type="paragraph" size={1}></GoASkeleton>
                <GoASkeleton type="paragraph" size={2}></GoASkeleton>
                <GoASkeleton type="paragraph" size={3}></GoASkeleton>
                <GoASkeleton type="paragraph" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Thumbnail
                </GoAText>
                <GoASkeleton type="thumbnail" size={1}></GoASkeleton>
                <GoASkeleton type="thumbnail" size={2}></GoASkeleton>
                <GoASkeleton type="thumbnail" size={3}></GoASkeleton>
                <GoASkeleton type="thumbnail" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Card
                </GoAText>
                <GoASkeleton type="card" size={1} maxWidth="360px"></GoASkeleton>
                <GoASkeleton type="card" size={2}></GoASkeleton>
                <GoASkeleton type="card" size={3}></GoASkeleton>
                <GoASkeleton type="card" size={4}></GoASkeleton>

                <GoAText size="heading-s" mt="3xl" mb="m">
                  Profile
                </GoAText>
                <GoASkeleton type="profile" size={1}></GoASkeleton>
                <GoASkeleton type="profile" size={2}></GoASkeleton>
                <GoASkeleton type="profile" size={3}></GoASkeleton>
                <GoASkeleton type="profile" size={4}></GoASkeleton>
              </GoABlock>
            </GoATab>

          </GoabTabs>
        </GoabPageBlock>
      </section>

      <section slot="footer">
        <GoAAppFooter url="http://localhost:4200" maxContentWidth="100%">
          <GoAAppFooterNavSection maxColumnCount={1} heading="Heading">
            <a href="g.html">Link 123we</a>
            <a href="h.html">Link 2</a>
            <a href="i.html">Link 3</a>
            <a href="j.html">Other thing</a>
          </GoAAppFooterNavSection>
          <GoAAppFooterNavSection maxColumnCount={1} heading="Heading">
            <a href="g.html">Link 123we</a>
            <a href="h.html">Link 2</a>
            <a href="i.html">Link 3</a>
            <a href="j.html">Other thing</a>
          </GoAAppFooterNavSection>
          <GoAAppFooterMetaSection>
            <a href="privacy.html">Meta link</a>
            <a href="disclaimer.html">Meta link</a>
            <a href="accessibility.html">Meta link</a>
            <a href="using-alberta.html">Meta link</a>
          </GoAAppFooterMetaSection>
        </GoAAppFooter>

        <GoAAppFooter maxContentWidth="100%"> </GoAAppFooter>

        <GoAAppFooter maxContentWidth="100%">
          <GoAAppFooterMetaSection>
            <a href="privacy.html">Meta link</a>
            <a href="disclaimer.html">Meta link</a>
            <a href="accessibility.html">Meta link</a>
            <a href="using-alberta.html">Meta link</a>
          </GoAAppFooterMetaSection>
        </GoAAppFooter>

        <GoAAppFooter maxContentWidth="100%">
          <GoAAppFooterNavSection maxColumnCount={1}>
            <a href="g.html">Link 1</a>
            <a href="h.html">Link 2</a>
            <a href="i.html">Link 3</a>
            <a href="j.html">Other thing</a>
          </GoAAppFooterNavSection>
        </GoAAppFooter>
      </section>
    </GoabOneColumnLayout >
  );
}

export default App;
