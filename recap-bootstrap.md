# Bootstrap 5

## Documentation : 

- https://getbootstrap.com/docs/5.3/

## Installation : 

- npm install bootstrap

- dans angular.json (build > options) : 

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

- le JS "bundle" contient Popper : dropdown, modal, collapse, tooltip

- ou dans styles.css : @import 'bootstrap/dist/css/bootstrap.min.css';

- variables en SCSS : $primary: #6200ee; puis @import 'bootstrap/scss/bootstrap';

- version Angular sans JS Bootstrap : ng add @ng-bootstrap/ng-bootstrap

- relancer ng serve après modification de angular.json

- attention : conflits avec Tailwind / daisyUI (btn, navbar, hidden, container ...)

## Dimensions d'écran : 

- sm : à partir de 576px
- md : à partir de 768px
- lg : à partir de 992px
- xl : à partir de 1200px
- xxl : à partir de 1400px

- le breakpoint se met au milieu : col-md-6, d-md-none, text-md-center

## Grille : 

- container (largeur max) / container-fluid (pleine largeur)

- row : une ligne

- col : colonnes égales

- col-6 : 6 colonnes sur 12

- responsive : col-12 col-md-6 col-lg-4

- espace entre colonnes : g-3 (gx-3, gy-3)

- centrer une colonne : offset-md-3

## Flex : 

- d-flex : active le flex

- flex-column : en colonne

- justify-content-start / center / end / between / around / evenly

- align-items-start / center / end / stretch

- flex-wrap : passe à la ligne

- flex-grow-1 : prend la place restante

- gap-3 : espace entre les éléments

## Centrer : 

- d-flex justify-content-center align-items-center vh-100

- mx-auto (bloc avec une largeur)

- text-center (texte)

- ms-auto : pousse à droite, me-auto : pousse à gauche

## Padding / Margin : 

- p-value / m-value : de 0 à 5 (+ auto pour margin)

- côtés : t (top), b (bottom), s (start = gauche), e (end = droite), x, y

- exemples : p-3, px-2, mt-4, mb-0, mx-auto

## Texte : 

- alignement : text-start, text-center, text-end

- justifier : plus de classe en v5 -> text-align: justify; en CSS

- taille : fs-1 (grand) à fs-6 (petit), display-1 à display-6 (titres)

- graisse : fw-light, fw-normal, fw-bold

- style : fst-italic, text-uppercase, text-lowercase, text-decoration-underline

- couper avec "..." : text-truncate

## Couleurs : 

- primary, secondary, success, danger, warning, info, light, dark

- texte : text-primary, text-danger ...

- fond : bg-primary, bg-dark ...

- fond + texte lisible : text-bg-primary

- transparence : bg-opacity-50

## Dimensions : 

- largeur : w-25, w-50, w-75, w-100, w-auto

- hauteur : h-25, h-50, h-75, h-100

- écran : vw-100, vh-100, min-vh-100

## Bordures : 

- border, border-0, border-primary, border-2

- rounded, rounded-0 à rounded-5, rounded-circle, rounded-pill

- un côté : rounded-top, rounded-end, rounded-bottom, rounded-start

- ombre : shadow-sm, shadow, shadow-lg

## Cacher un element : 

- d-none

- d-none d-md-block : caché sur mobile, visible à partir de md

- d-md-none : visible sur mobile, caché à partir de md

- invisible : caché mais garde sa place

## Position : 

- position-relative, position-absolute, position-fixed, position-sticky

- top-0, bottom-0, start-0, end-0, top-50, start-50

- centrer en absolu : top-50 start-50 translate-middle

- fixed-top, sticky-top

- z-index : z-0, z-1, z-2, z-3

## Boutons : 

- btn btn-primary (plein)

- btn btn-outline-primary (bordure)

- taille : btn-sm, btn-lg

- toute la largeur : w-100

- groupe : btn-group

## Composants courants : 

- navbar : navbar navbar-expand-lg + navbar-toggler (hamburger) + collapse navbar-collapse

- dropdown : dropdown + dropdown-toggle data-bs-toggle="dropdown" + ul dropdown-menu + dropdown-item

- carte : card, card-body, card-title, card-text, card-img-top

- modal : modal, modal-dialog, modal-content (ouvert avec data-bs-toggle="modal")

- alerte : alert alert-success

- badge : badge text-bg-primary

- formulaire : form-control, form-label, form-select, form-check

- images : img-fluid (s'adapte à la largeur)

## Icônes : 

- Bootstrap Icons : npm install bootstrap-icons

- dans styles.css : @import 'bootstrap-icons/font/bootstrap-icons.css';

- <i class="bi bi-rocket"></i> (taille avec fs-1 ou font-size)
