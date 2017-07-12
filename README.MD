# Duality

WIP Library with pre-build directives for Angular 2

## Table of contents 
1. [Installation](#installation)
2. [Available Modules](#available-modules)
3. [Modules Description & Usage](#modules-description--usage)
4. [Live Page](#live-page)
4. [License](#license)
5. [Note](#note)

# Installation

To install Duality, run:

```bash
$ npm install ngx-duality --save
```

Then add the follow sass file into your main styles file (should be styles.sass), this file it's required for most of components.

```sass
  @import "~ngx-duality/styles/ngx-duality.scss";
```

# Available Modules

I'm planning create more modules with the time.

**List of modules:**

1. [OverStyle](#overstyle)
2. [Grid Layout](#grid)
3. [Wrapper Layout](#wrapper)
4. [Header](#header)
5. [Footer](#footer)
6. [Sidebar](#sidebar)

# Modules Description & Usage

### OverStyle:

Overstyle is a directive that allow to create multiple styles to different browsers and operating systems.

**Usage:**

Once you install Duality:

```bash
$ npm install ngx-duality
```

go to the `AppModule` of your project and import `NgxOverStyleModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import OverStyle module
import { NgxOverStyleModule } from 'duality';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the module as an import
    NgxOverStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once NgxOverStyleModule is imported, you can use the directive in your Angular application:

```xml
<!-- Now add the OverStyle directive in the element that you want to enable the multi styles -->
<h1 overStyle>
  {{title}}
</h1>
```
Now you can create your styles for differents browsers and OS:
```sass
h1.WINDOWS {
  // WINDOWS STYLES...
  &.CHROME {
    // CHROME STYLES...
  }
  &.FIREFOX {
    // FIREFOX STYLES...
  }
  .
  .
  .
}
```

**OverStyle provide the next classes**

**OS classes:**
* WINDOWS
* LINUX
* MAC

**Browser classes:**
* CHROME
* FIREFOX
* OPERA
* SAFARI
* EDGE
* IE

### Grid Layout

Grid layout based on flex-box (You know, the grid of all life based on 12 columns).

**Usage**

Only you need to import the style sass file from ngx-duality to get access to the grid classes:

```sass
  @import "~ngx-duality/styles/ngx-duality.scss";
```

Live demo soon :tophat:... 

### Wrapper Layout

The wrapper are a couple of classes to mainting everything in his place (required for header and footer).

**Usage**

First import the style sass file from ngx-duality:

```sass
  @import "~ngx-duality/styles/ngx-duality.scss";
```

then add the following template into your app.component.html file:

```html 
  <div class="ngx-wrapper">
    <div class="ngx-content ngx-row">
    
      <!-- All your stuffs here! -->
      
    </div>
</div>
```

### Header:

This it's a pre-build sass class, add it into your project and make everything easier.

**Usage**

Once imported the style sass file from ngx-duality:

```sass
  @import "~ngx-duality/styles/ngx-duality.scss";
```
go to app.component.html file and add the following template:

```html
  <div class="ngx-wrapper">
    <header class="ngx-header">
    
      <!-- Header content here! -->
      
    </header>
    <div class="ngx-content ngx-row">
      <!-- All your stuffs here! -->
    </div>
</div>
```

The header comes with position fixed by default, but without background-color and height, but don't worry the header class is exposed so you can style it pretty easy.

```sass
  .ngx-header {
    background-color: any-color ;
    height: any-height;
    .
    .
    .
  }
```

### Header:

This it's a pre-build sass class, add it into your project and make everything easier (yes it's a copy paste).

**Usage**

Once imported the style sass file from ngx-duality:

```sass
  @import "~ngx-duality/styles/ngx-duality.scss";
```
go to app.component.html file and add the following template:

```html
  <div class="ngx-wrapper">
    <header class="ngx-header">
      <!-- Header content here! -->
    </header>
    <div class="ngx-content ngx-row">
      <!-- All your stuffs here! -->
    </div>
    <footer class="ngx-footer">
    
      <!-- Footer content here! -->
      
    </footer>
</div>
```

The footer comes with position relative by default and without background-color and height, but don't worry the footer class is exposed so you can style it pretty easy.

```sass
  .ngx-footer {
    background-color: any-color ;
    height: any-height;
    .
    .
    .
  }
```

### Sidebar:

The sidebar it's a pre-build component, if you wanna use it in your proyect follow the next steps:

**Usage**

Once you install Duality:

```bash
$ npm install ngx-duality
```

go to the `AppModule` of your proyect and import `NgxSidebarModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Sidebar module
import { NgxSidebarModule } from 'ngx-duality';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the module as an import
    NgxSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Once you import the module go to the `app.component.html` file and add the follow template:

```html
  <div class="ngx-wrapper">
   <ngx-sidebar (isMobile)="handleMobile($event)" [toggle]="status.isopen">
   
     <!-- Sidebar content here! -->
     
  </ngx-sidebar>
    <header class="ngx-header">
      <!-- Header content here! -->
    </header>
    <div class="ngx-content ngx-row">
      <!-- All your stuffs here! -->
    </div>
    <footer class="ngx-footer">
      <!-- Footer content here! -->
    </footer>
</div>
```
If you notice the component comes with some attributes, in the next table will be explained:

| Atributte | Type | Descritpion |
|-----------|------|-------------|
| [toggle] | boolean | Open or hide the modal |
| (isMobile) | event | Emit true if the sidebar it's on mobile mode or false if it's on desktop mode |

## Live Page

Live page soon :tophat:... 

## License

MIT © [Daniel Torres](mailto:danny908t@gmail.com)

## Note

The library it's updated very offen, so don't forget to check new functionality in the fucture.