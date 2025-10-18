# SecureLearn Pro - Plataforma de Micro-Learning Gamificada

Una plataforma web innovadora construida con Astro y Tailwind CSS para fortalecer la ciberseguridad en instituciones financieras colombianas a través del micro-learning gamificado.

## 🎯 Objetivo

Aplicar la metodología Design Thinking para diseñar una solución innovadora que mitigue el riesgo de brechas de seguridad causadas por ingeniería social (especialmente phishing) en las instituciones financieras de Colombia.

## 🚀 Características Principales

### 🎮 Sistema de Gamificación
- **Puntos y Niveles**: Sistema de recompensas por completar lecciones
- **Insignias**: Reconocimientos por logros específicos
- **Ranking**: Leaderboard individual y por departamentos
- **Desafíos**: Competencias semanales y torneos

### 📚 Micro-Learning
- **Lecciones de 3-5 minutos**: Contenido digestible y enfocado
- **Categorías especializadas**: Phishing, Ingeniería Social, Contraseñas, Normativas
- **Rutas de aprendizaje**: Programas estructurados para diferentes niveles
- **Contenido contextualizado**: Específico para el sector financiero colombiano

### 🎯 Simulador de Phishing
- **Escenarios hiper-contextualizados**: Ataques específicos del sector financiero
- **Simulacros de instituciones reales**: Superintendencia Financiera, clientes VIP
- **Práctica segura**: Entorno controlado para aprender sin riesgos
- **Métricas de desempeño**: Seguimiento del progreso y mejora

## � Sistema de Autenticación

### Funcionalidades de Login
- **📧 Autenticación por email/contraseña**: Sistema tradicional de login
- **🔗 Login con Google**: Integración con OAuth de Google (simulado)
- **👤 Gestión de sesiones**: Persistencia de sesión en localStorage
- **🛡️ Protección de rutas**: Redirección automática al login si no está autenticado

### Credenciales de Demostración
```
Email: demo@banco.com
Contraseña: demo123

Email: admin@banco.com  
Contraseña: admin123

Email: empleado@banco.com
Contraseña: emp123
```

## 🛠️ Tecnologías

- **Astro** - Framework web moderno para máximo rendimiento
- **Tailwind CSS** - Estilos utilitarios para diseño responsive
- **TypeScript** - Tipado estático para mejor desarrollo
- **Componentes modulares** - Arquitectura escalable y mantenible
- **Sistema de autenticación** - Login personalizado y OAuth simulado

## 🏗️ Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BadgeCollection.astro    # Sistema de insignias
│   │   ├── Card.astro              # Componente base de tarjeta
│   │   ├── LessonCard.astro        # Tarjetas de lecciones
│   │   ├── Navigation.astro        # Navegación principal
│   │   └── ProgressCard.astro      # Indicador de progreso
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal con gamificación
│   └── pages/
│       ├── index.astro            # Dashboard principal
│       ├── learning.astro         # Módulos de micro-learning
│       ├── leaderboard.astro      # Ranking y competencias
│       └── simulator.astro       # Simulador de phishing
├── .github/
│   └── copilot-instructions.md
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🎓 Metodología Design Thinking - Paso 3: Idear

### Soluciones Implementadas:

1. **✅ Plataforma de Micro-Learning Gamificada**
   - Lecciones de 3-5 minutos con sistema de puntos
   - Niveles, insignias y ranking para motivar el aprendizaje
   - Progreso visual y estadísticas detalladas

2. **✅ Simulacros de Phishing Hiper-Contextualizados**
   - Escenarios específicos del sector financiero colombiano
   - Simulación de ataques a la Superintendencia Financiera
   - Casos de clientes VIP y sistemas internos bancarios

3. **🔄 Características Adicionales Planificadas**
   - Bot de WhatsApp/Teams para verificación de correos
   - Programa de embajadores de ciberseguridad
   - Videos "Security Minute" animados

## 🎯 Público Objetivo

- **Empleados de instituciones financieras** en Colombia
- **Departamentos específicos**: Operaciones, Sistemas, Auditoría, Riesgos
- **Todos los niveles**: Desde empleados nuevos hasta gerentes

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en el terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`      |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro             |

## 🎨 Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático para JavaScript

## 📦 Instalación

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🌟 Características de la Plataforma

### Dashboard Principal
- **Progreso personalizado** con niveles y puntos
- **Estadísticas diarias** de aprendizaje
- **Alertas de seguridad** del sector financiero
- **Lecciones recomendadas** basadas en el perfil del usuario

### Sistema de Micro-Learning
- **Módulos categorizados** por tipo de amenaza
- **Dificultad progresiva** (Fácil → Intermedio → Avanzado)
- **Rutas de aprendizaje** estructuradas por semanas
- **Contenido especializado** para el contexto colombiano

### Simulador de Phishing
- **Escenarios realistas** del sector financiero
- **Métricas de desempeño** y tiempo de respuesta
- **Feedback inmediato** para mejorar la detección
- **Base de datos** de ataques reales adaptados

### Gamificación Avanzada
- **Sistema de puntos** por actividades completadas
- **Niveles progresivos** con beneficios desbloqueables
- **Insignias especializadas** por áreas de conocimiento
- **Competencias** individuales y por departamentos

## 📱 Funcionalidades Futuras

- **� App móvil** para aprendizaje en movimiento
- **🤖 Chatbot integrado** para consultas instantáneas
- **📊 Analytics avanzados** para administradores
- **🔗 Integración con sistemas** bancarios existentes
- **📧 Reportes automáticos** de progreso para RRHH

## 📚 Aprende más

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)