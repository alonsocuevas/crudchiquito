# CRUD Node.js - Sistema de Gestión de Usuarios

## 📋 Descripción

Este es un sistema CRUD (Create, Read, Update, Delete) desarrollado en Node.js que permite gestionar usuarios con sus respectivos roles. La aplicación proporciona una interfaz web intuitiva para realizar operaciones básicas de administración de usuarios.

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **MySQL** - Base de datos relacional
- **EJS** - Motor de plantillas para renderizar vistas HTML

### Frontend
- **Bootstrap 5.1.3** - Framework CSS para diseño responsivo
- **Boxicons** - Librería de iconos
- **HTML5** - Estructura de las páginas
- **CSS3** - Estilos personalizados

### Herramientas de Desarrollo
- **Nodemon** - Herramienta para reinicio automático del servidor durante desarrollo

## 🚀 Funcionalidades

- ✅ **Listar usuarios** - Visualización de todos los usuarios registrados en una tabla
- ✅ **Crear usuario** - Formulario para agregar nuevos usuarios con nombre y rol
- ✅ **Editar usuario** - Modificación de datos de usuarios existentes
- ✅ **Eliminar usuario** - Borrado de registros de usuarios
- ✅ **Gestión de roles** - Asignación de roles (Admin, Data Entry)
- ✅ **Interfaz responsiva** - Diseño adaptable a diferentes dispositivos

## 📁 Estructura del Proyecto

```
crudchiquito/
├── app.js                 # Archivo principal de la aplicación
├── router.js              # Configuración de rutas
├── package.json           # Dependencias y scripts del proyecto
├── package-lock.json      # Lock file de dependencias
├── controllers/
│   └── crud.js           # Controladores para operaciones CRUD
├── database/
│   └── db.js             # Configuración de conexión a MySQL
└── views/
    ├── index.ejs         # Vista principal (listado de usuarios)
    ├── create.ejs        # Vista para crear usuarios
    └── edit.ejs          # Vista para editar usuarios
```

## ⚙️ Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- MySQL Server
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd crudchiquito
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar la base de datos**
   - Crear una base de datos MySQL llamada `crud_nodejs_db`
   - Crear la tabla `users` con la siguiente estructura:
   ```sql
   CREATE DATABASE crud_nodejs_db;
   USE crud_nodejs_db;
   
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       user VARCHAR(100) NOT NULL,
       rol VARCHAR(50) NOT NULL
   );
   ```

4. **Configurar conexión a la base de datos**
   - Editar el archivo `database/db.js` con tus credenciales de MySQL:
   ```javascript
   const conexion = mysql.createConnection({
       host: 'localhost',
       user: 'tu_usuario',
       password: 'tu_contraseña',
       database: 'crud_nodejs_db'
   });
   ```

## 🚀 Uso

### Desarrollo
```bash
# Iniciar el servidor con nodemon (reinicio automático)
npm run dev

# O iniciar directamente con Node.js
node app.js
```

### Producción
```bash
node app.js
```

La aplicación estará disponible en: `http://localhost:5000`

### Operaciones disponibles

- **GET /** - Lista todos los usuarios
- **GET /create** - Muestra formulario para crear usuario
- **POST /save** - Guarda un nuevo usuario
- **GET /edit/:id** - Muestra formulario para editar usuario
- **POST /update** - Actualiza un usuario existente
- **GET /delete/:id** - Elimina un usuario

## 🧪 Pruebas

Actualmente el proyecto no incluye pruebas automatizadas. El script de test en `package.json` está configurado como placeholder.

### Pruebas manuales recomendadas:
1. Verificar que la aplicación se inicie correctamente
2. Probar la creación de usuarios
3. Verificar la edición de usuarios existentes
4. Confirmar la eliminación de usuarios
5. Validar la visualización de la lista de usuarios

## 🔧 Configuración

### Variables de entorno
Para mayor seguridad, se recomienda usar variables de entorno para la configuración de la base de datos:

```javascript
// Crear archivo .env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=crud_nodejs_db
```

### Puerto
El servidor está configurado para ejecutarse en el puerto 5000. Para cambiarlo, modifica la línea en `app.js`:
```javascript
app.listen(5000, ()=>{
    console.log('Servidor funcionando en http://localhost:5000');
});
```

## 🚨 Problemas Conocidos

1. **Error en app.js línea 7**: `express(JSON)` debería ser `express.json()`
2. **Error en edit.ejs línea 55**: Valor duplicado en el atributo `value` del select
3. **Falta validación**: No hay validación de datos en el frontend ni backend
4. **Seguridad**: No hay protección contra inyección SQL (aunque MySQL2 tiene cierta protección)

## 🔮 Mejoras Sugeridas

### Seguridad
- [ ] Implementar validación de datos con librerías como Joi o express-validator
- [ ] Agregar autenticación y autorización
- [ ] Usar prepared statements para prevenir inyección SQL
- [ ] Implementar rate limiting
- [ ] Agregar HTTPS en producción

### Funcionalidad
- [ ] Implementar búsqueda y filtrado de usuarios
- [ ] Agregar paginación para listas grandes
- [ ] Implementar confirmación antes de eliminar
- [ ] Agregar validación de formularios en el frontend
- [ ] Implementar mensajes de éxito/error

### Código
- [ ] Agregar manejo de errores centralizado
- [ ] Implementar logging
- [ ] Separar lógica de negocio de las rutas
- [ ] Agregar documentación de API
- [ ] Implementar tests unitarios y de integración

### Base de Datos
- [ ] Agregar migraciones
- [ ] Implementar conexión pool
- [ ] Agregar índices para mejorar rendimiento
- [ ] Considerar usar un ORM como Sequelize o TypeORM

### DevOps
- [ ] Agregar Docker para containerización
- [ ] Implementar CI/CD
- [ ] Agregar monitoreo y métricas
- [ ] Configurar variables de entorno

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o encuentras algún problema, por favor abre un issue en el repositorio.

---

**Desarrollado con ❤️ usando Node.js y Express**
