export interface Props {
  isOpen: boolean;
  handleDialogClose: () => void;
  dialogType: string;
}

export interface Error {
  type: string;
  message?: string;
}
