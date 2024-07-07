function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('div');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
}

// Ejemplo de manejo de formularios de registro e inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para iniciar sesión
    console.log('Iniciar Sesión');
    showSection('principal');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para registrarse
    console.log('Registrarse');
    showSection('principal');
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para confirmar el pedido
    console.log('Confirmar Pedido');
    showSection('principal');
});
