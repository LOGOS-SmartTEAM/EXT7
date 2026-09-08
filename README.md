# SmartTEAM 7

Extensión de MakeCode para micro:bit. Subconjunto de `STV2-PADRE`: toda la
lógica (I2C/GPIO) se traspasó tal cual desde ahí, sin modificarla.

## Cómo se ve en MakeCode

Una sola categoría padre **SmartTEAM 7** (icono de bloque, igual que
SmartTEAM6), color **violeta** (`#9C27B0`). Al hacer clic, aparecen las
subcategorías (groups) con sus bloques.

## Diferencia con STV2-PADRE

No incluye las categorías `VARIABLES` ni `ESPECIAL`. Dentro de `SENSORES`
y `PANTALLAS` solo incluye un subconjunto de bloques.

## Subcategorías y bloques

| Subcategoría | Bloques incluidos |
|--------------|--------------------|
| SENSORES     | Botón, Sensor de Suelo, Potenciómetro, Sensor de Luz, Ultrasonido, DHT11, Sensor de Color (desplegable con emoji por color), Seguidor de líneas (lectura por lado) |
| SALIDAS      | LED (Estado), LED (Intensidad), Tira RGB, Tira RGB (ajustada R/G/B), Tira RGB (apagar todos) |
| MOVIMIENTO   | Movimiento simple, Movimiento por cm, Girar |
| MOTORES      | Servo, Hélice, Motor multicolor |
| PANTALLAS    | OLED (Escribir), OLED (borrar) |

No incluye: Joystick, Sensor de grises, LCD, Cantidad (VARIABLES),
Mensaje Morse (ESPECIAL), comparadores booleanos de Botón y Ultrasonido,
ni el bloque "Leer brillo" del sensor de color (placeholder gris en
STV2-PADRE).
