// Configuración de Google OAuth2
// IMPORTANTE: En producción, estas credenciales deben estar en variables de entorno

export const GOOGLE_CONFIG = {
  // Client ID de Google Console 
  // INSTRUCCIONES PARA OBTENER TU CLIENT ID:
  // 1. Ve a https://console.cloud.google.com/
  // 2. Selecciona tu proyecto o crea uno nuevo
  // 3. Ve a "APIs y servicios" > "Credenciales"
  // 4. Haz clic en "Crear credenciales" > "ID de cliente OAuth 2.0"
  // 5. Selecciona "Aplicación web"
  // 6. En "Orígenes de JavaScript autorizados" agrega:
  //    - http://localhost:4323 (para desarrollo)
  //    - Tu dominio de producción
  // 7. Copia el Client ID y reemplázalo aquí abajo:
  
  CLIENT_ID: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
  
  // Scopes que necesita la aplicación
  SCOPES: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ],
  
  // Configuración adicional
  REDIRECT_URI: typeof window !== 'undefined' ? window.location.origin : '',
  
  // Para desarrollo local
  DEV_MODE: true
};

// Instrucciones para obtener las credenciales reales:
/*
1. Ve a Google Cloud Console: https://console.cloud.google.com/
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+ o Google Identity
4. Ve a "Credenciales" y crea un "ID de cliente OAuth 2.0"
5. Configura los dominios autorizados:
   - http://localhost:4322 (para desarrollo)
   - tu-dominio.com (para producción)
6. Copia el Client ID y reemplázalo en CLIENT_ID arriba
*/