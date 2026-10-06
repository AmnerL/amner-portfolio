# Revisión del portafolio

Fecha: 5 de octubre de 2026. Rama: feat/portfolio-redesign.

## Diseño negro y ámbar

La decisión actual reemplaza el fondo claro y azul. Los seis colores se centralizan en src/styles/tokens.css: fondo #0C0C0D, superficies #1A1A1D, texto #F7F2E8, secundario #BBB6AD, ámbar #F4B860 y bordes #48433B.

Hero de dos columnas en escritorio, acciones junto al texto, certificación discreta y figura propia CSS/SVG de datos, lógica de negocio y API. Títulos blanco cálido, botones ámbar con texto negro y proyecto destacado integrado entre separadores. Espaciado de secciones reducido. Se conserva el contenido profesional previamente corregido.

## Animación

Motion 14.0.0, importación JavaScript desde motion/mini. Sin React añadido. Entrada coordinada y breve desde 768 px sin movimiento reducido. Separación de capas únicamente con ratón, hover y puntero fino desde 1024 px; retorno suave al salir. Cambios de viewport o preferencia restauran la figura estática. Móvil, dispositivos táctiles y prefers-reduced-motion mantienen la figura estática. No se oculta contenido mediante CSS a la espera de JavaScript.

## Comprobaciones ejecutadas

- Build estático de Astro.
- Capturas Chrome de escritorio, tablet y móvil: 1440, 1024, 900, 768, 390 y 320 px, sin overflow horizontal.
- Ningún error JavaScript ni enlace interno sin destino, incluido #hero.
- Foco visible ámbar de 3 px; navegación por teclado.
- Menú móvil: apertura, ciclo Tab dentro del diálogo, Escape, retorno al botón, foco en la sección elegida y cierre al pasar al breakpoint de escritorio.
- Copia de correo: escritura exitosa y rechazo simulados. La confirmación solo se muestra tras escritura exitosa.
- Hover de la figura: separación de 18 px y retorno a la posición inicial.
- Movimiento reducido en escritorio y móvil: sin animaciones activas ni transformaciones de las capas; scroll automático.
- Dispositivo táctil móvil emulado: figura estática.
- JavaScript deshabilitado: presentación, figura, proyectos, contacto y navegación alternativa visibles.
- Contraste calculado de las parejas de texto y superficies: mínimo 8.61:1. Botón principal negro/ámbar: 11.05:1.
- Detector Impeccable: avisos de escala tipográfica sobre la documentación anterior; DESIGN.md y el sidecar se actualizan al nuevo sistema.
- PDF conservado: SHA256 BBB25C6C9F6324BEBF87710A313BC3A055BCCA02EC80689CB7E980EE3EE3ADD5.

Capturas y pruebas locales: .impeccable/review/ y .impeccable/check-amber.cjs, excluidos de Git. Las capturas se toman desde el servidor de desarrollo; la toolbar de Astro no se incluye en producción.

## Segunda iteración: composición y contenido

Orden implementado: Hero → Sobre mí → Proyectos seleccionados → Experiencia profesional → Tecnologías → Formación y certificaciones → Contacto. Introducción breve, Compliance Hub con texto/esquema 40/60 en escritorio y tres aportes debajo, proyectos académicos compactos, CIVA en bloques abiertos de dos columnas (una en móvil), tecnologías por dominio con contexto explícito y formación en dos columnas. Contacto reúne correo, copia y redes. Los párrafos se limitan a aproximadamente 68–70 caracteres tipográficos por línea.

ComplianceFlow.astro explica dos etapas: preparación de PDF y consulta semántica. Las etiquetas son HTML; conexiones e iconos son SVG. Las fuentes proceden de los fragmentos recuperados y no de una verificación de Gemini. El esquema entra una sola vez con Motion y permanece completo sin JavaScript; en móvil el flujo se presenta verticalmente.

Referencia técnica inspeccionada, sin modificar ni ejecutar el backend: clon local limpio de https://github.com/AmnerL/compliance-hub, commit c473029e7c7802ff3706810be32e45fd19746cf0. Archivos: RegulationIndexerImpl.java, AICommandServiceImpl.java, LLMServiceImpl.java, RegulationCommandServiceImpl.java, LocalFileStorageService.java, pom.xml y application.yaml. Respaldan indexación asíncrona, extracción/fragmentación, embeddings, recuperación vectorial, prompt con pregunta/contexto, construcción de fuentes desde metadata y persistencia de consulta. No se verificó la sincronización del clon con el remoto ni la operación del backend.

Se repitieron las comprobaciones automatizadas en Chrome a 1440, 1024, 900, 768, 390 y 320 px: orden de secciones, nueve pasos del diagrama, siete conexiones, ausencia de overflow y errores JavaScript, enlaces internos, foco, menú y portapapeles. Diagrama visible sin JavaScript y estático con movimiento reducido. CV responde HTTP 200 como PDF y conserva su hash. El build pasa. Detector de sections.css: cero anti-patrones; avisos documentales de tamaños tipográficos intencionales.

## Alcance y pendientes

Las comprobaciones de navegador usan Chrome y emulación de viewport/tacto; no se realizaron pruebas en dispositivos físicos, Safari o Firefox. No se midió la fluidez de Motion en hardware móvil real.

Pendiente real: revisión del contenido del PDF del CV. El CV permanece sin modificar. La imagen social public/og.png ya fue actualizada al diseño negro y ámbar. La falta de capturas de Compliance Hub está resuelta para esta versión con el esquema del backend; capturas o video reales son una mejora futura opcional. No se inventaron pantallas ni resultados.

No se hizo push, merge ni despliegue.

## Ajustes finales y revisión visual

Esquema titulado «Cómo funciona», sin subtítulo ni leyenda redundantes. Fuentes resumidas como documento, fragmento y página cuando está disponible. Las conexiones SVG estáticas enlazan vectores con búsqueda semántica y fragmentos con fuentes; los recorridos móviles pasan por un margen reservado fuera del texto. CIVA usa dos columnas abiertas, conserva colaboración y menciona planillas en pruebas una sola vez. EzPark separa Backend, IA y Despliegue académico. Tecnologías unifica React, agrupa herramientas del mismo contexto y asocia generación PDF a Thymeleaf.

Acceso público confirmado el 5 de octubre de 2026 por solicitudes HTTPS a la API de GitHub, sin cabecera de autenticación: compliance-hub y compliance-hub-front devolvieron HTTP 200 y private=false. Esto verifica su visibilidad pública, no la sincronización ni la ejecución del backend local.

Esta pasada revisó capturas de las cuatro secciones modificadas en Chrome a 1440, 768, 390 y 320 px, con JavaScript activo y desactivado y prefers-reduced-motion. Sin desbordamientos horizontales ni animaciones activas con movimiento reducido. Conexiones móviles corregidas tras la primera revisión visual y confirmadas en captura sin JavaScript. Build final y git diff --check correctos. Las pruebas previas de menú, portapapeles, hero y foco siguen documentadas arriba; no se repitieron porque esos componentes no cambiaron.

## Imagen social actualizada

public/og.png es un PNG de 1200 × 630 px, negro y ámbar, con nombre completo, Ingeniero de Software, Java · Spring Boot · IA aplicada y el SVG original de las tres capas del hero. Se renderizó con las fuentes locales del proyecto y se inspeccionó visualmente.

El HTML del build confirma título y descripción consistentes entre página, Open Graph y Twitter, URL absoluta https://amner-portfolio.vercel.app/og.png, tipo image/png, dimensiones y textos alternativos. La imagen copiada en dist coincide con public/og.png. Build correcto. No se comprobó la vista previa en LinkedIn o WhatsApp: los cambios todavía no están desplegados. No se hizo push, merge ni despliegue.

## Estado final preparado para commits

La distribución actual del esquema sustituye las versiones anteriores descritas en este informe: seis nodos en dos filas de tres. Preparación de izquierda a derecha; consulta dispuesta de derecha a izquierda mediante CSS. El DOM conserva Pregunta → Recuperar contexto → Respuesta y fuentes. La numeración visual procede de contadores CSS ocultos al árbol de accesibilidad; la lista mantiene su semántica. La descripción accesible explica el proceso sin instrucciones visuales. En panel estrecho se apilan los dos grupos y se indica la relación con la base vectorial anterior.

Comprobaciones finales del esquema en Chrome al 100% a 1440, 1280, 390 y 320 px: seis nodos completos, sin overflow; sin JavaScript y movimiento reducido. Altura natural de escritorio: aproximadamente 432 y 453 px. Orden de consulta confirmado con CSS deshabilitado y mediante snapshot del árbol de accesibilidad a 1440 y 320 px.

La imagen social final aumenta el nombre a 30 px y elimina el texto repetido Backend Java de la esquina inferior derecha. Los botones del hero y del menú descargan CV_Amner_Backend_Java.pdf. Se verificó el formato PDF y que el build copie sus bytes sin cambios. El PDF anterior cv.pdf se conserva; los registros de su hash arriba corresponden a las etapas previas. La revisión editorial del contenido del nuevo CV sigue pendiente.

El usuario autorizó crear varios commits y hacer push únicamente a feat/portfolio-redesign. No se autorizaron merge ni despliegue manual. Las exclusiones de Git cubren skills instaladas, consentimientos locales, capturas y scripts temporales de comprobación.
