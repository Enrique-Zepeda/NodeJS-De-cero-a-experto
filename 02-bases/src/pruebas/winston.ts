import { buildLogger } from "../plugins";

export const runWinstonTest = () => {
  const logger = buildLogger("NombreDelArchivo.js");

  logger.log("Esto es un mensaje informativo");
  logger.error("Esto aparecerá en error.log y combined.log");

  console.log("¡El archivo winston.ts se ha cargado correctamente!");
};
