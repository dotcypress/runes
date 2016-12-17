const { Suite } = require('benchmark')
const runes = require('../')

const tiny = 'abcdef'
const emoji = `Foo🍕⚽⛵✨⏳☕⏰🇯🇲😍👍💅😋`
const lorem = `
Lorem ipsum dolor sit amet, dolor phasellus nonummy dignissim felis porttitor, pede ut risus, netus enim ut. Morbi vulputate cras eget ut debitis. Tellus fames nullam. Wisi nam felis convallis. Mi turpis gravida lectus, sed ornare, felis sed cras a et odio nulla. Ut ac amet magna id suscipit, urna lectus amet nonummy elementum est urna, nec potenti vel sapien mauris amet a.
Amet bibendum parturient suscipit praesent cras mauris, id natoque purus consectetuer, urna placerat ultricies sed, est vitae vitae quis placerat, bibendum massa. Maecenas a lacus velit lorem, proin morbi tellus, in suspendisse. Sollicitudin parturient ligula donec metus, morbi amet est, ut gravida. In pede tellus maecenas. Interdum sodales sed voluptatem aut, netus nibh tincidunt, dapibus justo euismod sed, nulla quis nam mattis odio cras volutpat. In eu phasellus non pretium eget, eget habitasse mus magna mauris quam nostra, a dignissim.
Tempore tempus odio ornare qui hendrerit platea, lectus potenti lectus et, et fusce nullam enim in tempor. Ligula bibendum, adipiscing massa ipsum eros, quam in, quis dictum luctus elit ante, id non etiam tortor. Suspendisse vitae praesent cras morbi dignissim, ut neque, nulla ac, dolor proin facilisi nec accumsan sed. Nisl amet amet aperiam, volutpat id deserunt. Rutrum nonummy.
Malesuada elit mattis consectetuer phasellus morbi vitae, aptent nunc praesent, a vitae curabitur, urna venenatis sit. Sed id lacus ac, gravida imperdiet quis. Consequat est donec lectus dictum fringilla neque, ut nullam metus, pede aliquam dui augue, sociis non mi suspendisse vivamus quam, lectus vel nibh lectus ultricies. Mollis felis nulla massa, nulla semper montes, mauris nam arcu metus. Adipiscing laoreet nunc lectus porta felis hac, etiam vivamus phasellus consequat pede amet ipsum, nam nulla mauris justo auctor velit, ridiculus nisl accumsan quam arcu vestibulum purus. Vel rutrum non curabitur ullamcorper lobortis consequat, diam quam tempor, amet fermentum accumsan congue at non, eum ante nunc risus pulvinar, vitae etiam. Nam convallis.
Scelerisque rutrum, pellentesque sit nibh curabitur nostra libero etiam. Fusce hendrerit nostra proin ut. Neque orci, hendrerit sapien eu lorem nunc. Class netus dignissim vestibulum, auctor amet nulla tortor in turpis. Duis nullam proin duis ante vestibulum, quis cras et mollis ultrices. Mus tellus mauris adipiscing dapibus sed. In eros mauris et volutpat lorem luctus, tincidunt tellus mollis, molestie ultrices. Phasellus consectetuer ante cursus eleifend, purus eros pulvinar quia lorem diam in. Neque porta adipiscing tellus. Cras velit libero ultricies praesent lacus, eget dui suscipit semper netus, dolor sollicitudin erat aenean.
Augue morbi volutpat tellus ultricies elit, orci wisi non per lectus, vestibulum diam volutpat vitae, pede volutpat mi dui mauris nunc, maecenas eget. Semper etiam elit lorem. Cursus at tempus maecenas, rutrum convallis, hac libero rhoncus erat congue nunc. Cras nam sit, nulla lobortis enim eros, nullam tellus at amet, neque fermentum. Et dolor cras at. Suspendisse platea cursus, ut sit varius tempor, adipiscing iaculis luctus nec in orci, eget lorem, id consectetuer.
Id porttitor penatibus blandit eleifend, a diam eget ipsum, dis faucibus sit porttitor interdum quis. Lacus nulla ut mauris sem quisque, urna odio, ante turpis nulla eu, vel adipiscing metus nunc, viverra wisi dolor dui sit odio. Et turpis purus corrupti in maecenas, enim facilisi non sed ligula donec. Sed elit hendrerit arcu sit praesent, id ultricies hymenaeos amet vel, fringilla duis. Et nunc purus faucibus, ac morbi at vitae quisque, ultrices vestibulum augue bibendum pharetra autem. A ligula donec magna dictum mauris, justo in a tellus lobortis ante diam, dolore sed delectus, erat nunc condimentum lorem eget porttitor sed. Fames etiam pede amet, vestibulum metus integer adipiscing molestie laoreet, justo erat tellus etiam.
Justo phasellus aliquam nullam non purus mattis, wisi lorem, id ut, rutrum consequat a nec eget nostra, ligula interdum pede mattis metus ut. Libero amet ipsum quam magnis urna. Ligula vestibulum molestie nam at, placerat id at aliquam a ante. Urna ac euismod non cras porttitor vivamus, faucibus fusce, est nec ultricies habitasse, vel porta nibh non mauris mollit, enim sed neque dolor. Dictum consectetuer praesent molestie quis hendrerit, porttitor nec pellentesque inceptos ut enim, ut ut sapien adipiscing sed ornare.
Massa nulla sed gravida et quis, elit nulla eros wisi nec vestibulum, ac eu nulla ipsum wisi at lectus, eget lectus sapien, proin enim ante. Est ligula interdum nibh vel pede urna, purus nam mauris, turpis donec. Laoreet et duis et lectus lobortis, ut aliquam lacinia, in duis lacus porttitor dolor molestie sed. Et amet odio eget, sollicitudin non faucibus. Dapibus odio sed ac pellentesque sem, mattis facilisis elit, eros porta.
Eget ut ut, arcu odio, nulla eget felis sodales scelerisque, id nam sodales penatibus quis, elit in tincidunt dapibus vel sed risus. Molestie lectus donec pharetra eleifend, lectus id rhoncus varius potenti sit. Dictum accumsan sed, a habitasse amet, nullam inceptos est cursus amet in, mauris phasellus dictumst, consequat eu. Aliquam vel mauris praesent elementum phasellus venenatis, et accusantium nulla nibh aenean, sed eget ut suspendisse eros, mattis vestibulum id lacus, mauris lacus felis eget. Vestibulum convallis ante vestibulum sit, mauris sit risus pellentesque eu quisque, interdum aptent, eget massa nam sem.
`

function lenTest (name, content) {
  console.log(`> len :: ${name}`)
  new Suite()
  .add('String.length  ', function () {
    content.lenght
  })
  .add('ES6 iterator   ', function () {
    [...content].lenght
  })
  .add('runes          ', function () {
    runes.len(content)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('')
  })
  .run({ async: false })
}

function splitTest (name, content) {
  console.log(`> split :: ${name}`)
  new Suite()
  .add('String.split  ', function () {
    content.split('')
  })
  .add('ES6 iterator  ', function () {
    [...content]
  })
  .add('runes         ', function () {
    runes(content)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('')
  })
  .run({ async: false })
}

lenTest('tiny', tiny)
lenTest('emoji', emoji)
lenTest('lorem', lorem)
lenTest('mixed', lorem + emoji)

splitTest('tiny', tiny)
splitTest('emoji', emoji)
splitTest('lorem', lorem)
splitTest('mixed', lorem + emoji)
