'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalizacionSchema extends Schema {
  up () {
    this.create('localizacions', (table) => {
      table.string('latitud', 25).notNullable()
      table.string('longitud', 25).notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('localizacions')
  }
}

module.exports = LocalizacionSchema
