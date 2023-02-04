import os from "os"

const IP = os.networkInterfaces()["Wi-Fi"][3].address

export const PORT = 4000
export const url = `http://${IP}:5173`
