import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabInput,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabBlock,
  GoabCard,
  GoabFormItem
} from '@abgov/angular-components';
import { GoabInputOnChangeDetail, GoabInputOnFocusDetail, GoabInputOnBlurDetail, GoabInputOnKeyPressDetail } from '@abgov/ui-components-common';

@Component({
  selector: 'abgov-input-reset-value',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabContainer,
    GoabInput,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabBlock,
    GoabCard,
    GoabFormItem
  ],
  templateUrl: './input-reset-value.component.html',
})
export class InputResetValueComponent implements OnInit {
// Form instances
  registrationForm: FormGroup;
  financialForm: FormGroup;
  addressForm: FormGroup;
  serviceForm: FormGroup;

// Basic state tracking
  basicState = {
    default: '',
    withValue: 'Sample text',
    error: ''
  };

  typeState = {
    text: '',
    email: '',
    password: '',
    tel: '',
    url: '',
    number: null
  };

  featureState = {
    leadingIcon: '',
    trailingIcon: '',
    prefix: null,
    suffix: null,
    maxLength: ''
  };

// Template-driven form data
  templateData = {
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    website: ''
  };

  templateValidationData = {
    username: '',
    email: ''
  };

// Interactive data
  eventTestValue = '';
  eventLog: string[] = [];
  lastEvent = '';
  passwordVisible = false;

  dynamicData = {
    input1: '',
    input2: '',
    input3: ''
  };

  dynamicProperties = {
    placeholder1: 'Type here...',
    disabled1: false,
    readonly1: false,
    maxLength1: 50,
    placeholder2: 'Search...',
    leadingIcon2: 'search',
    trailingIcon2: undefined as string | undefined,
    type3: 'text',
    prefix3: '',
    suffix3: ''
  };

  propertiesChanged = 0;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(120)]]
    });

    this.financialForm = this.fb.group({
      salary: [null, [Validators.required, Validators.min(0)]],
      sin: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{3}$/)]],
      accountNumber: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.addressForm = this.fb.group({
      streetAddress: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/)]]
    });

    this.serviceForm = this.fb.group({
      applicationId: ['', [Validators.required, Validators.pattern(/^APP-\d{4}-\d{6}$/)]],
      applicantName: ['', [Validators.required, Validators.minLength(3)]],
      serviceFee: [{ value: this.calculateServiceFee(), disabled: true }],
      contactPhone: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.logEvent('Component initialized');
  }

// Basic examples methods
  onBasicChange(type: string, event: GoabInputOnChangeDetail) {
    console.log(`Basic ${type} changed:`, event);
    (this.basicState as any)[type] = event.value;
    this.logEvent(`Basic ${type}: ${event.value}`);
  }

  onTypeChange(type: string, event: GoabInputOnChangeDetail) {
    console.log(`Type ${type} changed:`, event);
    (this.typeState as any)[type] = event.value;
    this.logEvent(`Type ${type}: ${event.value}`);
  }

  onFeatureChange(feature: string, event: GoabInputOnChangeDetail) {
    console.log(`Feature ${feature} changed:`, event);
    (this.featureState as any)[feature] = event.value;
    this.logEvent(`Feature ${feature}: ${event.value}`);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.logEvent(`Password visibility: ${this.passwordVisible ? 'visible' : 'hidden'}`);
  }

// Reactive form methods
  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      console.log('Registration Form Submitted:', this.registrationForm.value);
      this.logEvent('Registration form submitted successfully');
    } else {
      this.markFormGroupTouched(this.registrationForm);
      this.logEvent('Registration form submission failed - validation errors');
    }
  }

  resetRegistrationForm() {
    this.registrationForm.reset();
    this.logEvent('Registration form reset');
  }

  onFinancialFormSubmit() {
    if (this.financialForm.valid) {
      console.log('Financial Form Submitted:', this.financialForm.value);
      this.logEvent('Financial form submitted successfully');
    } else {
      this.markFormGroupTouched(this.financialForm);
      this.logEvent('Financial form submission failed - validation errors');
    }
  }

  resetFinancialForm() {
    this.financialForm.reset();
    this.logEvent('Financial form reset');
  }

  onAddressFormSubmit() {
    if (this.addressForm.valid) {
      console.log('Address Form Submitted:', this.addressForm.value);
      this.logEvent('Address form submitted successfully');
    } else {
      this.markFormGroupTouched(this.addressForm);
      this.logEvent('Address form submission failed - validation errors');
    }
  }

  resetAddressForm() {
    this.addressForm.reset();
    this.logEvent('Address form reset');
  }

  onServiceFormSubmit() {
    if (this.serviceForm.valid) {
      console.log('Service Form Submitted:', this.serviceForm.value);
      this.logEvent('Service application submitted successfully');
    } else {
      this.markFormGroupTouched(this.serviceForm);
      this.logEvent('Service form submission failed - validation errors');
    }
  }

  resetServiceForm() {
    this.serviceForm.reset();
    this.serviceForm.patchValue({ serviceFee: this.calculateServiceFee() });
    this.logEvent('Service form reset');
  }

// Template form methods
  onTemplateChange(field: string, event: GoabInputOnChangeDetail) {
    console.log(`Template ${field} changed:`, event);
    (this.templateData as any)[field] = event.value;
    this.logEvent(`Template ${field}: ${event.value}`);
  }

  onContactFormSubmit() {
    console.log('Contact Form Submitted:', this.templateData);
    this.logEvent('Contact form submitted');
  }

  resetContactForm() {
    this.templateData = {
      companyName: '',
      contactPerson: '',
      businessEmail: '',
      website: ''
    };
    this.logEvent('Contact form reset');
  }

  onTemplateValidationChange(field: string, event: GoabInputOnChangeDetail) {
    console.log(`Template validation ${field} changed:`, event);
    (this.templateValidationData as any)[field] = event.value;
    this.logEvent(`Template validation ${field}: ${event.value}`);
  }

  onTemplateValidationSubmit() {
    console.log('Template Validation Submitted:', this.templateValidationData);
    this.logEvent('Template validation form submitted');
  }

  resetTemplateValidationForm() {
    this.templateValidationData = {
      username: '',
      email: ''
    };
    this.logEvent('Template validation form reset');
  }

// Event tracking methods
  onEventTestChange(event: GoabInputOnChangeDetail) {
    this.logEvent(`Change: "${event.value}"`);
    this.lastEvent = 'change';
  }

  onEventTestFocus(event: GoabInputOnFocusDetail) {
    this.logEvent(`Focus: "${event.value}"`);
    this.lastEvent = 'focus';
  }

  onEventTestBlur(event: GoabInputOnBlurDetail) {
    this.logEvent(`Blur: "${event.value}"`);
    this.lastEvent = 'blur';
  }

  onEventTestKeyPress(event: GoabInputOnKeyPressDetail) {
    this.logEvent(`KeyPress: "${event.key}" (value: "${event.value}")`);
    this.lastEvent = 'keypress';
  }

  fillSampleData() {
    this.eventTestValue = 'Sample test data for events';
    this.logEvent('Sample data filled');
  }

  clearEventTest() {
    this.eventTestValue = '';
    this.logEvent('Event test input cleared');
  }

  focusEventTest() {
    this.logEvent('Focus requested programmatically');
  }

  clearEventLog() {
    this.eventLog = [];
    this.lastEvent = '';
    this.logEvent('Event log cleared');
  }

// Dynamic control methods
  onDynamicChange(field: string, event: GoabInputOnChangeDetail) {
    console.log(`Dynamic ${field} changed:`, event);
    (this.dynamicData as any)[field] = event.value;
    this.logEvent(`Dynamic ${field}: ${event.value}`);
  }

  toggleInputProperties() {
    this.dynamicProperties = {
      placeholder1: this.dynamicProperties.placeholder1 === 'Type here...' ? 'Enter data...' : 'Type here...',
      disabled1: !this.dynamicProperties.disabled1,
      readonly1: !this.dynamicProperties.readonly1,
      maxLength1: this.dynamicProperties.maxLength1 === 50 ? 20 : 50,
      placeholder2: this.dynamicProperties.placeholder2 === 'Search...' ? 'Find...' : 'Search...',
      leadingIcon2: 'search',
      trailingIcon2: undefined as string | undefined,
      type3: 'text',
      prefix3: this.dynamicProperties.prefix3 === '' ? '$' : '',
      suffix3: this.dynamicProperties.suffix3 === '' ? 'CAD' : ''
    };
    this.propertiesChanged++;
    this.logEvent('Input properties toggled');
  }

  randomizeInputValues() {
    const samples = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
    this.dynamicData = {
      input1: samples[Math.floor(Math.random() * samples.length)],
      input2: samples[Math.floor(Math.random() * samples.length)],
      input3: Math.random() > 0.5 ? Math.floor(Math.random() * 1000).toString() : samples[Math.floor(Math.random() * samples.length)]
    };
    this.logEvent('Input values randomized');
  }

  clearAllInputs() {
    this.dynamicData = { input1: '', input2: '', input3: '' };
    this.logEvent('All dynamic inputs cleared');
  }

  resetToDefaults() {
    this.dynamicProperties = {
      placeholder1: 'Type here...',
      disabled1: false,
      readonly1: false,
      maxLength1: 50,
      placeholder2: 'Search...',
      leadingIcon2: 'search',
      trailingIcon2: undefined,
      type3: 'text',
      prefix3: '',
      suffix3: ''
    };
    this.dynamicData = { input1: '', input2: '', input3: '' };
    this.propertiesChanged = 0;
    this.logEvent('Properties and values reset to defaults');
  }

// Formatting methods
  formatSIN(event: GoabInputOnChangeDetail) {
    const value = event.value?.replace(/\D/g, '') || '';
    if (value.length <= 9) {
      const formatted = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
      this.financialForm.patchValue({ sin: formatted }, { emitEvent: false });
    }
  }

  formatPostalCode(event: GoabInputOnChangeDetail) {
    const value = event.value?.toUpperCase().replace(/[^A-Z0-9]/g, '') || '';
    if (value.length <= 6) {
      const formatted = value.replace(/([A-Z]\d[A-Z])(\d[A-Z]\d)/, '$1 $2');
      this.addressForm.patchValue({ postalCode: formatted }, { emitEvent: false });
    }
  }

  formatPhoneNumber(event: GoabInputOnChangeDetail) {
    const value = event.value?.replace(/\D/g, '') || '';
    if (value.length <= 10) {
      const formatted = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      this.serviceForm.patchValue({ contactPhone: formatted }, { emitEvent: false });
    }
  }

  calculateServiceFee(): number {
    return 25.00; // Fixed government service fee
  }

// Utility methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.registrationForm.get(fieldName) || this.financialForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string | undefined {
    const field = this.registrationForm.get(fieldName) || this.financialForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) return 'This field is required';
      if (field.errors?.['email']) return 'Please enter a valid email address';
      if (field.errors?.['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
      if (field.errors?.['pattern']) return 'Please enter a valid format';
      if (field.errors?.['min']) return `Minimum value is ${field.errors['min'].min}`;
      if (field.errors?.['max']) return `Maximum value is ${field.errors['max'].max}`;
    }
    return undefined;
  }

  isAddressFieldInvalid(fieldName: string): boolean {
    const field = this.addressForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getAddressFieldError(fieldName: string): string | undefined {
    const field = this.addressForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) return 'This field is required';
      if (field.errors?.['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
      if (field.errors?.['pattern']) return 'Please enter a valid postal code (A1A 1A1)';
    }
    return undefined;
  }

  isServiceFieldInvalid(fieldName: string): boolean {
    const field = this.serviceForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getServiceFieldError(fieldName: string): string | undefined {
    const field = this.serviceForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) return 'This field is required';
      if (field.errors?.['pattern']) {
        if (fieldName === 'applicationId') return 'Format: APP-YYYY-XXXXXX';
        return 'Please enter a valid format';
      }
      if (field.errors?.['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
    }
    return undefined;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  private logEvent(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.push(`[${timestamp}] ${message}`);
    if (this.eventLog.length > 100) {
      this.eventLog = this.eventLog.slice(-50); // Keep last 50 events
    }
  }
}
