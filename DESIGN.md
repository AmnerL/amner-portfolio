---
name: Portafolio de Amner Levi
description: Un dossier de software oscuro, cálido y preciso.
colors:
  background: "#0C0C0D"
  surface: "#1A1A1D"
  text: "#F7F2E8"
  text-secondary: "#BBB6AD"
  accent: "#F4B860"
  border: "#48433B"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3rem, 5.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.15rem, 3.7vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.035em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.025em"
  project-title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.025em"
  body:
    fontFamily: "Inter, sans-serif"
    lineHeight: 1.65
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)"
    lineHeight: 1.55
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: ".9rem"
  metadata:
    fontFamily: "Inter, sans-serif"
    fontSize: ".85rem"
  about-title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.7rem, 2.5vw, 2.25rem)"
  about-copy:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)"
  featured-subtitle:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.25rem"
    lineHeight: 1.4
  contribution-title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.1rem"
    lineHeight: 1.35
  contribution-copy:
    fontFamily: "Inter, sans-serif"
    fontSize: ".925rem"
  workflow-heading:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
  workflow-node:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
  workflow-detail:
    fontFamily: "Inter, sans-serif"
    fontSize: ".875rem"
    lineHeight: 1.5
  workflow-mobile-node:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
  workflow-mobile-detail:
    fontFamily: "Inter, sans-serif"
    fontSize: ".875rem"
  experience-title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.4rem)"
  experience-contribution-title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.15rem"
  group-title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.3rem"
  technology-entry:
    fontFamily: "Inter, sans-serif"
    fontSize: ".95rem"
  contact-email:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.05rem, 2.2vw, 1.6rem)"
rounded:
  button: ".35rem"
  dialog: ".75rem"
  diagram: ".75rem"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 4rem)"
  section: "clamp(3rem, 5.5vw, 5rem)"
  column: "clamp(2rem, 5vw, 5rem)"
  compact: "1.5rem"
  action: ".75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: ".8rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.background}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: ".8rem 1.1rem"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  text-link:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.dialog}"
    padding: "2rem"
    width: "min(100% - 2rem, 32rem)"
  compliance-diagram:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.diagram}"
    padding: "clamp(1.25rem, 2vw, 1.5rem)"
---

# Design System: Portafolio de Amner Levi

## Overview

**Creative North Star: "El dossier de software en negro y ámbar"**

Un fondo negro cálido y superficies de carbón sostienen una presentación editorial de software. Los títulos blancos cálidos tienen protagonismo; el ámbar señala acciones, detalles y conexiones técnicas con moderación.

La composición combina presentación textual con una ilustración conceptual de capas en perspectiva. El movimiento acompaña la entrada y la exploración con mouse; en móvil y con movimiento reducido, la composición permanece estática. El contenido y la navegación conservan acceso sin JavaScript.

**Key Characteristics:**

- Negro cálido y carbón como base.
- Títulos blancos cálidos y detalles ámbar.
- Presentación editorial con profundidad técnica conceptual.
- Acciones junto a la presentación y credenciales discretas.
- Movimiento breve y progresivo, composición estática accesible.

## Colors

La paleta normativa contiene seis colores, centralizados en `src/styles/tokens.css`.

### Primary

- **Ámbar** (`accent`): acción principal, enlaces, foco, punto de marca y líneas de la ilustración.

### Neutral

- **Negro cálido** (`background`): fondo general, cabecera, contacto y texto sobre botones ámbar.
- **Carbón** (`surface`): proyectos, formación, diálogo y caras de la ilustración.
- **Blanco cálido** (`text`): titulares y contenido principal.
- **Gris cálido** (`text-secondary`): descripciones, navegación y credenciales.
- **Línea cálida** (`border`): divisores, bordes y guías de capas.

Los alias semánticos de las secciones existentes apuntan a esta misma paleta. Las mezclas transparentes de fondo para sombra y velo derivan de ella; no constituyen colores alternativos.

**The Amber Rule.** Usa ámbar para acciones y detalles; conserva titulares blancos cálidos y evita grandes bandas ámbar.

## Typography

**Display Font:** Space Grotesk, con fallback sans-serif.

**Body Font:** Inter, con fallback sans-serif.

Ambas familias se sirven localmente desde `public/fonts`, mediante `src/styles/fonts.css` y `font-display: swap`. Los titulares semibold tienen espaciado cerrado y líneas equilibradas. El cuerpo mantiene una lectura cálida y sobria.

### Hierarchy

- **Display:** presentación principal con escala fluida y punto ámbar.
- **Headline:** títulos de sección.
- **Title / Project title:** subtítulos y nombres de proyectos.
- **Body:** lectura con longitud máxima (68ch).
- **Lead:** introducciones de sección.
- **Label / Metadata:** acciones, fechas y credenciales discretas.

Los roles específicos de sección conservan los tamaños intencionales del código: introducción compacta, títulos del flujo, detalles pequeños, encabezados de experiencia y dirección de contacto. No fuerzan una escala uniforme sobre contenido con funciones diferentes.

El titular adapta su escala bajo (64rem) y (48rem); bajo (23rem) usa tamaño compacto (2.65rem). La descripción del hero limita su lectura a (47ch), ampliada a (48ch) en móvil.

## Layout

El contenedor se centra con máximo (76rem) y márgenes fluidos definidos por `gutter`. Las secciones usan `section`. El recorrido implementado es Hero, About, Projects, Experience, Stack, Journey y Contact: presentación, contexto breve, evidencia de proyectos, experiencia, tecnologías contextualizadas, formación y contacto.

Sobre mí es un bloque compacto con padding fluido (2.5rem a 3.5rem), título más contenido y un párrafo de máximo (68ch). Compliance Hub distribuye presentación y diagrama en proporción (40/60), con separación (2rem). Sus tres aportes se leen debajo en columnas iguales, separados del proyecto por una línea. Los proyectos secundarios son bloques compactos con divisores.

La experiencia en CIVA mantiene cabecera e introducción sobre cuatro aportes en dos columnas de escritorio, seguidos de una nota de validación. En móvil, los aportes se apilan. Las tecnologías forman una cuadrícula (2×2) con contexto debajo de cada conjunto. React se presenta como una entrada unificada y las herramientas se agrupan en Herramientas e infraestructura. Formación usa dos columnas paralelas para estudios y certificaciones. Contacto mantiene introducción, correo con copia, estado y canales en un bloque cohesivo.

El hero distribuye texto e ilustración en dos columnas (1.1fr / 1fr). Las acciones siguen inmediatamente la descripción; la certificación y los datos personales forman un bloque discreto debajo. Una fila de proyecto destacado, delimitada por líneas, cierra la composición sin banda de color.

Bajo (64rem), la navegación cambia a menú, el hero usa (1.25fr / 1fr) y Compliance Hub apila presentación y diagrama. Bajo (48rem), hero, aportes, tecnologías y formación pasan a una columna; el diagrama adapta sus rutas según su propio contenedor, con umbral (34rem). La ilustración móvil del hero limita su ancho a (28rem). Mantén texto, acciones, credenciales e ilustración en ese orden. La cabecera sticky tiene altura mínima (4.5rem); las anclas reservan espacio superior (5.5rem).

## Elevation & Depth

Las secciones usan cambios de tono y bordes finos, sin sombras de tarjetas. La ilustración conceptual reserva profundidad para tres planos SVG: datos abajo, lógica de negocio en el centro y API arriba. Las caras mezclan carbón y negro; líneas ámbar describen conexiones y los bordes cálidos mantienen la geometría. Una sombra SVG derivada del fondo separa los planos. El diálogo usa un velo derivado del mismo fondo.

**The Purposeful Depth Rule.** Reserva la profundidad para la ilustración conceptual y el diálogo; conserva filas de contenido abiertas y sobrias.

## Shapes

Los botones tienen esquinas suavemente redondeadas mediante `rounded.button`; diálogo y diagrama usan esquinas suaves mediante sus tokens de radio. Divisores y bordes son finos (1px). Las tecnologías son texto abierto, sin cápsulas ni bordes individuales. El estado de proyecto incorpora un pequeño punto ámbar circular. La ilustración usa tres planos rectangulares en perspectiva con guías punteadas.

## Components

### Buttons and links

La acción principal usa ámbar con texto negro y peso (600); al interactuar cambia a blanco cálido con texto negro. La acción secundaria usa transparencia, borde cálido y texto blanco cálido; su hover adopta carbón y borde gris cálido. Ambos botones tienen altura mínima (48px), separación interna (.65rem) y desplazamiento de pulsación (1px).

Los enlaces de texto son ámbar, subrayados y tienen altura mínima (44px). Su hover adopta blanco cálido. El foco visible común usa ámbar (3px) con separación (5px). Los cambios de fondo, color y borde duran (180ms). La descarga del CV apunta a `/CV_Amner_Backend_Java.pdf`. El botón de copia conserva el estilo secundario y, deshabilitado, usa opacidad (.6).

### Navigation

La cabecera comparte fondo negro, divisor cálido y marca Space Grotesk. Los enlaces de escritorio usan gris cálido y hover ámbar. El diálogo móvil presenta enlaces grandes y una superficie carbón. La navegación alternativa garantiza acceso cuando no hay JavaScript.

### Featured project and secondary projects

Compliance Hub abre la superficie carbón con texto a la izquierda y flujo a la derecha. Los metadatos son discretos, el estado tiene punto ámbar y las tecnologías fluyen como texto. Tres aportes técnicos aparecen debajo en columnas abiertas. EzPark y SAT-Deserción son bloques compactos delimitados por líneas. EzPark distingue tres aportes: Backend, IA y Despliegue académico, en columnas (2fr / 1.5fr / 1fr) que se apilan en móvil. El enlace destacado del hero conserva una fila abierta con etiqueta gris, título blanco cálido y llamada ámbar; su título adopta ámbar al interactuar.

### Compliance flow

El diagrama HTML/SVG, titulado Cómo funciona, contiene seis nodos agrupados en dos rutas de tres: PDF, Procesar documento y Base vectorial; Pregunta, Recuperar contexto y Respuesta y fuentes. Los nodos usan superficie carbón, borde cálido y radio (.75rem), con iconos ámbar, títulos (1rem / 16px) y detalles (.875rem / 14px). La descripción accesible expresa el proceso exactamente: «Los documentos PDF se dividen en fragmentos y se indexan mediante embeddings en PostgreSQL con pgvector. La pregunta permite recuperar fragmentos relevantes. Gemini genera la respuesta a partir de la pregunta y ese contexto; las fuentes se obtienen de los fragmentos recuperados».

Con espacio suficiente, la preparación avanza a la derecha y la consulta retorna a la izquierda. Un corredor SVG enlaza la base vectorial con la recuperación. La consulta conserva el orden DOM Pregunta → Recuperar contexto → Respuesta y fuentes; CSS organiza su recorrido visual y genera números, ocultos para tecnologías de asistencia mediante `aria-hidden`. La lista de consulta conserva `role="list"`.

El contenedor `compliance-flow` apila ambas rutas por debajo de (34rem). Las flechas giran hacia abajo; se oculta el corredor y una referencia textual en el nodo de contexto conserva la relación con la base anterior. El diseño funciona a (320px) y sin JavaScript. En los escritorios verificados, el panel mide aproximadamente (432px a 1440px) y (453px a 1280px), por lo que adopta esa composición apilada. No utiliza conexiones globales con coordenadas fijas ni una rama separada de fuentes: el último nodo integra respuesta y fuentes.

### Experience, technology and education

La experiencia usa aportes abiertos en dos columnas de escritorio y una en móvil, sin tarjetas. Cada grupo tecnológico mantiene un divisor superior, nombre del grupo y entradas con contexto pequeño debajo. Formación dispone estudios e idiomas junto a certificaciones; dentro de cada columna, los artículos se separan por una línea.

### Contact

Un bloque cohesivo reúne introducción, enlace de correo, botón secundario para copia y canales. Correo y botón permiten wrap, sin recortar la dirección. El estado de copia usa texto gris y región `aria-live`; si JavaScript falta, el correo y los canales conservan acceso y el botón de copia permanece oculto.

### Software layers

La ilustración SVG es conceptual, con etiquetas Datos, Lógica de negocio y API y descripción accesible. No presenta métricas ni pantallas de producto. El SVG conserva su estado visible en el HTML; la mejora de movimiento no exige interacción para comprenderlo.

### Motion

`src/scripts/hero-motion.ts` usa `motion/mini` (14.0.0). La entrada se activa desde (48rem) sin preferencia de movimiento reducido. El texto recorre (12px) y opacidad (.85 a 1) durante (450ms), escalonado (45ms); los planos recorren (18px) durante (600ms), con retraso inicial (90ms) y escalonado (60ms).

Solo con mouse, hover y puntero fino desde (64rem), la exploración separa los planos exteriores (18px) durante (360ms); al salir retornan durante (280ms). La curva compartida es `cubic-bezier(.16,1,.3,1)`. Cambios de preferencias, viewport o visibilidad restauran el estado estático. En móvil y con movimiento reducido se conserva una composición estática; la preferencia reducida también elimina transiciones y scroll suave.

El flujo de Compliance Hub añade una entrada única al alcanzar visibilidad (15%): desplazamiento (8px a 0) durante (400ms) con la curva compartida. No oculta contenido. Con movimiento reducido no anima; cambiar esa preferencia detiene y restaura el estado estático.

## Do's and Don'ts

### Do:

- **Do** usa exclusivamente la paleta negra, cálida y ámbar documentada.
- **Do** mantiene texto negro sobre botones ámbar y títulos blancos cálidos.
- **Do** sitúa acciones junto a la presentación y credenciales con peso discreto.
- **Do** conserva la ilustración y el contenido visibles sin animación.
- **Do** respeta teclado, foco visible y movimiento reducido.

### Don't:

- **Don't** introduce grandes bandas ámbar ni colores alternativos.
- **Don't** convierte los proyectos en tarjetas con sombras decorativas.
- **Don't** añade movimiento continuo ni interacción de separación en móvil.
- **Don't** presenta la ilustración conceptual como una captura de producto.
