# 📋 Ejemplo de configuración de Google Client ID

## ✅ Antes (actual):
```javascript
CLIENT_ID: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
```

## ✅ Después (con tu Client ID real):
```javascript
CLIENT_ID: "123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com",
```

## 🔧 Pasos rápidos:

### 1. Obtener Client ID:
1. Ve a: https://console.cloud.google.com/apis/credentials
2. Crear credenciales → ID de cliente OAuth 2.0
3. Tipo: Aplicación web
4. Orígenes autorizados: `http://localhost:4323`

### 2. Configurar en el proyecto:
1. Abre: `src/config/google-auth.js`
2. Reemplaza `YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com`
3. Pega tu Client ID real
4. Guarda el archivo

### 3. Probar:
1. Reinicia el servidor: `Ctrl+C` luego `npm run dev`
2. Ve a: http://localhost:4323/login
3. Haz clic en "Continuar con Google"

## ⚠️ Importante:
- El Client ID debe terminar en `.apps.googleusercontent.com`
- Debe incluir `http://localhost:4323` en orígenes autorizados
- Para producción, agregar tu dominio real con HTTPS

## 🚨 Si tienes problemas:
- Error "origen no autorizado": Verifica el dominio en Google Console
- Error "client_id inválido": Verifica que copiaste el ID completo
- No aparece popup: Verifica que el navegador permite popups

## 📞 ¿Necesitas ayuda?
Si tienes dificultades con algún paso, comparte:
1. Captura de pantalla de Google Console
2. Mensaje de error específico
3. El Client ID que obtuviste (puedes ocultar parte por seguridad)