const { buildLogger } = require("../../plugins");
const logger = buildLogger("NombreDelArchivo.js");

logger.log("Esto es un mensaje informativo");
logger.error("Esto aparecerá en error.log y combined.log");
