describe('Registro de Cita', () => {
  it('debería cargar la página de creación de citas', () => {
    cy.visit('http://localhost:4200/dashboard-estudiante/cita/creacion-cita')
    //cy.contains('Generar Cita').should('be.visible')

    // Interactuar con el campo Fecha
    cy.get('input[formcontrolname="fecha"]').type('2024-06-18')

    // Interactuar con el campo Hora
    cy.get('input[formcontrolname="hora"]').type('10:00')

    // Interactuar con el campo Motivo
    cy.get('textarea[formcontrolname="motivo"]').type('Consulta general')

    // Interactuar con el campo Odontólogo
    cy.get('select[id="odontologo"]').select('Dr. Juan Perez')

    // Interactuar con el campo Sede
    cy.get('select[id="sede"]').select('Huancayo')

    // Interactuar con el campo Extras
    cy.get('input[formcontrolname="extras"]').type('Necesito anestesia local')

    // Enviar el formulario
    cy.get('form').submit()

    // Verificar que la cita fue registrada exitosamente (esto depende de cómo la aplicación maneje el éxito)

    cy.visit('http://localhost:4200/dashboard-estudiante/cita/lista-cita')
  })
})
