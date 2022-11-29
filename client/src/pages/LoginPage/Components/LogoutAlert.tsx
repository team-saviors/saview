import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { Dialog, DialogTitle } from '@mui/material';
export default function LogoutAlert({ open, onClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">로그아웃하시겠습니까?</DialogTitle>
        <DialogActions>
          <Button onClick={onClose} value="로그아웃">
            로그아웃
          </Button>
          <Button onClick={onClose} value="취소">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
