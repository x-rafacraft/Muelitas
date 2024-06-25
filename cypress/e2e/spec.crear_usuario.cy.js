describe('Creación de Usuario', () => {
  it('debería cargar la página de creación de usuario', () => {
    cy.visit('http://localhost:4200/dashboard-admin/usuarios/creacion-usuario');
    cy.contains('Crear Usuario').should('be.visible');
    // Llenar el campo Nombre
    cy.get('input[placeholder="Nombre"]').type('Pedro Martinez');
    // Llenar el campo Celular
    cy.get('input[placeholder="Contraseña"]').type('a1b2c3');
    // Llenar el campo Correo
    cy.get('input[ng-reflect-name="email"]').type('pmartinez@continental.edu.pe')
    // Llenar el campo Estado
    cy.get('select[ng-reflect-name="estado"]').select('Activo')
    // Llenar el campo Rol
    cy.get('select[ng-reflect-name="rol"]').select('admin')

    // Enviar el formulario
    // cy.get('button[type="submit"]').click()
    cy.get('form').submit()


    // Verificar que la creación fue exitosa (esto depende de cómo la aplicación maneje el éxito)
    // Suponiendo que redirige a una página con una lista de usuarios

    cy.visit('http://localhost:4200/dashboard-admin/usuarios/lista-usuario');
  });
});
