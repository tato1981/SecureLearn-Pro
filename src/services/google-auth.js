// Servicio de autenticación con Google
class GoogleAuthService {
  constructor() {
    this.isInitialized = false;
    this.client = null;
    this.clientId = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"; // Reemplazar con tu Client ID real
  }

  // Inicializar el servicio de Google
  async initialize() {
    return new Promise((resolve, reject) => {
      if (this.isInitialized) {
        resolve(true);
        return;
      }

      // Verificar si el SDK de Google está cargado
      if (typeof google === 'undefined') {
        reject(new Error('Google SDK no está cargado'));
        return;
      }

      try {
        // Inicializar Google Identity Services
        google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.handleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true
        });

        this.isInitialized = true;
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  // Manejar la respuesta de credenciales de Google
  handleCredentialResponse(response) {
    try {
      // Decodificar el JWT token de Google
      const credential = response.credential;
      const payload = this.decodeJWT(credential);
      
      if (payload) {
        const user = {
          id: `google_${payload.sub}`,
          name: payload.name,
          email: payload.email,
          avatar: payload.picture,
          loginMethod: 'google',
          level: 0,
          points: 0,
          joinDate: new Date().toISOString(),
          googleId: payload.sub,
          emailVerified: payload.email_verified
        };

        // Notificar al sistema de autenticación
        if (window.authSystem) {
          window.authSystem.setCurrentUser(user);
          window.authSystem.showNotification('¡Bienvenido! Sesión iniciada con Google', 'success');
          
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        }
      }
    } catch (error) {
      console.error('Error al procesar credenciales de Google:', error);
      if (window.authSystem) {
        window.authSystem.showNotification('Error al iniciar sesión con Google', 'error');
      }
    }
  }

  // Decodificar JWT token (simple, sin verificación de firma)
  decodeJWT(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error al decodificar JWT:', error);
      return null;
    }
  }

  // Mostrar el prompt de Google Sign-In
  async signIn() {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Mostrar el prompt de Google
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // Si no se puede mostrar el prompt, usar el método alternativo
          this.signInWithPopup();
        }
      });
    } catch (error) {
      console.error('Error al iniciar sign-in:', error);
      this.showFallbackLogin();
    }
  }

  // Método alternativo con popup
  signInWithPopup() {
    try {
      // Crear un elemento temporalmente para el botón de Google
      const tempDiv = document.createElement('div');
      tempDiv.style.display = 'none';
      document.body.appendChild(tempDiv);

      google.accounts.id.renderButton(tempDiv, {
        theme: 'outline',
        size: 'large',
        type: 'standard',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'left',
        width: 250
      });

      // Simular click en el botón
      setTimeout(() => {
        const googleButton = tempDiv.querySelector('div[role="button"]');
        if (googleButton) {
          googleButton.click();
        }
        document.body.removeChild(tempDiv);
      }, 100);
    } catch (error) {
      console.error('Error en popup sign-in:', error);
      this.showFallbackLogin();
    }
  }

  // Mostrar login de respaldo si Google falla
  showFallbackLogin() {
    if (window.authSystem) {
      window.authSystem.showNotification(
        'Google Sign-In no está disponible. Por favor usa el login tradicional.', 
        'error'
      );
    }
  }

  // Cerrar sesión de Google
  signOut() {
    if (typeof google !== 'undefined' && google.accounts.id) {
      google.accounts.id.disableAutoSelect();
    }
  }

  // Verificar si Google SDK está disponible
  isGoogleSDKAvailable() {
    return typeof google !== 'undefined' && 
           google.accounts && 
           google.accounts.id;
  }

  // Obtener información del usuario actual de Google
  getCurrentGoogleUser() {
    // En la nueva API de Google Identity Services, no hay un método directo
    // para obtener el usuario actual, por lo que usamos localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    return currentUser && currentUser.loginMethod === 'google' ? currentUser : null;
  }
}

// Exportar para uso global
window.GoogleAuthService = GoogleAuthService;