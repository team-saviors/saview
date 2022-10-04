import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Stack,
  Button,
} from '@mui/material';
import { useState, useRef, useCallback, useEffect } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { modifyUser } from '../../utils/axiosRequest';
import { userStore } from '../../store/store';
import S3 from 'react-aws-s3';
import { v4 as uuidv4 } from 'uuid';
window.Buffer = window.Buffer || require('buffer').Buffer;
const ProfileModal = ({ open, handleClose }) => {
  const [previewImage, setPreviewImage] = useState('');
  const [fileData, setFileData] = useState({});
  const { nickname } = userStore();

  const config = {
    bucketName: 'saview-dev',
    region: 'ap-northeast-2',
    dirName: 'users',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  };
  const ReactS3Client = new S3(config);

  const handleChange = useCallback((event) => {
    const file = event.target.files[0];
    setFileData(file);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      setPreviewImage(reader.result);
    });

    if (file.size >= 1 * 1024 * 1024) {
      alert('1mb 이하의 파일만 업로드 가능합니다.');
      event.target.value = null;
    }
  }, []);

  const handleSubmit = async () => {
    const data = await ReactS3Client.uploadFile(fileData, uuidv4());

    await modifyUser(nickname, data.location);

    handleClose();
  };

  const closeModal = useCallback(() => {
    handleClose();
    setPreviewImage('');
  }, [handleClose]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>새 프로필 이미지</DialogTitle>
      <DialogContent>
        <Stack direcion="column" spacing={3}>
          <Input
            type="file"
            onChange={handleChange}
            inputProps={{
              accept: 'image/jpeg, image/jpg, image/png, image/svg',
            }}
            label="변경할 프로필 이미지 선택"
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {previewImage && (
              <img
                src={previewImage}
                alt={previewImage}
                style={{ width: '100px', height: '100px' }}
              />
            )}
          </div>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>취소</Button>
        <Button onClick={handleSubmit}>확인</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileModal;
