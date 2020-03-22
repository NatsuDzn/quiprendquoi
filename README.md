# Qui prend quoi

## Installation

`npm install`

`npm run start`

Ouvrir `localhost:3000`

<!-- ⚠️ If style.css isn't created while launching `npm run start` or `npm run sass`, launch either one of these commands and open `style.scss` and edit it and save it -->

## Améliorations apportées

- Listes des items sur la page de la party/event (`app.js`, `party.pug`)
- Suppresion des items sur la page de la party/event (`app.js`, `party.pug`)
- Nombre des items dans la party/event (`parties.js`, `party.pug`)
- Modification du nom et de l'auteur de la party/event (`app.js`, `party.pug`, `editParty.pug`)
- Amélioration du design : offline page,card,buttons etc... (`style.scss`)

## Article personnel

### Les WebAPIs

Lors de ce TP et des cours de cette semaine j’ai eu l’occasion d’en apprendre plus sur les WebAPIs dont je n’avais pas « spécialement » connaissances car j’en utilise pas pendant mon alternance (ce qui pourrait m’être utile après réflexion). Leurs implémentations ne sont pas très complexes et permettent d’accéder à diverses informations de l’appareil comme la position, le presse-papier etc…

J’ai pu utiliser les WebAPIs (plus précisément celle du presse-papier) pendant ce tp ce qui permet de copier un contenu vers le presse papier (ou bien de couper/copier/coller).
Dans le cas de ce tp cette API est utilisée afin de copier un lien mais elle peut-être utilisé dans d’autres cas je pense notamment à un cas dans mon entreprise où l’utilisateur aurait la possibilité de copier un log.

<img align="center" src="https://i.imgur.com/I6zBmFa.png">

Ici nous regardons d’abord si le navigateur supporte cette API puis si c’est le cas un bouton apparaît avec la fonction copyToClipboard assigné.
Cette fonction va récupérer le contenu de l’input et le copier dans le presse papier.

Malgré leurs facilités d’implémentation j’ai remarqué que sur certains navigateurs il y avait quelques problèmes notamment l’API de partage qui est présente sur Chrome (sur Desktop) malgré le fait que ce bouton ne fasse rien.
Malgré ces petits inconvénients je pense qu'il est important de s'y intéresser car j'en aurai peut-être l'utilité un jour dans un projet ou bien même en alternance (avec le cas cité un peu plus haut).