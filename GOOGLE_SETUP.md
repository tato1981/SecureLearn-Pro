# Configuración de Google OAuth

## Pasos para configurar el login con Google real

### 1. Crear proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google Identity

### 2. Configurar OAuth 2.0

1. Ve a "APIs y servicios" > "Credenciales"
2. Haz clic en "Crear credenciales" > "ID de cliente OAuth 2.0"
3. Selecciona "Aplicación web"
4. Agrega estos dominios autorizados:
   - `http://localhost:4322` (para desarrollo)
   - Tu dominio de producción

### 3. Obtener Client ID

1. Copia el "Client ID" generado
2. Reemplaza `TU_GOOGLE_CLIENT_ID_AQUI` en el archivo `src/config/google-config.js`

### 4. Configurar archivo de configuración

Edita el archivo `src/config/google-config.js`:

```javascript
export const GOOGLE_CONFIG = {
  clientId: 'tu-client-id-real-aqui.apps.googleusercontent.com',
  // Otros ajustes opcionales
  scopes: 'profile email',
  cookiePolicy: 'single_host_origin'
};
```

### 5. Verificar funcionamiento

1. Reinicia el servidor de desarrollo: `npm run dev`
2. Ve a la página de login
3. Prueba el botón "Continuar con Google"

## Notas importantes

- El Google Client ID debe ser específico para tu dominio
- En desarrollo usa `http://localhost:4322`
- En producción usa tu dominio real (HTTPS requerido)
- Los usuarios podrán iniciar sesión con cualquier cuenta de Google válida

## Solución de problemas

- **Error "origen no autorizado"**: Verifica que hayas agregado tu dominio en Google Console
- **Error "client_id inválido"**: Verifica que hayas copiado correctamente el Client ID
- **Error de CORS**: Asegúrate de que el dominio esté autorizado en Google Console

## Funcionalidades implementadas

✅ Autenticación real con Google OAuth2
✅ Manejo de tokens JWT
✅ Sincronización con sistema de gamificación
✅ Persistencia de sesión con localStorage
✅ Manejo de errores y estados de carga
✅ Compatibilidad con login tradicional

El sistema está completamente preparado para funcionar con Google OAuth real una vez que configures el Client ID.