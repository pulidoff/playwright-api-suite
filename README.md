# playwright-api-suite

[![CI](https://github.com/pulidoff/playwright-api-suite/actions/workflows/ci.yml/badge.svg)](https://github.com/pulidoff/playwright-api-suite/actions/workflows/ci.yml)

Suite de pruebas de API automatizadas construida con Playwright Test, orientada al patrón **Service Object Model (SOM)**. Cubre los endpoints públicos de [reqres.in](https://reqres.in) (usuarios, autenticación y recursos) y genera reportes visuales con Allure.

---

## Stack

| Herramienta | Rol |
|---|---|
| [Playwright Test](https://playwright.dev/docs/test-api-testing) | Runner de tests y cliente HTTP |
| [reqres.in](https://reqres.in) | API REST pública usada como sistema bajo prueba |
| [Allure](https://allurereport.org) | Generación de reportes HTML |
| [GitHub Actions](https://docs.github.com/en/actions) | Pipeline CI/CD |
| [dotenv](https://github.com/motdotla/dotenv) | Carga de variables de entorno locales |

---

## Estructura de carpetas

```
playwright-api-suite/
├── .github/
│   └── workflows/
│       └── ci.yml            # Pipeline de CI (GitHub Actions)
├── fixtures/
│   └── apiFixtures.js        # Fixture que inicializa SOManager con el request context
├── schemas/                  # JSON Schemas para validación de respuestas (en progreso)
├── serviceobjects/
│   └── SOManager.js          # Service Object: encapsula todas las llamadas a la API
├── tests/
│   ├── auth.spec.js          # Tests de registro y login
│   ├── resources.spec.js     # Tests del endpoint /api/unknown
│   └── users.spec.js         # Tests CRUD de usuarios
├── .env                      # Variables de entorno locales (no se versiona)
├── playwright.config.js      # Configuración de Playwright
└── package.json
```

---

## Cómo correr los tests localmente

### Requisitos previos

- Node.js 20+
- [Allure CLI](https://allurereport.org/docs/install/) instalado globalmente

### Instalación

```bash
npm ci
```

### Ejecutar los tests

```bash
npm test
```

### Generar el reporte Allure

```bash
npm run allure:generate
```

### Abrir el reporte en el navegador

```bash
npm run allure:open
```

---

## Variables de entorno

Los tests leen la API key de reqres.in desde el entorno. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```dotenv
REQRES_API_KEY=tu_api_key_aqui
```

> **Nota:** el archivo `.env` está incluido en `.gitignore` y nunca debe subirse al repositorio.

### `REQRES_API_KEY`

| Contexto | Cómo configurarla |
|---|---|
| Local | Archivo `.env` en la raíz del proyecto |
| CI (GitHub Actions) | Secret del repositorio: **Settings → Secrets and variables → Actions → New repository secret** con nombre `REQRES_API_KEY` |

Puedes obtener una API key gratuita en [reqres.in](https://reqres.in).
