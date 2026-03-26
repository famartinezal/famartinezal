# Design System — The Emerald & Slate Editorial

## North Star: "The Digital Curator"

Editorial, no genérico. Construido sobre profundidad tonal y jerarquía de luz, no sobre bordes y sombras. El resultado debe sentirse como un portafolio físico premium: táctil, aireado, preciso.

---

## Paleta & Filosofía de Superficies

### Tokens de color

| Token                    | Hex       | Uso                                          |
|--------------------------|-----------|----------------------------------------------|
| `background`             | `#0a0f0d` | Canvas principal                             |
| `surface_container_low`  | `#0f1512` | Bloques de contenido grandes                 |
| `surface_container`      | `#151b18` | Cards y módulos anidados                     |
| `surface_container_high` | `#1a211e` | Popovers y elementos flotantes               |
| `surface_container_lowest`| `#000000`| Elementos hundidos (código, datos secundarios)|
| `surface_variant`        | `#2a332f` | Base para glassmorphism (usar a 60% opacidad)|
| `primary`                | `#69f6b8` | Acento principal / labels overline / CTAs    |
| `primary_container`      | `#06b77f` | Extremo del gradiente en botones primarios   |
| `primary_dim`            | `rgba(105,246,184,0.15)` | Glow en focus states         |
| `on_surface`             | `#f9fdf9` | Texto enfatizado                             |
| `on_surface_variant`     | `#a7aca9` | Cuerpo de texto largo                        |
| `outline_variant`        | `rgba(255,255,255,0.15)` | Ghost border accesible        |

### La regla "Sin líneas"

**Prohibido** usar `border: 1px solid` para separar secciones. La separación se define exclusivamente mediante cambios de tono entre superficies. Si el layout se ve desordenado, aumentar el espaciado o cambiar el nivel de superficie — nunca añadir una línea.

**Excepción única:** Si la accesibilidad lo requiere (modo alto contraste), usar el *Ghost Border*: `outline_variant` al 15% de opacidad.

### Capas de elevación

```
background → surface_container_low → surface_container → surface_container_high
(más profundo)                                                      (más elevado)
```

Un elemento `surface_container_lowest` dentro de una sección `surface_container_low` crea efecto "hundido" para bloques de código o datos secundarios.

---

## Tipografía — Editorial Tech

**Fuente:** Manrope — combina precisión técnica con estética editorial de alto nivel.

| Rol          | Clase / Config                               | Uso                                 |
|--------------|----------------------------------------------|-------------------------------------|
| Display      | `font-weight: 800`, `letter-spacing: -0.04em`| Hero statements, nombre             |
| Headline     | `font-weight: 700`, espacio superior: `80-96px` | Encabezados de sección           |
| Body         | `color: on_surface_variant` (#a7aca9)        | Texto corrido, descripciones        |
| Body énfasis | `color: on_surface` (#f9fdf9)                | Texto puntual resaltado             |
| Label/Overline | `color: primary`, ALL CAPS, `letter-spacing: 0.1em` | Categorías, etiquetas     |

---

## Elevación y Profundidad

**Principio:** la jerarquía se transmite por capas tonales, no por sombras estructurales.

- **Sombras ambientales:** cuando un elemento flota (modal, overlay), usar `blur: 40px`, `opacity: 8%`, color tintado verde-negro — nunca gris puro.
- **Signature Glow:** `drop-shadow` en iconos primarios usando `primary` al 20% de opacidad. Imita la emisión de luz de hardware premium.
- **Regla "anti-gamer":** el glow y los gradientes son condimento, no base. Máximo un punto focal con glow por pantalla. El exceso degrada el look de "senior" a "gaming".

---

## Componentes

### Botones

| Tipo       | Fondo                                           | Texto       | Borde  |
|------------|-------------------------------------------------|-------------|--------|
| Primary    | Gradiente 135° `primary` → `primary_container` | Blanco      | Ninguno|
| Secondary  | `surface_container_high`                        | `primary`   | Ninguno|
| Tertiary   | Ninguno (text-only)                             | `label-md`  | Ninguno|

- Radios: `8px` en todos.
- Hover en Tertiary: shift de fondo a `surface_bright` sutil.

### Cards

- Fondo: `surface_container`.
- Radio de esquina: `16px`.
- **Sin divisores internos.** Separar ítems con `spacing: 12px` y un shift de color del 2% en hover.

### Inputs

- Fondo: `surface_container_low`.
- Focus: Ghost border (`outline_variant` 1px) + outer glow con `primary_dim`.
- Label: `body-sm` flotando sobre el input, nunca dentro como placeholder.

### Tags / Chips

- Fondo: `primary_container`, texto: `on_primary_container`.
- Forma: `border-radius: 9999px` (pill) — contrasta intencionalmente con el `8px` de cards.

### Navegación — El Dock Flotante

En lugar de topbar, usar un **Dock centrado en la parte inferior** del viewport:
- Base: glassmorphism (`surface_variant` al 70% + `backdrop-filter: blur(12px)`).
- Refuerza la sensación de "app nativa" en el portafolio.
- Solo en desktop; en mobile colapsar a menú hamburguesa.

---

## Espaciado — "Asymmetric Air"

Permitir intencionalmente que un lado de un layout tenga **significativamente más whitespace** que el otro. Esto genera un look editorial y evita la apariencia de plantilla genérica. Las secciones deben tener `padding-top` generoso (mínimo `120px`) para señalar cada cambio de narrativa.

---

## Reglas Globales

### ✅ Hacer

- Usar transiciones tonales para guiar la jerarquía visual.
- Aplicar "air" asimétrico: un lado del layout respira más que el otro.
- Garantizar que `on_surface_variant` cumpla AA de contraste sobre `background`.
- Usar `primary` en labels overline para reforzar la identidad cromática.

### ❌ No hacer

- **No usar bordes 1px sólidos** para separar secciones.
- **No usar grises puros** — todo neutro debe estar tintado de verde esmeralda.
- **No sobre-brillar** — el glow es un acento, no un estilo base.
- **No usar sombras grises** — las sombras llevan tinte verde-negro del sistema.
