const db = require('./db')
const saveOrphanage = require('./saveOrphanage')

db.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: '-8.99199',
    lng: '13.363709',
    name: 'Lar das Crianças',
    about: 'Presta assistência todos os dias a noite',
    whatsapp: '+244 935 519 131',
    images: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

      'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

      'https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ].toString(),
    instructions: 'Venha bem uniformizado com alcóol e máscaras',
    opening_hours: 'Horário de visitas das 8h até 20h',
    open_on_weekends: '0',
  })

  // Consultar dados da tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages')
  console.log(selectedOrphanages)

  /* Consultar dados da tabela pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = ""')
  console.log(orphanage)

  // Deletar dado da tabela
  console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
  console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
  */
})
