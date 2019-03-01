# Angular Guide

Tips for Angular in general and step by step solutions to various Angular katas. This guide is based on Angular 7.

## Angular CLI

- install, `npm install @angular/cli`
- check version, `ng --version`
- new project, `ng new <APP-NAME>`
- create service worker files, `ng g s <SERVICE-NAME>`
- production build, `ng build --prod`
- add service workers to project, `ng add @angular/pwa`

## Anatomy of an Angular app

- `src/main.ts`, bootstraps the root module
- `<app-root></app-root>`, reference root module in the body of your HTML
- `src/app/app.module.ts`, imports the modules/features used in the Angular app
  - defines the "component/directives/pipes" it owns, makes those public for other modules to use, list other modules it depends on, and services the module wants to make available application wide.
  - modules are created for each feature in the app.
  - `@NgModule`[attributes](https://angular.io/api/core/NgModule): `imports` external dependencies, `declarations` module artifacts, `exports` module exports, `providers` services defined inside module that need to be registered globally, and `bootstrap` set the "root component" in the root module only.
- `<COMPONENT-NAME>.component.html`, component's html view
- `<COMPONENT-NAME>.component.spec.ts`, test file
- `<COMPONENT-NAME>.component.ts`, main code logic file
    - `@Component` [attributes](https://angular.io/api/core/Component): `selector`, `templateUrl`, `styles`, `providers`, and more.
- **pipe** (`{{ VARIABLE | json }}`), transforms /formats template data.
- **Component lifecycle hooks**: `ngOnInit()` when component is initialized, `ngOnChanges()` when component data changes, `ngOnDestroy` when component is destroyed. [Documented here](https://angular.io/guide/lifecycle-hooks)
- `{{}}` are interpolations
- HTML elements attributes and properties. Attributes will hold the state of the object when it was initialized. Property is the value of the element currently, after being updated.
- `[]` square brackets are used to bind the HTML element's property ("binding target") to an Angular expression.
- `bind-` syntax is a cononical form of property binding.
  - `[src]="'/assets/images/' + currentExercise.exercise.image'"`
  - `bind-src="'/static/images' + currentExercise.exercise.image"`
- 


## API

- works through the HTTPClient module. [examples here](https://angular.io/guide/http)

# Angular Test

## Jasmine Testing

- `ng test`
- open website to view test

## Karma

- allows testing for one or more browsers
- launches karma test runner

## Protractor

- e2e testing?
