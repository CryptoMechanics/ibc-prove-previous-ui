import { SerialBuffer, createInitialTypes, getTypesFromAbi } from "enf-eosjs/dist/eosjs-serialize";
window.SerialBuffer = SerialBuffer;
window.getTypesFromAbi = getTypesFromAbi;
window.createInitialTypes = createInitialTypes;