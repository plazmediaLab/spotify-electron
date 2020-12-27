import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useFormik } from 'formik';
import { useState } from 'react';
import ArtistAvatarUpload from './artits-avatar-upload';
import * as Yup from 'yup';

export default function NewArtistForm({ setShow }) {
  const [loading] = useState(false);
  const [coverUrl, setCoverUrl] = useState(null);
  const [uploadFileError, setUploadFileError] = useState(null);

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
      values.coverImg = coverUrl;
      console.log(values);
      console.log('Submit...');
      // setShow((prevState) => !prevState);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ArtistAvatarUpload
        coverUrl={coverUrl}
        setCoverUrl={setCoverUrl}
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
