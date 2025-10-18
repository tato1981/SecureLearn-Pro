// 🎭 Google Auth Demo - Simulación avanzada sin configuración
export class GoogleAuthDemo {
  constructor() {
    this.isInitialized = false;
    this.demoUsers = [
      {
        sub: '100000000000000000001',
        email: 'admin.google@gmail.com',
        name: 'Admin Google',
        picture: 'https://ui-avatars.com/api/?name=Admin+Google&background=ea4335&color=fff&size=128',
        email_verified: true,
        role: 'admin'
      },
      {
        sub: '100000000000000000002', 
        email: 'usuario.demo@gmail.com',
        name: 'Usuario Demo',
        picture: 'https://ui-avatars.com/api/?name=Usuario+Demo&background=4285f4&color=fff&size=128',
        email_verified: true,
        role: 'user'
      },
      {
        sub: '100000000000000000003',
        email: 'maria.garcia@gmail.com', 
        name: 'María García',
        picture: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=34a853&color=fff&size=128',
        email_verified: true,
        role: 'user'
      },
      {
        sub: '100000000000000000004',
        email: 'carlos.rodriguez@gmail.com',
        name: 'Carlos Rodríguez', 
        picture: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=fbbc05&color=000&size=128',
        email_verified: true,
        role: 'instructor'
      }
    ];
  }

  static initialize() {
    console.log('🎭 Google Auth Demo - Simulación avanzada activa');
    console.log('✨ Usuarios disponibles:', [
      'admin.google@gmail.com',
      'usuario.demo@gmail.com', 
      'maria.garcia@gmail.com',
      'carlos.rodriguez@gmail.com'
    ]);
    return Promise.resolve({ success: true });
  }

  static async signIn() {
    return new Promise((resolve) => {
      // Simular popup de Google y selección de usuario
      const demo = new GoogleAuthDemo();
      
      // Simular delay realista de Google
      setTimeout(() => {
        // Seleccionar usuario aleatorio para hacer más realista
        const randomUser = demo.demoUsers[Math.floor(Math.random() * demo.demoUsers.length)];
        
        const response = {
          success: true,
          user: {
            ...randomUser,
            // Agregar datos adicionales como los reales de Google
            given_name: randomUser.name.split(' ')[0],
            family_name: randomUser.name.split(' ').slice(1).join(' '),
            locale: 'es',
            hd: randomUser.email.includes('gmail.com') ? undefined : randomUser.email.split('@')[1]
          },
          credential: {
            // Simular JWT token (no real, solo para demo)
            token: `demo.jwt.token.${Date.now()}`,
            expires_at: Date.now() + (60 * 60 * 1000), // 1 hora
          }
        };

        console.log('🎉 Google Demo Login exitoso:', randomUser.name);
        resolve(response);
      }, 1200); // Delay realista
    });
  }

  static async signOut() {
    console.log('👋 Google Demo Logout');
    return Promise.resolve({ success: true });
  }

  // Método para seleccionar usuario específico (útil para testing)
  static async signInAs(email) {
    return new Promise((resolve) => {
      const demo = new GoogleAuthDemo();
      const user = demo.demoUsers.find(u => u.email === email);
      
      if (!user) {
        resolve({ 
          success: false, 
          error: `Usuario demo no encontrado: ${email}` 
        });
        return;
      }

      setTimeout(() => {
        resolve({
          success: true,
          user: {
            ...user,
            given_name: user.name.split(' ')[0],
            family_name: user.name.split(' ').slice(1).join(' '),
            locale: 'es'
          }
        });
      }, 800);
    });
  }

  // Obtener lista de usuarios demo disponibles
  static getDemoUsers() {
    const demo = new GoogleAuthDemo();
    return demo.demoUsers.map(user => ({
      email: user.email,
      name: user.name,
      role: user.role
    }));
  }
}