export interface AndroidAppFunction {
  clearSettings: () => void;
  finishApp: () => void;
  showToast: (text: string) => void;
  showSnackbar: (text: string) => void;
  setBrightness: (bright: string) => void;
  startvibrating: (length: number) => void;
  stopvibrating: () => void;
  startSpeech: (text: string, volume: number) => boolean;
  setLanguage: (language: string) => void;
}
