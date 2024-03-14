import '../../core.globals';

import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { delay, distinctUntilChanged, lastValueFrom, of } from 'rxjs';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons';
import { TranslocoLoader, TranslocoService } from '@ngneat/transloco';
import { NgvI18nModule } from '@sebgroup/ngv-i18n';
import { NgvInputMaskModule } from '@sebgroup/ngv-input-mask';
import { TooltipDirective } from '@sebgroup/ngv-tooltip';
import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { ButtonComponent } from '../../button/button.component';
import { CharacterCountdownDirective } from '../../character-countdown/character-countdown.directive';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { DropdownUtils } from '../../core.utils';
import { DropdownListComponent } from '../../dropdown-list/dropdown-list.component';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { ExternalLinkDirective } from '../../external-link/external-link.directive';
import { InfoCircleComponent } from '../../info-circle/info-circle.component';
import { TypeaheadDirective } from '../typeahead.directive';
import { TypeaheadInputComponent } from './typeahead-input.component';

interface WithExtras {
  notice: string;
  tooltip?: string;
  info?: string;
  text?: string;
  ngModel: string;
}

const en = {
  'error.fieldinputmask': 'Invalid value pattern',
  'error.fieldrequired': 'Field must have content',
  'error.fieldmaxlength': 'Field content should not be longer than {{requiredLength}} characters',
  'label.defaultlabel': 'Label',
  'label.maxlength': 'characters left',
  'label.optional': 'Optional',
};

const sv = {
  'error.fieldinputmask': 'Icke giltigt tecken mönster',
  'error.fieldrequired': 'Fältet får inte lämnas tomt',
  'error.fieldmaxlength': 'Fältinnehållet måste vara längre än {{requiredLength}} tecken',
  'label.maxlength': 'tecken kvar',
};

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    if (lang === 'sv') {
      return lastValueFrom(of(sv).pipe(delay(1500)));
    }
    return lastValueFrom(of(en).pipe(delay(500)));
  }
}

let translocoServiceInstance: TranslocoService;

function translocoStorybookInitializer(translocoService: TranslocoService) {
  return () => {
    translocoServiceInstance = translocoService;
    translocoService.langChanges$.pipe(distinctUntilChanged()).subscribe();
  };
}

const meta: Meta<TypeaheadInputComponent> = {
  title: 'Core/TypeaheadInput',
  component: TypeaheadInputComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NgvI18nModule),
        {
          provide: APP_INITIALIZER,
          useFactory: translocoStorybookInitializer, // our initializer hook
          multi: true,
          deps: [TranslocoService], // the dependencies that Angular passes as arguments to our hook
        },
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => {
            return async () => iconLibrary.addIcons(faInfoCircle);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
        DropdownUtils,
      ],
    }),
    moduleMetadata({
      declarations: [
        ButtonComponent,
        DropdownComponent,
        DropdownListComponent,
        CheckboxComponent,
        TooltipDirective,
        InfoCircleComponent,
        CharacterCountdownDirective,
        ExternalLinkDirective,
      ],
      imports: [
        TypeaheadDirective,
        CommonModule,
        FontAwesomeModule,
        NgvI18nModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NgvInputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
      ],
    }),
  ],
};
export default meta;

const Template: StoryFn<TypeaheadInputComponent & WithExtras> = (args: TypeaheadInputComponent & WithExtras) => ({
  props: args,
});

const TemplateWithFormControl: StoryFn<TypeaheadInputComponent & WithExtras & any> = (
  args: TypeaheadInputComponent & WithExtras,
) => {
  const ctrl = new UntypedFormControl(args.ngModel, [Validators.required, Validators.maxLength(12)]);
  ctrl.valueChanges.subscribe((val) => {
    console.log('input control value:', val);
    console.log({ required: required() });
  });
  const toggleDisableField = () => {
    if (!!ctrl.disabled) return ctrl.enable();
    ctrl.disable();
  };
  const required = () => {
    const error = ctrl.validator && ctrl.validator({} as AbstractControl);
    return error && error.required;
  };
  return {
    template: /*html*/ `
    <ngv-input
      [label]="label"
      [formControl]="formControl">
    </ngv-input>
    <div style="margin-top: 1rem">
      <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
    </div>
    `,
    props: {
      ...args,
      formControl: ctrl,
    },
  };
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Field label',
  ngModel: 'textual value',
  description: 'This is a field description',
  required: undefined,
  optional: false,
  disabled: false,
  invalid: false,
};

export const WithFormControl = TemplateWithFormControl.bind({});
WithFormControl.args = {
  ...Primary.args,
  invalid: undefined,
  required: undefined,
  optional: undefined,
  valid: undefined,
};
