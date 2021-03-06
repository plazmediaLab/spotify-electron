import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import sluglify from 'helpers/sluglify';
import uuidGenerate from 'helpers/uuidGenerate';
import { useContext, useState, useRef } from 'react';
import Select from 'react-select';
import AppContext from 'reducer/App/AppContext';
import customStyles from '../artists/custom-styles-select';
import SongFileUpload from './song-file-upload';
import createAt from 'helpers/createAt';
import { db, storage } from 'utils/Firebase';
import firebase from 'firebase';
import AuthContext from 'reducer/Auth/AuthContext';
import PlayerContext from 'reducer/Player/PlayerContext';
import ReactPlayer from 'react-player';

export default function NewSongForm() {
  const [loading, setLoading] = useState(false);
  const [error] = useState(false);
  const [albumSelect, setAlbumSelect] = useState(null);
  const [fileSong, setFileSong] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [songDuration, setSongDuration] = useState('0');

  const appContext = useContext(AppContext);
  const { albums } = appContext;

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const playerContext = useContext(PlayerContext);
  const { uploadProgressMethod } = playerContext;

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
    onSubmit: async (values, { resetForm }) => {
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
        songName: values.songName,
        like: false
      };

      var uploadTask = storage.ref('music').child(fileID).put(fileSong);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploadProgressMethod(progress);
        },
        function (error) {
          console.log('Sucedio un error al subir el archivo.');
          uploadTask.cancel(true);
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            setLoading(false);
            data.file = downloadURL;
            data.duration = songDuration;
            db.collection('music')
              .add(data)
              .then(() => {
                toastMessageMethod({
                  type: 'success',
                  message: 'Canción agregada correctamente.'
                });
                uploadProgressMethod(0);
                resetForm(formik.initialValues);
                setAlbumSelect(null);
                setFileSong(null);
              });
          });
        }
      );
    }
  });

  const playerAlt = useRef();

  const handleDuration = async () => {
    const duration = await playerAlt.current.getDuration();
    if (duration !== null) {
      setSongDuration(String(duration));
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInputModal
        placeholder="Nombre de la canción"
        error={formik.errors.songName}
        errmessage={formik.errors.songName}
        disabled={loading}
        autoFocus
        name="songName"
        value={formik.values.songName}
        onChange={formik.handleChange}
      />
      <div className="mt-3 relative">
        {loading && (
          <div
            className="cursor-not-allowed absolute top-0 left-0 w-full h-full bg-background rounded bg-opacity-40"
            style={{ zIndex: 1 }}></div>
        )}
        <Select
          isClearable={true}
          isDisabled={loading}
          value={albumSelect}
          styles={customStyles}
          options={albums}
          className={`text-background ${
            error ? 'ring-red-600 ring-2 rounded' : ''
          } disabled:bg-opacity-50`}
          isLoading={false}
          placeholder="Album de la canción..."
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
          handleDuration={handleDuration}
          setFileUrl={setFileUrl}
        />
      </div>
      <FormButton type="submit" loading={loading} disabled={loading}>
        Agregar Canción
      </FormButton>
      <ReactPlayer
        ref={playerAlt}
        url={fileUrl}
        playing={false}
        volume={0}
        muted={true}
        width={0}
        height={0}
        onReady={handleDuration}
        // onProgress={(e) => handleProgress(e)}
        // onEnded={handleNextSong}
        // loop={loop}
        // onSeek={(e) => console.log(e)}
      />
    </form>
  );
}
