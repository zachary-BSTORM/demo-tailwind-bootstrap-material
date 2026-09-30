# Les classes tailwind

## Le texte : 

- color : text-red-600 // de 50 à 950

- underline 

- taille : text-xs, text-sm, text-base, text-lg, text-xl, text-2xl ... text-9xl

- graisse : font-light, font-normal, font-medium, font-semibold, font-bold

- alignement : text-left, text-center, text-right, text-justify

- style : italic, uppercase, lowercase, capitalize, line-through

- interligne : leading-tight, leading-normal, leading-loose

- espacement des lettres : tracking-tight, tracking-wide

- ombre : drop-shadow-lg (lisible sur une image / vidéo)

- coupure des mots : hyphens-none, hyphens-manual, hyphens-auto (avec lang="fr")

- couper avec "..." : truncate

## Background : 

- color : bg-lime-400  // de 50 à 950

- transparence : bg-black/40 // 40% d'opacité

- image : bg-[url('/paysage1.jpg')]
    - l'image va dans public/ et s'appelle avec "/" devant (pas "public/")
    - bg-cover : remplit le bloc sans déformer
    - bg-center : image centrée
    - bg-no-repeat : pas de répétition
    - penser à donner une hauteur : h-screen, min-h-96 ...

- dégradé linéaire : bg-linear-to-r from-red-100 via-red-800 to-blue-950

- dégradé radial : bg-radial from-sky-200 to-indigo-900

- vidéo : impossible en bg-url -> balise video en absolute inset-0 w-full h-full object-cover

## Padding : 
- p-value

- p-2

- px-2 (gauche + droite), py-2 (haut + bas)

- pt-2, pr-2, pb-2, pl-2 (top, right, bottom, left)

## Margin :


- m-value

- m-2

- mx-auto : centre un bloc horizontalement (avec une largeur)

- mt-2, mr-2, mb-2, ml-2, mx-2, my-2

- m-auto

## Dimensions : 

- largeur : w-64, w-full, w-screen, w-1/2, max-w-md

- hauteur : h-64, h-full, h-screen, min-h-screen, min-h-96

- les deux : size-18

- valeur libre : w-[350px], h-[80vh]

## Bordures : 

- border, border-2, border-red-500

- rounded va de : 
    - rounded
    - rounded-sm
    - rounded-md
    - rounded-lg
    - rounded-xl, rounded-2xl, rounded-3xl
    - rounded-full
    - un seul côté : rounded-t-lg, rounded-b-lg, rounded-s-lg, rounded-e-lg

- ombre : shadow-sm, shadow, shadow-lg, shadow-xl

## Flex : 

- flex : active le flex (en ligne)

- flex-col : en colonne

- justify-center, justify-between, justify-around, justify-end : axe principal

- items-center, items-start, items-end : axe secondaire

- gap-4 : espace entre les éléments

- flex-wrap : passe à la ligne

- flex-1 : prend la même place que les autres

- grow, shrink-0, basis-1/3

## Grid : 

- grid grid-cols-3 gap-4

- responsive : grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

- col-span-2 : l'élément prend 2 colonnes

- justify-self-end, place-self-center : placer un seul enfant

## Centrer : 

- flex items-center justify-center (+ une hauteur)

- grid place-items-center (+ une hauteur)

- absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 (parent en relative)

- mx-auto (bloc) ou text-center (texte)

## Position : 

- relative, absolute, fixed, sticky

- inset-0 : colle aux 4 bords

- top-0, right-0, bottom-6, left-0

- z-10, z-50, -z-10 : ordre d'empilement

- overflow-hidden : cache ce qui dépasse

## Dimensions d'écran 

- sm : à partir de 640px
- md : à partir de 768px
- lg : à partir de 1024px
- xl : à partir de 1280px
- 2xl : à partir de 1536px

- s'utilise en préfixe : md:rounded-lg, lg:grid-cols-3
- mobile-first : "md:" = à partir de 768px (pas seulement md)
- une plage : md:max-lg:rounded-lg

## Cacher un element : 
- hidden

- hidden md:block : caché sur mobile, visible à partir de md

- md:hidden : visible sur mobile, caché à partir de md

- invisible : caché mais garde sa place

- opacity-0 : transparent

## États : 

- hover:bg-red-500 : au survol

- focus:ring-2 : au focus

- active:scale-95 : au clic

## Transitions et animations : 

- transition, transition-opacity, transition-colors

- durée : duration-700 (en v4 n'importe quel nombre : duration-3000)

- délai : delay-500

- courbe : ease-in, ease-out, ease-in-out

- animations : animate-spin, animate-ping, animate-pulse, animate-bounce

- durée d'une animation : animate-[spin_3s_linear_infinite]

- transformations : scale-110, rotate-45, translate-x-4

## Image / vidéo : 

- object-cover : remplit sans déformer

- object-contain : entière dans le bloc

## Valeurs libres : 

- entre crochets : bg-[url('/img.jpg')], w-[350px], text-[#ff0000]

- pas d'espace : remplacer par "_" -> bg-radial-[at_50%_75%]

- pas de classe construite dynamiquement (`bg-${couleur}`) -> utiliser [style]

# daisyUI

## Installation (Tailwind v4) : 

- rien dans .postcssrc.json

- dans src/styles.css : 
    - @import "tailwindcss";
    - @plugin "daisyui";

## Composants utiles : 

- bouton : btn, btn-primary, btn-ghost, btn-square, btn-circle, btn-sm

- navbar : navbar

- hero : hero, hero-content, hero-overlay

- menu hamburger : 
    - conteneur : dropdown (+ dropdown-left, dropdown-end, dropdown-hover)
    - bouton : btn btn-ghost + tabindex="0" role="button"
    - liste : ul dropdown-content menu

- menu latéral : drawer

- icône ☰ -> ✕ : swap swap-rotate

- texte qui défile : text-rotate

- couleurs du thème : bg-base-100, bg-base-200, text-primary
