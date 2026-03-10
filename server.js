// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('Hieronder moet je waarschijnlijk nog wat veranderen')

const params = {
  'fields': '*.*',
}
// Doe een fetch naar de data die je nodig hebt
const apiResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_group?' + new URLSearchParams(params))

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const apiResponseJSON = await apiResponse.json()

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {
  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee
  response.render('index.liquid')
})

// Maak een GET route voor alle Groups in de database
app.get('/groups', async function (request, response) {

  const MultipleGroupslistapiResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_group?fields=name,snappmap.snappthis_snapmap_uuid.*&fields=count(users)')
  const MultipleGroupslistapiResponseJSON = await MultipleGroupslistapiResponse.json()

  // Geef hier eventueel data aan mee
  response.render('groups.liquid', { MultipleGroupslist: MultipleGroupslistapiResponseJSON.data })
})

// Maak een GET route voor one-group met alle snappmaps
app.get('/groups/:name', async function (request, response) {

  const snappMapsapiResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_group/?fields=*.*,snappmap.snappthis_snapmap_uuid.*&deep[snappmap][_filter][snappthis_snapmap_uuid][_neq]=null&filter[name]=' + request.params.name)
  const snappMapsapiResponseJSON = await snappMapsapiResponse.json()

  // Geef hier eventueel data aan mee
  response.render('one-group.liquid', { SnappMapslist: snappMapsapiResponseJSON.data })
})

// Maak een GET route voor alle Groups in de database
app.get('/snappmaps', async function (request, response) {

  const MultipleSnappMapslistApiResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snapmap')
  const MultipleSnappMapslistApiResponseJSON = await MultipleSnappMapslistApiResponse.json()

  // Geef hier eventueel data aan mee
  response.render('snappmaps.liquid', { MultipleSnappMapslist: MultipleSnappMapslistApiResponseJSON.data })
})

// Maak een GET route voor one-snappmap met alle snapps
app.get('/snappmaps/:name', async function (request, response) {

  const OneSnappMappInfoApiResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=*.*,groups.snappthis_group_uuid.name&deep[snaps][_filter][picture][_neq]=null&filter[name]=' + request.params.name)
  const OneSnappMappInfoApiResponseJSON = await OneSnappMappInfoApiResponse.json()

  // Geef hier eventueel data aan mee
  response.render('one-snappmap.liquid', { OneSnappMappInfos: OneSnappMappInfoApiResponseJSON.data })
})
})

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
