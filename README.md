# Snappthis - Design Challenge - Data ophalen uit database
In sprint 8 hebben we de opdracht gekregen om een website/webapplicatie te ontwikkelen voor een opdrachtgever, samen met meerdere 1e jaars FDND-studenten. Tijdens deze eerste sprint (sprint 8) heb ik mij gericht op het ophalen van data uit de [FDND Directus database - Snappthis](https://fdnd-agency.directus.app/items/snappthis_group?fields=name,snappmap.snappthis_snapmap_uuid.*). Ik heb gebruik gemaakt van NodeJS, Express, JSON en Liquid.

#### Wat is Snappthis?
Snappthis is een mobiele webapplicatie waarmee gebruikers foto's delen binnen
zogenoemde snappmaps. Een gebruiker wordt uitgenodigd in een groep; die groep kan
meerdere snappmaps bevatten. Een begeleider, bijvoorbeeld een docent, maakt een
snappmap aan en geeft deze een thema of opdracht. Deelnemers delen hierin zelfgemaakte
foto's, die dienen als inspiratie- en gespreksonderwerp vanuit de echte wereld.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Voor het ontwikkelen van de website/ webapplicatie heb ik mij deze eerste sprint (sprint 8) gericht op het ophalen van data uit de [FDND Directus database - Snappthis](https://fdnd-agency.directus.app/items/snappthis_group?fields=name,snappmap.snappthis_snapmap_uuid.*). Aan de hand van [ontwerpen van de opdrachtgever](https://www.figma.com/design/0sXvjvqboOmfDuFMUcRHJh/2025snappthisDesign?node-id=0-1&t=wNnupeKFPlzL0bBO-1) heb ik verschillende [Sitemaps](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/issues/7) en [Wireflows](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/issues/9) gemaakt om de datastroom te begrijpen. 

Link naar website: https://server-side-rendering-server-side-website-vhl6.onrender.com/


<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik
Je zit als gebruiker in een groep waarvoor je uitgenodigd wordt, de groep kan meerdere
snappmaps hebben.

De snappmap wordt gemaakt door bijvoorbeeld een docent die een thema aan de
‘snappmap’ geeft. De leerlingen delen hierin hun gemaakte foto’s. De foto’s zorgen voor
gespreksonderwerpen en inspiratie uit de echte wereld.

<img width="200" alt="image" src="https://github.com/user-attachments/assets/785dc1fd-cb2f-4d4b-8232-5bee7282b0d4" />

>*Ontwerp van een snappmap met het thema 'Sunsets'*

## Kenmerken
Ik heb gebruik gemaakt van HTML, CSS, JS, NodeJS, Express, JSON en Liquid. 

Voor het ophalen en posten van data gebruiken we NodeJS, dat is een server-side software waarmee je dynamische websites kunt maken. De opgehaalde data wordt vanuit een object uitgelezen met [Liquid](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/blob/9d6c5484a47c021c376a560aebaaa4c179222a6e/views/groups.liquid#L23) in de HTML.

In NodeJS zijn er verschillende *routes* aangemaakt met data uit de [FDND Directus API](https://fdnd-agency.directus.app/items/snappthis_group?fields=name,snappmap.snappthis_snapmap_uuid.*) en gekoppeld aan de *views* map door een callback function toe te voegen. Elke keer dat een bezoeker een bepaalde route bezoekt, wordt de callback function uitgevoerd. In die functie wordt een view gerenderd. Aan die view wordt een object meegegeven met de data uit de API, zodat die gegevens ook in die view gebruikt kunnen worden.

Voorbeeld van een [route](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/blob/9d6c5484a47c021c376a560aebaaa4c179222a6e/server.js#L81-L88) voor het ophalen (GET) van gemaakte snapps in een snappmap. Met een [callback functie](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/blob/9d6c5484a47c021c376a560aebaaa4c179222a6e/server.js#L87) wordt deze route toegevoegd en gerenderd aan de `one-snappmap.liquid` in de *views* map.  
De [data](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/blob/9d6c5484a47c021c376a560aebaaa4c179222a6e/server.js#L83-L84) uit de API moet eerst in een variabel worden gezet om daarna de server te laten weten dat het in JSON geschreven staat. De variabel kan daarna worden meegegeven als [object]([https://github.com/JasinAhmed/connect-your-tribe-team-squad-page/blob/419cbed23620e9face46a27f148c4041d06112ce/server.js#L330](https://github.com/SieuwkeSheta/server-side-rendering-server-side-website/blob/9d6c5484a47c021c376a560aebaaa4c179222a6e/server.js#L87)), zodat de gegevens gebruikt kunnen worden in `one-snappmap.liquid`.

## Installatie
Volg deze stappen om de development omgeving in te richten om aan deze repository te kunnen werken:

Stap 1) installeer de [NodeJS ontwikkelomgeving](https://nodejs.org/en/download). Kies voor NodeJS 24.13.0 (LTS, long-term support), download het installatiebestand en doorloop het installatieproces.

Stap 2) Fork deze repository, *clone* deze op jouw computer en open het in VSCodium/ een code editor.

Stap 3) Open de Terminal in VSCodium, Voer in de terminal het commando `npm install uit` door het in te typen en op enter te drukken.

Stap 4 ) Na de installatie is de map `node_modules` aangemaakt, en gevuld met allerlei packages. Start de website door in de terminal het comando `npm start` uit te voeren. Als het goed is, komt hier een melding te staan over het opstarten van de server: Application started on http://localhost:8000 — Open deze URL in je browser

## Bronnen
- [Figma ontwerpen van de opdrachtgever](https://www.figma.com/design/0sXvjvqboOmfDuFMUcRHJh/2025snappthisDesign?node-id=0-1&t=FGaH92iMbFUM6n4w-1)
- [Mijn Figma ontwerpen](https://www.figma.com/design/CWbf0ryEYaCeoeqj8jnGHe/Snappthis---Sprint-8?node-id=0-1&t=TdQ73KwwxC3cZGt7-1)
- [FDND Directus Snappthis database](https://fdnd-agency.directus.app/items/snappthis_group?fields=name,snappmap.snappthis_snapmap_uuid.*)
- [Filter rules - @Directus](https://directus.io/docs/guides/connect/filter-rules)
- [Liquid Markup - @Modyo Docs](https://docs.modyo.com/en/platform/channels/liquid-markup.html)




## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
