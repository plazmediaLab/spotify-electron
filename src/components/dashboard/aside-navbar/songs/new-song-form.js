import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import sluglify from 'helpers/sluglify';
import uuidGenerate from 'helpers/uuidGenerate';
import { useContext, useState } from 'react';
import Select from 'react-select';
import AppContext from 'reducer/App/AppContext';
import customStyles from '../artists/custom-styles-select';
import SongFileUpload from './song-file-upload';
import createAt from 'helpers/createAt';
import { db, storage } from 'utils/Firebase';
import firebase from 'firebase';
import AuthContext from 'reducer/Auth/AuthContext';

export default function NewSongForm() {
  const [loading, setLoading] = useState(false);
  const [error] = useState(false);
  const [albumSelect, setAlbumSelect] = useState(null);
  const [fileSong, setFileSong] = useState(null);

  const appContext = useContext(AppContext);
  const { albums } = appContext;

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const formik = useFormik({
    initialValues: {
      songName: '',
      file: '',
      album: ''
    },
    validationSchema: Yup.object({
      songName: Yup.string().required('El nombre de la canción es requerido.'),
      file: Yup.mixed().test('file-song', 'El archivo MP3 es requerido.', () => fileSong),
      album: Yup.mixed().test('album-select', 'El album es requerido.', () => albumSelect)
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const fileID = uuidGenerate();
      const slug = sluglify(values.songName);

      const { artist, cover, name, id } = albumSelect;

      let artistInfo = await db.collection('artists').doc(String(artist)).get();
      const albumCoverUrl = await storage.ref(`albums/${cover}`).getDownloadURL();

      let data = {
        albumID: id,
        albumName: name,
        coverUrl: albumCoverUrl,
        artistID: artist,
        artistName: artistInfo?.data().name,
        createAt: createAt(),
        file: '',
        slug: slug,
        songName: values.songName
      };

      var uploadTask = storage.ref('music').child(fileID).put(fileSong);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
          // TODO · Hacer una progress bar para señalar que el archivo se esta subiendo 01/08/2021
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + Math.floor(progress) + '% done');
        },
        function (error) {
          console.log('Sucedio un error al subir el archivo.');
          uploadTask.cancel(true);
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            setLoading(false);
            data.file = downloadURL;
            db.collection('music')
              .add(data)
              .then(() => {
                toastMessageMethod({
                  type: 'success',
                  message: 'Canción agregada correctamente.'
                });
              });
          });
        }
      );
    }
  });

  console.log(albumSelect);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInputModal
        placeholder="Nombre de la canción"
        error={formik.errors.songName}
        errmessage={formik.errors.songName}
        disabled={loading}
        autoFocus
        name="songName"
        onChange={formik.handleChange}
      />
      <div className="mt-3 relative">
        {loading && (
          <div
            className="cursor-not-allowed absolute top-0 left-0 w-full h-full bg-background rounded bg-opacity-40"
            style={{ zIndex: 1 }}></div>
        )}
        <Select
          isDisabled={loading}
          value={albumSelect}
          styles={customStyles}
          options={albums}
          className={`text-background ${
            error ? 'ring-red-600 ring-2 rounded' : ''
          } disabled:bg-opacity-50`}
          isLoading={false}
          placeholder="Album"
          name="Album"
          onChange={(itemSelect) => setAlbumSelect(itemSelect)}
          getOptionValue={(album) => album.id}
          getOptionLabel={(album) => album.name}
          noOptionsMessage={() => 'No se encontro resultados'}
        />
        {formik.errors.album && !albumSelect && (
          <p className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
            {formik.errors.album}
          </p>
        )}
      </div>
      <div className="mt-3 relative">
        {loading && (
          <div
            className="cursor-not-allowed absolute top-0 left-0 w-full h-full bg-background rounded bg-opacity-40"
            style={{ zIndex: 1 }}></div>
        )}
        <SongFileUpload
          className="mt-3"
          setFileSong={setFileSong}
          fileSong={fileSong}
          formikError={formik.errors.file}
        />
      </div>
      <FormButton type="submit" loading={loading} disabled={loading}>
        Agregar Canción
      </FormButton>
    </form>
  );
}
