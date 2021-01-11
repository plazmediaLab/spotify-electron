import { useContext } from 'react';
import AppContext from 'reducer/App/AppContext';
import { db } from 'utils/Firebase';

function useArtistsData() {
  const appContext = useContext(AppContext);
  const { getArtistMethod } = appContext;

  const getArtistsData = async () => {
    db.collection('artists')
      .orderBy('name')
      .onSnapshot((querySnapshot) => {
        let queryData = [];
        querySnapshot?.forEach((item) => {
          const queryItem = item?.data();
          queryItem.id = item?.id;
          queryData.push(queryItem);
        });
        getArtistMethod(queryData);
      });
  };

  return [getArtistsData];
}

export default useArtistsData;
