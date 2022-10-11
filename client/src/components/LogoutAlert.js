import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
