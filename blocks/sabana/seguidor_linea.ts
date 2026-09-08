namespace bloques {
    const SEGUIDOR_LINEA_I2C_ADDR = 0x28

    export enum SabanaSeguidorLineaLado {
        //% block="Derecha"
        Derecha = 2,
        //% block="Centro"
        Centro = 1,
        //% block="Izquierda"
        Izquierda = 0,
    }

    /**
     * Seguidor de líneas por I2C (dirección 0x28). Lectura de 5 bytes según
     * protocolo real (STV2-PADRE/Protocolo-I2C/line_foollower_en.md):
     * Byte0=Izquierda, Byte1=Centro, Byte2=Derecha, Byte3-4=Reservado.
     */
    //% blockId=seguidor_de_linea
    //% block="Seguidor de líneas │ %lado en pin I2C"
    //% group="SENSORES" color="#35BFE9" weight=92 blockGap=8
    export function seguidorDeLinea(lado: SabanaSeguidorLineaLado): boolean {
        let buf = pins.i2cReadBuffer(SEGUIDOR_LINEA_I2C_ADDR, 5)
        return buf[lado] == 1
    }
}
