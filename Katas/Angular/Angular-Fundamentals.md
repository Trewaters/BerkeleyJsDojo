# Angular Guide

Tips for Angular in general and step by step solutions to various Angular katas. This guide is based on Angular 7.

Make sure these basics are covered below:
- Services
- Directives
- Routing
- Filters (Pipes)
- Promises
- Templates
- Other

## Good To Know

- Below are concepts good to know in Angular
- ES6: classes
- ES6: templates
- TypeScript: types
- TypeScript: annotations
- build tools like webpack or gulp

### Build Process

- Convert TypeScript
- Modules
- Node.js tooling
- VSCode extension by Mikael Morlund "[Angular 8 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode)

### Parts and pieces

- `images` folder for all images
- `css` folder for all css
- `app` folder is where most of the Angular programming takes place.
- `package.json`
- `tsconfig.json`
- `index.html` imports `systemjs.config.js` and other scripts needed by Angular for backwards compatibility -`systemjs.config.js` (Angular 2 item) - hold app distribtion folder and first file loaded by Angular.

### Angular CLI

- install, `npm install @angular/cli`
- check version, `ng --version`
- new project, `ng new <APP-NAME>`
- create service worker files, `ng g s <SERVICE-NAME>`
- production build, `ng build --prod`
- add service workers to project, `ng add @angular/pwa`

# Anatomy of an Angular app

- `src/main.ts`, bootstraps the root module
- `<app-root></app-root>`, reference root module in the body of your HTML
- `src/app/app.module.ts`, imports the modules/features used in the Angular app
  - defines the "component/directives/pipes" it owns, makes those public for other modules to use, list other modules it depends on, and services the module wants to make available application wide.
  - modules are created for each feature in the app.
- [`@NgModule`](Module)
- [`@Component`](Component)
- **pipe** (`{{ VARIABLE | json }}`), transforms /formats template data.
- **Component lifecycle hooks**: `ngOnInit()` when component is initialized, `ngOnChanges()` when component data changes, `ngOnDestroy` when component is destroyed. [Documented here](https://angular.io/guide/lifecycle-hooks)
- `{{}}` are interpolations
- HTML elements attributes and properties. Attributes will hold the state of the object when it was initialized. Property is the value of the element currently, after being updated.
- `[]` square brackets are used to bind the HTML element's property ("binding target") to an Angular expression.
- `bind-` syntax is a cononical form of property binding.
  - `[src]="'/assets/images/' + currentExercise.exercise.image'"`
  - `bind-src="'/static/images' + currentExercise.exercise.image"`

## Module

- Application starts with the root module. This module is configured in the `main.ts`.
- Modules contain components, service providers, and other code files.
- `@NgModule` decorator [attributes documentation](https://angular.io/api/core/NgModule):
  - `declarations` module artifacts
  - `imports` external dependencies
  - `providers` services defined inside module that need to be registered globally
  - `bootstrap` set the "root component" in the root module only
  - `exports` module exports

## Component

- Declared in the root module declarations and has @Component decorator.
- Components store parts of the applications logic and provide a view for that logic.
- `@Component` [attributes documentation](https://angular.io/api/core/Component):
  - `selector`
  - `templateUrl`
  - `styles`
  - `providers`
  - `encapsulation`
- `<COMPONENT-NAME>.component.html`, component's html view
- `<COMPONENT-NAME>.component.css`, component's css
- `<COMPONENT-NAME>.component.spec.ts`, test file
- `<COMPONENT-NAME>.component.ts`, main code logic file

## Services
-

## Observables (RxJS)
- 

## HttpClient

- Powers REST APIs
- HTTPClient module [examples here](https://angular.io/guide/http)

## NgForm
- [NgForm documentation](https://angular.io/api/forms/NgForm#ngform)

## Attribute Directives Overview
- [Attribute Directive documentation](https://angular.io/guide/attribute-directives)
- `[hidden]` sets display to none when expression is true
- `[ngClass]` add css class when true ([documentation](https://angular.io/api/common/NgClass))
- `@HostListener` listens for DOM event ([documentation](https://angular.io/api/core/HostListener))
- `@Input` [documentation](https://angular.io/api/core/Input)

## Structural Directives
- [Structural Directive documentation](https://angular.io/guide/structural-directives)
- `ngIf`
- `<ng-template>`
- `ngFor`
- `TemplateRef`
- `ViewContainerRef`

## Reactive Forms
- `FormControl` [documentation](https://angular.io/api/forms/FormControl)
- `FormGroup` [documentation](https://angular.io/api/forms/FormGroup)
- `formControlName` [documentation](https://angular.io/api/forms/FormControlName)
- `setValue`
- `patchValue`
- `FormBuilder` [documentation](https://angular.io/api/forms/FormBuilder)
- `Validators`
- `FormArray` [documentation](https://angular.io/api/forms/FormArray)
- ``

## Environment files and variables
- 

# Angular Test

## Jasmine Testing

- `ng test`
- open website to view test

## Karma

- allows testing for one or more browsers
- launches karma test runner

## Protractor

- e2e testing?
