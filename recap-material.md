# Angular Material

## Documentation : 

- composants : https://material.angular.dev/components
    - onglet Overview : exemples à copier
    - onglet API : directives, inputs, module à importer
    - onglet Styling : les overrides possibles

- thème : https://material.angular.dev/guide/theming

- CDK (drag & drop, overlay ...) : https://material.angular.dev/cdk

## Installation : 

- ng add @angular/material

- le thème demande du SCSS : styles.scss (et "src/styles.scss" dans angular.json)

## Thème (primary ...) : 

- dans styles.scss : 

```scss
@use '@angular/material' as mat;

html {
  color-scheme: light dark;
  @include mat.theme((
    color: (
      primary: mat.$violet-palette,
      tertiary: mat.$orange-palette,
    ),
    typography: Roboto,
    density: 0,
  ));
}
```

- palettes : $red, $green, $blue, $yellow, $cyan, $magenta, $orange, $chartreuse, $spring-green, $azure, $violet, $rose (+ -palette)

- mode : color-scheme: light / dark / light dark

- sa propre couleur : ng generate @angular/material:theme-color

- changer une variable : 

```scss
html {
  @include mat.theme-overrides((
    primary: #6200ee,
    on-primary: white,
  ));
}
```

## Variables CSS : 

- var(--mat-sys-primary), var(--mat-sys-on-primary)

- var(--mat-sys-secondary), var(--mat-sys-tertiary)

- var(--mat-sys-surface), var(--mat-sys-on-surface)

- var(--mat-sys-error), var(--mat-sys-outline)

- arrondis : var(--mat-sys-corner-medium)

- avec Tailwind : @theme { --color-mat-primary: var(--mat-sys-primary); } -> bg-mat-primary

## Taille : 

- densité globale : density: 0 (normal) à -5 (compact)

- densité locale : .compact { @include mat.theme((density: -2)); }

- un composant : @include mat.button-overrides((filled-container-height: 48px));

- largeur / placement : avec Tailwind (w-full, max-w-md mx-auto ...)

## Boutons : 

- module : MatButtonModule

- matButton : texte simple

- matButton="filled" : plein

- matButton="outlined" : bordure

- matButton="elevated" : avec ombre

- matButton="tonal" : couleur douce

- matIconButton : bouton rond avec icône

- matFab, matMiniFab : bouton flottant

- disabled : désactivé

## Positionner un bouton : 

- pas d'option sur le bouton lui-même

- mat-card-actions align="end" (start / end)

- mat-dialog-actions align="end" (start / center / end)

- ailleurs : flex justify-end / justify-center sur le parent

- mat-toolbar : ml-auto sur le bouton ou <span class="flex-1"></span> avant

## Composants courants : 

- carte : mat-card, mat-card-header, mat-card-title, mat-card-content, mat-card-actions

- barre : mat-toolbar

- champ : mat-form-field + mat-label + input matInput

- liste déroulante : mat-select + mat-option

- case : mat-checkbox, mat-slide-toggle, mat-radio-button

- menu : mat-menu + [matMenuTriggerFor]

- menu latéral : mat-sidenav-container, mat-sidenav, mat-sidenav-content

- onglets : mat-tab-group, mat-tab

- tableau : table mat-table

- dialogue : MatDialog (service) + mat-dialog-content / mat-dialog-actions

- notification : MatSnackBar (service)

- séparateur : mat-divider

## Icônes : 

- mat-icon : <mat-icon>home</mat-icon> (MatIconModule)

- Material Symbols : <span class="material-symbols-outlined">rocket_launch</span>

- taille = taille de police : style="font-size: 64px" ou !text-6xl (Tailwind)

- grande taille : font-variation-settings: 'opsz' 48;

- couleur : color / text-red-500
