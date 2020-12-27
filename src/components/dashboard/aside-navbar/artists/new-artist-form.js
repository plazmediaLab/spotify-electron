import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import ArtistAvatarUpload from './artits-avatar-upload';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { storage } from 'utils/Firebase';
import AuthContext from 'reducer/Auth/AuthContext';

export default function NewArtistForm({ setShow }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [uploadFileError, setUploadFileError] = useState(null);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const formik = useFormik({
    initialValues: {
      coverImg: '',
      artistName: ''
    },
    validationSchema: Yup.object({
      coverImg: Yup.mixed()
        .test('file-url', 'La IMAGEN de portada es requerida.', () => coverUrl)
        .test('file-upload-error', 'Error en la carga del archivo', () => !uploadFileError),
      artistName: Yup.string().required('El NOMBRE del artista es requerido.').trim()
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const fileName = uuidv4();
      const ref = storage.ref().child(`artists/${fileName}`);

      try {
        await ref.put(file);
        setLoading(false);
      } catch (error) {
        console.log('Sucedio un error al subir la imagen, intentelo más tarde.');
      }
      // ref
      //   .put(file)
      //   .then(() => {
      //     toastMessageMethod({
      //       type: 'success',
      //       message: '.',
      //       // closeTime: 4000
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      //   .finally(() => {
      //     setLoading(false);
      //   });
      // setShow((prevState) => !prevState);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ArtistAvatarUpload
        coverUrl={coverUrl}
        setCoverUrl={setCoverUrl}
        setFile={setFile}
        error={formik.touched.coverImg && formik.errors.coverImg && formik.errors.coverImg}
        setUploadFileError={setUploadFileError}
      />
      <FormInputModal
        placeholder="Nombre del artista"
        name="artistName"
        value={formik.values.artistName}
        onChange={formik.handleChange}
        errmessage={
          formik.touched.artistName && formik.errors.artistName ? formik.errors.artistName : null
        }
        error={formik.touched.artistName && formik.errors.artistName}
      />
      <FormButton
        type="submit"
        disabled={loading || formik.errors.artistName || uploadFileError}
        loading={loading}>
        Agregar
      </FormButton>
    </form>
  );
}
