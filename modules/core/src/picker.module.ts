import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { DatetimePickerAlertComponent } from "./alert.component";
import { DatetimePickerAlertController } from "./alert.controller";
import { DatetimePickerComponent } from "./picker.component";
import { DatetimePickerDirective } from "./picker.directive";

export interface DatetimePickerModuleConfig {
  // loader?: Provider;
  compiler?: Provider;
  // parser?: Provider;
  // missingTranslationHandler?: Provider;
  // // isolate the service instance, only works for lazy loaded modules or components with the "providers" property
  // isolate?: boolean;
  // useDefaultLang?: boolean;
}

@NgModule({
  declarations: [
    DatetimePickerAlertComponent,
    DatetimePickerComponent,
    DatetimePickerDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  entryComponents: [
    DatetimePickerAlertComponent,
  ],
  providers: [
    DatetimePickerAlertController,
  ],
  exports: [
    DatetimePickerDirective,
  ],
})
export class DatetimePickerModule {
  public static forRoot(config: DatetimePickerModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: DatetimePickerModule,
      providers: [
        config.compiler || {provide: "compiler", useValue: "test"},
        // config.loader || {provide: TranslateLoader, useClass: TranslateFakeLoader},
        // config.compiler || {provide: TranslateCompiler, useClass: TranslateFakeCompiler},
        // config.parser || {provide: TranslateParser, useClass: TranslateDefaultParser},
        // config.missingTranslationHandler || {provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler},
        // TranslateStore,
        // {provide: USE_STORE, useValue: config.isolate},
        // {provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang},
        // TranslateService
      ],
    };
  }

  public static forChild(config: DatetimePickerModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: DatetimePickerModule,
      providers: [
        config.compiler || {provide: "compiler", useValue: "test"},
        // config.loader || {provide: TranslateLoader, useClass: TranslateFakeLoader},
        // config.compiler || {provide: TranslateCompiler, useClass: TranslateFakeCompiler},
        // config.parser || {provide: TranslateParser, useClass: TranslateDefaultParser},
        // config.missingTranslationHandler || {provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler},
        // {provide: USE_STORE, useValue: config.isolate},
        // {provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang},
        // TranslateService
      ],
    };
  }
}
