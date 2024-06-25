describe('Registrar Paciente', () => {
  it('debería llenar y enviar el formulario de registro de paciente', () => {
      // Visitar la página de registro de paciente
      cy.visit('http://localhost:4200/dashboard-estudiante/paciente/creacion-paciente') // Ajusta esta URL si es necesario

      // Llenar el campo Fecha de Creación
      cy.get('input[placeholder="Fecha de Creación"]').type('2024-06-20')

      // Llenar el campo Hora de Creación
      cy.get('input[placeholder="Hora de Creación"]').type('10:00')

      // Llenar el campo Nombre
      cy.get('input[placeholder="Nombre del paciente"]').type('Luis')

      // Llenar el campo Apellido Paterno
      cy.get('input[placeholder="Apellido Paterno"]').type('Rojas')

      // Llenar el campo Apellido Materno
      cy.get('input[placeholder="Apellido Materno"]').type('Gonzales')

      // Llenar el campo Sexo
      cy.get('select[id="Sexo"]').select('Masculino')

      // Llenar el campo Lugar
      cy.get('input[placeholder="Lugar"]').type('Huancayo')

      // Llenar el campo Domicilio
      cy.get('input[placeholder="Domicilio"]').type('Calle Real 1234')

      // Llenar el campo Fecha de Nacimiento
      cy.get('input[placeholder="Fecha de Nacimiento"]').type('1990-01-20')

      // Llenar el campo Estado Civil
      cy.get('select[id="EstadoCivil"]').select('Soltero')

      // Llenar el campo Teléfono
      cy.get('input[placeholder="Número de celular"]').type('910235462')

      // Llenar el campo Correo
      cy.get('input[placeholder="Correo"]').type('luis.rojas@gmail.com')

      // Llenar el campo Ocupación
      cy.get('input[placeholder="Ocupación"]').type('Obrero')

      // Llenar el campo Responsable
      cy.get('input[placeholder="Responsable"]').type('Maria Perez')

      // Llenar el campo Domicilio del Responsable
      cy.get('input[placeholder="Domicilio del Responsable"]').type('Avenida Huancavelica 742')

      // Llenar el campo Teléfono del Responsable
      cy.get('input[placeholder="Teléfono del Responsable"]').type('935421366')

      // Llenar el campo Motivo Consulta
      cy.get('input[placeholder="Motivo de Consulta"]').type('Chequeo general')

      // Enviar el formulario
      cy.get('button[type="submit"]').click()

      // Verificar que el registro fue exitoso (esto depende de cómo la aplicación maneje el éxito)

      cy.visit('http://localhost:4200/dashboard-estudiante/paciente/lista-paciente')
  })
})
